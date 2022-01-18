import styled from "styled-components";
import { Container } from "./globalStyles";

// export const BodyContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   justify-content: space-between;

//   ${Container}
// `;

export const BodyContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  /* justify-content: space-between; */
  transform: translate(-100%, 50%);
  padding: 0 30px;
`;
