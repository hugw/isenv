/**
 * Environment Utility Functions
 *
 * @copyright Copyright (c) 2017, hugw.io
 * @author Hugo W - me@hugw.io
 * @license MIT
 */

const ENV = 'development'
const TEST = 'test'
const STAG = 'staging'
const PROD = 'production'

const getEnv = () => process.env.NODE_ENV

export const CURRENT_ENV = getEnv() || ENV

export const IS_DEV = CURRENT_ENV === ENV
export const IS_TEST = CURRENT_ENV === TEST
export const IS_STAG = CURRENT_ENV === STAG
export const IS_PROD = CURRENT_ENV === PROD

export const isDev = (a, b = false) => (IS_DEV ? a : b)
export const isTest = (a, b = false) => (IS_TEST ? a : b)
export const isStag = (a, b = false) => (IS_STAG ? a : b)
export const isProd = (a, b = false) => (IS_PROD ? a : b)

export const isntDev = (a, b = false) => (!IS_DEV ? a : b)
export const isntTest = (a, b = false) => (!IS_TEST ? a : b)
export const isntStag = (a, b = false) => (!IS_STAG ? a : b)
export const isntProd = (a, b = false) => (!IS_PROD ? a : b)
