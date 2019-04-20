import styled from "styled-components";

export default () => (
  <div>
    <Title>Market Data Company</Title>
  </div>
);

const Title = styled.h1`
  color: ${p => {
    return p.theme.mainPurple;
  }};
`;
