import React from "react";

export default function QuizBlock({question, correct_answer, incorrect_answers, setAnswers, showAnswers}) {
    const [selectedAnswer, setSelectedAnswer] = React.useState("")
    const [allAnswers] = React.useState(mixAnswers())

    function htmlDecode(input) {
        const doc = new DOMParser().parseFromString(input, "text/html")
        return doc.documentElement.textContent
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * (incorrect_answers.length + 1))
    }

    function mixAnswers() {
        const allAnswers = [...incorrect_answers]
        allAnswers.splice(getRandomNumber(), 0, correct_answer)
        return allAnswers
    }

    function applyStyles(answer) {
        if (showAnswers) {
            if (answer === correct_answer)
                return {backgroundColor: "#94D7A2", pointerEvents: "none"}
            if (answer === selectedAnswer && answer !== correct_answer)
                return {backgroundColor: "#F8BCBC", opacity: "50%", pointerEvents: "none"}
            return {opacity: "50%", pointerEvents: "none"}
        }
        if (answer === selectedAnswer)
            return {backgroundColor: "#D6DBF5"}
    }

    function selectAnswer(answer) {
        setSelectedAnswer(answer)
        setAnswers(prevAnswers => {
            return {
                ...prevAnswers,
                [question]: answer
            }
        })
    }

    const answers = allAnswers.map(answer => {
        return (
            <div key={answer} className="answer" onClick={() => selectAnswer(answer)}
                 style={applyStyles(answer)}>
                {htmlDecode(answer)}
            </div>
        )
    })

    return (
        <section>
            <h1>{htmlDecode(question)}</h1>
            <div className="answers_container">
                {answers}
            </div>
        </section>
    )
}