import Coffee, { CoffeeSize, CoffeeType } from './Coffee'
import { randomGen } from '../common'

const coffeeTypes: CoffeeType[] = [
  CoffeeType.CAPPUCCINO,
  CoffeeType.MOCHACCINO,
  CoffeeType.LATTE,
]

const coffeeSizes: CoffeeSize[] = [CoffeeSize.S, CoffeeSize.M, CoffeeSize.L]

export function makeRandomCoffee(): Coffee {
  const coffee = new Coffee(coffeeTypes[randomGen(coffeeTypes.length)])
  coffee.setSize(coffeeSizes[randomGen(coffeeSizes.length)])
  return coffee
}

export function makeCoffee(type: CoffeeType, size: CoffeeSize): Coffee {
  return new Coffee(type).setSize(size)
}
