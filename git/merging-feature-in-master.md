## how to merge a feature branch into master

- If you're merging a new feature into the main branch, you first want to switch to the main branch and then merge into it:

##### Working from the branch: 'new-branch'
```
git checkout master
git branch new-branch
git checkout new-branch
```

### ...develop some code...
```
git add –A
git commit –m "Some commit message"
git checkout master
git merge new-branch
```