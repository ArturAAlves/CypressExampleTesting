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
```
├─ cypress
│  ├─ e2e
│  │  ├─ cucumber
│  │  │  ├─ examples
│  │  │  │  └─ steps.js
│  │  │  ├─ examples.feature
│  │  │  ├─ login
│  │  │  │  ├─ steps.js
│  │  │  ├─ login.feature
│  │  │  └─ userArea.feature
│  │  └─ examples
│  ├─ fixtures
│  ├─ page-objects
│  │  └─ pages
│  │     ├─ BasePage.js
│  │     └─ LoginPage.js
│  └─ support
│     ├─ commands.js
│     └─ e2e.js

```
    

