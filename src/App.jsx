import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Quiz from "./components/Quiz";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      question: "What is the name of Harry Potter's pet",
      answers: [
        {
          text: "Henry",
          correct: false,
        },
        {
          text: "Hedwig",
          correct: true,
        },
        {
          text: "Hagrid",
          correct: false,
        },
        {
          text: "Mirin",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is Harry's Patronus?",
      answers: [
        {
          text: "A Stag",
          correct: true,
        },
        {
          text: "An owl",
          correct: false,
        },
        {
          text: "A unicorn",
          correct: false,
        },
        {
          text: "A rabbit",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which is not a method of transport for wizards?",
      answers: [
        {
          text: "Floo Powder",
          correct: false,
        },
        {
          text: "A Portkey",
          correct: false,
        },
        {
          text: "Apparition",
          correct: false,
        },
        {
          text: "Aparecium",
          correct: true,
        },
      ],
    },
    {
        id: 3,
        question: "Who is the Half Blood Prince?",
        answers: [
          {
            text: "Severus Snape",
            correct: true,
          },
          {
            text: "Draco Malfoy",
            correct: false,
          },
          {
            text: "Tom Riddle",
            correct: false,
          },
          {
            text: "Harry Potter",
            correct: false,
          },
        ],
      },
      {
        id: 4,
        question: "Other than Harry, What other young witch/wizard could have been the object of the prophecy regarding Voldemort's downfall?",
        answers: [
          {
            text: "Hermione Granger",
            correct: false,
          },
          {
            text: "Neville Longbottom",
            correct: true,
          },
          {
            text: "Dean Thomas",
            correct: false,
          },
          {
            text: "Luna Lovegood",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "Who poses as Mad-Eye Moody, Harry's 4th year Defense Against the Dark Arts professor?",
        answers: [
          {
            text: "Voldemort",
            correct: false,
          },
          {
            text: "Sirius Black",
            correct: false,
          },
          {
            text: "Peter Pettigrew",
            correct: false,
          },
          {
            text: "Barty Crouch Jr",
            correct: true,
          },
        ],
      },
      {
        id: 6,
        question: "Who are the parents of Ron Weasley?",
        answers: [
          {
            text: "Aurthur and Molly",
            correct: true,
          },
          {
            text: "Vernon and Petunia",
            correct: false,
          },
          {
            text: "Lilly and James",
            correct: false,
          },
          {
            text: "Mindy and Lucas",
            correct: false,
          },
        ],
      },
      {
        id: 7,
        question: "Who is the Godfather of Harry?",
        answers: [
          {
            text: "Peter Pettigrew",
            correct: false,
          },
          {
            text: "Remus Lupin",
            correct: false,
          },
          {
            text: "Sirius Black",
            correct: true,
          },
          {
            text: "Severus Snape",
            correct: false,
          },
        ],
      },
      {
        id: 8,
        question: "What position does Harry play on his Quidditch team?",
        answers: [
          {
            text: "Seeker",
            correct: true,
          },
          {
            text: "Bludger",
            correct: false,
          },
          {
            text: "Keeper",
            correct: false,
          },
          {
            text: "Chaser",
            correct: false,
          },
        ],
      },
      {
        id: 9,
        question: "How does Harry catch his first snitch?",
        answers: [
          {
            text: "With his broom",
            correct: false,
          },
          {
            text: "In his hat",
            correct: false,
          },
          {
            text: "With his mouth",
            correct: true,
          },
          {
            text: "With his feet",
            correct: false,
          },
        ],
      },
      {
        id: 10,
        question: "Who killed Professor Dumbledore?",
        answers: [
          {
            text: "Fenrir Greyback",
            correct: false,
          },
          {
            text: "Draco Malfoy",
            correct: false,
          },
          {
            text: "Bellatrix Lestrange",
            correct: false,
          },
          {
            text: "Severus Snape",
            correct: true,
          },
        ],
      },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "10" },
        { id: 2, amount: "20" },
        { id: 3, amount: "30" },
        { id: 4, amount: "40" },
        { id: 5, amount: "50" },
        { id: 6, amount: "60" },
        { id: 7, amount: "70" },
        { id: 8, amount: "80" },
        { id: 9, amount: "90" },
        { id: 10, amount: "100" },
       
      ],
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber===11? (
              <h1 className="endText">Congralutions!! Your Score is {earned}.</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
        
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            
          </div>
        </>
      )}
    </div>
  );
}

export default App;