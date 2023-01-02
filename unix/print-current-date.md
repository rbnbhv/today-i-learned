# Format And Print The Current Date And Time

If I run the `date` command from the terminal, I get output like the following:

```bash
$ date
Do Dez 29 14:45:44 CST 2022
```

If I want to format the date output different, perhaps for inclusion in a shell
script, I can do something like this:

```bash
$ date +"%Y/%m/%d %H:%M:%S"
2022/01/22 14:46:55
```

Then I can incorporate that in a script like this:

```bash
now() {
  echo "Today: $(date +'%Y/%m/%d %H:%M:%S')"
}
```
