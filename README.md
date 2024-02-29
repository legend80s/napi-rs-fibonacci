# fib napi-rs

文章背景 https://juejin.cn/p/7340636105764995124

## 性能对比

rust 的斐波那契函数性能是 js 的 3 倍，当超过 42 性能差异更加明显

`❯ node __test__/perf.js 42`

```
fib from native when n = 42: 501.801ms
fib from javascript when n = 42: 1.494s
```

`❯ node __test__/perf.js 44`

```
fib from native when n = 44: 1.314s
fib from javascript when n = 44: 3.849s
```