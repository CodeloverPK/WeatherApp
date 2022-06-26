const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
// const port = 8000;
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '../public');

// app.set('view engine', 'hbs');
const templatePath = path.join(__dirname, '../templates/views');
app.set('views', templatePath);
const partialPath = path.join(__dirname, '../templates/partial');
hbs.registerPartials(partialPath);



app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index.hbs');
})
app.get("/about", (req, res) => {
    res.render("about.hbs")
})
app.get("/weather", (req, res) => {
    res.render("weather.hbs")
})


app.get("*", (req, res) => {
    res.render("404error.hbs", {
        errorMsg: "OOPs! Page not found !!"
    })
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})