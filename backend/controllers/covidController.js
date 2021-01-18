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
            throw new Error('User not found');
        }
    } catch (err) {
        console.error(err);
    }
});
