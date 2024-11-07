'use strict';

import { Tickers } from './Tickers.class';

const tickers = new Tickers();

setInterval(() => {
  console.log(tickers.getSymbolValues());
}, 1000);
