import { useState } from "react";
import "./App.css";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 1, packed: true },
// ];

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(newItem) {
        setItems(items => [...items, newItem])
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter( item => item.id !== id))
    }

    function handleToggleItem(id) {
        setItems(items => items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
        ))
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>✈ Far Away 🏖</h1>;
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => {onToggleItem(item.id)}} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {" "}
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

function Form({ onAddItems }) {
    const [description, setDesc] = useState("");
    const [quantity, setQauntity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { id: Date.now(), description, quantity, packed: false };
        onAddItems(newItem);
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
