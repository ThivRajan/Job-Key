import { useState } from 'react'
import KeywordList from './KeywordList'
import Loader from './Loader'
import { getKeywords } from './get-keywords.util'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [jobDescription, setJobDescription] = useState('')
	const [keywords, setKeywords] = useState<string[]>([])

	const displayKeywords = async () => {
		setIsLoading(true)
		const keywords = await getKeywords(jobDescription)
		setIsLoading(false)
		setKeywords(keywords)
	}

	return (
		<div className="w-full h-screen bg-slate-300 flex justify-center items-center">
			<form
				onSubmit={(e) => {
					e.preventDefault()
					displayKeywords()
				}}
				className="flex flex-col w-[500px] gap-4"
			>
				<textarea
					className="h-[200px]  rounded resize-none text-black outline-none p-4"
					onChange={(e) => {
						setJobDescription(e.target.value)
					}}
				/>
				<button
					type="submit"
					className="text-white rounded text-2xl p-2 bg-blue-400 hover:bg-blue-800"
				>
					Generate Keywords
				</button>
				<KeywordList keywords={keywords} />
			</form>
			<Loader isLoading={isLoading} />
		</div>
	)
}

export default App
