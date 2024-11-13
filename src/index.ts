'use strict';

import { Tickers } from './Tickers.class';

const tickers = new Tickers();

setInterval(() => {
  console.log(tickers.getNextSymbolValues());
}, 1000);
