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
		<div className="w-full h-screen bg-gray-50 flex flex-col p-[5%] gap-8 font-body">
			<h1 className="w-full flex justify-center text-5xl text-black">
				Job Key - Resume Keyword Matcher
			</h1>
			<div className="h-full flex gap-8 lg:flex-nowrap flex-wrap">
				<Section>
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
						<Section>
							<Header value="Resume" />
							<TextBox
								value={resume}
								onChange={(e) => {
									setResume(e.target.value)
								}}
							/>
						</Section>
						<Section>
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
