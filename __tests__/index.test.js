/**
 * Test specs coverage
 *
 * @copyright Copyright (c) 2017, hugw.io
 * @author Hugo W - me@hugw.io
 * @license MIT
 */

import {
  CURRENT_ENV,
  IS_DEV,
  IS_STAG,
  IS_TEST,
  IS_PROD,
  isDev,
  isTest,
  isStag,
  isProd,
  isntDev,
  isntTest,
  isntStag,
  isntProd
} from '../src'

describe('Environment utility functions', () => {
  describe('Constants', () => {
    it('#CURRENT_ENV should return "test"', () => {
      expect(CURRENT_ENV).toBe('test')
    })

    it('#IS_DEV should return false', () => {
      expect(IS_DEV).toBe(false)
    })

    it('#IS_STAG should return false', () => {
      expect(IS_STAG).toBe(false)
    })

    it('#IS_TEST should return false', () => {
      expect(IS_TEST).toBe(true)
    })

    it('#IS_PROD should return false', () => {
      expect(IS_PROD).toBe(false)
    })
  })

  describe('Functions', () => {
    const a = 'foo'
    const b = 'bar'

    it('#isDev should return b', () => {
      expect(isDev(a, b)).toBe(b)
      expect(isDev(a)).toBe(false)
    })

    it('#isStag should return b', () => {
      expect(isStag(a, b)).toBe(b)
      expect(isStag(a)).toBe(false)
    })

    it('#isTest should return a', () => {
      expect(isTest(a, b)).toBe(a)
      expect(isTest(a)).toBe(a)
    })

    it('#isProd should return b', () => {
      expect(isProd(a, b)).toBe(b)
      expect(isProd(a)).toBe(false)
    })

    it('#isntDev should return a', () => {
      expect(isntDev(a, b)).toBe(a)
      expect(isntDev(a)).toBe(a)
    })

    it('#isntStag should return a', () => {
      expect(isntStag(a, b)).toBe(a)
      expect(isntStag(a)).toBe(a)
    })

    it('#isntTest should return a', () => {
      expect(isntTest(a, b)).toBe(b)
      expect(isntTest(a)).toBe(false)
    })

    it('#isntProd should return a', () => {
      expect(isntProd(a, b)).toBe(a)
      expect(isntProd(a)).toBe(a)
    })
  })
})
