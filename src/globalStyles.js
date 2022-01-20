import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const BigImage = styled.img`
  width: 480px;
  height: 480px;
  border-radius: 0.5rem;

  @media screen and (max-width: 991px) {
    width: 350px;
    height: 350px;
    transform: none;
  }
`;

export const SmallImage = styled.img`
  flex-basis: 350px;
  height: 350px;
  border-radius: 2rem;

  @media screen and (max-width: 991px) {
    width: 350px;
    height: 280px;
    flex-wrap: wrap;
    margin: 2em 0;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${({bg}) => bg}
`;
