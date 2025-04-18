import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resultData } from "../assets/resultData";
import KakaoShareButton from "../components/KakaoShareButton";

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
`;
const Title = styled.div`
  font-size: 2.4rem;
`;
const LogoImg = styled.div`
  img {
    width: 350px;
    height: 350px;
    border: 4px solid var(--border-color);
    pointer-events: none;
    object-fit: cover;
  }
`;
const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  button {
    font-size: 1.6rem;
  }
`;
const Result = () => {
  const [resultD, setResultD] = useState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  useEffect(() => {
    const result = resultData.find((item) => item.best === mbti);
    setResultD(result);
  }, [mbti]);
  const handleClickButton = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <LogoImg>
          <img className="rounded-circle" src={resultD?.image} alt="mainCat" />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 <br />
          {mbti}형 {resultD?.name} 고양이입니다.
        </Desc>
        <ButtonGroup>
          <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
          <KakaoShareButton />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
