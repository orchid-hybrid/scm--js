document.write("42"+": "+
(42)
+"<br/>");

document.write("(car (cons 4 2))"+": "+
((car)(cons(4, 2)))
+"<br/>");

document.write("(cdr (cons 4 2))"+": "+
((cdr)(cons(4, 2)))
+"<br/>");

document.write("(+ (car (cons 4 2)) (cdr (cons 4 2)))"+": "+
(js_dash_plus((car)(cons(4, 2)), (cdr)(cons(4, 2))))
+"<br/>");

document.write("(- (+ 42 (* 3 6)) 7)"+": "+
(js_dash_minus(js_dash_plus(42, js_dash_times(3, 6)), 7))
+"<br/>");

document.write("(if #t \"yes\" \"no\")"+": "+
((runtime_dash_booleanize(true))?("yes"):("no"))
+"<br/>");

document.write("(if #f \"yes\" \"no\")"+": "+
((runtime_dash_booleanize(false))?("yes"):("no"))
+"<br/>");

document.write("(if \"huh?\" \"yes\" \"no\")"+": "+
((runtime_dash_booleanize("huh?"))?("yes"):("no"))
+"<br/>");

document.write("(+ 1 (if #t 4 2))"+": "+
(js_dash_plus(1, (runtime_dash_booleanize(true))?(4):(2)))
+"<br/>");

document.write("(if #t car cdr)"+": "+
((runtime_dash_booleanize(true))?(car):(cdr))
+"<br/>");

document.write("(lambda (x) x)"+": "+
(function(x){return x})
+"<br/>");

document.write("((lambda (x) x) 1)"+": "+
((function(x){return x})(1))
+"<br/>");

document.write("(begin 1 2 3 (begin 4 5 6))"+": "+
((function(){1; 2; 3; return (function(){4; 5; return 6})()})())
+"<br/>");

document.write("((if #t car cdr) (cons 4 2))"+": "+
(((runtime_dash_booleanize(true))?(car):(cdr))(cons(4, 2)))
+"<br/>");

document.write("(last (cons 4 (cons 1 (cons 2 ()))))"+": "+
((last)(cons(4, cons(1, cons(2, null)))))
+"<br/>");

document.write("(string->symbol \"x\")"+": "+
(js_dash_string_dash__gt_symbol("x"))
+"<br/>");

document.write("(car (cdr (quote (my other car))))"+": "+
((car)((cdr)(cons(js_dash_string_dash__gt_symbol("my"), cons(js_dash_string_dash__gt_symbol("other"), cons(js_dash_string_dash__gt_symbol("car"), null))))))
+"<br/>");

document.write("(car (cdr (list (quote my) (quote other) (quote car))))"+": "+
((car)((cdr)((list)(js_dash_string_dash__gt_symbol("my"), js_dash_string_dash__gt_symbol("other"), js_dash_string_dash__gt_symbol("car")))))
+"<br/>");

document.write("(car (cdr ((lambda (o) (quasiquote (my (unquote o) car))) (quote other))))"+": "+
((car)((cdr)((function(o){return cons(js_dash_string_dash__gt_symbol("my"), cons(o, cons(js_dash_string_dash__gt_symbol("car"), null)))})(js_dash_string_dash__gt_symbol("other")))))
+"<br/>");

document.write("((lambda (x) (cond ((null? x) (quote null)) ((pair? x) (quote pair)) (else (quote other)))) (quote (1 . 2)))"+": "+
((function(x){return (runtime_dash_booleanize((null_huh_)(x)))?((function(){return js_dash_string_dash__gt_symbol("null")})()):((runtime_dash_booleanize((pair_huh_)(x)))?((function(){return js_dash_string_dash__gt_symbol("pair")})()):((function(){return js_dash_string_dash__gt_symbol("other")})()))})(cons(1, 2)))
+"<br/>");

document.write("(not #t)"+": "+
((not)(true))
+"<br/>");

document.write("(not #f)"+": "+
((not)(false))
+"<br/>");

document.write("(not 3)"+": "+
((not)(3))
+"<br/>");

document.write("(with-output-to-string (lambda () (display \"1\") (display \"2\") (display \"3\")))"+": "+
((with_dash_output_dash_to_dash_string)(function(){(display)("1"); (display)("2"); return (display)("3")}))
+"<br/>");

document.write("(display \"1\")"+": "+
((display)("1"))
+"<br/>");

document.write("(= 4 5)"+": "+
((_eq_)(4, 5))
+"<br/>");

document.write("(= 5 5)"+": "+
((_eq_)(5, 5))
+"<br/>");

document.write("(begin (display \"happy\") (newline) (display \"lucky\") (newline) (display \"dochy\") (newline))"+": "+
((function(){(display)("happy"); (newline)(); (display)("lucky"); (newline)(); (display)("dochy"); return (newline)()})())
+"<br/>");

document.write("(car (cdr (list (list? (quote a)) (list? (quote (a b))) (list? (quote ())))))"+": "+
((car)((cdr)((list)((list_huh_)(js_dash_string_dash__gt_symbol("a")), (list_huh_)(cons(js_dash_string_dash__gt_symbol("a"), cons(js_dash_string_dash__gt_symbol("b"), null))), (list_huh_)(null)))))
+"<br/>");

document.write("(and 1 2 3)"+": "+
((runtime_dash_booleanize(1))?((runtime_dash_booleanize(2))?((runtime_dash_booleanize(3))?(true):(false)):(false)):(false))
+"<br/>");

document.write("(and 1 #f 2 3)"+": "+
((runtime_dash_booleanize(1))?((runtime_dash_booleanize(false))?((runtime_dash_booleanize(2))?((runtime_dash_booleanize(3))?(true):(false)):(false)):(false)):(false))
+"<br/>");

document.write("(list->string (but-last (string->list \"foobar\")))"+": "+
((list_dash__gt_string)((but_dash_last)((string_dash__gt_list)("foobar"))))
+"<br/>");

document.write("(if-expression? (quote (if a b c)))"+": "+
((if_dash_expression_huh_)(cons(js_dash_string_dash__gt_symbol("if"), cons(js_dash_string_dash__gt_symbol("a"), cons(js_dash_string_dash__gt_symbol("b"), cons(js_dash_string_dash__gt_symbol("c"), null))))))
+"<br/>");

document.write("(if-expression? (quote (uf a b c)))"+": "+
((if_dash_expression_huh_)(cons(js_dash_string_dash__gt_symbol("uf"), cons(js_dash_string_dash__gt_symbol("a"), cons(js_dash_string_dash__gt_symbol("b"), cons(js_dash_string_dash__gt_symbol("c"), null))))))
+"<br/>");

document.write("(if-expression? (quote (uf b c)))"+": "+
((if_dash_expression_huh_)(cons(js_dash_string_dash__gt_symbol("uf"), cons(js_dash_string_dash__gt_symbol("b"), cons(js_dash_string_dash__gt_symbol("c"), null)))))
+"<br/>");

document.write("(runtime-primitive? (quote string->symbol))"+": "+
((runtime_dash_primitive_huh_)(js_dash_string_dash__gt_symbol("string->symbol")))
+"<br/>");

