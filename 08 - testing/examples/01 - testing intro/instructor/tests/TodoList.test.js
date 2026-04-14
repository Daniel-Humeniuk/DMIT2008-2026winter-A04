// Any *.test.js file will be picked up and ran by jest.

// It's not REQUIRED to name a test after the file it's got tests for (e.g. TodoList),
// but that helps keep things organised; it'd be a total mess otherwise.

/* 'DNA' of a test:

    jest docs:                  https://jestjs.io/docs/getting-started
    jest cheat-sheeet:          https://github.com/sapegin/jest-cheat-sheet
    react testing-library docs: https://testing-library.com/docs/react-testing-library/example-intro


    test(
      'humanised name of the test so it's easy to read in console',
      () => {
        // callback function: the test itself, three informal parts:
        //   a) setup
        //   b) execution
        //   c) assertion
      }
    )
*/

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList';


// Test 1: syntax introduction; we'll just write a silly test to check typography rendering
test(
  'test that title renders correctly',
  () => {
    // a) setup
    render(<TodoList />) // implicitly produces a screen (used below) 'containing' the rendered DOM

    // b) execution (logic required to produce test result)
    const titleElement = screen.getByText("Our Todo List")
    // ^ normally, I would never ever ever *ever* snipe an object based on text value (rather,
    //   things like ID, key, attributes, etc.) but this is an easy intro into poking the actual UI

    // c) assertion / expectation
    expect(titleElement).toBeInTheDocument();

  }
)
