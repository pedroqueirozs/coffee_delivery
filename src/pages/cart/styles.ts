import styled from "styled-components";

export const MainCart = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const CompleteContainer = styled.div`
  max-width: 50rem;
  padding: 5px;
  min-height: 10rem;
  display: flex;
  flex-direction: column;

  input {
    background-color: #ededed;
    border: none;
    height: 40px;
    color: #8d8686;
    padding: 5px;
    font-weight: 500;
    border-radius: 5px;
  }

  h3 {
    font-family: "Baloo 2", serif;
    font-size: 1.5rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Address = styled.div`
  padding: 40px;
  width: 100%;
  background-color: #f3f2f2;
  border-radius: 5px;
`;

export const Payment = styled.div`
  padding: 40px;
  width: 100%;
  background-color: #f3f2f2;
  border-radius: 5px;

  .Cards {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    gap: 10px;
  }
  button {
    height: 40px;
    width: 180px;
    display: flex;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: #e6e5e5;
    border: none;
    border-radius: 5px;
    color: #8d8686;
    cursor: pointer;
  }
  button:hover {
    background-color: #e6e5e4;
  }
  button.selected {
    background-color: #8047f8;
    color: #fff;
    border: 1px solid #8047f8;
  }
`;

export const ContainerCart = styled.div`
  background-color: #f3f2f2;
  padding: 30px;
  display: flex;
  min-width: 28rem;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  min-height: 15rem;
  flex-direction: column;
  gap: 20px;

  .Products {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e6e5e5;
  }
  .Products p {
    font-size: 1.3rem;
  }
  .Products span {
    font-family: "Baloo 2", serif;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .AmountButtonRemove {
    display: flex;
    gap: 15px;
  }
  .AmountButtonRemove button {
    border: none;
    padding: 5px;
    border-radius: 5px;
  }
  img {
    height: 64px;
    width: auto;
  }
  button {
    cursor: pointer;
  }
  button.Remove {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .ButtonIncrementAndDecrement {
    background-color: #e6e5e5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    padding: 5px;
    width: 4rem;
    height: 40px;
    border-radius: 5px;
  }
  .ButtonIncrementAndDecrement span {
    margin: 0;
    font-weight: 100;
  }
  .ButtonIncrementAndDecrement button {
    color: #8047f8;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  footer {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }

  footer div {
    display: flex;
    justify-content: space-between;
  }
  footer div span {
    font-size: 1rem;
  }

  footer button {
    background-color: #dbac2c;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    height: 46px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
  }
`;
