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
			className={`w-full max-w-[50%] h-full flex flex-col gap-6 p-10 bg-slate-200 shadow-md rounded-lg overflow-auto ${className}`}
		>
			{children}
		</div>
	)
}
