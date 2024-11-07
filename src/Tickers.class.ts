
// -- The AI commands that have been used to write this code --
// -- have been left in to assist with learning to use that. --
// -- Method and property names are generally written by     --
// -- hand and then AI used to assist in writing the code.   --

type SymbolData = {
  value: number;
  direction: 'up' | 'down';
  moveCount: number;
};

export class Tickers {
  private symbols: string[] = ['TSM', 'DTO', 'VRD', 'JFC'];
  private symbolTracking: { [key: string]: SymbolData } = {};
  private minMoveCount = 5;
  private moveRange = [0.2, 1];

  // initialise the tickers
  constructor() {
    this.initialiseTickers();
  }

  initialiseTickers() {
    // create symbol values for each symbol using for of loop
    for (const symbol of this.symbols) {
      // No AI command was needed for this, it was picked up from the SymbolData type, which was written first
      this.symbolTracking[symbol] = {
        value: Math.random() * 60 + 40,
        direction: 'up',
        moveCount: 0,
      };
    }
  }

  cycleTickers() {
    // create symbol values for each symbol using for of loop
    for (const symbol of this.symbols) {
      // No AI command was needed, the code was generated automatically once the
      // variable named "move" was typed with moveRange waiting to be noticed
      const move = Math.random() * (this.moveRange[1] - this.moveRange[0]) + this.moveRange[0];
      // if the move count is greater than the minimum move count, randomly change the direction
      if (this.symbolTracking[symbol].moveCount > this.minMoveCount) {
        this.symbolTracking[symbol].direction = Math.random() > 0.5 ? 'up' : 'down';
        this.symbolTracking[symbol].moveCount = 0;
      }
      // increase or decrease the value of the symbol
      this.symbolTracking[symbol].value += this.symbolTracking[symbol].direction === 'up' ? 1 : -1;
      // (It wrote this command itself on typing "i") increase the move count
      this.symbolTracking[symbol].moveCount++;
    }
  }

  getSymbolValues() {
    this.cycleTickers();
    // return a copy of symbol values
    return { ...this.symbolTracking };
  }
}
