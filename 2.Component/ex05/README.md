## ex05: Component - LifeCycle

### 01. Class Component

    1) Lifecycle I: mount
        - constructor
        - getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다[react v16.3]
        - render
        - componentDidMount: 컴포넌트 생성을 마치고 렌더링 작업이 끝난 후
    2) Lifecycle II: update
        - getDerivedStateFromProps: props로 받아온 값을 state에 동기화한다[react v16.3]
        - shouldComponentUpdate: props나 state을 변경했을 때, 리렌더링 여부를 결정
        - render
        - getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출 [react v16.3]
        - * componentDidUpdate: DOM 업데이트가 끝난 직후 호출. DOM 작업이 가능
    3) Lifecycle III: Unmount
        - * componentWillUnmount: 컴포넌트를 DOM에서 제거하기 전

### 02. Alternative(대용): Functional Component Lifecycle: useEffect Hook

### 03. 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트

    1. 상태 컴포넌트
        - 상태를 관리하는 컴포넌트
        - 보통 상태 컴포넌트는 컴포넌트 계층에서 상위에 있음
        - 상태 컴포넌트는 순수 컴포넌트를 하나 이상 래핑 가능
    2. 순수 컴포넌트
        - 상태관리 없이 속성(props)로 화면만 렌더링하는 컴포넌트
        - 재사용성 좋음. 테스트하기도 좋음
    3. application의 컴포넌트들은 상태 컴포넌트와 순수 컴포넌트로 분리하여 만드는 것이 좋음
    4. 어떤 컴포넌트가 상태 컴포넌트인가?
    5. 예제
    emaillist

### 04. Data Flow(Bottom -> Up)

    emaillist

---

1.  설치

    $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react react react-dom prop-types

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
