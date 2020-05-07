import React from 'react';

function Food({name, age}){
  return <h1>I like {name}. I'm {age} years old.</h1>;
}

const list = [
  {
    id:1,
    name: "가가가",
    age: 20
  },
  {
    id:2,
    name: "나나나",
    age: 25
  },
  {
    id:3,
    name: "다다다",
    age: 30
  },
];

function renderList(man){
  return <Food key={man.id} name={man.name} age={man.age}/>;
}

function App() {
  return (
    <div>
      {list.map(renderList)}
    </div>
  );
}

export default App;
