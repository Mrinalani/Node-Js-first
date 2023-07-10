
const express = require('express');
const path = require('path');

 const bodyParser = require('body-parser');
 const errorcontroller = require('./controllers/error')


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



app.use(errorcontroller.getErrorPage)



app.listen(6002);


