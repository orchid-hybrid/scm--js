function runtime_dash_booleanize(b){return (b !== false);}

function Pair(a, d) { this.car = a; this.cdr = d }
Pair.prototype.toString = function () { return ["(", this.car.toString(), " . ", this.cdr.toString() ,")"].join(""); }

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

function string_dash__gt_list(s) {
    return array_to_list(s);
}
function string_dash_append(s1, s2) {
    return s1 + s2;
}

function list() {
    return array_to_list(arguments);
}

function null_huh_(x) { return x === null; }
function procedure_huh_(x) { return x instanceof Function; }
function symbol_huh_(x) { return x instanceof Symbol; }
function pair_huh_(x) { return x instanceof Pair; }
function number_huh_(t) { return typeof t === "number"; }
function boolean_huh_(t) { return typeof t === "boolean"; }
function string_huh_(t) { return typeof t === "string"; }
function constant_huh_(t) { return numberp(t) || booleanp(t) || stringp(t); }
function eq_huh_(x, y) { return x === y }
function _eq_(x, y) { return number_huh_(x) && number_huh_(y) && x == y; }

function Box(v) { this.val = v; }
function box(v) { return new Box(v); }
function unbox(b) { return b.val; }
function set_dash_box_bang_(b, v) { b.val = v; return true }
function box_huh_(b) { return b instanceof Box; }

function console_log(s) { console.log(s); return true; }
var output_port = box(console_log);
var display = function(s) { return unbox(output_port)(s); }

function string_builder() {
    var buffer = [];
    var push = function(s) { buffer.push(s); return true; };
    var join = function() { return buffer.join(""); };
    return { push: push, join: join };
}

function with_dash_output_dash_to_dash_string(t) {
    var old = unbox(output_port);
    var builder = string_builder();
    set_dash_box_bang_(output_port, builder.push);
    t();
    set_dash_box_bang_(output_port, old);
    return builder.join();
}

function newline() {
    display("\n");
}
