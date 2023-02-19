import styled from 'styled-components';

export const TransactionTable = styled.table`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  font-size: 18px;
  line-height: 2;
  width: 900px;
  text-align: center;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: blue;
  text-transform: uppercase;
  color: white;
  border: 1px solid white;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const TableData = styled.td`
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:first-child {
    text-transform: capitalize;
  }
`;
