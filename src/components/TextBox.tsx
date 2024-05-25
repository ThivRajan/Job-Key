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
			className="h-full rounded resize-none text-black outline-none p-4"
			onChange={onChange}
		/>
	)
}
