# Publish with tag action

This action publishes npm packages under the correct tag.

It must be used only on workflows triggered by releases.

The release tag must follow the semver standard.

## Inputs

None

## Outputs

### `version`

The version that was published.

### `tag`

The tag that was used to publish.

## Example usage

```yaml
uses: novom/publish-with-tag@v1
env:
  NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
