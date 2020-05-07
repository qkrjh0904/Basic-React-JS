# Movie App 2020.05

## 1. Create React App

#### 1.1. React App 생성
[create react app](https://github.com/facebook/create-react-app)을 사용하면 웹팩을 사용할 필요 없이 바로 react를 시작할 수 있다.
```
> npx create-react-app
```

#### 2. prop-types

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

function Man({name, age, rating}){
  return(
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
  rating: PropTypes.number.isRequired
}
```