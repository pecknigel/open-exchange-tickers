'use strict';

import { Tickers } from './Tickers.class';

const tickers = new Tickers();

// get symbol values and console log them every second
setInterval(() => {
  console.log(tickers.getSymbolValues());
}, 1000);
