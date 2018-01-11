# About Kerker

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Documentation

## Structure

```
kerker/
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  README.md
  src/
    scss/
      bootstrap/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  yarn.lock
```

### Explanation Create React App structure
For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

### Custom structure

#### SCSS
There shouldn't be any SCSS files directly in this directory other than a _variables.scss for declaring variables if need be. Prefer to use the variables which are provided by Bootstrap. Only in cases there’s nothing to be used from the Bootstrap core, declare a custom variable here.

*Directory bootstrap*
`_config.scss`
 Bootstrap can be used very modular. Don’t import the complete Bootstrap CSS. Instead use import in the `_config.scss` to only get the components you want to use.

`pre_default.scss`
Bootstrap uses `!default` on each variable, which makes customizing very easy. It's the oposite of the notorious !import: While !important is like "Oh, there's a rule for this? I don't care, use this!", a variable with !default will only get defined by sass if it isn't already set. So if you want to change a Bootstrap variable, do so in the `_pre_default.scss` file.

*Directory bootstrap_ext*
Customize and extend styles in Bootstrap in separate files, which are stored in a special folder. Name the files like the Bootstrap component you're changing or extending.

*Components*
Currently the App.scss is stored here. I don't think we will need this directory later because component-based styles should be declared in the components directly.

`index.scss`
All scss components come together here via import. I don't declare any styles.

## Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, the watch-css tasks is included.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
Bundles React in production mode and optimizes the build for the best performance. It also compiles the scss files.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

