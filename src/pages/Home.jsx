import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("https://img.freepik.com/premium-photo/cat-cartoon-images-background-copy-space_1179130-681134.jpg?semt=ais_hybrid&w=740")
    center/cover no-repeat;
`;
const Header = styled.div`
  color: var(--accent-color);
  font-size: 4rem;
  margin-bottom: 20px;
`;
const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  button {
    font-size: 1.6rem;
  }
`;
const Title = styled.div`
  font-size: 2.4rem;
`;
const LogoImg = styled.div`
  img {
    width: 350px;
    border: 4px solid var(--border-color);
    pointer-events: none;
  }
`;
const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
`;
const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src="/cat/ggompang.jpeg"
            alt="mainCat"
          />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
