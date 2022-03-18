## ex04: Component - State

### 01. 기본 개념

    1. state
        - 컴포넌트 내부의 현재 상태를 나타내는 쓰기 가능한 데이터
        - 컴포넌트는 this.state 안에 여러 데이터(상태)를 가질 수 있음
        - this.state는 특정 컴포넌트 전용이며 변경을 위해서는 setState 함수를 사용(Class Component)
        - 상태가 업데이트 되면 컴포넌트의 반응형(Reactive) Rendering이 트리거되거 컴포넌트와 자식 컴포넌트가 다시 렌더링 됨
        - 컴포넌트의 동작(event)와 상호작용을 수행할 수 있는 매커니즘을 제공함
        - 클래스 컴포넌트에서는 constructor에서 초기화
        - 클래스 컴포넌트에서 상태 변경을 위해서는 setState 함수를 사용
        - 함수 컴포넌트에서는 useState 후크 함수 사용해서 초기화
        - 함수 컴포넌트에서 상태 변경을 위해서는 useState 후크 함수에서 반환된 배열의 두번째 배열 요소를 사용
    2. 예제: src/01

### 02. 제어 컴포넌트

    1. input, textarea, option과 같은 form component 중에 사용자 입력에 따라서 state값이 변경되고 rendering하는 component를 제어 component라 함
    2.
    3.
    4. 예제
        - src/02 - 제어 컴포넌트
        - src/03 - 비제어 컴포넌트

### 03. 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트

    emaillist

### 04. Data Flow(Bottom -> Up)

    emaillist

---

1.  설치

    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react react react-dom

2.  설정

    config/babel.config.json
    config/webpack.config.json

3.  npm 스크립팅

```javascript
"scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  },
```

4. 실행

   $ npm run debug src={01|02|03|04|...}