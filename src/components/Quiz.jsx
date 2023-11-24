import "react";
import { useState } from "react";
import "./quiz.css";
import logo from "../assets/logo.svg";
import image from "../assets/images.png";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image panda.png";

import image6 from "../assets/4.svg";
import image7 from "../assets/5.svg";
import image8 from "../assets/6.svg";
import image9 from "../assets/7.svg";

export default function Quiz() {
  const questions = [
    {
      questionText: "Comment s'appellent les super-héros de la Wild Paris ?",
      answerOptions: [
        { answerText: "Chaton brutal", isCorrect: false },
        { answerText: "Figma", isCorrect: false },
        { answerText: "Bat-BRIAN && Spider-Alexandre", isCorrect: true },
        { answerText: "Tidus", isCorrect: false },
      ],
    },
    {
      questionText: "Comment s'appelle la dame de fer ?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "La Tour Eiffel", isCorrect: true },
        { answerText: "Margareth Thatcher", isCorrect: true },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Qui chante Emmenez-moi?",
      answerOptions: [
        { answerText: "Charles Aznavour", isCorrect: true },
        { answerText: "Zinedine Zidane", isCorrect: false },
        { answerText: "Bruce Wayne", isCorrect: false },
        { answerText: "Nicolas Cage", isCorrect: false },
      ],
    },
    {
      questionText: "Combien y a t'il de livre d'Harry Potter ?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Quelle est le logo de react ? ",

      answerOptions: [
        {
          answerText: <img className="abricot" src={image3} alt="" />,
          isCorrect: false,
        },
        {
          answerText: <img className="abricot" src={image4} alt="" />,
          isCorrect: false,
        },
        {
          answerText: <img className="abricot" src={image5} alt="" />,
          isCorrect: false,
        },
        {
          answerText: <img src={logo} className="abricot" alt="" />,
          isCorrect: true,
        },
      ],
    },

    {
      questionText: <img src={image}></img>,

      answerOptions: [
        { answerText: "Starmania", isCorrect: false },
        { answerText: "Starbuck's", isCorrect: true },
        { answerText: "Schtroumpf", isCorrect: false },
        { answerText: "Stormtrooper", isCorrect: false },
      ],
    },

    {
      questionText:
        "Quelle famille va coder pendant les fêtes de fin d'année ? ",

      answerOptions: [
        {
          answerText: <img className="jimmy" src={image6} alt="" />,
          isCorrect: false,
        },
        {
          answerText: <img className="jimmy" src={image7} alt="" />,
          isCorrect: false,
        },
        {
          answerText: <img className="jimmy" src={image8} alt="" />,
          isCorrect: true,
        },
        {
          answerText: <img className="jimmy" src={image9} alt="" />,
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="appquizContainer">
      <div className="appquiz">
        {showScore ? (
          <div className="score-section">
            Votre score est de {score} sur {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  key={answerOptions}
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
