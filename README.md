### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```

### Installation

1. Navigate to folder and install npm packages using:

```sh
npm install
```
2. For first time installation run below command to download required browsers

```sh
npx playwright install
```
3. For MAC and Ubuntu OS before running please execute below code as per your environment qa|dev

- if you want to run functional tests run below command:
```sh
export npm_config_ENV="qa"
```
- if you want to run API tests run below command:
```sh
export npm_config_ENV="qaApi"
```
<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" can be "qa" or "dev", `Test Cases are present in "tests" folder`:

```JS
npm run test --ENV="qa"
```

3. For executing single test case on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change `--project=Firefox` against `test:single` in `package.json`, just make sure the browser name given matches the name given in `playwright.config.ts`.

```JS
npm run test:single --ENV="qa"
```

4. For executing test cases in parallel, provide a suitable tag `@SmokeTest` at the start of your test case name, then in `package.json` against `test:parallel` give the tag value and execute :

```JS
npm run test:parallel --ENV="qa"
```

5. For executing test cases in sequence, provide a suitable tag `@SmokeTest` at the start of your test case name, then in `package.json` against `test:serial` give the tag value and execute, `workers` parameter correspond to test cases you want to execute simultaneously e.g. `--workers=3`, executes 3 test cases simultaneously :

```JS
npm run test:serial --ENV="qa"
```

6. For executing API test cases, please provide "ENV" value as "qaApi" or "devApi" and export variable `pm_config_ENV="qaApi"` :

```JS
npm run test:api --ENV="qaApi" 
```

7. For recording test scripts :

```JS
npm run test:record
```

8. For Allure Report generation execute :

```JS
npm run allureReport
```
9. For debugging test cases add debug points, the press CNTRL+SHIFT+P and type "debug:debug npm script", on the edit box select desired script.
10. Screenshots, Videos and Trace files will be generated in test-results folder.
11. To change your username go to `testConfig.ts` and provide value against `username`
12. For viewing trace files, go to folder where `trace.zip` is generated and execute :
```JS
npx playwright show-trace trace.zip
```
3You can change the Logging Message at Test Case/Test Step Level in CustomReporterConfig.ts file
14. In `tsconfig.json` file in `paths` section we can re-assign the long path imports like '../../' to a variable which starts with '@' and then we can use it to shorten our import statements in respective file.
In the below example wherever '../../pageFactory/pageRepository/' import statement is used we can replace it with '@pages'
```JS
"@pages/*":["pageFactory/pageRepository/*"]
```