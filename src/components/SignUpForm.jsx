import { useState } from "react";

function SignUpForm({ setToken })
{
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	async function handleSubmit(e)
	{
		e.preventDefault();
		console.log(e);
		try
		{
			const res = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
			{
				method: 'post',
				headers:
				{
					"Content-Type": "application/json"
				},
				body: JSON.stringify(
				{
					username: username,
					password: password
				})
			});
			const data = await res.json();
			console.log(data.token);
			setToken(data.token);
		}
		catch(error)
		{
			setError(error);
			console.log(error);
		}
	}

	return (
		<>
			<h2>Sign up</h2>
			{ error && <p>{error}</p> }
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Username:
					<input name="username" onChange={(e) => { setUsername(e.target.value) }}/>
				</label>
				<br/>
				<label>
					Password:
					<input name="password" onChange={(e) => { setPassword(e.target.value) }}/>
				</label>
				<br/>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default SignUpForm;
