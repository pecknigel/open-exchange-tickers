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
* PLEASE NOTE:
*
* - This script goes to town on making use of TypeScript for demonstration and learning purposes.
* - It is liberally commented to help you understand what's going on and to learn.
* - Take your time with it.
* - See if you can spot all the subtleties that are going on.
*
* */

// ### PART 1: Import the Tickers class and instantiate it ###

import { Tickers } from './Tickers.class';

const tickers = new Tickers();

// ### PART 2: Define the Configuration Object ###

// Define a type for a configuration object that can be used to control the behaviour of the script.

type Config = {
  clearConsoleBeforeEachTable: boolean;
  logInterval: number;
};

// Define the configuration object itself.

const config: Config = {
  clearConsoleBeforeEachTable: true,
  logInterval: 1000,
};

// ### PART 3: Create a function to cycle the tickers and output the values to the console ###

// Create a type for it just because we can.
// (it's good practice to do this because it makes the code more readable and maintainable).
// (says the AI - which likes to chip in - I agree in general but too much of it can have the opposite effect).

type LogNextTickers = () => void;

// Create the actual routine. Let's use a function expression.

const logNextTickers: LogNextTickers = function(): void {

  // Cycle the tickers without getting any output (because we want the raw output, see below).
  tickers.cycleTickers();

  // Clear the console if the configuration object says to do so (thanks, AI)(such a kind and helpful boy).
  // See: https://developer.mozilla.org/en-US/docs/Web/API/console/clear_static
  // Use a one line if statement (some folks get upset about using these).
  if (config.clearConsoleBeforeEachTable) console.clear();

  // Get the raw ticker values
  // These include not just the values, but the internal state of the tickers
  // that shows how the values were generated and how they are being cycled.
  // TODO Give the type a name and set it up on the Tickers class, imported to here
  const rawTickerValues = tickers.getRawSymbolValues();

  // Log the raw ticker values to stdout as a table using console.table()
  // See: https://developer.mozilla.org/en-US/docs/Web/API/console/table_static
  console.table(rawTickerValues);

}

// ### PART 4: Cycle and log the tickers every configured log interval (default is 1000ms or 1 second) ###

setInterval(logNextTickers, config.logInterval);

// There's no need to save the timer ID (which can be used to stop the interval later).
// To stop it, just send an interrupt signal or SIGINT (Ctrl+C) in the terminal.

// ### PART 5: The End (TTFN) ###
