
type SymbolData = {
  value: number;
  direction: 'up' | 'down';
  moveCount: number;
};

export class Tickers {
  private symbols: string[] = ['TSM', 'DTO', 'VRD', 'JFC'];
  private symbolTracking: { [key: string]: SymbolData } = {};
  private minMoveCount = 5;
  private resetMoveCountProbability = 0.1;
  private moveRange = [0.2, 1];

  constructor(seedData?: { [key: string]: SymbolData }) {
    if (seedData) {
      for (const symbol of this.symbols) {
        if (seedData[symbol]) this.symbolTracking[symbol] = seedData[symbol];
      }
    }
    this.initialiseTickers();
  }

  private initialiseTickers() {
    for (const symbol of this.symbols.filter((symbol) => !this.symbolTracking[symbol])) {
      this.symbolTracking[symbol] = {
        value: Math.random() * 60 + 40,
        direction: 'up',
        moveCount: 0,
      };
    }
  }

  private cycleTickers() {
    for (const symbol of this.symbols) {
      if (this.symbolTracking[symbol].moveCount > this.minMoveCount && Math.random() < this.resetMoveCountProbability) {
        this.symbolTracking[symbol].direction = Math.random() > 0.5 ? 'up' : 'down';
        this.symbolTracking[symbol].moveCount = 0;
      }
      const move = Math.random() * (this.moveRange[1] - this.moveRange[0]) + this.moveRange[0];
      this.symbolTracking[symbol].value += this.symbolTracking[symbol].direction === 'up' ? move : -move;
      this.symbolTracking[symbol].moveCount++;
    }
  }

  public getNextSymbolValues(dataType: 'object' | 'string' = 'object') {
    this.cycleTickers();
    return { ...this.symbolTracking };
  }
}
