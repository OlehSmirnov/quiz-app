import React from "react";
import "./QuizBlock.css";
import { nanoid } from "nanoid";

export default function QuizPage(props) {
    const [answersData, setAnswersData] = React.useState(loadAnswersData());

    function htmlDecode(input) {
        const doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    //load answers in state and mix them up
    function loadAnswersData() {
        const answers = [];
        for (let i = 0; i < props.incorrect_answers.length; i++) {
            answers.push({
                body: props.incorrect_answers[i],
                correct_answer: false,
                id: nanoid(),
                selected: false
            });
        }
        answers.splice(Math.floor(Math.random() * answers.length + 1),
        0, {
            body: props.correct_answer,
            id: nanoid(),
            correct_answer: true,
            selected: false
        });
        return answers;
    }

    function selectAnswer(id) {
        props.selectAnswer(props.id, checkCorrectAnswer())
        setAnswersData(prevAnswers => prevAnswers.map(answer => {
            return (
                answer.id === id ? {
                    ...answer,
                    selected: !answer.selected
                } : {
                    ...answer,
                    selected: false
                }
            );
        }))
    }

    function checkCorrectAnswer() {
        let correct = false;
        (answersData.map(quizBlock => {
            if (quizBlock.correct_answer === true && quizBlock.selected)
                correct = true;
        }));
        return correct;
    }
   
    const answers = answersData.map(answer => {  
        return (
            <Answer key={answer.id} selectAnswer={() => selectAnswer(answer.id)}
                body={htmlDecode(answer.body)} id={answer.id} selected={answer.selected}/>
        );
    })
 
    return (
        <section>
            <h1>{htmlDecode(props.question)}</h1>
            <div className="questions_container" onClick={() => props.selectAnswer(props.id, checkCorrectAnswer())}>
                {answers}
            </div>
        </section>
    )
}