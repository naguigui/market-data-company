import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const ResearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 93px;
  ${breakpoint("desktop")`
    margin-bottom: 160px;
  `}
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const HeaderTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  color: ${props => props.theme.colors.black};
  margin: 0 0 13px 0;
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
  `}
`;

export const HeaderDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.black};
  margin: 0;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    max-width: 776px;
  `}
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  ${breakpoint("desktop")`
    flex-direction: row;
    margin-bottom: 35px;
  `}
`;

export const CardWrapper = styled.div`
  margin-bottom: 20px;
  ${breakpoint("desktop")`
    margin-bottom: 0;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  `}
`;
