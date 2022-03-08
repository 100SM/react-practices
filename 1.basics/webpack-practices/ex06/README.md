## Image module bundling 하기

### 1. 설치 패키지
#### $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

### 2. Image loader 설정(webpack.config.js)
```javascript
output: {
  .
  [생략]
  .
  assetModuleFilename: "assets/images/[hash][ext]",
},
```
```javascript
module: {
  rules: [
    {
      test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
      type: "asset/resource",
    }
  ],
},
```

### 3. 개발 서버 실행
#### $ npm start
