import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const HomeContainer = styled(Container)`
  ${Container}
`;

export const HomeTitle = styled.h1`
  color: black;
  text-align: center;
`;
