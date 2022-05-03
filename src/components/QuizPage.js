import React, {useState} from "react";
import QuizBlock from "./QuizBlock";

export default function QuizPage({restart, formData}) {
  const [quizDataJSON, setQuizDataJSON] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [showAnswers, setShowAnswers] = React.useState(false)
  const [answers, setAnswers] = React.useState([])
  const [notEnoughQuestions, setNotEnoughQuestions] = useState(false)
  const [numOfCorrectAnswers, setNumOfCorrectAnswers] = React.useState(0)

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await fetch(`https://opentdb.com/api.php?type=multiple&
                amount=${formData.questionsAmount}&
                category=${formData.category}&
                difficulty=${formData.difficulty}`)
        const json = await res.json()
        if (json.response_code === 1) {
          setNotEnoughQuestions(true)
        }
        setQuizDataJSON(json.results)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  function checkAnswers() {
    let num = 0
    for (let i = 0; i < quizDataJSON.length; i++) {
      const currentItem = quizDataJSON[i]
      if (answers[currentItem.question] === quizDataJSON[i].correct_answer)
        num++
    }
    setShowAnswers(true)
    setNumOfCorrectAnswers(num)
  }

  const quizBlocks = quizDataJSON.map(item => {
    return <QuizBlock
      question={item.question}
      correct_answer={item.correct_answer}
      incorrect_answers={item.incorrect_answers}
      showAnswers={showAnswers}
      checkAnswers={checkAnswers}
      setAnswers={setAnswers}
      key={item.question}/>
  })

  if (loading) return <h2>Loading...</h2>

  if (notEnoughQuestions) return <>
    <h2>The API doesn't have enough questions for your query!</h2>
    <button onClick={restart}>Try again</button>
  </>

  return (
    <main className="quiz-page">
      {quizBlocks}
      <footer>
        {!showAnswers ?
          <button onClick={checkAnswers}>Check answers</button>
          :
          <>
            <h3>{`You scored ${numOfCorrectAnswers}/${quizDataJSON.length} answers`}</h3>
            <button onClick={restart}>Play again</button>
          </>
        }
      </footer>
    </main>
  )
}