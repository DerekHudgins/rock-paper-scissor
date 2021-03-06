// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { rockPaperScissor } from "../utils.js";

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = rockPaperScissor;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(rockPaperScissor, expected);
});
