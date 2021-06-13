import { logger } from '../common'

import { makeRandomCoffee } from '../coffee'

logger.info('Hello 👋 Welcome to coffee shop 🛍️ ')
logger.info('Brewing  you some random coffee..')

logger.log(makeRandomCoffee().brew())
