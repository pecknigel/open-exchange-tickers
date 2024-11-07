
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

  constructor() {
    this.initialiseTickers();
  }

  initialiseTickers() {
    for (const symbol of this.symbols) {
      this.symbolTracking[symbol] = {
        value: Math.random() * 60 + 40,
        direction: 'up',
        moveCount: 0,
      };
    }
  }

  cycleTickers() {
    for (const symbol of this.symbols) {
      if (this.symbolTracking[symbol].moveCount > this.minMoveCount) {
        this.symbolTracking[symbol].direction = Math.random() > 0.5 ? 'up' : 'down';
        this.symbolTracking[symbol].moveCount = 0;
      }
      const move = Math.random() * (this.moveRange[1] - this.moveRange[0]) + this.moveRange[0];
      this.symbolTracking[symbol].value += this.symbolTracking[symbol].direction === 'up' ? move : -move;
      this.symbolTracking[symbol].moveCount++;
    }
  }

  getSymbolValues() {
    this.cycleTickers();
    return { ...this.symbolTracking };
  }
}
