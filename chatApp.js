
const express = require('express');
const path = require('path');

 const bodyParser = require('body-parser');

const app = express();
const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop')
const contactrouter = require('./routes/contact')
const sucessrouter = require('./routes/sucessful')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin',adminroutes)
app.use(shoproutes)
app.use(contactrouter)
app.use(sucessrouter)



app.use((req, res, next)=>{
res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



app.listen(6002);


