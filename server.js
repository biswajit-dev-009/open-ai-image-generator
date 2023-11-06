const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(cors());
app.use('/openai', require('./src/routes/openaiRoutes'));

app.listen(PORT, () => console.log(`App is running on PORT::${PORT}`));
