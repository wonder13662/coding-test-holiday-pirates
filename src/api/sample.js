import axios from "axios";
import Const from "../const/sample";

export default {
  fetchCurrencyRateAll: function() {
    const promiseUSD = axios.get(`https://api.ratesapi.io/api/latest?base=USD`);
    const promiseEUR = axios.get(`https://api.ratesapi.io/api/latest?base=EUR`);
    const promiseGBP = axios.get(`https://api.ratesapi.io/api/latest?base=GBP`);

    return Promise.all([promiseUSD, promiseEUR, promiseGBP]);
  },
  fetchCurrencyRateArr: function() {
    return this.fetchCurrencyRateMap()
      .then(currencyRateMap => this.convertRateMapToArr(currencyRateMap))
      .catch(error => {
        this.alertError();
      });
  },
  convertRateMapToArr: function(currencyRateMap) {
    const currencyRateList = [];
    Const.CURRENCY_ARR.forEach(outer => {
      Const.CURRENCY_ARR.forEach(inner => {
        if (outer !== inner) {
          currencyRateList.push({
            base: outer,
            currency: inner,
            rate: currencyRateMap[outer][inner]
          });
        }
      });
    });

    return currencyRateList;
  },
  fetchCurrencyRateMap: function() {
    return this.fetchCurrencyRateAll()
      .then(responses => {
        return {
          [Const.CURRENCY.USD]: {
            [Const.CURRENCY.EUR]: responses[0].data.rates[Const.CURRENCY.EUR],
            [Const.CURRENCY.GBP]: responses[0].data.rates[Const.CURRENCY.GBP]
          },
          [Const.CURRENCY.EUR]: {
            [Const.CURRENCY.USD]: responses[1].data.rates[Const.CURRENCY.USD],
            [Const.CURRENCY.GBP]: responses[1].data.rates[Const.CURRENCY.GBP]
          },
          [Const.CURRENCY.GBP]: {
            [Const.CURRENCY.USD]: responses[2].data.rates[Const.CURRENCY.USD],
            [Const.CURRENCY.EUR]: responses[2].data.rates[Const.CURRENCY.EUR]
          }
        };
      })
      .catch(error => {
        this.alertError();
      });
  }
};
