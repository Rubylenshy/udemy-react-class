import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);

	async function getAdvice() {
		const res = await fetch('https://api.adviceslip.com/advice')
		const data = await res.json();

		setAdvice(data.slip.advice)
		setCount( c => c + 1)
	}

	useEffect( function () {}, [])

    return (
        <div className="App">
            <h1>{advice ? advice : 'hello World!'}</h1>
            <button onClick={getAdvice}>Get Advice</button>
			<Message count={count} />
        </div>
    );
}

function Message(props) {
	return (
		<p>
			You have read <strong>{props.count}</strong> messages
		</p>
	)
}

export default App;
