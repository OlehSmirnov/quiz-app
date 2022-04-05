import React from "react";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";

export default function App() {
    const [currentPage, setCurrentPage] = React.useState("landing")

    return (
        <main>
            {currentPage === "landing" && (
                <LandingPage startQuiz={() => setCurrentPage("quiz")}/>
            )}
            {currentPage === "quiz" && <QuizPage restart={() => setCurrentPage("landing")}/>}
        </main>
    );
}