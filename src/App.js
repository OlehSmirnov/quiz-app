import './App.css';
export LandingPage from "./LandingPage";
import QuizPage from "./QuizPage";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("landing")
  const [quizDataJSON, setQuizDataJSON] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(json => setQuizDataJSON(json.results))
  }, [])

  function startQuiz() {
    setCurrentPage("quiz")
  }

  return (
      <main>
        {currentPage === "landing" && (
            <LandingPage startQuiz={() => startQuiz()}/>
        )}
        {currentPage === "quiz" && <QuizPage quizDataJSON={quizDataJSON}/>}
      </main>
  );
}