import styled from "styled-components";

export const SessionTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  i {
    min-width: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;

  li {
    margin-bottom: 15px;

    &.reduce-margin {
      margin-bottom: 5px;
    }

    i {
      min-width: 21px;
    }
    strong {
    }
    p {
    }
    span {
      font-size: 12px;
      font-style: italic;
    }
  }
`;

export const SkillsList = styled.ul`
  list-style: none;

  li {
    span {
      margin-left: 5px;
    }
  }
`;
