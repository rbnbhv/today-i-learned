## How do i fetch all git branches?

- ```git branch``` shows all branches
- ```git branch -r ```  fetch all branches from all remotes

```bash 
git fetch --all 
git pull --all 
``` 
- It seems that pull fetches all branches from all remotes

### BUT

- fetch updates local copies of remote branches so this is always safe for your local branches BUT:

- fetch will not update local branches (which track remote branches); if you want to update your local branches you still need to pull every branch.

- fetch will not create local branches (which track remote branches), you have to do this manually. If you want to list all remote branches: git branch -a

- To update local branches which track remote branches:

- ```git pull --all```
