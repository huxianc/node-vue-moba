const express = require("express")

const app = express()

app.set("secret","sed4rt12dfg5")

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + "/uploads"))
app.use('/admin', express.static(__dirname + "/admin"))
app.use('/', express.static(__dirname + "/web"))

require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000, () => {
    console.log("http://localhost:3000");
})