import Document, { Html, Head, Main, NextScript } from 'next/document'
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet()

		// Step 2: Retrieve styles from components in the page
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />)
		)

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement()

		// Step 4: Pass styleTags as a prop
		return { ...page, styleTags }
	}

	render() {
		return (
			<Html>
				<Head>
					<title>Market Data Company</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/static/images/mdc_favicon.png"
					/>
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
					/>
					{this.props.styleTags}
				</Head>
				<body>
					<GlobalStyles />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
