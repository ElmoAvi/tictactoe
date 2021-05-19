import styled from 'styled-components';
type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps> `
  display: flex;
  flex-direction: row;
//   border: 1px solid #1e1e1e;
  background: #eee;
  gap: ${(props) => props.gap}px;
`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  font-size: 2.5em;
  color: red;
  margin: 0 1em;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;
