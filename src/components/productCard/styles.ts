import styled from "styled-components";

export const ProductContainer = styled.div`
  height: 20rem;
  width: 16rem;
  background-color: #f3f2f2;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  gap: 7px;

  .ImgDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ImgDescription img {
    height: 120px;
    width: 120px;
    margin-top: -15px;
  }
  .ImgDescription .Tags {
    margin-top: 10px;
    gap: 4px;
    display: flex;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  .ImgDescription .Tags span {
    background-color: ${(props) => props.theme["yellow-100"]};
    height: 25px;
    padding: 3px;
    border-radius: 8px;
    color: ${(props) => props.theme["yellow-300"]};
  }
  h3 {
    font-size: 1.3rem;
  }
  footer {
    width: 100%;
    margin-top: 35px;
    display: flex;
    gap: 8px;
    justify-content: space-around;
    align-items: center;
  }

  footer .Price {
    font-family: "Baloo 2", serif;
    font-size: 1.5rem;
    font-weight: bold;
  }
  footer div {
    background-color: #e6e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 5px;
    width: 4rem;
    border-radius: 5px;
  }
  footer button {
    color: ${(props) => props.theme["purple-300"]};
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
