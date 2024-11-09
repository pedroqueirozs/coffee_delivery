import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .CartLocation {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
  }
  .Location {
    background: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme["purple-300"]};
    height: 100%;
    border-radius: 6px;
    padding: 0%.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .Location img {
    background: ${(props) => props.theme["purple-300"]};
  }
  .Cart {
    background-color: ${(props) => props.theme["yellow-100"]};
    height: 100%;
    border-radius: 6px;
    padding: 0%.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
  .Cart span {
    position: absolute;
    top: 0;
    right: 0;
    margin: -9px;
    background-color: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme.white} ;
    padding: 2px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button{
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`;
