# Differences PSR-2 vs PSR-12

- PSR-2 and PSR-12 are sets of coding style guidelines adopted by the PHP community to standardize the way PHP code is written. They are recommended by the PHP Framework Interoperability Group (PHP-FIG).

## PSR-2 is a coding style guide that was accepted in 2012. It includes rules such as:

- Code MUST follow a "coding style guide" PSR [PSR-1].
- Code MUST use 4 spaces for indenting, not tabs.
- There MUST NOT be a hard limit on line length; the soft limit MUST be 120 characters; lines SHOULD be 80 characters or less.
- There MUST be one blank line after the namespace declaration, and there MUST be one blank line after the block of use declarations.
- Opening braces for classes MUST go on the next line, and closing braces MUST go on the next line after the body.

Example of PSR-2:

```php
<?php
namespace Vendor\Package;

class ClassName
{
    public function functionName($arg1, $arg2 = '')
    {
        // Your code here.
    }
}
```

PSR-12 is an extension of PSR-2, accepted in 2019, and includes more modern practices and includes rules such as:

- Code MUST declare strict types in files containing top-level code blocks.
- The opening `<?php` tag MUST be on a line by itself.
- There SHOULD be one blank line after the `declare(strict_types=1);`.
- When present, there MUST be one blank line after the `namespace` declaration.

Example of PSR-12:

```php
<?php

declare(strict_types=1);

namespace Vendor\Package;

use Vendor\Package\SomeNamespace\ClassA;
use Vendor\Package\SomeNamespace\ClassB;
use Vendor\Package\SomeNamespace\ClassC as C;

class ClassName
{
    public function functionName(int $arg1, string $arg2 = ''): void
    {
        // Your code here.
    }
}
```

The main differences between PSR-2 and PSR-12 are the use of strict types and the handling of file-level docblocks. PSR-12 also has rules for multi-line function declarations and trait use statements.
