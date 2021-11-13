const axios = require('axios')

exports.getPrices = async (apiKey) => {

    try {
        const requestOptions = {
            url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            headers: { 'X-CMC_PRO_API_KEY': apiKey },
            params: { convert: "USD" }
        }

        // BTC, ETH, DOGE, UNI
        const { data } = await axios(requestOptions)
        const assets = data.data

        var prices = {
            BTC: assets[0].quote.USD.price,
            ETH: assets[1].quote.USD.price,
            DOGE: assets[9].quote.USD.price,
            UNI: assets[16].quote.USD.price
        }

        //console.log(prices)
        return prices

    } catch (err) {
        console.log(err)
    }
}
