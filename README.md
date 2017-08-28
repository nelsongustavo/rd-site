## Usage

First of all, you need to make sure to have Nodejs installed.

Inside directory folder run `npm install` to install all dependencies.

And then `npm start` to start the developer server.

This project was bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app) for simplicity.

The library responsible to do the user track and send data is located at src/rdTracker.js

## Running Tests

This project has a [selenium-webdriver](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver) script to do end to end test in order to run those tests you will need to download additional components

| Browser           | Component                          |
| ----------------- | ---------------------------------- |
| Chrome            | [chromedriver(.exe)][chrome]       |
| Firefox           | [geckodriver(.exe)][geckodriver]   |


After this setup just run `CI=true npm test` and check the track results on [rd-leads-api](https://rd-leads-api.herokuapp.com/)
