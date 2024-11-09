import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  h2 {
    font-family: "Baloo 2", serif;
    font-weight: bold;
  }
`;
export const ListProducts = styled.div`
  padding: 20px;
  gap: 30px;
  overflow: hidden;
  display: grid;
  align-items: center;
  text-align: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1265px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 965px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  h3 {
    font-size: 1rem;
    font-family: "Baloo 2", serif;
    font-weight: bold;
  }
`;
