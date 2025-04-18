import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
const { Kakao } = window;
const KakaoShareButton = () => {
  const url = "https://catmbtl.netlify.app/";
  const resultUrl = window.location.href;
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("b66f3f3ad94dab602ffb859e2432af61");
    Kakao.isInitialized();
  }, []);
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description:
          "예비집사님이 고양이를 키운다면 잘 맞는 고양이는 먼치킨입니다.",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "테스트하러 가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button variant="warning" onClick={shareKakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareButton;
