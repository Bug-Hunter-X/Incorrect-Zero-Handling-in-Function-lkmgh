function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling of (0, 0)
  }
  if (a === 0 || b === 0) {
    return 1; // Incorrect handling when only one is zero
  }
  return a + b; // Correct for non-zero inputs
}

console.log(foo(0, 0)); // Output: 0
console.log(foo(1, 0)); // Output: 1
console.log(foo(0, 1)); // Output: 1
console.log(foo(2, 3)); // Output: 5