# Pull request rules

Only the list items are rules.

- No `console.log` or `console.debug` calls in files under src/
- Every workflow under .github/workflows/ pins each action to a major version tag such as `@v4`
- No secret values are hardcoded; references like `secrets.X` and `process.env.X` are fine
- Every new exported function under src/ has a test under test/
- No `TODO` comment without a link to an issue
