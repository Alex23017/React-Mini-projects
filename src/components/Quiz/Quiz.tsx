/* eslint-disable jsx-a11y/alt-text */
import questions from "./Questions";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { answerQuestion, handleRestart } from "../../redux/quizSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type Icorrect = {
  correct: number;
  handleRestart: () => void;
};




function Result({ correct }: Icorrect) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали - {correct} из 3</h2>
      <button onClick={() => dispatch(handleRestart())}>Попробовать снова</button>
    </div>
  );
}

interface IGame {
  step: number;
  question: {
    title: string;
    variants: string[];
    correct: number;
  };
  onClickVarian: (index: number) => void;
}

function Game({ step, question, onClickVarian }: IGame) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVarian(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function Quiz() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(handleRestart());
    }
  }, [location.pathname, dispatch]);

  const step = useSelector<RootState, number>((state) => state.quiz.step);
  const question = questions[step];
  const correct = useSelector<RootState, number>((state) => state.quiz.correct);
  const onClickVarian = (index: number) => {
    dispatch(answerQuestion(index));
  };

  return (

    <div className="container-quiz">
      <div className="App-quiz">
        <h1> <strong>Опросник:</strong></h1>
      {step !== questions.length ? (
        <Game question={question} onClickVarian={onClickVarian} step={step} />
      ) : (
        <Result correct={correct} handleRestart={handleRestart} />
      )}
      </div>
      </div>

  );
}

export default Quiz;
