import axios from 'axios'

const exchangeRatesAPI = 'https://blockchain.info/tobtc?currency=USD&value=1'
const marketPriceHistoryAPI = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
const avgBlockSizeAPI = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'
const marketStatsAPI = 'https://api.blockchain.info/stats?cors=true'


async function getRate() {
    try {
        const response = await axios.get(exchangeRatesAPI)
        return response.data
    } catch (error) {
        console.error(error)
        return error
    }
}

async function getMarketPriceHistory() {
    try {
        // const response = await axios.get(marketPriceHistoryAPI)
        // return response.data
        const data = {
            "status": "ok",
            "name": "Market Price (USD)",
            "unit": "USD",
            "period": "day",
            "description": "Average USD market price across major bitcoin exchanges.",
            "values": [
            {
            "x": 1663200000,
            "y": 20219.55
            },
            {
            "x": 1663286400,
            "y": 19694.69
            },
            {
            "x": 1663372800,
            "y": 19787.61
            },
            {
            "x": 1663459200,
            "y": 20122.71
            },
            {
            "x": 1663545600,
            "y": 19415.86
            },
            {
            "x": 1663632000,
            "y": 19542.2
            },
            {
            "x": 1663718400,
            "y": 18879.96
            },
            {
            "x": 1663804800,
            "y": 18507.36
            },
            {
            "x": 1663891200,
            "y": 19408.63
            },
            {
            "x": 1663977600,
            "y": 19280.58
            },
            {
            "x": 1664064000,
            "y": 18931.79
            },
            {
            "x": 1664150400,
            "y": 18807.71
            },
            {
            "x": 1664236800,
            "y": 19227.26
            },
            {
            "x": 1664323200,
            "y": 19104.89
            },
            {
            "x": 1664409600,
            "y": 19530.71
            },
            {
            "x": 1664496000,
            "y": 19598.86
            },
            {
            "x": 1664582400,
            "y": 19427.2
            },
            {
            "x": 1664668800,
            "y": 19314.69
            },
            {
            "x": 1664755200,
            "y": 19049.72
            },
            {
            "x": 1664841600,
            "y": 19632.61
            },
            {
            "x": 1664928000,
            "y": 20342.25
            },
            {
            "x": 1665014400,
            "y": 20167.79
            },
            {
            "x": 1665100800,
            "y": 19956.49
            },
            {
            "x": 1665187200,
            "y": 19544.82
            },
            {
            "x": 1665273600,
            "y": 19417.73
            },
            {
            "x": 1665360000,
            "y": 19441.88
            },
            {
            "x": 1665446400,
            "y": 19132.52
            },
            {
            "x": 1665532800,
            "y": 19049.64
            },
            {
            "x": 1665619200,
            "y": 19156.21
            },
            {
            "x": 1665705600,
            "y": 19383.33
            },
            {
            "x": 1665792000,
            "y": 19184.71
            },
            {
            "x": 1665878400,
            "y": 19063.1
            },
            {
            "x": 1665964800,
            "y": 19265.53
            },
            {
            "x": 1666051200,
            "y": 19548.97
            },
            {
            "x": 1666137600,
            "y": 19330.74
            },
            {
            "x": 1666224000,
            "y": 19125.65
            },
            {
            "x": 1666310400,
            "y": 19046.83
            },
            {
            "x": 1666396800,
            "y": 19171.34
            },
            {
            "x": 1666483200,
            "y": 19205.45
            },
            {
            "x": 1666569600,
            "y": 19565.91
            },
            {
            "x": 1666656000,
            "y": 19338.9
            },
            {
            "x": 1666742400,
            "y": 20101.27
            },
            {
            "x": 1666828800,
            "y": 20772.36
            },
            {
            "x": 1666915200,
            "y": 20288.52
            },
            {
            "x": 1667001600,
            "y": 20601.63
            },
            {
            "x": 1667088000,
            "y": 20816.16
            },
            {
            "x": 1667174400,
            "y": 20628.5
            },
            {
            "x": 1667260800,
            "y": 20499.29
            },
            {
            "x": 1667347200,
            "y": 20486.26
            },
            {
            "x": 1667433600,
            "y": 20153.99
            },
            {
            "x": 1667520000,
            "y": 20208.16
            },
            {
            "x": 1667606400,
            "y": 21152.93
            },
            {
            "x": 1667692800,
            "y": 21292.67
            },
            {
            "x": 1667779200,
            "y": 20920.33
            },
            {
            "x": 1667865600,
            "y": 20598.44
            },
            {
            "x": 1667952000,
            "y": 18540.11
            },
            {
            "x": 1668038400,
            "y": 15856.95
            },
            {
            "x": 1668124800,
            "y": 17550.23
            },
            {
            "x": 1668211200,
            "y": 16990.26
            },
            {
            "x": 1668297600,
            "y": 16776.4
            },
            {
            "x": 1668384000,
            "y": 16310.3
            },
            {
            "x": 1668470400,
            "y": 16587.96
            },
            {
            "x": 1668556800,
            "y": 16873.56
            },
            {
            "x": 1668643200,
            "y": 16662.24
            },
            {
            "x": 1668729600,
            "y": 16682.44
            },
            {
            "x": 1668816000,
            "y": 16683.22
            },
            {
            "x": 1668902400,
            "y": 16687.8
            },
            {
            "x": 1668988800,
            "y": 16260.41
            },
            {
            "x": 1669075200,
            "y": 15759.61
            },
            {
            "x": 1669161600,
            "y": 16194.75
            },
            {
            "x": 1669248000,
            "y": 16606.77
            },
            {
            "x": 1669334400,
            "y": 16592.67
            },
            {
            "x": 1669420800,
            "y": 16507.44
            },
            {
            "x": 1669507200,
            "y": 16453.47
            },
            {
            "x": 1669593600,
            "y": 16420.2
            },
            {
            "x": 1669680000,
            "y": 16208.96
            },
            {
            "x": 1669766400,
            "y": 16432.73
            },
            {
            "x": 1669852800,
            "y": 17170.62
            },
            {
            "x": 1669939200,
            "y": 16971.57
            },
            {
            "x": 1670025600,
            "y": 17091.23
            },
            {
            "x": 1670112000,
            "y": 16894.23
            },
            {
            "x": 1670198400,
            "y": 17117.57
            },
            {
            "x": 1670284800,
            "y": 16967.02
            },
            {
            "x": 1670371200,
            "y": 17085.45
            },
            {
            "x": 1670457600,
            "y": 16836.05
            },
            {
            "x": 1670544000,
            "y": 17234.58
            },
            {
            "x": 1670630400,
            "y": 17128.55
            },
            {
            "x": 1670716800,
            "y": 17124.99
            },
            {
            "x": 1670803200,
            "y": 17098.61
            },
            {
            "x": 1670889600,
            "y": 17206.87
            },
            {
            "x": 1670976000,
            "y": 17771.03
            },
            {
            "x": 1671062400,
            "y": 17802.44
            },
            {
            "x": 1671148800,
            "y": 17357.47
            },
            {
            "x": 1671235200,
            "y": 16637.6
            },
            {
            "x": 1671321600,
            "y": 16783.6
            },
            {
            "x": 1671408000,
            "y": 16745.99
            },
            {
            "x": 1671494400,
            "y": 16439.89
            },
            {
            "x": 1671580800,
            "y": 16904.64
            },
            {
            "x": 1671667200,
            "y": 16813.62
            },
            {
            "x": 1671753600,
            "y": 16818.68
            },
            {
            "x": 1671840000,
            "y": 16779.71
            },
            {
            "x": 1671926400,
            "y": 16838.1
            },
            {
            "x": 1672012800,
            "y": 16826.86
            },
            {
            "x": 1672099200,
            "y": 16915.7
            },
            {
            "x": 1672185600,
            "y": 16699
            },
            {
            "x": 1672272000,
            "y": 16539.28
            },
            {
            "x": 1672358400,
            "y": 16630.49
            },
            {
            "x": 1672444800,
            "y": 16599.69
            },
            {
            "x": 1672531200,
            "y": 16526.78
            },
            {
            "x": 1672617600,
            "y": 16613.71
            },
            {
            "x": 1672704000,
            "y": 16671.54
            },
            {
            "x": 1672790400,
            "y": 16669.6
            },
            {
            "x": 1672876800,
            "y": 16850.63
            },
            {
            "x": 1672963200,
            "y": 16826.41
            },
            {
            "x": 1673049600,
            "y": 16951.97
            },
            {
            "x": 1673136000,
            "y": 16945.2
            },
            {
            "x": 1673222400,
            "y": 17108.41
            },
            {
            "x": 1673308800,
            "y": 17192.07
            },
            {
            "x": 1673395200,
            "y": 17443.68
            },
            {
            "x": 1673481600,
            "y": 17934.6
            },
            {
            "x": 1673568000,
            "y": 18859.32
            },
            {
            "x": 1673654400,
            "y": 19933.36
            },
            {
            "x": 1673740800,
            "y": 20955.15
            },
            {
            "x": 1673827200,
            "y": 20880.99
            },
            {
            "x": 1673913600,
            "y": 21190.49
            },
            {
            "x": 1674000000,
            "y": 21145.18
            },
            {
            "x": 1674086400,
            "y": 20672.78
            },
            {
            "x": 1674172800,
            "y": 21087.76
            },
            {
            "x": 1674259200,
            "y": 22693.45
            },
            {
            "x": 1674345600,
            "y": 22772.5
            },
            {
            "x": 1674432000,
            "y": 22724.23
            },
            {
            "x": 1674518400,
            "y": 22924.37
            },
            {
            "x": 1674604800,
            "y": 22634.47
            },
            {
            "x": 1674691200,
            "y": 23089.74
            },
            {
            "x": 1674777600,
            "y": 23008.29
            },
            {
            "x": 1674864000,
            "y": 23075.81
            },
            {
            "x": 1674950400,
            "y": 23032.23
            },
            {
            "x": 1675036800,
            "y": 23755.85
            },
            {
            "x": 1675123200,
            "y": 22836.09
            },
            {
            "x": 1675209600,
            "y": 23133.91
            },
            {
            "x": 1675296000,
            "y": 23722.02
            },
            {
            "x": 1675382400,
            "y": 23454.41
            },
            {
            "x": 1675468800,
            "y": 23440.09
            },
            {
            "x": 1675555200,
            "y": 23328.24
            },
            {
            "x": 1675641600,
            "y": 22936.95
            },
            {
            "x": 1675728000,
            "y": 22763.74
            },
            {
            "x": 1675814400,
            "y": 23254.79
            },
            {
            "x": 1675900800,
            "y": 22964.87
            },
            {
            "x": 1675987200,
            "y": 21794.05
            },
            {
            "x": 1676073600,
            "y": 21638.55
            }
            ]
            }
            const response = await Promise.resolve(data)
            return response

    } catch (error) {
        console.error(error)
        return error
    }
}

