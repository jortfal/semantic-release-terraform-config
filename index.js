module.exports = {
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/github',
      '@semantic-release/changelog',
      ["@google/semantic-release-replace-plugin", {
        "replacements": [{
            "files": ["locals.tf"],
            "from": "\"Terraform Module Version\" = \".*\"",
            "to": "\"Terraform Module Version\" = \"${nextRelease.version}\"",
            "results": [{
                "file": "locals.tf",
                "hasChanged": true,
                "numMatches": 1,
                "numReplacements": 1
            }],
            "countMatches": true
        }]
      }],
      ["@semantic-release/git", {
        "assets": ["locals.tf", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }]
    ],
  };