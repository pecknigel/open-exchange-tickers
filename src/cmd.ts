#!/usr/bin/env node

// TODO Export types from Tickers class and use them here

import { Tickers } from './Tickers.class';

const tickers = new Tickers();

const symbolValues = tickers.getNextSymbolValues('string');

// TODO Improve the use of TypeScript, or otherwise rework the Tickers Class API, so that it's not necessary to cast the type here
process.stdout.write(symbolValues as string + "\n");

// TODO Persist this and use it as the seed data for the next call
// const rawSymbolValues = tickers.getRawSymbolValues();
