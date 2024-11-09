import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
  justify-content: space-between;

  .Infos {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  h1 {
    font-family: "Baloo 2", serif;
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 1rem;
  }
  .Tags {
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .Tags-p {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    display: flex;
  }
  .Tags-p p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .Tags-p span {
    background-color: red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
