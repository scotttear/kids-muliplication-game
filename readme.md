# Javascript Maths Helper

### Install

Install dependencies.

`$ npm install`

### Run

Start app.

`$ npm start`

Go to [http://localhost:8080/](http://localhost:8080/)

### Test

Added some tests to back up logic and test some user interaction. Have not included any UI/CSS tests.

`$ npm test`

### Notes

* Haven't paid much attention to UI
* Agree with TDD for some features but in this case just added tests to back up logic
* Was tempted to use React/Vue mainly for data binding but decided to just go with vanilla JS as was fairly straight forward
* Left the grid columns with a set height. Looked at making all the columns square (1/1 ratio) but was actually just pushing more content down out the viewport
* Added SCSS bundler to compile CSS
* Breakpoints: Used judgement when comfortable to change layout. Mobile first -> 480px -> 768px
* Organised the app into small pieces intentionally. If this was a real world application and we wanted to add more features, smaller chunks are easier to modify, maintain and test
* Given more time may have looked at visual/style/layout tests

## Exercise reference

__Goal__: Production of a client-side Web application to help a child understand multiplication.

__Duration__: This test is intended to take ~2 hours but may take more.

__Description__: The application will display a grid of all the numbers from 1 to 144 evenly laid out with a large clickable box around each number. The number should be centered in each box. When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way. Clicking on a second number removes the highlighting of the previous selection, then highlights the multiples of the newly selected number.

__Constraints__: On mobile devices the grid will display 1 number per row. On tablet devices 2 numbers per row and on desktop and larger devices 3 numbers per row. The numbers should fill their rows equally. When the screen width grows very large a margin should appear either side of the grid so that the boxes don’t keep getting larger.

You do not need to use any libraries but if you do, you should be able to explain the reasons for your choices.

If there is any information that you feel is missing from the story then please make sensible decisions (for example it’s up to you how you define ‘mobile’, as long as it’s sensible, similarly please define highlighting).

__Criteria for assessment__:

* Project layout
* Coding style, i.e. your approach not whether you use semicolons or not ;)
* Your approach to unit testing/TDD
* Maintainability and extensibility
* Use of responsive design
* Performance & Accessibility
* Naming conventions used
* Meeting the requirements
