import React from "react";
import ReactDOM from "react-dom/client";

import './App.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "assets/pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "assets/pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "assets/pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "assets/pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "assets/pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "assets/pizzas/prosciutto.jpg",
      soldOut: false,
    },
];  

function App() {
    return (
        <div className="body">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Header = () => {
    return <div className="header">
        <h1>Fast React Pizza Co.</h1>
    </div>
}
const Footer = () => {
    const time = new Date().getHours();
    const isOpen = time >= 0 && time <= 24;

    return <div>
        <footer className="footer">
            {isOpen ? 
                <div className="order">
                    <p>We're currently open</p>
                    <button className="btn">Order</button>
                </div>
                : <p>Sorry, we're closed</p>
            }
        </footer>   
    </div>
}

function Menu() {
    // const pizzaData = [];
    const numPizza = pizzaData.length;

    return <div className="menu">
        <h2>Our Menu</h2>
        { numPizza > 0 ? <>
            <div className="pizzas">{pizzaData.map(pizza => <Pizza obj={pizza} key={pizza.name}/>)}</div>
        </> : <p>We're still working on our menu. Please come back later.</p>}
    </div>
}

function Pizza(pizza) {
    return <div className={`pizza ${!pizza.obj.soldOut ? "" : "sold-out"}`}>
        <img src={pizza.obj.photoName} alt={pizza.obj.name} />
        <div>
            <span>
                <h3>{pizza.obj.name}</h3>
                <p>{pizza.obj.ingredients}</p>
            </span>
            <span>{pizza.obj.soldOut ? "SOLD OUT" : pizza.obj.price}</span>
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Strict Mode
// runs the development twice to check for bugs and leftover codes
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
