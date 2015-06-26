(define (caar x) (car (car x)))
(define (cadr x) (car (cdr x)))
(define (cdar x) (cdr (car x)))
(define (cddr x) (cdr (cdr x)))
(define (caaar x) (car (car (car x))))
(define (caadr x) (car (car (cdr x))))
(define (cadar x) (car (cdr (car x))))
(define (caddr x) (car (cdr (cdr x))))
(define (cdraar x) (cdr (car (car x))))
(define (cdadr x) (cdr (car (cdr x))))
(define (cddar x) (cdr (cdr (car x))))
(define (cdddr x) (cdr (cdr (cdr x))))
(define (caaaar x) (car (car (car (car x)))))
(define (caaadr x) (car (car (car (cdr x)))))
(define (caadar x) (car (car (cdr (car x)))))
(define (caaddr x) (car (car (cdr (cdr x)))))
(define (cadaar x) (car (cdr (car (car x)))))
(define (cadadr x) (car (cdr (car (cdr x)))))
(define (caddar x) (car (cdr (cdr (car x)))))
(define (cadddr x) (car (cdr (cdr (cdr x)))))
(define (cdaaar x) (cdr (car (car (car x)))))
(define (cdaadr x) (cdr (car (car (cdr x)))))
(define (cdadar x) (cdr (car (cdr (car x)))))
(define (cdaddr x) (cdr (car (cdr (cdr x)))))
(define (cddaar x) (cdr (cdr (car (car x)))))
(define (cddadr x) (cdr (cdr (car (cdr x)))))
(define (cdddar x) (cdr (cdr (cdr (car x)))))
(define (cddddr x) (cdr (cdr (cdr (cdr x)))))

(define (map f xs)
  (if (null? xs) '() (cons (f (car xs)) (map f (cdr xs)))))

(define (for-each f xs)
  (if (null? xs) '() (begin (f (car xs)) (map f (cdr xs)))))

(define (append x y)
  (if (null? x) y (cons (car x) (append (cdr x) y))))

(define (not b)
  (if b #f #t))
(define (list? l) (or (null? l) (pair? l)))
(define (char->string c) c) ;; js
(define (list->string l)
  (if (null? l)
      ""
      (string-append (char->string (car l)) (list->string (cdr l)))))

(define (length l) (if (null? l) 0 (+ 1 (length (cdr l)))))

(define (go t) (display "(") (js->javascript (scm->js t)) (display ")") (newline))

(define (go1 t) (with-output-to-string (lambda () (go t))))

(define (go-top t)
  (for-each (lambda (t) (js->javascript (scm-top->js t)) (display ";") (newline)) t)
  (newline))

(define (go-top1 t) (with-output-to-string (lambda () (go-top t))))

(define (compile-eval)
  (display (eval (go-top1 (read-top)))))
