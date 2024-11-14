#!/usr/bin/env node

'use strict';

/*
* ###################################
* ### Tickers Class Demonstration ###
* ###################################
*
* This script demonstrates how the Tickers class can be used to generate and cycle through
* ticker values. The values are generated and cycled every second.
*
* The library is not intended to be run in this way other than for demonstration purposes.
*
* This script has a brother. See 'exec-raw-log.ts'. It's really not that much different from this one.
* It's there if you want to see the raw output and get a full commentary of what's going on.
*
* */

import { Tickers } from './Tickers.class';

const tickers = new Tickers();

function writeToTerminal(s: string): void { process.stdout.write(`${s}\n`); }

setInterval(() => {
  writeToTerminal(tickers.getNextSymbolValues('string') as string);
}, 1000);
