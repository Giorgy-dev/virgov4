import type { Handler } from '@netlify/functions';
import fetch from 'node-fetch';

const email: string = 'website@virgosites.com';

const handler: Handler = async function (event) {
	if (event.body === null) {
		return {
			statusCode: 400,
			body: JSON.stringify('Payload required')
		};
	}

	//page content
	const requestBody = JSON.parse(event.body) as {
		name: string;
		surname: string;
		company: string;
		website: string;
		subject: string;
		contact: string;
	};

	//automatically generated snippet from the email preview
	//sends a request to an email handler for a subscribed email
	await fetch(`${process.env.URL}/.netlify/functions/emails/message`, {
		headers: {
			'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET as string
		},
		method: 'POST',
		body: JSON.stringify({
			from: email,
			to: email,
			subject: `From website - ${requestBody.name}`,
			parameters: {
				name: requestBody.name,
				surname: requestBody.surname,
				company: requestBody.company,
				website: requestBody.website,
				subject: requestBody.subject,
				email: requestBody.contact
			}
		})
	});

	return {
		statusCode: 200, //OK
		body: JSON.stringify('Email sent!')
	};
};

export { handler };
