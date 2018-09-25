# LambdaTester
LambdaTester is a novel test generator for higher-order functions written in JavaScript. The approach is presented in our [OOPSLA](http://software-lab.org/publications/oopsla2018_LambdaTester.pdf) paper.

## Requirements

## Overview
Directories under this repository:
1. **callbackMining** - the collection of mined callbacks and *callbackProvider.js* script to return callbacks for requested method
2. **coverage** - instrumented promise libraries and array polyfills. Dump directory for files generated during coverage computation.
3. **experiments** - generated test suites used for the evaluation. Tests are under *experiments/polyfillName/polyfillNameSuffix* directories where *Suffix* denotes the approach used to generate tests:

    - *Random* suffix: tests generated by Base approach
    - *Empty* suffix: tests generated by Cb-Empty approach
    - *QC* suffix: tests generated by Cb-Quick approach
    - *Mined* suffix: tests generated by Cb-Mined approach
    - *Gen* suffix: tests generated by Cb-Writes approach
    
4. **polyfills** - array polyfills and promise libraries
5. **setupCode** - two files: *setupArray.js* the setup code to generate tests for array polyfills and *setupPromise.js*, the setup code to generate tests for promises.
6. **utilities** - utility files for test generation 
7. **jalangi2** - symbolic link to **jalangi2** project

## Test Generation
To generate tests use the following command:

`node testGeneration.js <function names> <number of tests> <setup code> <is feedback directed> <callback type> <include dynamic analysis> <testFolder> <polyfills to analyze (optional)>`


Explanation of required inputs:


    - function names: names of methods under test (e.g., reduce)
    - number of tests: number of tests to be generated
    - setup code: file containing setup code. To test array methods use setupCode/setupArray.js and to test promise methods use setupCode/setupPromise.js 
    - is feedback directed: indicates whether callback position inference and the feedback are part of test generation (0 – no, 1 – yes). To generate tests with Base approach choose 0.
    - callback type: 
         0 - empty callback (Cb-Empty approach)
         1 - callback generated by quickcheck (Cb-Quick approach) 
         2 - use mined callbacks (Cb-Mined approach)
         3 - use callbacks generated based on dynamic analysis of memory reads (Cb-Writes approach)
    - run with dynamic analysis: indicates whether the dynamic analysis of memory reads is used during test generation (0 – no, 1 – yes)
    - test folder: a path to a folder to put generated tests
    - polyfills to analyze (optional): This is an optional input and should be specified only if the test generator uses dynamic analysis for callback generation. Specifies paths to polyfills that are dynamically analyzed.

Examples:

- Generate 10 tests for reduce array method with Base approach (no feedback, no inference of callback positons):

`node testGeneration.js 'reduce' 10 ./setupCode/setupArray.js 0 0 0 reduceTests`

- Generate 10 tests for then promise method with Cb-Empty approach (feedback-directed, empty callbacks):

`node testGeneration.js 'then' 10 ./setupCode/setupPromise.js 1 0 0 thenTests`

- Generate 10 tests for map array method with Cb-Quick approach (feedback-directed, callbacks generated by QuickCheck):

`node testGeneration.js 'map' 10 ./setupCode/setupArray.js 1 1 0 mapTests`

- Generate 10 tests for some array method with Cb-Mined approach (feedback-directed, mined callbacks):

`node testGeneration.js 'some' 10 ./setupCode/setupArray.js 1 2 0 someTests`

- Generate 10 tests for filter array method with Cb-Writes approach (feedback-directed, callbacks with targeted writes) and by analyzing the polyfill from mozilla library:

`node testGeneration.js 'filter' 10 ./setupCode/setupArray.js 1 3 1 filterTests './polyfills/filter/mozilla.js'`

## Differential Testing

When comparing the behavior of polyfills and native implementation, LambdaTester differentiates between several behavioral differences (Section 6.3). The output of differential testing shows how many tests expose differences in Error messages, Warning messages, Standard outputs, Receiver objects, Return objects and Callback arguments. To compare polyfill and native implementations use the following command:

`node testRunner.js <type of polyfill: 0 for array, 1 for promise> <polyfill to test> <test folder>`

The *<polyfill to test>* argument contains either the path to the polyfill (in polyfills directory) or the name of the polyfill if installed via npm. If promise libraries are installed via npm and it is enough to pass their names as the argument to testRunner.js.
 
Examples:

- Compare behavior of bluebird promise library with native promise implementation and use tests generated by Cb-Writes:

`node testRunner.js 1 bluebird experiments/promises/promiseGen`

- Compare behavior of find polyfill from Polyfill.io library with native implementation and use tests generated by Cb-Writes:

`node testRunner.js 0 polyfills/find/polyfill.js experiments/find/findGen`


## Coverage

To measure the coverage of a library or polyfill, first instrument the library:

`node istanbulInstrument.js <path to the polyfill to be instrumented>`

For example, to instrument bluebird.js library run:

`node istanbulInstrument.js ./polyfills/bluebird.js`

Instrumented library is placed in *coverage/instrumented_libraries* directory.

To compute information on the statement and branch coverage use the following command:

`node collectCoverage.js <test folder> <name of instrumented library> <is a Promise polyfill: 0 for array, 1 for promise>`

For example, to compute coverage information for bluebird.js library for the test suite generated by *Cb-Write* approach run:

`node collectCoverage.js experiments/promises/promiseGen polyfills_bluebird_instrumented.js 1`





