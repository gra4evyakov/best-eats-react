import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
    const [cart, setCart] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [price, setPrice] = useState(0)
    function handleClick(item) {
        cart.push(item)
        setPrice(prevState => price + item.price.length)
        setCartCounter(prevState => cartCounter + 1)
    }
    function removeItem(item, index) {
        if (cartCounter > 0) {
            setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
            setCartCounter(prevState => cartCounter - 1)
            setPrice(prevState => price - item.price.length)
        }
    }

  return (
    <div className="App">
        <Navbar price={price} cart={cart} cartCounter={cartCounter} removeItem={removeItem}/>
        <Hero/>
        <HeadlineCards/>
        <Food handleClick={handleClick}/>
        <Category/>
    </div>
  );
}

export default App;
