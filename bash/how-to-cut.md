## how to cut

```bash
curl --head --silent google.com | grep -i content-length |cut --delimiter=' ' -f2
```
