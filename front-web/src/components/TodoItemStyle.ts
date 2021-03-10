import styled, { css } from 'styled-components';

export const TodoContainer = styled.div`
  padding: 20px 15px;
  display: flex;
  background-color: #b499e8;
  border-bottom: solid 1px black;
`

export const DelBtn = styled.button`
  border: none;
  outline: none;
  background-color: #fa433c;
  color: #fff;
  width: 25px;  
  height: 25px;
  border-radius: 50%;
  margin: 0 8px 0 0;
  cursor: pointer;
  transition: ease 0.2s;

  &:hover {
    background-color: #d40c04;
  }
`

export const CheckBtn = styled.button`
  border: none;
  outline: none;
  background-color: green;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: auto;
  justify-self: flex-end;
  align-self: flex-end;
  cursor: pointer;
`
export const TodoName = styled.h4`
  color: #1f1e1e;
`

export const Todo = styled.div`
  display: flex;
  flex-direction: column;
`