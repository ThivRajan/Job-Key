import KeywordList from '@components/KeywordList/KeywordList'
import Loader from '@components/Loader'
import Section from '@components/Section'
import TextBox from '@components/TextBox'
import { useState } from 'react'
import { getKeywords } from './get-keywords.util'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [resume, setResume] = useState('')
	const [jobDescription, setJobDescription] = useState('')
	const [keywords, setKeywords] = useState<string[]>([])

	const displayKeywords = async () => {
		setIsLoading(true)
		const keywords = await getKeywords(jobDescription)
		setIsLoading(false)
		setKeywords(keywords)
	}

	return (
		<div className="w-full h-screen bg-slate-300 flex gap-[2%] items-start p-[5%] flex-wrap lg:flex-nowrap">
			<Section>
				<h1 className="text-3xl">Resume</h1>
				<TextBox
					value={resume}
					onChange={(e) => {
						setResume(e.target.value)
					}}
				/>
			</Section>
			<Section>
				<h1 className="text-3xl">Job Description</h1>
				<TextBox
					value={jobDescription}
					onChange={(e) => {
						setJobDescription(e.target.value)
					}}
				/>

				<button
					className="text-white rounded text-2xl p-2 bg-blue-400 hover:bg-blue-800"
					onClick={() => {
						displayKeywords()
					}}
				>
					Generate Keywords
				</button>
				{!!keywords.length && (
					<div className="flex flex-col gap-2">
						<h1 className="text-3xl">Keywords</h1>
						<KeywordList keywords={keywords} resume={resume} />
					</div>
				)}
			</Section>
			<Loader isLoading={isLoading} />
		</div>
	)
}

export default App
