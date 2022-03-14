## ex02: Component Styling(Working with UI)

1.  Inline Styling
2.  Normal CSS(css-loader options: {module: false})
3.  Normal CSS(css-loader options: {module: true})
4.  CSS Module(css-loader options: {module: true})
5.  SACC & SCSS
6.
7.
8.

9.  설치

    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react react react-dom

10. 설정

    babel.config.json
    webpack.config.json

11. npm 스크립팅

```javascript
"scripts": {
"debug": "npx webpack serve --progress --mode development --env",
"build": "npx webpack"
},
```

12. 실행

    $ npm run debug src={01|02|03|04|...}
