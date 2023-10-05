const express = require('express');
const sequelize = require('./models/db');
const router = require('./routes')
const app = express();
app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
    console.log("DB connection established");
}).catch((err) => { console.log("Error in db connection", err); });

const port = 2003;
app.listen(port, () => {
    console.log("Server listening on :", port);
})

app.use('/api', router)
