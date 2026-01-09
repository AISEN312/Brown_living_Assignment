# Adding files from a pull request

If a pull request already contains the files you need, fetch the PR branch locally and merge or cherry-pick the commits.

1. Fetch the PR branch (replace `<PR_NUMBER>` and `<LOCAL_BRANCH>` as needed):
   ```bash
   git fetch origin pull/<PR_NUMBER>/head:<LOCAL_BRANCH>
   ```
2. Switch to the fetched branch to view the files:
   ```bash
   git checkout <LOCAL_BRANCH>
   ```
3. Bring the files into your target branch:
   * Merge the branch:
     ```bash
     git checkout <TARGET_BRANCH>
     git merge <LOCAL_BRANCH>
     ```
   * or cherry-pick specific commits if you only want part of the PR:
     ```bash
     git checkout <TARGET_BRANCH>
     git cherry-pick <COMMIT_SHA>
     ```
4. Push the updated branch:
   ```bash
   git push origin <TARGET_BRANCH>
   ```

Tip: You can also download the PR as a patch/ZIP from the GitHub UI if you just need to copy files without merging.
