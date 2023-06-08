import styled from 'styled-components';

export const List = styled.ul`
  // list-style: none;
  // display: flex;
  // justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  width: 300px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 3px 3px 5px darkslategrey;
`;

export const SpanItem = styled.span`
  margin-right: 12px;
`;

export const NameItem = styled.span`
  margin-left: 12px;
`;


export const Status = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ className }) => (className === 'active' ? 'green' : 'red')};
`;
