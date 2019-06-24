import Layout from '../components/layout'
import Landing from '../sections/home-section/landing'
import LeaderMarketData from '../sections/home-section/leader-market-data'
import WorkedWith from '../sections/home-section/worked-with'
import WhyMdc from '../sections/home-section/why-mdc'
import Services from '../sections/home-section/services'
import Research from '../sections/home-section/research'
import ContactFooter from '../components/contact-footer'

import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const ContentWrapper = styled.div`
	margin: 0 18px;
	${breakpoint('desktop')`
    margin: 0 130px;
  `}
`

export default () => (
	<Layout>
		<Landing />
		<ContentWrapper>
			<LeaderMarketData />
			<WorkedWith />
			<WhyMdc />
			<Services />
			<Research />
		</ContentWrapper>
		<ContactFooter />
	</Layout>
)
