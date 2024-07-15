import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
];  

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Header = () => {
    return <div>
        <h2>Fast React Pizza Co.</h2>
    </div>
}
const Footer = () => {
    const time = new Date().getHours;
    const isOpen = time >= 8 && time <= 12;

    return <div>
        <footer>{isOpen ? "We're currently open" : "Sorry, we're closed"}</footer>   
    </div>
}

function Menu(props) {
    return <div>
        <h2>Our Menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
    </div>
}

function Pizza(props) {
    return <div>
        <img src="assets/pizzas/spinaci.jpg" alt="" />
        <h2>Pizza</h2>
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
