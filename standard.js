function caar(x){return (car)((car)(x))};
function cadr(x){return (car)((cdr)(x))};
function cdar(x){return (cdr)((car)(x))};
function cddr(x){return (cdr)((cdr)(x))};
function caaar(x){return (car)((car)((car)(x)))};
function caadr(x){return (car)((car)((cdr)(x)))};
function cadar(x){return (car)((cdr)((car)(x)))};
function caddr(x){return (car)((cdr)((cdr)(x)))};
function cdraar(x){return (cdr)((car)((car)(x)))};
function cdadr(x){return (cdr)((car)((cdr)(x)))};
function cddar(x){return (cdr)((cdr)((car)(x)))};
function cdddr(x){return (cdr)((cdr)((cdr)(x)))};
function caaaar(x){return (car)((car)((car)((car)(x))))};
function caaadr(x){return (car)((car)((car)((cdr)(x))))};
function caadar(x){return (car)((car)((cdr)((car)(x))))};
function caaddr(x){return (car)((car)((cdr)((cdr)(x))))};
function cadaar(x){return (car)((cdr)((car)((car)(x))))};
function cadadr(x){return (car)((cdr)((car)((cdr)(x))))};
function caddar(x){return (car)((cdr)((cdr)((car)(x))))};
function cadddr(x){return (car)((cdr)((cdr)((cdr)(x))))};
function cdaaar(x){return (cdr)((car)((car)((car)(x))))};
function cdaadr(x){return (cdr)((car)((car)((cdr)(x))))};
function cdadar(x){return (cdr)((car)((cdr)((car)(x))))};
function cdaddr(x){return (cdr)((car)((cdr)((cdr)(x))))};
function cddaar(x){return (cdr)((cdr)((car)((car)(x))))};
function cddadr(x){return (cdr)((cdr)((car)((cdr)(x))))};
function cdddar(x){return (cdr)((cdr)((cdr)((car)(x))))};
function cddddr(x){return (cdr)((cdr)((cdr)((cdr)(x))))};
function map(f, xs){return (runtime_dash_booleanize((null_huh_)(xs)))?(null):((cons)((f)((car)(xs), (map)(f, (cdr)(xs)))))};
function append(x, y){return (runtime_dash_booleanize((null_huh_)(x)))?(y):((cons)((car)(x), (append)((cdr)(x), y)))};
function but_dash_last(l){return (runtime_dash_booleanize((null_huh_)(l)))?(null):((runtime_dash_booleanize((null_huh_)((cdr)(l))))?(null):((cons)((car)(l), (but_dash_last)((cdr)(l)))))};
function last(l){return (runtime_dash_booleanize((null_huh_)(l)))?(false):((runtime_dash_booleanize((null_huh_)((cdr)(l))))?((car)(l)):((last)((cdr)(l))))};
function not(b){return (runtime_dash_booleanize(b))?(false):(true)};
function list_huh_(l){return (runtime_dash_booleanize((null_huh_)(l)))?(true):((runtime_dash_booleanize((pair_huh_)(l)))?(true):(false))};
function char_dash__gt_string(c){return c};
function list_dash__gt_string(l){return (runtime_dash_booleanize((null_huh_)(l)))?(""):((string_dash_append)((char_dash__gt_string)((car)(l)), (list_dash__gt_string)((cdr)(l))))};
function length(l){return (runtime_dash_booleanize((null_huh_)(l)))?(0):(js_dash_plus(1, (length)((cdr)(l))))};
function kind_dash_of_dash_expression_huh_(kind, args, exp){return (runtime_dash_booleanize((list_huh_)(exp)))?((runtime_dash_booleanize((not)((null_huh_)(exp))))?((runtime_dash_booleanize((eq_huh_)(kind, (car)(exp))))?((runtime_dash_booleanize((runtime_dash_booleanize((number_huh_)(args)))?((function(){return (_eq_)(js_dash_plus(1, args), (length)(exp))})()):((runtime_dash_booleanize((eq_huh_)((string_dash__gt_symbol)("even"), args)))?((function(){return (even_huh_)((length)((cdr)(exp)))})()):((runtime_dash_booleanize((eq_huh_)((string_dash__gt_symbol)("one+"), args)))?((function(){return (not)((null_huh_)((cdr)(exp)))})()):(null)))))?(true):(false)):(false)):(false)):(false)};
function if_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("if"), 3, exp)};
function lambda_dash_expression_huh_(exp){return (runtime_dash_booleanize((list_huh_)(exp)))?((runtime_dash_booleanize((eq_huh_)((car)(exp), (string_dash__gt_symbol)("lambda"))))?((runtime_dash_booleanize((list_huh_)((cadr)(exp))))?((runtime_dash_booleanize((list_huh_)((cddr)(exp))))?(true):(false)):(false)):(false)):(false)};
function begin_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("begin"), (string_dash__gt_symbol)("one+"), exp)};
function define_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("define"), (string_dash__gt_symbol)("one+"), exp)};
function quote_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("quote"), 1, exp)};
function quasiquote_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("quasiquote"), 1, exp)};
function unquote_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("unquote"), 1, exp)};
function cond_dash_expression_huh_(exp){return (runtime_dash_booleanize((list_huh_)(exp)))?((runtime_dash_booleanize((eq_huh_)((string_dash__gt_symbol)("cond"), (car)(exp))))?(true):(false)):(false)};
function or_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("or"), (string_dash__gt_symbol)("one+"), exp)};
function and_dash_expression_huh_(exp){return (kind_dash_of_dash_expression_huh_)((string_dash__gt_symbol)("and"), (string_dash__gt_symbol)("one+"), exp)};
function runtime_dash_primitive_huh_(op){return (runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("+"))))?((function(){return (string_dash__gt_symbol)("js-plus")})()):((runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("-"))))?((function(){return (string_dash__gt_symbol)("js-minus")})()):((runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("*"))))?((function(){return (string_dash__gt_symbol)("js-times")})()):((runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("runtime-booleanize"))))?((function(){return (string_dash__gt_symbol)("runtime-booleanize")})()):((runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("symbol->string"))))?((function(){return (string_dash__gt_symbol)("js-string->symbol")})()):((runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("string->symbol"))))?((function(){return (string_dash__gt_symbol)("js-string->symbol")})()):((runtime_dash_booleanize((eq_huh_)(op, (string_dash__gt_symbol)("cons"))))?((function(){return (string_dash__gt_symbol)("cons")})()):((function(){return false})())))))))};
function mangle_dash_name(name){return (string_dash__gt_symbol)((list_dash__gt_string)((mangle_dash_helper)((string_dash__gt_list)((symbol_dash__gt_string)(name)))))};
function mangle_dash_helper(n){return (runtime_dash_booleanize((null_huh_)(n)))?(null):((runtime_dash_booleanize((eq_huh_)("-", (car)(n))))?((function(){return (append)((string_dash__gt_list)("_dash_"), (mangle_dash_helper)((cdr)(n)))})()):((runtime_dash_booleanize((eq_huh_)("?", (car)(n))))?((function(){return (append)((string_dash__gt_list)("_huh_"), (mangle_dash_helper)((cdr)(n)))})()):((runtime_dash_booleanize((eq_huh_)("_", (car)(n))))?((function(){return (append)((string_dash__gt_list)("_underscore_"), (mangle_dash_helper)((cdr)(n)))})()):((runtime_dash_booleanize((eq_huh_)(">", (car)(n))))?((function(){return (append)((string_dash__gt_list)("_gt_"), (mangle_dash_helper)((cdr)(n)))})()):((runtime_dash_booleanize((eq_huh_)("!", (car)(n))))?((function(){return (append)((string_dash__gt_list)("_bang_"), (mangle_dash_helper)((cdr)(n)))})()):((runtime_dash_booleanize((eq_huh_)("=", (car)(n))))?((function(){return (append)((string_dash__gt_list)("_eq_"), (mangle_dash_helper)((cdr)(n)))})()):((function(){return (cons)((car)(n), (mangle_dash_helper)((cdr)(n)))})())))))))};
function go(t){(display)("("); (js_dash__gt_javascript)((scm_dash__gt_js)(t)); (display)(")"); return (newline)()};

