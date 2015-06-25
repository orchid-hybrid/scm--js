function but_dash_last(l){return (runtime_dash_booleanize((null_huh_)(l)))?(null):((runtime_dash_booleanize((null_huh_)((cdr)(l))))?(null):(cons((car)(l), (but_dash_last)((cdr)(l)))))};
function last(l){return (runtime_dash_booleanize((null_huh_)(l)))?(false):((runtime_dash_booleanize((null_huh_)((cdr)(l))))?((car)(l)):((last)((cdr)(l))))};
function not(b){return (runtime_dash_booleanize(b))?(false):(true)};
function list_huh_(l){return (runtime_dash_booleanize((null_huh_)(l)))?(true):((runtime_dash_booleanize((pair_huh_)(l)))?(true):(false))};
function char_dash__gt_string(c){return c};
function list_dash__gt_string(l){return (runtime_dash_booleanize((null_huh_)(l)))?(""):((string_dash_append)((char_dash__gt_string)((car)(l)), (list_dash__gt_string)((cdr)(l))))};

