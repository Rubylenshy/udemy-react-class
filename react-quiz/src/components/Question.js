function Options({ question, dispatch, answerIndex }) {
  const hasSelectedAnswer = answerIndex !== null;

  return (
    <ul className="options">
      {question.options.map((option, index) => (
          <button
            key={index}
            className={`btn btn-option ${answerIndex === index ? 'answer' : ''}
              ${hasSelectedAnswer ? (index === question.correctOption ? 'correct' : 'wrong') : ''}`
            }
            disabled={hasSelectedAnswer}
            onClick={() => dispatch({ type: 'selectAnswer', payload: index })}
          >
            <span>{option}</span>
            {hasSelectedAnswer && index === question.correctOption && <span>✔</span>}
          </button>
      ))}
    </ul>
  ); 
}

function Question({ question, questionIndex, dispatch, answerIndex, totalQuestions }) {
  return (
    <div >
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answerIndex={answerIndex} />

      <div className="question-footer">
        { questionIndex + 1 !== totalQuestions ? 
          <button
            className="btn btn-ui"
            disabled={answerIndex === null}
            onClick={() => dispatch({ type: 'nextQuestion' })}
          >
            Next
          </button>
        : 
          <button
            className="btn btn-ui"
            disabled={answerIndex === null}
            onClick={() => dispatch({ type: 'finishQuiz' })}
          >
            Finish
          </button>
        }
      </div>
    </div>
  );
}

export default Question