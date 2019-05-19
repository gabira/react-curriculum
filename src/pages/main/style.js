import styled from "styled-components";

const borderStyle = "1px solid #b4b4b480";

export const Header = styled.div`
  border-bottom: ${borderStyle};
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`;

export const LeftColumn = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  /* background: red; */
`;

export const RightColumn = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  border-left: ${borderStyle};
  padding-left: 10px;
`;

export const Footer = styled.div`
  margin-top: 10px;
  border-top: ${borderStyle};
  padding-top: 10px;
`;
