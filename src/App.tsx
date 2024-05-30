import ErrorMessage from '@components/ErrorMessage'
import Header from '@components/Header'
import KeywordList from '@components/KeywordList/KeywordList'
import Loader from '@components/Loader'
import Section from '@components/Section'
import TextBox from '@components/TextBox'
import { useState } from 'react'
import { getKeywords } from './get-keywords.util'
import useJobInfo from './use-job-info.hook'

function App() {
	const [isLoading, setIsLoading] = useState(false)
	const { jobInfo, setDescription, setResume, setKeywords } = useJobInfo()

	const displayKeywords = async () => {
		setIsLoading(true)
		const keywords = await getKeywords(jobInfo.description)
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
						value={jobInfo.description}
						onChange={(e) => {
							setDescription(e.target.value)
						}}
					/>
					<button
						className="text-white rounded text-2xl p-2 disabled:bg-emerald-200 bg-emerald-500 hover:bg-emerald-800 transition-all duration-500"
						onClick={() => {
							displayKeywords()
						}}
						disabled={!jobInfo.description}
					>
						Generate Keywords
					</button>
				</Section>
				{!!jobInfo.keywords.length && (
					<>
						<Section className="h-full">
							<Header value="Resume" />
							<TextBox
								value={jobInfo.resume}
								onChange={(e) => {
									setResume(e.target.value)
								}}
							/>
						</Section>
						<Section className="h-fit max-h-full">
							<KeywordList
								keywords={jobInfo.keywords}
								resume={jobInfo.resume}
							/>
						</Section>
					</>
				)}
				<Loader isLoading={isLoading} />
				<ErrorMessage />
			</div>
		</div>
	)
}

export default App
