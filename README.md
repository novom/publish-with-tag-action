# Publish with tag action

This action publishes npm packages under tags specified in release versions.
The release tag must follow the semver standard.

It must only be used on workflows triggered by releases.


## Inputs

None

## Outputs

### `version`

The version that was published.

### `tag`

The tag that was used to publish.

## Example usage

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
```
