## Babel PlugIn(변환 규칙)

### 1. Library 설치
#### $ npm i -D @babel/core @babel/cli

### 2. plugIn 적용
#### 1) block scope 변수 plugIn (@babel/plugin-transform-block-scoping)
##### $ npm i -D @babel/plugin-transform-block-scoping
##### $ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping

#### 2) 객체분해 - parameter plugIn(@babel/plugin-transform-parameters)
#### 3) template 문자열 변환 plugIn(@babel/plugin-transform-template-literals)
#### 4) for..of 변환 plugIn(@babel/plugin-transform-for-of)

### 3. 모두 적용해보기
#### $ npm i -D @babel/plugin-transform-block-scoping @babel/plugin-transform-parameters @babel/plugin-transform-template-literals @babel/plugin-transform-for-of
#### $ npx babel src/ex.js -o dist/ex.js --plugins @babel/plugin-transform-block-scoping --plugins @babel/plugin-transform-parameters --plugins @babel/plugin-transform-template-literals --plugins @babel/plugin-transform-for-of