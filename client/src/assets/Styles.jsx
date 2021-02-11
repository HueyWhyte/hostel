import styled from "styled-components";
import { device } from "./mediaScreens";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const ComplaintCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  border-radius: 12px;
  padding: 4px;
  margin: 10px 5px;

  @media ${device.mobile} {
    width: 89vw;
  }

  @media ${device.laptop} {
    width: 50vw;
  }
`;

export const ResolveButton = styled.p`
  background-color: blue;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 19px;
  padding: 7px;
  margin: 6px;
  margin-left: auto;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  > input {
    margin: 5px 0;
    height: 30px;
    border-radius: 12px;
    border: 1px solid grey;
    padding: 1px 10px;
  }

  @media ${device.mobile} {
    width: 89vw;
  }

  @media ${device.laptop} {
    width: 50vw;
  }
`;
