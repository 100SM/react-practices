## ex01: Property

1.  props(property)

    1. Component의 Data
    2. 부모에서 자식으로 전달됨
       - Component Communication(컴포넌트간의 통신)
       - Top -> Down
    3. 자식 Component에서 변경 불가
    4. 부모가 소유

2.  FoodList src/01 : Class Component
3.  FoodList src/02 : Data Flow(Top -> Down) : Class Component
4.  FoodList src/03 : Data Flow(Top -> Down) : Function Component
5.  FoodList src/04 : Validation

설치

    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react react react-dom

설정

    babel.config.json
    webpack.config.json

스크립트 추가하기

```javascript
"scripts": {
"debug": "npx webpack serve --progress --mode development --env",
"build": "npx webpack"
},
```

실행

    $ npm run debug src={01|02|03|04|...}
