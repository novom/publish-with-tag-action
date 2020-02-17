# Publish with tag action

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This action publishes npm packages under tags specified in release versions.
The release tag must follow the semver standard.

## Usage

You can include this action like any other in a workflow file.
It must only be used on workflows triggered by releases.

The `npm` command should also be available.

### Inputs

None

### Outputs

|Name     |Description                     |
|:-------:|--------------------------------|
|`version`|The version that was published  |
|`tag`    |The tag that was used to publish|

### Workflow

```yaml
name: Publish Example

on:
  release:
    types:
      - created

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: '12.13'

    - name: Publish Package
      uses: novom/publish-with-tag@v1.0.2
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    - run: echo ${{ steps.publish.outputs.version }}
    - run: echo ${{ steps.publish.outputs.tag }}
```

## License

This software uses the [MIT license](LICENSE.txt).
