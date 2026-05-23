#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
out_dir="${repo_root}/out"
branch="cpanel"
remote="${CPANEL_REMOTE:-origin}"

if [[ ! -d "${out_dir}" ]]; then
  echo "Build output not found at ${out_dir}. Run npm run build first." >&2
  exit 1
fi

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "GITHUB_TOKEN is required to push the ${branch} branch." >&2
  exit 1
fi

repo_slug="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"
server_host="${GITHUB_SERVER_URL#https://}"

work_dir="$(mktemp -d)"
trap 'rm -rf "${work_dir}"' EXIT

cd "${work_dir}"
git init -b "${branch}"
git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

cp -a "${out_dir}/." .
git add -A
git commit -m "Deploy static site (${GITHUB_SHA:-manual})"

git remote add origin "https://x-access-token:${GITHUB_TOKEN}@${server_host}/${repo_slug}.git"
git push -f origin "${branch}"

echo "Published ${branch} branch to ${remote}."
