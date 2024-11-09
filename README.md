## Summary

Magneto wants to recruit as many mutants as possible to fight against the X-Men.

He has hired you to develop a project to detect if a human is a mutant based on their DNA sequence.

To do this, he has asked you to create a program with a method or function with the following signature

boolean isMutant(String[] dna);

Non-mutant example
[
"ATGCGA",
"CAGTGC",
"TTATTT",
"AGACGG",
"GCGTCA",
"TCACTG"
]

Mutant example

[
"ATGCGA",
"CAGTGC",
"TTATGT",
"AGAAGG",
"CCCCTA",
"TCACTG"
]

You will know if a human is a mutant if you find more than one sequence of four identical letters, either diagonally, horizontally, or vertically.

## Install

To install the project dependencies it is required to have a version of node[16+].

We initialize, using the script `npm run install`.

Next we will use the start script, which will generate and transpile our files, generating the `/dist` folder.

## Tests

We add unit tests to verify that the logic implemented in the different layers and functions that are part of it work correctly.

To run them use the script `npm run test`
