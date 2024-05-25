import { CSSProperties } from 'react'

export default function KeywordList({ keywords }: { keywords: string[] }) {
	const color = 'green'

	return (
		!!keywords.length && (
			<div className="flex flex-col gap-2">
				{keywords.map((keyword) => (
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
							className="border-2 border-[var(--color)] w-[var(--size)] h-[var(--size)] rounded-full"
						></div>
						<span className="text-[var(--color)]">{keyword}</span>
					</span>
				))}
			</div>
		)
	)
}
