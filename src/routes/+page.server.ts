import type { Actions } from './$types';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const email: string = 'website@virgosites.com';

export const actions = {
	mail: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		/* 		const secondName = data.get('secondName');
		const company = data.get('company');
		// website?
		const website = data.get('website');
		// contact could be phone or mail
		const contact = data.get('contact');
		const text = data.get('text'); */

		sendThankYouEmail(name! + '', data);
	}
} satisfies Actions;

const sendThankYouEmail = async (name: string, data: FormData) => {
	console.log('Sending the email');

	const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env;

	const mailgun = new Mailgun(formData).client({
		username: 'api',
		key: apiKey!
	});

	const mailData = {
		from: email,
		to: email,
		subject: `${name} from Website ${email}`,
		text: data + ''
	};

	await mailgun.messages.create(domain!, mailData);
};
