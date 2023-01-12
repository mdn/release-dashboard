# MDN Content Dashboard

An app of tools for the MDN Content Team.

## Release dashboard

Tool for managing bugzilla bugs that need MDN docs.

You can look up bugs for the next release, bugs that might need `dev-doc-needed`, bugs from different categories.

You can batch set `dev-doc-complete` and push bugs to github projects.

(Add feature list here)

## GitHub Visualization

## Project setup

Create a `env` with a bugzilla api key set: `VUE_APP_BUGZILLA_API_KEY=`

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
