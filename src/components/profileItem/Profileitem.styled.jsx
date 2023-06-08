import styled from 'styled-components';

export const ProfileEl = styled.div`
  background-color: white;
  margin: 50px auto;
  max-width: 320px;
  width: 100%;
  text-align: center;
  padding-top: 30px;
`;

export const Description = styled.div`
  // display: flex;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: lightgrey;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const Quantity = styled.span`
  font-size: 14px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;