async function getAvgBlockSize() {
    try {
        const response = await axios.get(avgBlockSizeAPI)
        return response.data
    } catch (error) {
        console.error(error)
        return error
    }
}

async function getMarketStats(){
    try {
        // const response = await axios.get(marketStatsAPI)
        // return response.data
        const data = {
                "market_price_usd": 610.036975,
                "hash_rate": 1841098926.6292908,
                "total_fees_btc": 6073543165,
                "n_btc_mined": 205000000000,
                "n_tx": 233805,
                "n_blocks_mined": 164,
                "minutes_between_blocks": 8.2577,
                "totalbc": 1587622500000000,
                "n_blocks_total": 430098,
                "estimated_transaction_volume_usd": 123429768.68108143,
                "blocks_size": 117490685,
                "miners_revenue_usd": 1287626.6577490852,
                "nextretarget": 431423,
                "difficulty": 225832872179,
                "estimated_btc_sent": 20233161880242,
                "miners_revenue_btc": 2110,
                "total_btc_sent": 184646388663542,
                "trade_volume_btc": 21597.09997288,
                "trade_volume_usd": 13175029.536228297,
                "timestamp": 1474035340000
        }
        const formatedStats = [
            { 
                title: 'Market Price',
                value: data.market_price_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            },
            {
                title: 'Hash Rate',
                value: _nFormatter(data.hash_rate)
            },
            {
                title: 'Avg Block Size',
                value: _nFormatter(data.blocks_size)
            },
            {
                title: 'Total BTC Sent',
                value: _nFormatter(data.total_btc_sent)
            }
        ]
            
        const response = await Promise.resolve(formatedStats)
        return response
    } catch (error) {
        console.error(error)
        return error
    }
}

function _nFormatter(num) {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
    getMarketStats
}
