import { CSSProperties, useMemo } from 'react'

const MATCHED_COLOR = 'green'
const UNMATCHED_COLOR = 'gray'

export default function KeywordItem({
	keyword,
	isMatched,
}: {
	keyword: string
	isMatched: boolean
}) {
	const color = useMemo(
		() => (isMatched ? MATCHED_COLOR : UNMATCHED_COLOR),
		[isMatched],
	)
	return (
		<span
			key={keyword}
			style={
				{
					'--color': color,
				} as CSSProperties
			}
			className="flex items-center gap-2"
		>
			<div
				style={
					{
						'--size': '20px',
					} as CSSProperties
				}
				className={`${isMatched ? 'bg-[var(--color)]' : 'border-2 border-[var(--color)]'} w-[var(--size)] h-[var(--size)] rounded-full`}
			/>
			<span className="text-[var(--color)]">{keyword}</span>
		</span>
	)
}
