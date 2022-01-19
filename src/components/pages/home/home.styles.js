import styled from "styled-components";
import { Container, BigImage, SmallImage } from "../../../globalStyles";

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: #101522;
  color: #fff;
  padding-top: 2em;
`;

export const HomeContainer = styled(Container)`
  ${Container}
`;

export const HomeMainContainer = styled.div`
  display: flex;

  @media screen and (max-width: 760px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const HomeInfo = styled.div``;

export const HomeTitle = styled.h1`
  text-align: center;
`;

export const HomeDescription = styled.p``;

export const HomeButton = styled.button``;

export const HomeMainImage = styled(BigImage)`
  transform: rotate(10deg);

  ${BigImage};
  @media screen and (max-width: 760px) {
    transform: none;
  }
`;

export const HomeSideContainer = styled.div`
  display: flex;
  padding-top: 3em;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeSideImage1 = styled(SmallImage)`
  ${SmallImage}
`;

export const HomeSideImage2 = styled(SmallImage)`
  ${SmallImage}
`;

export const HomeSideInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  text-align: center;

  @media screen and (max-width: 760px) {
    padding: 2em 0;
  }
`;

export const HomeSideTitle = styled.h2``;

export const HomeSideDesciption = styled.p``;
