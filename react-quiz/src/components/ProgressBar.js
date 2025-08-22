function ProgressBar({ questions, questionIndex, answerIndex }) {
    const total = questions?.length;
    const index = questionIndex + Number(answerIndex !== null);
    const question = questions[questionIndex];

    return (
        <header className="progress">
            <progress max={total} value={index} />
            <p>
                Question {index} / {total}
            </p>
            <p>Question Points: {question.points} </p>
        </header>
    );
}

export default ProgressBar;