import asyncHandler from 'express-async-handler';
import fetch from 'cross-fetch';

// @desc    Get covid data
// @route   GET /api/covid/
// @access  Public
export const getCovidData = asyncHandler(async (req, res) => {
    try {
        const data = await fetch(
            'https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true'
        );

        const covid = await data.json();

        if (covid) {
            res.json({
                infected: covid.infected,
                tested: covid.tested,
                recovered: covid.recovered,
                deceased: covid.deceased,
                activeCases: covid.activeCases,
                country: covid.country,
            });
        } else {
            res.status(404);
            throw new Error('API not found');
        }
    } catch (err) {
        console.error(err);
    }
});

// @desc    Get covid news related
// @route   GET /api/covid/news
// @access  Public
export const getNewsData = asyncHandler(async (req, res) => {
    try {
        const data = await fetch(
            `http://newsapi.org/v2/top-headlines?country=ph&category=health&q=covid&apiKey=${process.env.NEWS_API}`
        );

        const news = await data.json();

        if (news) {
            res.json(news);
        } else {
            res.status(404);
            throw new Error('API not found');
        }
    } catch (err) {
        console.error(err);
    }
});
