import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ErrorMessage() {
	return (
		<ToastContainer
			position="top-center"
			autoClose={800}
			hideProgressBar={true}
			closeOnClick
			rtl={false}
			theme="dark"
			style={{ fontSize: '1.2em' }}
		/>
	)
}
