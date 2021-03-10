import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  height: 90vh;
  background-color: #F8F8F8;
  border-radius: 6px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 50%);
`;

export const Header = styled.div`
  height: 100px;
  background-color: #9734FC;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  padding: 15px 0;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 15px;
`

export const FormItem = styled.div`
  width: 45%;
  margin: 0 15px 10px 0;
`

export const FormInput = styled.input`
  padding: 20px 30px;
  border: none;
  border-radius: 6px;
  background-color: #E9E8E2;
  color: #242424;
  width: 100%;

  &:focus {
    outline: none;
    border: solid 1px #393340; 
  }
`

export const FormBtn = styled.button`
  flex: 100%;
  width: 80%;
  padding: 15px 0;
  height: 55px;
  cursor: pointer;
  background-color: #9734FC;
  color: #e8e8e8;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  transition: ease 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #8b11f2;   
  }
`