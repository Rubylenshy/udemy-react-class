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
						<Button bgColor='#7950f2' textColor='#fff' onClick={decreaseStep} text='Previous'> <span>👈</span> Previous </Button>
						<Button bgColor='#7950f2' textColor='#fff' onClick={increaseStep} text='Next' > Next <span>👉</span></Button>
					</div>
				</div>
			}
		</>
    );
}

function Button({ textColor, bgColor, onClick, children}) {
	return (
		<button
			style={{backgroundColor: bgColor, color: textColor}}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default App;
