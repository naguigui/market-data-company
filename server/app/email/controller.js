const { sendMail } = require('../services/emailService')
const { validateEmail } = require('../../../utils/validator')

module.exports.sendEmail = async (req, res) => {
	try {
		const { email, firstName, company, message } = req.body

		console.log(company, message)

		if (!validateEmail(email)) {
			res.status(400).send({
				error: 'Not a valid email.'
			})
		}

		await sendMail({ email, name: firstName, company, message })
		res.status(200).send({
			success: true
		})
	} catch (err) {
		res.status(404).send(err)
	}
}
