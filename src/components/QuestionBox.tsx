import {Question} from '../data';

type PropsQuestionBox={
    question:Question;
    openQuestions:{[id:number]:boolean};
    setOpenQuestions:({})=>void;
}
const QuestionBox=({question, openQuestions, setOpenQuestions}:PropsQuestionBox)=>{
    const isOpen=openQuestions[question.id];
    const toggleQuestionView=()=>{
setOpenQuestions({...openQuestions,[question.id]:(!isOpen)})
    }
    return <div className="questions-box-inner">
        <div className="left-side">
            <h4>{question.title}</h4>
            {isOpen&& <p>{question.info}</p>}
        </div>
        <div className="right-side" onClick={toggleQuestionView}>{isOpen?"-":"+"}</div>
    </div>
}
export default QuestionBox;