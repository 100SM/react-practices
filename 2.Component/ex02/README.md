## ex02: Component Styling(Working with UI)

### 1. Inline Styling

### 2. Normal CSS(css-loader options: {module: false})

    - $ npm run debug src=02 css-modules=false

### 3. Normal CSS(css-loader options: {module: true})

    - $ npm run debug src=03 css-modules=true

### 4. CSS Module(css-loader options: {module: true})

    - $ npm run debug src=04 css-modules=true

### 5. SACC & SCSS(css-loader options: {module: true})

    CSS in JS(Style Component), Less & Styleable

### 6. Font Awesome: Working with UI I

### 7. React Awesome: Working with UI II

---

1.  설치

    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react react react-dom prop-types

2.  설정

    babel.config.json
    webpack.config.json

3.  npm 스크립팅

```javascript
"scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },
```

4. 실행

   $ npm run debug src={01|02|03|04|...} css.modules={[true]|false}
