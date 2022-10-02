## Files were saved in wrong branch

```bash
git checkout -b feature/123-your-feature-branch
git stash pop
git add .
git commit -m 'changes'
git push origin feature/123-your-feature-branch
git checkout develop
```

```$ git checkout -b iss53 Switched to a new branch "iss53" ```