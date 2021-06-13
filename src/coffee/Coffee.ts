export enum CoffeeType {
  CAPPUCCINO = "Cappuccino",
  MOCHACCINO = "Mochaccino",
  LATTE = "Latte",
}

export enum CoffeeSize {
  S = 'small',
  M = 'medium',
  L = 'large',
}

export default class Coffee {
  private readonly type: CoffeeType
  private size: CoffeeSize
  constructor(type: CoffeeType) {
    this.type = type
    this.size = CoffeeSize.S
  }

  setSize(size: CoffeeSize): Coffee {
    this.size = size
    return this
  }

  brew(): string {
    return `Here's your "${this.size}" ${this.type} ☕`
  }

  foo(): void {
    // TODO: something..
  }
 }
