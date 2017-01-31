if (module.hot) {
  module.hot.accept()
}

require('./style.scss')

const main = document.querySelector('#main')
main.innerHTML = `<h1>Webpack 2 example app</h1>`
