# PSR-12

- PSR-12 is a standard for formatting PHP code defined by the PHP-FIG (Framework Interoperability Group).
- It builds upon PSR-1 and PSR-2.
- It provides detailed guidelines for writing and structuring PHP code to improve readability and maintainability.

Here are some key aspects of PSR-12:

## Files:
- PHP files must contain only PHP tags and should not include closing PHP tags (`?>`).

## Namespaces and Use Declarations:
- There should be a blank line after the `namespace` declaration.
- All `use` declarations should be in a block without blank lines in between.

## Classes and Methods:
- Visibility modifiers (`public`, `protected`, `private`) must always be specified.
- There should be no blank lines between methods within a class.

## Indentation and Line Breaks:
- Indentations should be done with 4 spaces.
- Lines should not exceed 120 characters.

## Keywords and Constant:
- PHP keywords should be written in lowercase.
- Class constants should be written in `UPPER_SNAKE_CASE`.

## Arrays:
- Short array syntax (`[]`) should be used.
