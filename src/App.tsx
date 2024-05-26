import Header from '@components/Header'
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
		<div className="flex flex-col gap-8 h-screen bg-gray-50 p-[3%]">
			<div className="w-full flex flex-col justify-center items-center text-slate-700 gap-2 font-title">
				<h1 className="text-5xl">Job Key</h1>
				<h2 className="text-2xl">Free Resume Keyword Matcher</h2>
			</div>
			<div className="h-full flex gap-8 lg:flex-nowrap flex-wrap overflow-y-auto font-body">
				<Section className="h-full">
					<Header value="Job Description" />
					<TextBox
						value={jobDescription}
						onChange={(e) => {
							setJobDescription(e.target.value)
						}}
					/>
					<button
						className="text-white rounded text-2xl p-2 disabled:bg-emerald-200 bg-emerald-400 hover:bg-emerald-800"
						onClick={() => {
							displayKeywords()
						}}
						disabled={!jobDescription}
					>
						Generate Keywords
					</button>
				</Section>
				{!!keywords.length && (
					<>
						<Section className="h-full">
							<Header value="Resume" />
							<TextBox
								value={resume}
								onChange={(e) => {
									setResume(e.target.value)
								}}
							/>
						</Section>
						<Section className="h-fit max-h-full">
							<KeywordList keywords={keywords} resume={resume} />
						</Section>
					</>
				)}
				<Loader isLoading={isLoading} />
			</div>
		</div>
	)
}

export default App
