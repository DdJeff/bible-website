//express server

const express = require("express");
const app =  express();
const port = 8080;
const path = require("path")

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, '/views'))

//to server css/ images ...

app.use(express.static('assets'))
// root route
app.get('/', (req, res) => {
  res.render('home')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })