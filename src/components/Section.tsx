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
			className={`${className} h-full flex flex-col gap-6 p-10 bg-slate-200 shadow-md rounded overflow-auto`}
		>
			{children}
		</div>
	)
}
