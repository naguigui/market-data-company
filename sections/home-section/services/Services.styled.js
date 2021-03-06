import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ServicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-bottom: 83px;
	${breakpoint('desktop')`
    margin-bottom: 160px;
  `}
`

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 43px;
	${breakpoint('desktop')`
    margin-bottom: 49px;
    max-width: 780px;
  `}
`

export const HeaderTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	margin: 0 0 20px 0;
	${breakpoint('tablet')`
    font-size: 36px;
    line-height: 48px;
  `}
`

export const HeaderDescription = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 16px;
	line-height: 22px;
	margin: 0;

	${breakpoint('tablet')`
    font-size: 24px;
    line-height: 30px;
  `}
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 0;

	${breakpoint('tablet')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 16px;
  `}
`

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 26px;

	${breakpoint('tablet')`
    flex-direction: row;
    align-items: flex-start;
    width: 48%;
    margin-bottom: 64px;
  `}
`

export const CardImage = styled.img`
	margin-top: 6px;
	margin-bottom: 20px;
	width: 100px;
	height: 100px;

	${breakpoint('tablet')`
	width: 80px;
	height: 80px;
    margin-right: 24px;
    margin-bottom: 0;
  `}

  ${breakpoint('desktop')`
	width: 120px;
	height: 120px;
  `}
`

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	${breakpoint('desktop')`
    max-width: 380px;
  `}
`

export const CardTitle = styled.span`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 18px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.black};
	margin-bottom: 7px;
	text-align: center;
	
	${breakpoint('tablet')`
    text-align: left;
  `}
`

export const CardDescription = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 16px;
	line-height: 22px;
	margin: 0;
	margin-bottom: 40px;

	${breakpoint('desktop')`
		margin-bottom: 0;
	`}
`

export const FooterText = styled.a`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.mdcPurple};
	cursor: pointer;
	&:hover {
		color: #3d0099;
		transition: color 0.25s ease;
	}
	${breakpoint('desktop')`
    margin-top: -98px;
  `}
`
