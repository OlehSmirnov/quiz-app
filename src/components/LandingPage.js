import React, {useState} from "react";

export default function Landing(props) {

  const [category, setCategory] = useState("")
  const [questionsAmount, setQuestionsAmount] = useState(5)
  const [difficulty, setDifficulty] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.startQuiz({questionsAmount, category, difficulty})
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleQuestionsAmount = (e) => {
    setQuestionsAmount(e.target.value)
  }

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  return (
    <main className="landing-page">
      <h1>Quizzical</h1>
      <form onSubmit={handleSubmit} className="form-api">
        <label htmlFor="trivia_amount">Number of Questions:</label>
        <input type="number" name="trivia_amount" min="1" max="50" onChange={handleQuestionsAmount} value={questionsAmount}/>
        <label htmlFor="trivia_category">Select Category: </label>
        <select name="trivia_category" className="form-control" onChange={handleCategory}>
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        <label htmlFor="trivia_difficulty">Select Difficulty: </label>
        <select name="trivia_difficulty" className="form-control" onChange={handleDifficulty}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button>Start quiz</button>
      </form>
    </main>
  )
}