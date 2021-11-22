## what is composer?

- Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.
- composer is inspired by npm and ruby's bundler
- Composer is not a package manager in the same sense as Yum or Apt are. Yes, it deals with "packages" or libraries, 
but it manages them on a per-project basis, installing them in a directory (e.g. vendor) inside your project. 
By default, it does not install anything globally. Thus, it is a dependency manager. 
It does however support a "global" project for convenience via the global command.