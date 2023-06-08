import styled from 'styled-components';

export const TableEl = styled.table`
  width: 600px;
  background-color: white;
  margin: auto;
`;
export const RowEl = styled.tr`
  background-color: yellow;
  text-transform: uppercase;
`;

export const TdEl = styled.td`
  text-align: center;
  padding: 7px;
  text-transform: capitalize;
`;

export const ThEl = styled.th`
padding: 7px;
`;

export const TrEl = styled.tr`
  border: 1px solid #ddd;
  background-color: red;
  &:nth-child(even) {
    background-color: yellow;
  }

  &:nth-child(odd) {
    background-color: lightblue;
  }
`;
