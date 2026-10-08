import { json } from '@sveltejs/kit';

export const prerender = true;

export function GET() {
	return json({
		associatedApplications: [
			{
				applicationId: 'f1625dc8-ff25-4394-a5c4-b239b17ae14b'
			}
		]
	});
}
