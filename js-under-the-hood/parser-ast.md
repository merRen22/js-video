# JS Engine

- get the base code
- parse the code and create the AST (Abstract syntax tree)
- Compiles to bytecode and executes
- Optimizes to machine code and replaces the code base

## Abstract syntax tree

This is basically and interface very similar to what we have as ABI in Ethereum smart contract development where our code base is specify. The AST is widely used by Babel and ESLint.

for more info [here](https://jotadeveloper.medium.com/abstract-syntax-trees-on-javascript-534e33361fc7)

## Parsing

```
code base -> parsing -> AST
```

In order to generate the AST a parser its use. this has to generate some tokens that will include the type of data as well as value among other data. But in this step prior to the generation of the AST is where syntax error is detected because the parser cannot generate a proper token.

The parsing of code takes from 15 to 20% of the execution process.

The majority of JS code is never executed. this makes necessary to make use of `bundling` and `code splitting`. Basically, using SPA to reduce load times for the user.

## Parsing in V8

We have two types

### Eager parsing

- finds errors on the syntax.
- generates AST.
- Builds the scopes.

### Lazy parsing

- x2 faster than eager.
- does not generate AST.
- Build scopes partially.

## Bonus 🔥🎉

[here](https://esprima.org/demo/parse.html#) you can check how the AST is generated and the tokens used.
