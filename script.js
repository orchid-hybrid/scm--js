function last(l){return (runtime_dash_booleanize((null_huh_)(l)))?(false):((runtime_dash_booleanize((null_huh_)((l).cdr)))?((l).car):((last)((l).cdr)))};
document.write("42"+": "+
(42)
+"<br/>");

document.write("(car (cons 4 2))"+": "+
(({car:4, cdr:2}).car)
+"<br/>");

document.write("(cdr (cons 4 2))"+": "+
(({car:4, cdr:2}).cdr)
+"<br/>");

document.write("(+ (car (cons 4 2)) (cdr (cons 4 2)))"+": "+
(js_dash_plus(({car:4, cdr:2}).car, ({car:4, cdr:2}).cdr))
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
(((runtime_dash_booleanize(true))?(car):(cdr))({car:4, cdr:2}))
+"<br/>");

document.write("(last (cons 4 (cons 1 (cons 2 ()))))"+": "+
((last)({car:4, cdr:{car:1, cdr:{car:2, cdr:null}}}))
+"<br/>");

document.write("(string->symbol \"x\")"+": "+
(js_dash_string_dash__gt_symbol("x"))
+"<br/>");

document.write("(car (cdr (quote (my other car))))"+": "+
((({car:js_dash_string_dash__gt_symbol("my"), cdr:{car:js_dash_string_dash__gt_symbol("other"), cdr:{car:js_dash_string_dash__gt_symbol("car"), cdr:null}}}).cdr).car)
+"<br/>");

document.write("(car (cdr (list (quote my) (quote other) (quote car))))"+": "+
((((list)(js_dash_string_dash__gt_symbol("my"), js_dash_string_dash__gt_symbol("other"), js_dash_string_dash__gt_symbol("car"))).cdr).car)
+"<br/>");
