const { expect } = require('chai');

describe('nginx default page', function () {
  it('should have the right title', function () {
    browser.url('http://nginx');
    expect(browser.getTitle().trim()).to.equal('Welcome to nginx!');
  });
});
