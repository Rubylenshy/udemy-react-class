export default function StartScreen({ questionsCount = 0, dispatch }) {
  return (
    <div className="tart">
      <h2>Welcome to the Quiz!</h2>
      <h3>
        You will be presented with {questionsCount} questions to test our React mastery.
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'startQuiz' })}
      >
        Let's have it!
      </button>
    </div>
  );
}