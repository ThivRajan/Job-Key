import { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col gap-4 w-[50%] h-full p-10 bg-slate-200 shadow-md rounded">
			{children}
		</div>
	)
}
