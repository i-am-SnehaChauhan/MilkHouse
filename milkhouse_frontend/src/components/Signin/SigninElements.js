import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background: linear-gradient(to right, #9900ff, #cc80ff);
`;

export const FormHead = styled.h1`
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-left: 80px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const FormSection = styled.section`
  display: flex;
  min-width: 400px;
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
  @media (min-width:500px) {
    display: row;
  }
`;

export const LeftData = styled.div`
  min-width: 400px;
  height: fit-content;
  width: fit-content;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 30px;
`;

export const RightData = styled.div`
  width: 100%;
  margin: 3px;
  margin-left: 15px;
  align-items: center;
`;
export const FormP = styled.p`
  margin-top: 5px;
  text-align: match-parent;
  align-items: center;
`;
