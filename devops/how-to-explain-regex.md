# How would i explain regular expressions?

When somebody asked me what are regular expressions i though that it is not that easy to explain it.

- A regular expression is a sequence of characters that forms a search pattern. 
- When you search for data in a text, you can use this search pattern to describe what you are searching for.

### The syntax
- In PHP, regular expressions are strings composed of delimiters, a pattern and optional modifiers.

#### Example:
```$exp = "/testvariable/i";```

In this example, ```/``` is the delimiter, ```testvariable``` is the pattern that is being searched for, and i is a modifier that makes the search case-insensitive.

### There are three Regular expression functions

```preg_match()```	Returns true if the pattern was found in the string and false if not

```preg_match_all()```	Returns the number of times the pattern was found in the string, which may also be 0

```preg_replace()```	Returns a new string where matched patterns have been replaced with another string