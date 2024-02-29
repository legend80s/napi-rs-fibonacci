import test from 'ava'

import { fib } from '../index.js'
import { jsFib } from './js-fib.js'

test('fib from native', (t) => {
  t.is(fib(0), 1)
  t.is(fib(1), 1)
  t.is(fib(2), 1)
  t.is(fib(3), 2)
  t.is(fib(4), 3)
  t.is(fib(5), 5)
  t.is(fib(6), 8)
  t.is(fib(7), 13)
  t.is(fib(8), 21)
  t.is(fib(9), 34)
  t.is(fib(10), 55)
})

test('fib from javascript', (t) => {
  t.is(jsFib(0), 1)
  t.is(jsFib(1), 1)
  t.is(jsFib(2), 1)
  t.is(jsFib(3), 2)
  t.is(jsFib(4), 3)
  t.is(jsFib(5), 5)
  t.is(jsFib(6), 8)
  t.is(jsFib(7), 13)
  t.is(jsFib(8), 21)
  t.is(jsFib(9), 34)
  t.is(jsFib(10), 55)
})