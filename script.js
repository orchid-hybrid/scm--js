document.write("42"+": "+
write_to_string((42)
)+"<br/>");

document.write("(car (cons 4 2))"+": "+
write_to_string(((car)((cons)(4, 2)))
)+"<br/>");

document.write("(cdr (cons 4 2))"+": "+
write_to_string(((cdr)((cons)(4, 2)))
)+"<br/>");

document.write("(+ (car (cons 4 2)) (cdr (cons 4 2)))"+": "+
write_to_string((js_dash_plus((car)((cons)(4, 2)), (cdr)((cons)(4, 2))))
)+"<br/>");

document.write("(- (+ 42 (* 3 6)) 7)"+": "+
write_to_string((js_dash_minus(js_dash_plus(42, js_dash_times(3, 6)), 7))
)+"<br/>");

document.write("(if #t \"yes\" \"no\")"+": "+
write_to_string(((runtime_dash_booleanize(true))?("yes"):("no"))
)+"<br/>");

document.write("(if #f \"yes\" \"no\")"+": "+
write_to_string(((runtime_dash_booleanize(false))?("yes"):("no"))
)+"<br/>");

document.write("(if \"huh?\" \"yes\" \"no\")"+": "+
write_to_string(((runtime_dash_booleanize("huh?"))?("yes"):("no"))
)+"<br/>");

document.write("(+ 1 (if #t 4 2))"+": "+
write_to_string((js_dash_plus(1, (runtime_dash_booleanize(true))?(4):(2)))
)+"<br/>");

document.write("(if #t car cdr)"+": "+
write_to_string(((runtime_dash_booleanize(true))?(car):(cdr))
)+"<br/>");

document.write("(lambda (x) x)"+": "+
write_to_string((function(x){return x})
)+"<br/>");

document.write("((lambda (x) x) 1)"+": "+
write_to_string(((function(x){return x})(1))
)+"<br/>");

document.write("(begin 1 2 3 (begin 4 5 6))"+": "+
write_to_string(((function(){1; 2; 3; return (function(){4; 5; return 6})()})())
)+"<br/>");

document.write("((if #t car cdr) (cons 4 2))"+": "+
write_to_string((((runtime_dash_booleanize(true))?(car):(cdr))((cons)(4, 2)))
)+"<br/>");

document.write("(last (cons 4 (cons 1 (cons 2 ()))))"+": "+
write_to_string(((last)((cons)(4, (cons)(1, (cons)(2, null)))))
)+"<br/>");

document.write("(string->symbol \"x\")"+": "+
write_to_string(((string_dash__gt_symbol)("x"))
)+"<br/>");

document.write("(car (cdr (quote (my other car))))"+": "+
write_to_string(((car)((cdr)(cons((string_dash__gt_symbol)("my"), cons((string_dash__gt_symbol)("other"), cons((string_dash__gt_symbol)("car"), null))))))
)+"<br/>");

document.write("(car (cdr (list (quote my) (quote other) (quote car))))"+": "+
write_to_string(((car)((cdr)((list)((string_dash__gt_symbol)("my"), (string_dash__gt_symbol)("other"), (string_dash__gt_symbol)("car")))))
)+"<br/>");

document.write("(car (cdr ((lambda (o) (quasiquote (my (unquote o) car))) (quote other))))"+": "+
write_to_string(((car)((cdr)((function(o){return (cons)((string_dash__gt_symbol)("my"), (cons)(o, (cons)((string_dash__gt_symbol)("car"), null)))})((string_dash__gt_symbol)("other")))))
)+"<br/>");

document.write("((lambda (x) (cond ((null? x) (quote null)) ((pair? x) (quote pair)) (else (quote other)))) (quote (1 . 2)))"+": "+
write_to_string(((function(x){return (runtime_dash_booleanize((null_huh_)(x)))?((function(){return (string_dash__gt_symbol)("null")})()):((runtime_dash_booleanize((pair_huh_)(x)))?((function(){return (string_dash__gt_symbol)("pair")})()):((function(){return (string_dash__gt_symbol)("other")})()))})(cons(1, 2)))
)+"<br/>");

