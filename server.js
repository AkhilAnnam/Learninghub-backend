const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors());




app.use(require('./routes/home'));
app.use('/contact',require('./routes/contact'));
app.use('/contactus',require('./routes/contactus'));
app.use('/fetch',require('./routes/fetch'));
app.use("/fetch1",require('./routes/fetch1'))
app.use("/photography",require('./routes/photography'))
app.use("/government",require('./routes/government'))
app.use("/software",require('./routes/software'))
app.use("/marketing1",require('./routes/marketing1'))
app.use("/government1",require('./routes/government1'))
app.use("/phtography1",require('./routes/phtography1'))
app.use("/personaldevelopment",require('./routes/personaldevelopment'))
app.use("/music",require('./routes/music'))
app.use('/login',require('./routes/login'))
app.use('/login1',require('./routes/login1'))
app.use('/register',require('./routes/register'))
app.use('/register1',require('./routes/register1'))
app.use('/update',require('./routes/update'))
app.use('/deleted',require('./routes/deleted'))
app.use('/cart',require('./routes/cart'))

app.listen(3001,()=>{
    console.log("server is Running")
})