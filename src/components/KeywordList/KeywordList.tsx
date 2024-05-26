import Header from '@components/Header'
import { useCallback, useMemo } from 'react'
import KeywordItem from './KeywordItem'

export default function KeywordList({
	keywords,
	resume,
}: {
	keywords: string[]
	resume: string
}) {
	const formattedResume = useMemo(() => resume.toLowerCase(), [resume])
	const keywordMatched = useCallback(
		(keyword: string) => formattedResume.includes(keyword.toLowerCase()),
		[formattedResume, keywords],
	)
	const matchCount = useMemo(
		() =>
			keywords.reduce(
				(acc, keyword) => (keywordMatched(keyword) ? acc + 1 : acc),
				0,
			),
		[formattedResume, keywords],
	)

	return (
		<div className="flex flex-col gap-4">
			<Header
				value={`Keywords - ${matchCount}/${keywords.length} (${Math.floor((matchCount / keywords.length) * 100)}%)`}
			/>
			<div className="flex flex-col gap-2">
				{keywords.map((keyword) => (
					<span key={keyword}>
						<KeywordItem
							isMatched={keywordMatched(keyword)}
							keyword={keyword}
						/>
					</span>
				))}
			</div>
		</div>
	)
}
