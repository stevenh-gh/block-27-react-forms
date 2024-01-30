import { useState } from "react"
import Authenticate from "./components/Authenticate"
import SignUpForm from "./components/SignUpForm"

function App()
{
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	return (
		<>
			<SignUpForm/>
			<Authenticate/>
		</>
	)
}

export default App
