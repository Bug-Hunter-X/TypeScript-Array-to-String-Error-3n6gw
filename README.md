# TypeScript Array to String Error

This repository demonstrates a common TypeScript error: passing an array to a function expecting a single string.

The `bug.ts` file contains the erroneous code, which attempts to pass a string array to the `greeter` function.  The `bugSolution.ts` file shows how to correct this error.  The solution iterates through the array and greets each user individually or concatenates the array elements into a single string before passing it to the function.