# JS Engine

A [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine) is a software component that executes JavaScript code. The first JavaScript engines were mere interpreters, but all relevant modern engines use just-in-time compilation for improved performance. JavaScript engines are typically developed by web browser vendors, and every major browser has one.

- get the base code
- parse the code and create the AST (Abstract syntax tree)
- Compiles to bytecode and executes
- Optimizes to machine code and replaces the code base

The engine uses bytecode to execute the program it also optimizes this code. Bytecode is like assembly. The differences between bytecode and machine code include that bytecode runs on a virtual machine whereas machine code runs on a specify architecture or processor.

Before bytecode its transform into machine code it passes through a profiling process in which the repeated functions are optimize among other improvements.
