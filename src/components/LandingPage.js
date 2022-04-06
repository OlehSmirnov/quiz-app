import React from "react";

export default function Landing(props) {
    return (
        <main className="landing-page">
            <h1>Quizzical</h1>
            <h3>Take this short 5 questions quiz!</h3>
            <button onClick={props.startQuiz}>Start quiz</button>
        </main>
    )
}
