import './App.css';
import questions from './data';
import QuestionBox from './components/QuestionBox';
import {useEffect, useState} from 'react';
type TypeOpenQuestions={[id:number]:boolean};
function App() {
    const [openQuestions,setOpenQuestion]=useState({});
    useEffect(()=>{
        const initialStatus:TypeOpenQuestions={};
        questions.map((q)=>{
            initialStatus[q.id]=false;
        })
        setOpenQuestion(initialStatus);

    },[])

    return (
        <div className="App">
            <div className="container">
                <div className="up-left-box"/>
                <div className="down-right-boxes">
                    <div className="down-right-purple-inner-box"/>
                </div>
                <div className="main-box">
                    <div className="main-box-title">
                        <h1>Questions and answers about login</h1>
                    </div>
                    <div className="main-box-questions">
                        {questions.map((q,key)=>{
                            return <QuestionBox key={key} question={q} setOpenQuestions={setOpenQuestion} openQuestions={openQuestions}/>
                        })}
                    </div>






                    </div>
                </div>


            </div>

    );
}

export default App;
