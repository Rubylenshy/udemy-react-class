import { useState } from "react";
import "./App.css";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 1, packed: true },
];

function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>✈ Far Away 🏖</h1>;
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {" "}
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    );
}

function Form() {
    const [description, setDesc] = useState("");
    const [quantity, setQauntity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const item = { id: Date.now(), description, quantity, packed: false };
        console.log(item);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip</h3>
            <select
                value={quantity}
                onChange={(e) => setQauntity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Add item..."
                value={description}
                onChange={(e) => setDesc(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                You have X items in your bucket list, and you have packed X (X%)
            </em>
        </footer>
    );
}

export default App;
