Extendable eslint config, with TypeScript and Prettier and (optionally) React.

---

## Installation

`npm i -D @thesergiomiguel/eslint-config`

*Note:* npm versions `> 3` and `< 7` don't automatically install `peerDependencies`, so peep into [`package.json`](package.json) and install them manually as needed.


## Usage

1. Add this package to the `extends` array in `eslintrc`

```javascript
{
  extends: [..., '@thesergiomiguel/eslint-config'],
}
```

If you are using ESLint in a React project, use `@thesergiomiguel/eslint-config/with-react` instead.

2. Specify the location of your `tsconfig` in `config.parserOptions`

```javascript
{
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
}

```

This is necessary to enable rules that require type information.

3. Export the Prettier config exposed here from your `prettierrc`

```javascript
module.exports = {
  ...require('@thesergiomiguel/eslint-config/prettierrc'),
};
```
