const webdriver = require('webdriverio');
const co = require('co');

const options = {
  desiredCapabilities: {
    browserName: 'firefox',
  },
  host: 'selenium',
  port: 4444,
};

co(function *() {
  const title = yield webdriver.remote(options)
    .init()
    .url('http://nginx')
    .getTitle();
  console.log(`Title was`, title);
}).catch(err => console.error(err.stack));
