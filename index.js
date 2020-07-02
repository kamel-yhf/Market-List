const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const lists = require("./routes/lists");
app.use('/lists', lists);
const markets = require("./routes/markets");
app.use('/markets', markets);

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`server OK ${port}`)});