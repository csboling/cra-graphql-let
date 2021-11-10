This is a demonstration of compilation errors encountered when
attempting to use
[graphql-let](https://github.com/piglovesyou/graphql-let) with
[create-react-app](https://github.com/facebook/create-react-app) using
Babel macros.

This was attempted on Windows 10 and WSL 2 using Node LTS 16.13.0.

This project was bootstrapped with [Create React
App](https://github.com/facebook/create-react-app).  It was then
modified following the [graphql-let setup
instructions](https://github.com/piglovesyou/graphql-let#getting-started-with-babel-plugin-macros),
and an example component from the [Apollo getting started
guide](https://www.apollographql.com/docs/react/get-started/) was
added.

With the default settings, `yarn codegen && yarn start` gives a
compilation error:

```
Failed to compile.

./src/ExchangeRates.tsx
Module not found: You attempted to import ../node_modules/.cache/graphql-let/src/ExchangeRates-GetRates.tsx which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
```

This is a create-react-app restriction that uses a Webpack plugin to
prevent all imports outside of `src/`. Attempting to work around this
by setting `cacheDir: src/.cache/` in `.graphql-let.yml` instead
results in this compilation error:

```
./src/ExchangeRates.tsx
Module not found: Can't resolve '.cache/src/ExchangeRates-GetRates.tsx' in '.../cra-graphql-let/src'
```
