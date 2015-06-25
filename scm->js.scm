(define (kind-of-expression? kind args exp)
  (and (list? exp) (eq? kind (car exp))
       (cond ((number? args) (= (+ 1 args) (length exp)))
	     ((eq? 'even args) (even? (length (cdr exp))))
	     ((eq? 'one+ args) (not (null? (cdr exp)))))))

(define (cons-expression? exp) (kind-of-expression? 'cons 2 exp))
(define (car-expression? exp) (kind-of-expression? 'car 1 exp))
(define (cdr-expression? exp) (kind-of-expression? 'cdr 1 exp))
(define (if-expression? exp) (kind-of-expression? 'if 3 exp))

(define (runtime-primitive? op)
  (cond ((eq? op '+) 'js-plus)
	((eq? op '-) 'js-minus)
	((eq? op '*) 'js-times)
	((eq? op 'runtime-booleanize) 'runtime-booleanize)
	(else #f)))

(define (scm->js scm)
  (cond ((number? scm) scm)
	((string? scm) scm)
	((boolean? scm) scm)
	((cons-expression? scm) `(js-object-literal car ,(scm->js (cadr scm))
						    cdr ,(scm->js (caddr scm))))
	((car-expression? scm) `(js-dot car ,(scm->js (cadr scm))))
	((cdr-expression? scm) `(js-dot cdr ,(scm->js (cadr scm))))
	((and (list? scm) (runtime-primitive? (car scm)))
	 `(js-funcall ,(runtime-primitive? (car scm)) . ,(map scm->js (cdr scm))))
	((if-expression? scm) `(js-if (js-funcall runtime-booleanize ,(scm->js (cadr scm)))
				      ,(scm->js (caddr scm))
				      ,(scm->js (cadddr scm))))))

(define (js-object-literal? js) (kind-of-expression? 'js-object-literal 'even js))
(define (js-dot? js) (kind-of-expression? 'js-dot 2 js))
(define (js-funcall? js) (kind-of-expression? 'js-funcall 'one+ js))
(define (js-if? js) (kind-of-expression? 'js-if 3 js))

(define (mangle-name name)
  (string->symbol (list->string (mangle-helper (string->list (symbol->string name))))))
(define (mangle-helper n)
  (if (null? n)
      '()
      (cond ((eq? #\- (car n))
	     (append (string->list "_dash_") (mangle-helper (cdr n))))
	    ((eq? #\_ (car n))
	     (append (string->list "_underscore_") (mangle-helper (cdr n))))
	    (else
	     (cons (car n) (mangle-helper (cdr n)))))))

(define (js->javascript js)
  (cond ((number? js) (write js))
	((string? js) (write js))
	((eq? #t js) (display "true"))
	((eq? #f js) (display "false"))
	((js-object-literal? js)
	 (display "{")
	 (do-js-object-literal (cdr js))
	 (display "}"))
	((js-dot? js)
	 (display "(")
	 (js->javascript (caddr js))
	 (display ")")
	 (display ".")
	 (display (cadr js)))
	((js-funcall? js)
	 (display (mangle-name (cadr js)))
	 (display "(")
	 (do-js-funcall (cddr js))
	 (display ")"))
	((js-if? js)
	 (display "(")
	 (js->javascript (cadr js))
	 (display ")")
	 (display "?")
	 (display "(")
	 (js->javascript (caddr js))
	 (display ")")
	 (display ":")
	 (display "(")
	 (js->javascript (cadddr js))
	 (display ")"))))

(define (do-js-object-literal kvs)
  (if (null? kvs)
      0
      (begin
	(display (mangle-name (car kvs)))
	(display ":")
	(js->javascript (cadr kvs))
	(if (null? (cddr kvs))
	    0
	    (begin
	      (display ", ")
	      (do-js-object-literal (cddr kvs)))))))

(define (do-js-funcall kvs)
  (if (null? kvs)
      0
      (begin
	(js->javascript (car kvs))
	(if (null? (cdr kvs))
	    0
	    (begin
	      (display ", ")
	      (do-js-funcall (cdr kvs)))))))

(define t1 '42)
(define t2 '(car (cons 4 2)))
(define t3 '(cdr (cons 4 2)))
(define t4 '(+ (car (cons 4 2)) (cdr (cons 4 2))))
(define t5 '(- (+ 42 (* 3 6)) 7))
(define t6 '(if #t "yes" "no"))
(define t7 '(if #f "yes" "no"))
(define t8 '(if "huh?" "yes" "no"))
(define t9 '(+ 1 (if #t 4 2)))

(define (go t) (js->javascript (scm->js t)) (newline) (newline))
