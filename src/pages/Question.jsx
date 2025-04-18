import React, { useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { question } from "../assets/questionData";
import { useNavigate, createSearchParams } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("https://img.freepik.com/premium-photo/cat-cartoon-images-background-copy-space_1179130-681134.jpg?semt=ais_hybrid&w=740")
    center/cover no-repeat;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 3rem;
  @media screen and (max-width: 780px) {
    font-size: 2.4rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  button {
    font-size: 2rem;
    width: 400px;
    height: 200px;
    border-radius: 8px;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const navigate = useNavigate();
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  // const handleClickButtonA = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };
  // const handleClickButtonB = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObject = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObject);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObject = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObject);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObject = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObject);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObject = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObject);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };
  // console.log(totalScore);

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((i) =>
      i.id === type ? { id: i.id, score: i.score + num } : i
    );
    setTotalScore(newScore);
    if (question.length === questionNum + 1) {
      const mbti = newScore.reduce(
        (acc, cur) =>
          acc +
          (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    } else {
      setQuestionNum(questionNum + 1);
    }
  };
  return (
    <Container>
      <ProgressBar
        striped
        now={(questionNum / question.length) * 100}
        variant="danger"
      />
      <Wrapper>
        <Title>{question[questionNum].title}</Title>
        <ButtonGroup>
          <Button
            variant="warning"
            onClick={() => handleClickButton(1, question[questionNum].type)}
          >
            {question[questionNum].answerA}
          </Button>
          <Button
            variant="warning"
            onClick={() => handleClickButton(0, question[questionNum].type)}
          >
            {question[questionNum].answerB}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;
