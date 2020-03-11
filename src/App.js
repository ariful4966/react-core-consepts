import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const product = [
    {name : 'Photosho', price : '$99.09' },
     {name : 'Illusstator', price : '$66.09' },
     {name : 'PDF Reder', price : '$99.09' } ,
     {name : 'Adob DX', price : '$99.09' } 
    ];
    const nayok = ["Anower", "Jafor", "Josim", "Alomgir", "Sakib", "Bappi", "Omit Hassn"];
    
  return (
    <div className="App">
      <header className="App-header">
        <Person name = "Munna" job = "football"></Person>
        <Person name = "Sakib" job = "Criket"></Person>
        <Count></Count>
        <Users></Users>
        <ul>
          {
            nayok.map(nayok => <li>{nayok}</li>)
          }
          {
            product.map(product => <div>{product.name}</div>)
          }
          {
            product.map(product => <Product product = {product}></Product>)
          }
        </ul>
   

     
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
     <ol>
       {
         users.map(users => <li>{users.name}, Phone:{users.phone}, Email: {users.email}</li>)
        }
</ol>
    </div>
  )
}
function Count(){
  const [count, setCount] = useState(10);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseUp={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border: '2px solid gold',
    margin:'10px 0'
  }
  return(
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Proffession: {props.job}</p>
    </div>
  )
}
function Product(props){
 const productStyle={
  border : '2px solid gray',
  backgroundColor:'lightgray',
  width:'200px',
 // height:'200px',
  borderRadius:'5px',
  float:'left'
 }
 const {name, price} = props.product;
return(
  <div style = {productStyle}>
    <h3>{name}</h3>
    <h1>{price}</h1>
    <button>Buy Now</button>
  </div>
)
}




export default App;
