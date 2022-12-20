import questions from './questions.json'

function Qa() {
    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <ul>
                {questions && questions.map(item => (
                    <div>
                        <b><li key={item.key} className="question">{item.question}</li></b>
                        <p className='Answer'>{item.answer}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Qa;
