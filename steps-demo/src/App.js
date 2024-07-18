import { useState } from "react";
import "./App.css";

const messages = [
	"Learn React",
	"Apply for Jobs",
	"Invest in your new income"
];

function App() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);
	const stepNumbers = [1,2,3];

	function increaseStep() {
		if (step < 3) {
			setStep((s) => s + 1)
		}
	}

	function decreaseStep() {
		if (step > 1) {
			setStep((s) => s - 1)
		}
	}

    return (
		<>
			<button className="close" onClick={() => setIsOpen(() => !isOpen)}>&times;</button>
			{isOpen && 
				<div className="steps">
					<div className="numbers">
						{ stepNumbers.map(num => <div key={num} className={step >= num ? 'active' : ''}>{num}</div>) }
					</div>

					<p className="message">Step {step}: {messages[step - 1]}</p>

					<div className="buttons">
						<button className="active" onClick={decreaseStep}>Previous</button>
						<button className="active" onClick={increaseStep}>Next</button>
					</div>
				</div>
			}
		</>
    );
}

export default App;
