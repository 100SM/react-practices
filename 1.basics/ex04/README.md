## ex04: application bundling

#### 1. webpack은 작게 분리된 많은 application의 module(js, css, image, font)들의 의존성을 분석해서 하나의 JS 파일로 묶는 도구
#### 2. 하나의 JS파일을 bundle이라고 하고 묶는 작업을 bundling이라 함
#### 3. bundling이 단순히 module들을 하나의 파일로 묶는 작업만을 의미 X
#### 4. 빌드 작업
##### 1) linting(ESLint, 문법 체크) 작업
##### 2) document 작업(JSDoc) 작업
##### 3) test(Mocha, jest) 작업
##### 4) 난독화 / 압축
##### 5) bundling
#### 5. JavaScript 뿐만 아니라 다양한 assets(image, css, font)들도 module로 취급
#### 6. 설치
##### $ npm i -D webpack webpack-cli
##### $ npm .\node_modules\.bin\webpack --version
##### $ npx webpack --version
#### 7. package.json scripting("build" stage)
#### 8. $ npm run build