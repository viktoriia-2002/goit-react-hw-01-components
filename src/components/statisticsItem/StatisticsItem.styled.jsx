import styled from 'styled-components';

export const Statistics = styled.div`
  background-color: white;
  margin: 50px auto;
  max-width: 320px;
  width: 100%;
  text-align: center;
  padding-top: 30px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 22px;
  color: darkgray;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: lightgrey;
  padding-left: 0;
`;

export const Item = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-bottom: 20px;
  padding-top: 13px;
  width:100%;

  &:nth-child(1) {
    background-color: red;
  }

  &:nth-child(2) {
    background-color: green;
  }

  &:nth-child(3) {
    background-color: purple;
  }

  &:nth-child(4) {
    background-color: yellow;
  }

  &:nth-child(5) {
    background-color: pink;
  }
`;
