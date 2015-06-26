# What is scm->js?

This project is a scheme to javascript transpiler (a transpiler is a compiler that goes horizontally instead of from a high level language to a low level one). It's written in scheme so it can compile itself!

It works by looking over the scheme code and printing out an equivalent bit of javascript code for each part. Since we were able to compile the compiler itself we could make a interactive scheme repl inside the browser that works by compiling the code into js then using javascripts "eval" function.

# What are the files?

The compiler itself is here: [scm->js.scm](https://github.com/orchid-hybrid/scm--js/blob/master/scm-%3Ejs.scm). It's just under 300 lines of code!

The code it generates requires some helper primitives (like arithmetic, cons/car/cdr, and I/O) that are programmed by hand in javascript: [runtime.js](https://github.com/orchid-hybrid/scm--js/blob/master/runtime.js)

there is a small standard library programmed in scheme to suppliment the primitives, [https://github.com/orchid-hybrid/scm--js/blob/master/standard.scm](standard.scm) which is compiled to produce [standard.js](https://github.com/orchid-hybrid/scm--js/blob/master/standard.js)

We compiled the compiler itself to produce this file: [compiler.js](https://github.com/orchid-hybrid/scm--js/blob/master/compiler.js)

We're using the lisp reader in javascript from [veneer compiler](https://github.com/tca/veneer), and that's here: [reader.js](https://github.com/orchid-hybrid/scm--js/blob/master/reader.js)

We build the compiler step by step, making sure it could do simple expressions before working on more complicated ones. You can see each step in the list of tests here: [test.scm](https://github.com/orchid-hybrid/scm--js/blob/master/test.scm). That same file is used by [build.sh](https://github.com/orchid-hybrid/scm--js/blob/master/build.sh) to produce the compiled javascript files.

# What did I learn from this?

* It can be really fun to program with a friend (we took turns to code parts of it and that kept up a lot of momentum)
* You can write a simple compiler in just a couple of days!
* Making it easy to test and having a comprehensive list of tests will help keep your code correct
* The main parts of a transpiler are: recognizing each syntax element, translation from input language to intermediate language, name mangling and string escaping, formatting the IL into the target language.
