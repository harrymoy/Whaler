const axios = require('axios')

exports.getPrices = async () => {

    try {
        const requestOptions = {
            url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            headers: { 'X-CMC_PRO_API_KEY': 'b3224a35-56de-457c-bf05-35de41c34cea' },
            params: { convert: "USD" }
        }

        // BTC, ETH, DOGE, UNI
        const { data } = await axios(requestOptions)
        const assets = data.data



        var prices = {
            BTC: assets[0].quote.USD.price,
            ETH: assets[1].quote.USD.price,
            DOGE: assets[8].quote.USD.price,
            UNI: assets[15].quote.USD.price
        }

        //console.log(prices)
        return prices

    } catch (err) {
        console.log(err)
    }
}
