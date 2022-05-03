import React from "react";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";

export default function App() {
    const [currentPage, setCurrentPage] = React.useState("landing")
    const [formData, setFormData] = React.useState({})

    function startQuiz(data) {
        setFormData(data)
        setCurrentPage("quiz")
    }

    return (
        <main>
            {currentPage === "landing" && (
                <LandingPage startQuiz={(data) => startQuiz(data)}/>
            )}
            {currentPage === "quiz" && <QuizPage formData={formData} restart={() => setCurrentPage("landing")}/>}
        </main>
    );
}