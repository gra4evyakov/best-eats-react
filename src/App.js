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

    function handleClick(item, symbol, ) {
        if (cart.includes(item) && symbol === '+') {
            item.count += 1
            setPrice(prevState => price + item.price)
            setCartCounter(prevState => cartCounter + 1)
        } else if(symbol === '-') {
            if (item.count > 1) {
                item.count -= 1
                setPrice(prevState => price - item.price)
                setCartCounter(prevState => cartCounter - 1)
            }
        } else {
            setCart([...cart, item])
            item.count = 1
            setPrice(prevState => price + item.price)
            setCartCounter(prevState => cartCounter + 1)
        }
    }

    function removeItem(item, index) {
        if (cartCounter > 0) {
            setPrice(prevState => price - item.price * item.count)
            setCartCounter(prevState => cartCounter - item.count)
            setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
        }
    }

  return (
    <div className="App">
        <Navbar price={price} cart={cart} cartCounter={cartCounter} removeItem={removeItem} handleClick={handleClick}/>
        <Hero/>
        <HeadlineCards/>
        <Food handleClick={handleClick}/>
        <Category/>
    </div>
  );
}

export default App;
