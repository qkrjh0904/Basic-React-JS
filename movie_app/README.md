# Movie App 2020.05

## 1. Create React App

#### 1.1. React App 생성

[create react app](https://github.com/facebook/create-react-app)을 사용하면 웹팩을 사용할 필요 없이 바로 react를 시작할 수 있다.

```
> npx create-react-app
```

## 2. prop-types

#### 2.1. prop-types란?

prop-types는 전달받은 props가 내가 원하는 props인지 확인해준다.

```
> npm i prop-types
```

#### 2.1. How to use?

다음과 같이 쓸 수 있다.  
만약 타입이 맞지 않으면 에러가 발생한다.  
또한, isRequired로 props가 들어 왔는지 확인할 수 있다.  
자세한 내용은 [React Docs](https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html)에서 확인할 수 있다.

```javascript
import PropTypes from 'prop-types';

function Man({ name, age, rating }) {
    return (
        <div>
            <h2>name : {name}</h2>
            <h4>age : {age}</h4>
            <h4>rating : {rating}</h4>
        </div>
    );
}

Man.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};
```

## 3. Class Component

#### 3.1. 왜 Class Component를 사용하는가?

`state` 때문이다.  
`state`는 object이다.  
`state`에 넣고싶은 데이터를 넣는다. 마치 Vue.js에서 `data` 영역처럼.

#### 3.2. render function

react는 state를 직접 변경하는것을 권장하지 않는다.  
react는 render function을 refresh하지 않는다.  
이 말은 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다는것이다.  
그래서 `setState` function을 호출하면 react가 알아서 render function에서 필요한 부분을 refresh 해 준다.

> `setState`를 호출하는 순간 react는 새로운 `state`와 함께 renderfunction을 호출한다.

현재 `state`를 컨트롤 하기 위해서는 다음과 같이 `setState`함수로 제어하는데, 이 때 `current`함수로 현재 state값을 받아온다..

```javascript
state = {
    count: 0,
};

plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
};
```

## 4. Deploying to Github Pages

#### 4.1. gh-pages 설치

```
> npm i gh-pages
```

#### 4.2. package.json에 homepage 넣기

소문자!! 띄어쓰기 안됨!!

```json
"homepage": "http://{유저아이디}.github.io/{repository 이름}"
```

#### 4.3. deploy, predeploy 만들기

`deploy`가 있으면 자동으로 `predeploy`를 인식함.  
`predeploy`로 `deploy`하기전에 한번 더 build 시켜줌.  
`deploy`로 build된 폴더를 upload함.  
build 폴더는 `npm run build`로 만들어짐.

```json
"scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "deploy": "gh-pages -d build",
        "predeploy": "npm run build"
    },
```
