function FinishScreen({ score, maxPoints, dispatch }) {
  return (
    <div>
        <h2>Quiz Finished!</h2>
        <p className="result">
            You scored {score} out of {maxPoints} points.
        </p>
        <button className="btn btn-ui" onClick={() => dispatch({ type: 'restartQuiz' })}>
            Restart Quiz
        </button>
    </div>
  );
}

export default FinishScreen;