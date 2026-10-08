import { json } from '@sveltejs/kit';

export const prerenderer = true;
export const entries = () => [{ }];

export function GET() {
	return json({
  "associatedApplications": [
    {
      "applicationId": "f1625dc8-ff25-4394-a5c4-b239b17ae14b"
    }
  ]
});
}

// Se usi adapter-static e vuoi prerenderizzarlo
export const prerender = true;
