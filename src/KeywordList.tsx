import { useMemo } from 'react'
import KeywordItem from './KeywordItem'

export default function KeywordList({
	keywords,
	resume,
}: {
	keywords: string[]
	resume: string
}) {
	const formattedResume = useMemo(() => resume.toLowerCase(), [resume])

	return (
		<div className="flex flex-col gap-2">
			{keywords.map((keyword) => (
				<span key={keyword}>
					<KeywordItem
						isMatched={formattedResume.includes(keyword.toLowerCase())}
						keyword={keyword}
					/>
				</span>
			))}
		</div>
	)
}
