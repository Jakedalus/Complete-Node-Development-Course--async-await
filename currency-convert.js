// http://data.fixer.io/api/latest?access_key=6ae7ff0d05a9dc928f313748b46bcec8

const axios = require('axios');

////// PROMISE VERSION
// const getExchangeRate = (from, to) => {
//     return axios.get('http://data.fixer.io/api/latest?access_key=6ae7ff0d05a9dc928f313748b46bcec8').then((response) => {
//         const euro = 1 / response.data.rates[from];
//         const rate = euro * response.data.rates[to];
//         return rate;
//     });
// };

//////  ASYNC-AWAIT VERSION
const getExchangeRate = async (from, to) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=6ae7ff0d05a9dc928f313748b46bcec8');
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];
    return rate;
};

////// PROMISE VERSION
// const getCountries = (currency) => {
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currency}`).then((response) => {
//         return response.data.map((country) => country.name);
//     });
// };

//////  ASYNC-AWAIT VERSION
const getCountries = async (currency) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currency}`);
    return response.data.map((country) => country.name);
};

getExchangeRate('USD', 'CAD').then((rate) => {
    console.log(rate);
});

getCountries('EUR').then((countries) => {
    console.log(countries);
});