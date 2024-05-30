import { CSSProperties, useMemo } from 'react'
import { FaCheck } from 'react-icons/fa6'

const MATCHED_COLOR = 'rgb(16 185 129)'
const UNMATCHED_COLOR = 'black'

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
				className={`min-w-[var(--size)] min-h-[var(--size)] rounded-full text-white flex justify-center items-center ${isMatched ? 'bg-[var(--color)]' : 'border-2 border-[var(--color)]'}`}
			>
				{isMatched ? <FaCheck className="text-xs" /> : <></>}
			</div>
			<span className="text-[var(--color)]">{keyword}</span>
		</span>
	)
}
