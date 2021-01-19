import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import newsapi from 'newsapi';
import covidRoute from './routes/covidRoute.js';
dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/covid', covidRoute);

//NPM RUN SERVER
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(
        `Port running at ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
            .yellow.underline
    )
);
