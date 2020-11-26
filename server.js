const express = require('express')
const path = require('path')
const detailRoute = require('./routes/details')

require('./utils/database')

const app = express()
const port = process.env.PORT || 5000   

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(detailRoute)

app.get('/',(req,res)=>{
    res.send('Hello StudyTable!')
})

app.listen(port,()=>{
    console.log('Server is connected at '+ port)
})