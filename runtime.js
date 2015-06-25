function runtime_dash_booleanize(b){return (b != false);}

function null_huh_(n){return n==null;}

function car(c){return c.car;}
function cdr(c){return c.cdr;}
function js_dash_plus(x,y){return x+y}
function js_dash_minus(x,y){return x-y}
function js_dash_times(x,y){return x*y}


function Symbol(str) { this.string = str; }

var __symbol_table = new Object(null);
function __intern(string) {
    if (__symbol_table.hasOwnProperty(string)) {
        return __symbol_table[string];
    } else {
        var sym =  new Symbol(string);
        __symbol_table[string] = sym;
        return sym;
    }
}
function js_dash_symbol_dash__gt_string(s){return s.string}
function js_dash_string_dash__gt_symbol(s){return __intern(s)}
