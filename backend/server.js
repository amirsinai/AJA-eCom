const express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())


app.use(express.static(path.resolve(__dirname, '../client/build')))

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', require('./controllers/web_controller')) 

//Handle GET requrests to /api route
app.get('/api', (req, res) => {
    res.json({
        message: "Hello from the Server!"
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})