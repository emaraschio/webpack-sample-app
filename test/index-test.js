module.exports = {
  'Test Index Page' : function (client) {
    client
      .url('http://127.0.0.1:8080/')
      .waitForElementVisible('body', 1000)

      .assert.title('Hello!')
      .assert.visible('div[id=main]')
      .assert.containsText('body > div > h1:nth-child(1)', 'Webpack 2 example app')

      .end();
  }
};