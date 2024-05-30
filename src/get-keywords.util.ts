import { showErrorMessage } from './error-message.util'

export async function getKeywords(jobDescription: string) {
	try {
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

		if (responseJSON.error || !responseJSON.keywords?.length) {
			throw Error()
		}

		return responseJSON.keywords as string[]
	} catch (error) {
		showErrorMessage('Unable generate keywords')
		return []
	}
}
