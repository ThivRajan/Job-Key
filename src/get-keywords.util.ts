export async function getKeywords(jobDescription: string) {
	const response = await fetch(import.meta.env.VITE_KEYWORDS_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			jobDescription,
		}),
	})
	const responseJSON = await response.json()

	if (responseJSON.error) {
		throw Error(responseJSON.error)
	}

	return responseJSON.keywords as string[]
}
