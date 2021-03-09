import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  height: 80vh;
  background-color: #292929;
  border-radius: 6px;
`;

export const CloseCreateTodo = styled.button`
  border: none;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1A1919;
  color: #FBCD68;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  top: 75%;
  left: 48.5%;
  transition: ease 0.2s;

  &:hover {
    background-color: #141414;
  }
`
