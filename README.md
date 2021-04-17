# @jortfal/semantic-release-terraform-config

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to create release of [Terraform](https://www.terraform.io/) Modules

![GitHub release (latest by date)](https://img.shields.io/github/v/release/jortfal/semantic-release-terraform-config)
![GitHub Release Date](https://img.shields.io/github/release-date/jortfal/semantic-release-terraform-config)
![GitHub license](https://img.shields.io/github/license/jortfal/semantic-release-terraform-config)
![Maintenance](https://img.shields.io/maintenance/yes/2021?color=green)
![Maintainer](https://img.shields.io/badge/maintainer-jortfal-green)
[![Build Status](https://github.com/jortfal/semantic-release-terraform-config/workflows/Test/badge.svg)](https://github.com/jortfal/semantic-release-terraform-config/actions?query=workflow%3ATest+branch%3Amaster) [![npm latest version](https://img.shields.io/npm/v/jortfal/semantic-release-terraform-config/latest.svg)](https://www.npmjs.com/package/jortfal/semantic-release-terraform-config)

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@google/semantic-release-replace-plugin`](https://github.com/google/semantic-release-replace-plugin)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

## Install

```bash
$ npm install --save-dev semantic-release @jortfal/semantic-release-terraform-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@jortfal/semantic-release-terraform-config"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.

### Overwritten options

This following options are set by this shareable config:

| Option                                                                          | Value                                                                                                                          |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
|[`replacements`](https://github.com/google/semantic-release-replace-plugin#usage)| {"files": ["locals.tf"], "from": "\"Terraform Module Version\" = \".*\"", "to": "\"Terraform Module Version\" = \"${nextRelease.version}\""} |
| [`assets`](https://github.com/semantic-release/git#assets) | ["locals.tf", "CHANGELOG.md"] |
| [`message`](https://github.com/semantic-release/git#message) | chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes} |

**NOTE**: other options use their default values. See each [plugin](#plugins) documentation for available options.
