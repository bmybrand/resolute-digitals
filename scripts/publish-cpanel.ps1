$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$worktreeDir = Join-Path $repoRoot ".cpanel-worktree"
$outDir = Join-Path $repoRoot "out"
$branch = "cpanel"
$remote = "origin"

Set-Location $repoRoot

Write-Host "Preparing deploy branch '$branch'..."
git worktree prune
if (Test-Path $worktreeDir) {
  git worktree remove -f $worktreeDir
  if (Test-Path $worktreeDir) {
    Remove-Item -Recurse -Force $worktreeDir
  }
}

git show-ref --verify --quiet "refs/heads/$branch"
if ($LASTEXITCODE -eq 0) {
  git worktree add $worktreeDir $branch
} else {
  git worktree add -b $branch $worktreeDir
}

Write-Host "Building static export..."
npm run build

if (!(Test-Path $outDir)) {
  throw "Build output not found at $outDir."
}

Set-Location $worktreeDir
$orphanBranch = "$branch-tmp"
git checkout --orphan $orphanBranch
git config core.ignorecase false
git rm -r --cached . 2>$null
git clean -fdx

Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
Copy-Item (Join-Path $outDir "*") $worktreeDir -Recurse -Force

git add -A
git commit -m "Deploy static site"
git branch -M $branch
git push -f $remote $branch

Write-Host "Done. Configure cPanel to deploy branch '$branch'."
