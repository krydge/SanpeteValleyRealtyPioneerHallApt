import questions from './questions.json'
import './QAStyle.css'

function Qa() {
    return (
        <div className='QAContainer'>
            <h1>Frequently Asked Questions</h1>
            <ul>
                {questions && questions.map(item => (
                    <li classname="FAQ">
                        <h2 key={item.key} className="question">{item.question}
                        </h2>
                        <p className='Answer'>{item.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Qa;
