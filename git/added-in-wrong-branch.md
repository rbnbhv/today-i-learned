## files added in wrong branch

```
git checkout -b feature/123-feature-branch
git stash pop
git add .
git commit -m 'your changes'
git push origin feature/123-feature-branch
git checkout develop
```

```$ git checkout -b iss53 ```
- Switched to a new branch called "iss53"