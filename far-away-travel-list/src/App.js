import { useState } from "react";
import "./App.css";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 1, packed: true },
    { id: 3, description: "Beds", quantity: 5, packed: true },
    { id: 4, description: "Items", quantity: 3, packed: false },
];

function App() {
    const [items, setItems] = useState(initialItems);

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

    function handleClearItems() {
        setItems(items => items = [])
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
            <Stats items={items}/>
        </div>
    );
}

function Logo() {
    return <h1>✈ Far Away 🏖</h1>;
}

function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState('input')

    let sortedItems = []

    switch (sortBy) {
        case 'description':
            sortedItems = items.slice().sort( (a, b) => a.description.localeCompare(b.description));
            break;
        case 'quantity':
            sortedItems = items.slice().sort( (a, b) => a.quantity - b.quantity);
            break;
        case 'packed':
            sortedItems = items.slice().sort( (a, b) => Number(b.packed) - Number(a.packed));
            break;
    
        default:
            sortedItems = items;
            break;
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                ))}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value={'packed'}>Sort by packed status</option>
                    <option value={'quantity'}>Sort by quantity</option>
                    <option value={'description'}>Sort alphabetically</option>
                    <option value={'input'}>Sort by input</option>
                </select>

                <button onClick={() => onClearItems()}>Clear list</button>
            </div>
        </div>
    );
}

function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => {onToggleItem(item.id)}} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {" "}
                {item.quantity} - {item.description}
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

        setQauntity(1)
        setDesc('')
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

function Stats({ items }) {
    const numItems = items.length;

    if (numItems === 0) {
        return (
            <footer className="stats">
                <p>Start adding items to your list!</p>
            </footer>
        )
    }

    const numPacked = items.filter( item => item.packed ).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                { percentage === 100 ?
                'You get everything! Ready to go!' :
                `You have ${numItems} items in your bucket list, and you have packed ${numPacked} (${percentage}%)`
                }
            </em>
        </footer>
    );
}

export default App;
