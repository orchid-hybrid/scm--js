function last(l){return (runtime_dash_booleanize((null_huh_)(l)))?(false):((runtime_dash_booleanize((null_huh_)((l).cdr)))?((l).car):((last)((l).cdr)))};

document.write(
(last)({car:4, cdr:{car:1, cdr:{car:2, cdr:null}}})
);
