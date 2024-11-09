import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  font-family: "Roboto", serif;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  .Header {
    margin-bottom: 30px;
  }
  .Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .OrderInformation {
    border: 1px solid #8047f8;
    padding: 30px;
    width: 35rem;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 5px 30px 5px 30px;
  }
  p {
    display: flex;
    gap: 15px;
  }
  .Icons {
    background-color: #8047f8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }
  h1 {
    color: #c47f17;
    font-family: "Baloo 2", serif;
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
  }
  button{
    background-color: #dbac2c;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    height: 46px;
    width: 200px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
  }
`;
