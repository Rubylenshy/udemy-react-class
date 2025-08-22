import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import MainQuiz from './components/MainQuiz';
import Loader from './components/Loader';
import Error from './components/Error';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import ProgressBar from './components/ProgressBar';
import FinishScreen from './components/FinishScreen';

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  questionIndex: 0,
  answerIndex: null,
  score: 0,
  timeLeft: 30,
  highScore: Number(localStorage.getItem('highScore')) || 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };
    case 'startQuiz':
      return {
        ...state,
        status: 'active'
      };
    case 'finishQuiz':
      const highScore = state.score > state.highScore ? state.score : state.highScore;
      localStorage.setItem('highScore', highScore);

      return {
        ...state,
        status: 'finished',
        highScore
      };
    case 'restartQuiz':
      return {
        ...state,
        status: 'ready'
      };
    case 'selectAnswer':
      const question = state.questions[state.questionIndex];
      const isCorrect = action.payload === question.correctOption;

      return {
        ...state,
        answerIndex: action.payload,
        score: isCorrect ? state.score + question.points : state.score,
      };
    case 'nextQuestion':
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        answerIndex: null
      };
    case 'updateQuestionIndex':
      return {
        ...state,
        questionIndex: action.payload
      };
    case 'updateTimeLeft':
      return {
        ...state,
        timeLeft: action.payload
      };
    case 'updateQuizResults':
      return {
        ...state,
        quizResults: action.payload
      };
    default:
      throw new Error('Unknown action');
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, questionIndex, answerIndex, score, selectedAnswers, timeLeft, quizResults } = state;
  const totalQuestions = questions.length ;

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="app">
      <Header />

      <MainQuiz>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen questionsCount={totalQuestions} dispatch={dispatch} />}
        {status === 'active' && <>
          <ProgressBar questions={questions} questionIndex={questionIndex} answerIndex={answerIndex} />
          
          <Question question={questions[questionIndex]} questionIndex={questionIndex} dispatch={dispatch} answerIndex={answerIndex} totalQuestions={totalQuestions} />
        </>
        }
        {status === 'finished' && <FinishScreen score={score} maxPoints={questions.reduce((acc, cur) => acc + cur.points, 0)} dispatch={dispatch} />}
      </MainQuiz>
    </div>
  );
}

export default App;
