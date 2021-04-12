const { compile } = require('nexe')

compile({
  input: './app.js',
  build: true, //required to use patches,
  output: "app.exe"
  //loglevel: "verbose"
}).then(() => {
  console.log('success')
})