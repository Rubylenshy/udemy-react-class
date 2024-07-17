import { useState } from "react";
import "./App.css";

function App() {
	const [step, setStep] = useState(1);
	const stepNumbers = [1,2,3];

	function increaseStep() {
		if (step < 3) {
			setStep(step+1)
		}
	}

	function decreaseStep() {
		if (step > 1) {
			setStep(step-1)	
		}
	}

    return (
        <div className="steps">
            <div className="numbers">
				{ stepNumbers.map(num => <div className={step >= num ? 'active' : ''}>{num}</div>) }
            </div>

            <p className="message">{step === 1 ? 'Learn React!': step === 2 ? 'Get a job' : 'Enjoy 👏'}</p>

            <div className="buttons">
                <button className="active" onClick={decreaseStep}>Previous</button>
                <button className="active" onClick={increaseStep}>Next</button>
            </div>
        </div>
    );
}

export default App;
