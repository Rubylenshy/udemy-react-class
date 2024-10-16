import {useState} from 'react';
import "./App.css";

function TextExpander({
	children,
	expandBtnText = 'Show More',
	collapseBtnText = 'Show Less',
	collapsedNumWords = 10,
	expanded = false,
	buttonColor = '#0000ff'
	}) 
{
	function renderText(text) {
		if (isExpanded) {
			return text
		}

		return text.split(" ").slice(0, collapsedNumWords).join(" ") + '...';
	}

	const [isExpanded, setIsExpanded] = useState(expanded);
	const buttonStyle = {
		color: buttonColor,
		textDecoration: 'underline',
		cursor: 'pointer',
		marginLeft: '6px'
	}

    return <div>
			{renderText(children)}
			<span onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
				{!isExpanded ? expandBtnText : collapseBtnText}
			</span>
		</div>;
}

function App() {
    return (
        <div>
            <TextExpander>
                Space travel is the ultimate adventure! Imagine soaring past the
                stars and exploring new worlds. It's the stuff of dreams and
                science fiction, but believe it or not, space travel is a real
                thing. Humans and robots are constantly venturing out into the
                cosmos to uncover its secrets and push the boundaries of what's
                possible.
            </TextExpander>

            <TextExpander
                collapsedNumWords={20}
                expandBtnText="Show text"
                collapseBtnText="Collapse text"
                buttonColor="#ff6622"
            >
                Space travel requires some seriously amazing technology and
                collaboration between countries, private companies, and
                international space organizations. And while it's not always
                easy (or cheap), the results are out of this world. Think about
                the first time humans stepped foot on the moon or when rovers
                were sent to roam around on Mars.
            </TextExpander>

            <TextExpander expanded={true} className="box">
                Space missions have given us incredible insights into our
                universe and have inspired future generations to keep reaching
                for the stars. Space travel is a pretty cool thing to think
                about. Who knows what we'll discover next!
            </TextExpander>
        </div>
    );
}

export default App;
