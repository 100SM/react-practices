1.  설치

    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react react react-dom

2.  설정

    config/babel.config.json
    config/webpack.config.json

3.  npm 스크립팅

```javascript
"scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npx webpack"
  },
```

4. 실행

   $ npm run debug