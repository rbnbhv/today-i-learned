# Git

How to push a tag:

first you should create a local tag
```
git tag tag_name
```
then push it
```
git push origin tag_name
```

How to remove the local tag:
```
git tag -d  tag_name
```

How to remove the remote tag:
```
git push --delete origin tag_name
```

How to list local tags:
```
git tag -l
```

How to list remote tags:
```
git ls-remote --tags
```

How to clean a project and remove files which are not staged
```
git clean -df
```

 # this removes the newly added files
```
git reset --hard HEAD
```
 # this goes to the head commit you can use git log --oneline to find previous commits

If you check out a branch and you get an error regarding the absence of the branch follow the instructions: you need to fetch the remote
```
git remote update
git checkout branch_name
```

How to pull when you have made some changes:[stash]
```
git stash
git pull origin master
git stash apply
```
git stash will save your changes and return to the last commit and then you pull the master branch and then retrieve the stashed files using stash apply.

How to delete a local branch
```
git branch -d <local-branch-name>
```

How to list all git branches:
```
git branch -a
```

How to delete a remote branch
```
git push origin --delete <remote-branch-name>
```

How to merge two branches:
```
git checkout target_branch # master
git merge origin/feature_branch origin/target_branch
```

How to change last commit message:
```
git commit --amend -m "New and correct message"
```

How to remove the last commit:
```
git reset --soft HEAD^
```

After removing a file manually, remove it from git too:
```
git rm -rf <manually removed file name> --cached
```

How to reset a specific file to a specific commit:
```
git checkout HEAD <path to file>
# HEAD can be changed with commit hash name
```

How to list all the files inside git cached:
```
git ls-files
```

How to fetch from a base repo when having a fork:
```
git remote -v      
git remote add upstream https://github.com/nopSolutions/nopCommerce-Docs.git      
git remote -v      
git fetch upstream      
git checkout master      
git merge upstream/master 
```

If you have staged a file(added it) and you want to remove it from the staged files:
```
git restore --staged <file-name>
```

If a branch is not fully merged you can't remove it, because it will leave unreachable commits:
```
git branch -d test # raises an error: The branch 'test' is not fully merged.
git branch -D test # this will do the job
```
How to rename a git branch:
```
git checkout <target-branch>
git branch -m <new branch name>
```

How to forcefully pull from master:
```
git fetch --all
git reset --hard origin/master
```

How to create a branch with no commits or whatsoever:
```
git checkout --orphan <branch-name>
```

How to access removed branches:
references: https://stackoverflow.com/questions/1992364/git-recover-deleted-remote-branch
```
git fsck --full --no-reflogs | grep commit
# One can checkout the deleted branches and make any change or create a new branch from them
# you can prune the removed with "git gc" and setting the expire to now
```

How to remove a branch from git history:
1. Delete the branch from local and remote machines
2. The commits in that branch will be unreferenced and dangled
3. dangled branches will be removed after 2 weeks, If you wanna do it faster:
4. references: https://stackoverflow.com/questions/3765234/listing-and-deleting-git-commits-that-are-under-no-branch-dangling
```
git reflog expire --expire-unreachable=now --all
# reflog has access to all stashed and removed files
# make all the mentioned files unreachable right now we set "expire" to "now
# to include all the files we add "--all" flag to expire all
git gc --prune=now
# this lines remove all the removed branches
```

How to fully change the master:
references: https://www.systutorials.com/how-to-clear-git-history-in-local-and-remote-branches/
```
git checkout --orphan tmp-master # create a temporary branch
git add -A  # Add all files and commit them
git commit -m 'Add files'
git branch -D master # Deletes the master branch
git branch -m master # Rename the current branch to master
git push -f origin master # Force push master branch to Git server
```

How to remove a commit:
references:https://stackoverflow.com/questions/30893040/git-remove-commit-from-history
```
git rebase -i <hash code the commit before the target commit>~
# change pick to drop for the target commit
git commit -a --amend
git rebase --continue
git push -f # if it raises any error. Remove the protection from master branch [settings/repository/protected_barnches] you may want to set it back.
```

How to remove all commits after a specific one called ABC:
```
git reset --hard ABC
git push --force
```

How to reset a single file:
```
git checkout HEAD -- <file-path>
```

How to have several URLs for a remote name:
```
git remote set-url --add <remote-server-name> <URL>
```

How to check a remote URL
```
git config --get remote.origin.url

# get remote URLs:
git remote -v

# get the maximum info
git remote show origin
```

How to add a file to git that was previously ignored by .gitignore
```
git ls-files -i -c --exclude-from=.gitignore
```

How to check why a file is ignored:
```
git check-ignore -v <file-name>
```

How to see changes of a commit with another one
```
git diff commit-hash commit-hash
```

### How to undo the latest commit:
```commandline
git reset --soft HEAD~1
# --soft will make sure that changes done so far are preserved, although they will uncommitted.
# In case you don't want to keep these changes, simply use --hard flag as command below:
git reset --hard HEAD~1
