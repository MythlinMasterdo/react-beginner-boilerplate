# React Beginner Boilerplate
Beginner friendly boilerplate that is suitable for small and mid-sized apps. If you just want to experiment with React and Flux pattern or don't want spend too much time configuring development environment, you might find this template useful. If your project is open-source - you can easily deploy it to [GitHub Pages](http://danii1.github.io/react-beginner-boilerplate/). Boilerplate adds hashes to asset names, so you can leverage long term caching.

## Whats inside
- **React**
- **Reflux** - one of the implementations of Flux pattern, you can swap it with any alternative you prefer
- **React Router** - routing
- **React Hot Loader** - for real-time component tweaking
- **Babel** - use ES6 syntax today
- **Webpack** - packaging resources and assets
- **jQuery** - in case you need to use some third-party UI components, otherwise feel free to remove it
- **PostCSS** - CSS autoprefixing
- **PreCSS** - write either pure CSS or use Sass like syntax for variables, loops, etc
- **ESLint** - rules that make your JS better
- **Karma** - tests

## Usage
Install
```
npm install
```

Run
```
npm run launch  - launch development server and open browser with your project
npm run server  - just launch development server
npm run browser - just open browser
```

Run tests
```
npm test        - run tests
npm test watch  - run tests and watch for changes
```

Build project for production
```
npm run build   - build project in dist/ dir
```

Deploy project on Github
```
npm run deploy  - build and push contents of the dist/ dir to the Github Pages
```

Clean
```
npm run clean   - remove dist/ dir
```

## Directory structure
```
src
└── assets
    ├── css
    └── images
├── components
├── routes
├── stores
├── actions
└── router.js
```

## Alternatives
If you need server-rendering and stuff, there are some good alternatives, so check them out:  https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits
