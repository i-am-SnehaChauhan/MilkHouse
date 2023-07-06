import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFD557;
    padding: 5rem;
    margin-bottom: 0rem;
`;

export const Containertitle = styled.h1`
    font-weight: bold;
    ${'' /* align-items: center; */}
    display: flex;
    justify-content: center;
`;
export const FeaturesCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  max-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px gray;
  color: var(--text-clr);
  transition: all 0.2s ease-in-out;
  background-color: white;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const FeaturesWrapper = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 15px 30px;
  ${'' /* color: white; */}
  ${'' /* background-color: white; */}

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FeaturesIcon = styled.img`
  height: 170px;
  width: 180px;
  margin-bottom: 10px;
  border: 0.5px solid gray;
  box-shadow: 3px 3px 3px gray;
`;

export const FeaturesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-clr);

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FeaturesH2 = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const FeaturesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;