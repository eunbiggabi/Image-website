import styled from "styled-components";
import { Container, BigImage, SmallImage, Button } from "../../../globalStyles";

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

  @media screen and (max-width: 991px) {
    margin-top: 2em;
  }
`;

export const HomeDescription = styled.p`
  margin-top: 2rem;
`;

export const HomeButton = styled(Button)`
  ${Button}
`;

export const HomeMainImage = styled(BigImage)`
  transform: rotate(10deg);

  ${BigImage};
  @media screen and (max-width: 760px) {
    transform: none;
  }
`;

export const HomeSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeSideImage1 = styled(SmallImage)`
  ${SmallImage}
`;

export const HomeSideImage2 = styled(SmallImage)`
  ${SmallImage};
  order: 3;
`;

export const HomeSideImage3 = styled(SmallImage)`
  order: 2;
  ${SmallImage}
`;
