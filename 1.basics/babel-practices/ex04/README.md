## Env Preset

### 1. 여러 plugin의 변환 규칙을 한 번에 적용하기 위해 관련 plugin들을 모아 놓은 것
### 2. ECMAScript 년도별(버전별)로 모아놓은 것
####     stage(0, 1, 2, 3) 레벨로 모아 놓은 것들
####     3rd party(typescript, react) 등 종류가 다양
### 3. Env Prest은 stage 3레벨 이상의 문법들을 플러그인
### 4. Env Prest 뿐 아니라 다양한 plugin들은 babel 설정을 통해서 적용할 수 있음(babel.config.json)

### Env Prest 설치(babel 설치)
#### $ npm i -D @babel/core @babel/cli @babel/preset-env

### Env Preset의 plugin 확인하기
#### $ npm list --depth=1

### Env Preset 설정(브라우저 타겟 설정)
#### 브라우저별 es6 호환성 table(kangax.github.io/compat-table/es6)

### 변환하기
#### $ npx babel src/ex.js -o dist/ex.js