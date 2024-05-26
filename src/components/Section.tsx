import { ReactNode } from 'react'

export default function Section({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div
			className={`w-full flex flex-col gap-6 p-10 bg-slate-200 border border-slate-300 rounded-lg shadow-md overflow-auto ${className}`}
		>
			{children}
		</div>
	)
}
