import { ChangeEventHandler } from 'react'

export default function TextBox({
	value,
	onChange,
}: {
	value: string
	onChange?: ChangeEventHandler<HTMLTextAreaElement>
}) {
	return (
		<textarea
			value={value}
			className="h-full rounded resize-none text-black outline-none p-4 border-[1px] border-gray-300 focus:shadow-sm focus:border-emerald-500 focus:shadow-emerald-500/50 caret-emerald-600 transition-all duration-500"
			onChange={onChange}
		/>
	)
}
