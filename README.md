# selenium-testing

[![Build Status](https://travis-ci.org/r24y/selenium-testing.svg?branch=master)](https://travis-ci.org/r24y/selenium-testing)

A proof-of-concept of running Selenium tests in a Docker environment.

## Running arbitrary browser actions

If you just want to control a browser, simply install the `webdriverio` package and use the promise-based methods it provides. Check out `index.js` for an example.

```sh
# Build our containers
docker-compose build

# Bring up the services that the tests depend on
docker-compose up --timeout 1 --no-build -d

# Run the tests
docker-compose run webdriver npm start

# Stop the services
docker-compose kill

```

## Using Mocha to run integration tests

A much more powerful way to run integration tests is by using `webdriverio`'s Mocha runner. Configure your project by running the following and responding to the prompts:

```sh
$(npm bin)/wdio config
```

This will output a WDIO config in your project directory.

Add a new script to package.json:

```json
{
  "scripts": {
    "wdio": "wdio wdio.conf"
  }
}
```

Then, you can run the tests:

```sh
# Build our containers
docker-compose build

# Bring up the services that the tests depend on
docker-compose up --timeout 1 --no-build -d

# Run the tests
docker-compose run webdriver npm run wdio

# Stop the services
docker-compose kill
```
