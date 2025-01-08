# Incorrect Zero Handling in Function

This repository demonstrates a common error in JavaScript functions involving the handling of zero values.

The `foo` function is intended to perform addition but has a bug in its handling of zero inputs.  The solution provides a corrected version.

## Bug

The original function `foo` incorrectly handles cases where only one of the input values is zero.  It returns `1` instead of the expected behavior.

## Solution

The solution modifies the function's logic to accurately handle all cases, including those where one input is zero and those where both are zero.