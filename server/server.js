const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRouter = require('./routes')

const app = express();


app.use(express.static('client'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/api', apiRouter);

app.listen(3000, () => console.log('I heard you the first time...'));