document.write("(not #t)"+": "+
write_to_string(((not)(true))
)+"<br/>");

document.write("(not #f)"+": "+
write_to_string(((not)(false))
)+"<br/>");

document.write("(not 3)"+": "+
write_to_string(((not)(3))
)+"<br/>");

document.write("(with-output-to-string (lambda () (display \"1\") (display \"2\") (display \"3\")))"+": "+
write_to_string(((with_dash_output_dash_to_dash_string)(function(){(display)("1"); (display)("2"); return (display)("3")}))
)+"<br/>");

document.write("(display \"1\")"+": "+
write_to_string(((display)("1"))
)+"<br/>");

document.write("(= 4 5)"+": "+
write_to_string(((_eq_)(4, 5))
)+"<br/>");

document.write("(= 5 5)"+": "+
write_to_string(((_eq_)(5, 5))
)+"<br/>");

document.write("(begin (display \"happy\") (newline) (display \"lucky\") (newline) (display \"dochy\") (newline))"+": "+
write_to_string(((function(){(display)("happy"); (newline)(); (display)("lucky"); (newline)(); (display)("dochy"); return (newline)()})())
)+"<br/>");

document.write("(car (cdr (list (list? (quote a)) (list? (quote (a b))) (list? (quote ())))))"+": "+
write_to_string(((car)((cdr)((list)((list_huh_)((string_dash__gt_symbol)("a")), (list_huh_)(cons((string_dash__gt_symbol)("a"), cons((string_dash__gt_symbol)("b"), null))), (list_huh_)(null)))))
)+"<br/>");

document.write("(and 1 2 3)"+": "+
write_to_string(((runtime_dash_booleanize(1))?((runtime_dash_booleanize(2))?((runtime_dash_booleanize(3))?(true):(false)):(false)):(false))
)+"<br/>");

document.write("(and 1 #f 2 3)"+": "+
write_to_string(((runtime_dash_booleanize(1))?((runtime_dash_booleanize(false))?((runtime_dash_booleanize(2))?((runtime_dash_booleanize(3))?(true):(false)):(false)):(false)):(false))
)+"<br/>");

document.write("(list->string (but-last (string->list \"foobar\")))"+": "+
write_to_string(((list_dash__gt_string)((but_dash_last)((string_dash__gt_list)("foobar"))))
)+"<br/>");

document.write("(if-expression? (quote (if a b c)))"+": "+
write_to_string(((if_dash_expression_huh_)(cons((string_dash__gt_symbol)("if"), cons((string_dash__gt_symbol)("a"), cons((string_dash__gt_symbol)("b"), cons((string_dash__gt_symbol)("c"), null))))))
)+"<br/>");

document.write("(if-expression? (quote (uf a b c)))"+": "+
write_to_string(((if_dash_expression_huh_)(cons((string_dash__gt_symbol)("uf"), cons((string_dash__gt_symbol)("a"), cons((string_dash__gt_symbol)("b"), cons((string_dash__gt_symbol)("c"), null))))))
)+"<br/>");

document.write("(if-expression? (quote (uf b c)))"+": "+
write_to_string(((if_dash_expression_huh_)(cons((string_dash__gt_symbol)("uf"), cons((string_dash__gt_symbol)("b"), cons((string_dash__gt_symbol)("c"), null)))))
)+"<br/>");

document.write("(runtime-primitive? (quote string->symbol))"+": "+
write_to_string(((runtime_dash_primitive_huh_)((string_dash__gt_symbol)("string->symbol")))
)+"<br/>");

document.write("(list->string (list #\\h #\\i))"+": "+
write_to_string(((list_dash__gt_string)((list)("h", "i")))
)+"<br/>");

document.write("(char? (car (list #\\h #\\i)))"+": "+
write_to_string(((char_huh_)((car)((list)("h", "i"))))
)+"<br/>");

document.write("(mangle-name (quote ?aa))"+": "+
write_to_string(((mangle_dash_name)((string_dash__gt_symbol)("?aa")))
)+"<br/>");

document.write("(write \"asd \\\" f\")"+": "+
write_to_string(((write)("asd \" f"))
)+"<br/>");

