import React from 'react';

function Food({name}){
  return <h1>I like {name}</h1>
}

const list = [
  {
    name: "가가가",
    age: 20
  },
  {
    name: "나나나",
    age: 25
  },
  {
    name: "다다다",
    age: 30
  },
];

function App() {
  return (
    <div>
      <h1>Hello~!!</h1>
      {list.map(now => <Food name={now.name}/>)}
    </div>
  );
}

export default App;
