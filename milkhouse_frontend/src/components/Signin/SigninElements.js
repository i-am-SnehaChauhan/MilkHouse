import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
height: 1200%;

bottom: 0;
left: 0;
right: 0;
top: 20;
padding: 100px;
padding-top: 130px;
padding-bottom: 60px;
z-index: 0;
overflow: hidden;
background:var(--bg-clr);
`;

export const FormHead = styled.h3`
  text-align: center;
  justify-content: center;
  padding: 3px;
  font-weight:bold;
  margin-bottom: 30px;
  width: 100%;
  @media (min-width: 992px) {
        width: 50%;
      }
`

export const FormSection = styled.section`
  display: flex;
  justify-content: space-between;
`

export const LeftData = styled.div`
  width: 100%;
  padding: 6px;
`

export const RightData = styled.div`
  width: 100%;
  margin-top: 3px;
`
export const FormP = styled.p`
  margin-top: 5px;
  text-align: match-parent;
  align-items: center;

`

