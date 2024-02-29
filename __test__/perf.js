const { fib } = require('..')
const { jsFib } = require('./js-fib')
const process = require('node:process')

const n = Number(process.argv.at(-1)) || 1

console.time('fib from native when n = ' + n)
fib(n)
console.timeEnd('fib from native when n = ' + n)

console.time('fib from javascript when n = ' + n)
jsFib(n)
console.timeEnd('fib from javascript when n = ' + n)
