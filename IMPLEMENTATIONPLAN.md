# Implementation Plan (Step By Step)

1. Create folders for each technology (javascript, jquery, typescript, angular, react, nextjs, react-native)
2. Add minimum set of files to each folder (index.html, package.json, README.md, metrics.json)
3. Execute `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` to allow running npm scripts
4. Add .gitignore file to exclude node_modules and build folders
5. Extentions for Visual Studio Code
```json
    "recommendations": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "editorconfig.editorconfig",
        "xabikos.javascriptsnippets",
        "yoavbls.pretty-ts-errors",
        "donjayamanne.jquerysnippets",
        "vue.volar",
        "dsznajder.es7-react-js-snippets",
        "angular.ng-template",
        "msjsdiag.vscode-react-native"
    ]
```
6. HTML basic structure for each app (index.html)


# Questions (Will be converted to Plan Items)

1. SPA for All Apps - Is it possible to use different Layout for each app?
2. Add Unit Tests for all apps - Is it possible to add unit tests for all apps?
