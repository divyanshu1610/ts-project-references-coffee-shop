function log(...args: Array<string>) {
  console.log(...args)
}

function info(param: string) {
  console.info(`[INFO]: ${param}`)
}

function error(param: string, opt: string) {
  console.info(`[ERROR]: ${param}`, opt)
}

export function randomGen(lim: number = 100): number {
  return Math.round(Math.random() * 10) % lim
}

export const logger = { log, info, error }
