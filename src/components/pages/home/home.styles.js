import styled from "styled-components";
import { Container } from "../../../globalStyles";

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
    flex-direction: column;
  }
`;

export const HomeInfo = styled.div``;

export const HomeTitle = styled.h1`
  text-align: center;
`;

export const HomeDescription = styled.p``;

export const HomeButton = styled.button``;

export const HomeMainImage = styled.img`
  width: 480px;
  height: 480px;
  border-radius: 0.5rem;
  transform: rotate(10deg);

  @media screen and (max-width: 760px) {
    width: 240px;
    height: 240px;
    transform: none;
  }
`;

export const HomeSide = styled.div``;

export const HomeSideImage1 = styled.img``;

export const HomeSideImage2 = styled.img``;

export const HomeSideTitle = styled.h2``;

export const HomeSideDesciption = styled.p``;
