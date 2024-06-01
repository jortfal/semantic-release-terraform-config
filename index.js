/* 
Copyright 2021 @jortfal | José Mnauel Ortega Falcón
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 
*/

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  plugins: [
    '@semantic-release/commit-analyzer',
    {
      preset: 'conventionalcommits',
    },
    '@semantic-release/release-notes-generator',
    {
      preset: 'conventionalcommits',
    },
    '@semantic-release/github',
    '@semantic-release/changelog',
    [
      '@google/semantic-release-replace-plugin',
      {
        replacements: [
          {
            files: ['locals.tf'],
            from: `"Terraform Module Version"    = ".*"`,
            to: `"Terraform Module Version"    = "\${nextRelease.gitTag}"`,
            results: [
              {
                file: 'locals.tf',
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['locals.tf', 'CHANGELOG.md'],
        message: `chore(release): \${nextRelease.gitTag} [skip ci]\n\n\${nextRelease.notes}`,
      },
    ],
  ],
};
