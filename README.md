# CypressExampleTesting - On Progress
This project is a concept Login test scenario using facebook as example . As framework i used Cypress + Cucumber + allure reporting 


## How to run:
-   clone this repo
-   install dependencies: `npm install`
-   run tests: `npm run cy:run`
-   clear previous output `npm run allure:clear`
-   generate allure report: `npm run allure:report`
-   open report: `allure open`

## Architecture:
Cypress ----- E2E ----- login.feature <br/>
                  ----- login ----- steps.js <br/>
                  ----- examples.feature <br/>
                  ----- examples ----- steps.js <br/>





        ----- page-objects -----
