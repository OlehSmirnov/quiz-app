import React from "react";

export default function Landing(props) {
  return (
    <div>
      <h1>Quizzical</h1>
      <h3>Take this short 5 questions quiz!</h3>
      <button onClick={props.startQuiz}>Start quiz</button>
    </div>
  )
}
