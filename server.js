const express = require('express')
const path = require('path')
const app = express()
const proxy = require("http-proxy-middleware");

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(
    express.static(path.join(__dirname, 'client/build')),
    proxy(["*", ], { target: "http://localhost:5000" })
  )
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`API listening on port ${port}...`)
})