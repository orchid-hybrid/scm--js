function runtime_dash_booleanize(b){return (b != false);}

function null_huh_(n){return n==null;}

function Pair(a, d) { this.car = a; this.cdr = d }

function cons(a, d) { return new Pair(a, d); }
function car(c){return c.car;}
function cdr(c){return c.cdr;}
function js_dash_plus(x,y){return x+y}
function js_dash_minus(x,y){return x-y}
function js_dash_times(x,y){return x*y}


function Symbol(str) { this.string = str; }
Symbol.prototype.toString = function () { return this.string }

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

function array_to_list(arr) {
    var i = arr.length;
    var memo = null;
    while(i > 0) { memo = cons(arr[--i], memo); }
    return memo;
}

function list() {
    return array_to_list(arguments);
}
