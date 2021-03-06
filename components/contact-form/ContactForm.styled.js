import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2);
	width: 100%;
	max-width: 640px;
	background-color: ${(props) => props.theme.colors.white};

`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	padding: 0 20px;
	${breakpoint('desktop')`
    padding: 0 40px;
  `}
`

export const InputWrapper = styled.div`
	margin-bottom: 20px;
`

export const ButtonWrapper = styled.div`
	align-self: center;
`
