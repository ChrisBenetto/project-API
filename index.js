if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const apiRouter = require('./app/routers/apiRouter');
const cors = require('cors');

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/api' , apiRouter);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});