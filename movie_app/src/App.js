import React from 'react';
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

const list = [
  {
    id:1,
    name: "가가가",
    age: 20,
    rating: 1
  },
  {
    id:2,
    name: "나나나",
    age: 25,
    rating: 2
  },
  {
    id:3,
    name: "다다다",
    age: 30,
    rating: 3
  },
];

function App() {
  return (
    <div>
      {list.map(now => <Man key={now.id} name={now.name} age={now.age} rating={now.rating} />)}
    </div>
  );
}

export default App;
