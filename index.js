const express = require('express');
const router = require('./routes/route')

const app = express();
const dotenv = require('dotenv');

dotenv.config()

const port = process.env.PORT ||3000
app.use(express.json())
app.use("/",router)






app.listen(port,()=>console.log(`listening on port ${port}`));