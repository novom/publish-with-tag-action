# Publish with tag action

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This action publishes npm packages when creating new releases. It publishes under custom tags if one is specified in the version `(e.g.: v1.0.0-alpha.1)`.

The release tag must follow the semver standard.

## Usage

This action must only be used on workflows triggered by releases.

The `npm` command must be available.

```yaml
    - name: Publish Package
      uses: novom/publish-with-tag-action@v1.0.4
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Only needed if package is published on github packages
```

### Inputs

|Name               |Description              |Default  |
|:-----------------:|-------------------------|---------|
|`working-directory`|The directory to publish |`.`      |

### Outputs

|Name     |Description                     |
|:-------:|--------------------------------|
|`version`|The version that was published  |
|`tag`    |The tag that was used to publish|

## Example Workflow

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
      uses: novom/publish-with-tag-action@v1.0.4
      with:
        working-directory: '<directory to publish>'
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    - run: echo ${{ steps.publish.outputs.version }}
    - run: echo ${{ steps.publish.outputs.tag }}
```

## License

This software uses the [MIT license](LICENSE.txt).
