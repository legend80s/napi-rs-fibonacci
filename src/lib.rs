#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

#[napi]
pub fn fib(n: u32) -> u32 {
  match n {
      0..=2 => 1,
      _ => fib(n - 1) + fib(n - 2)
  }
}
