// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Burger', price: 90 },
    { id: 2, name: 'Pizza', price: 199 },
    { id: 3, name: 'Salad', price: 20 },
    {id: 4, name: 'Chole kulche', price:80},
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Restaurant App</h1>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menu.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <p>Total: {calculateTotal()}</p>
      </div>
    </div>
  );
};

export default App;
