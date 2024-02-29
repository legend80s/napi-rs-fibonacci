function jsFib(n) {
  if (n <= 2) {
    return 1
  }

  return jsFib(n - 1) + jsFib(n - 2)
}

exports.jsFib = jsFib
