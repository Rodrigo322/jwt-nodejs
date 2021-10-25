const express = require('express')
const routes = require('./routes')
const app = express()

require('./database')

app.use(express.json())
app.use(routes)

app.listen(3030, () => console.log('Server listening on port 3030'))