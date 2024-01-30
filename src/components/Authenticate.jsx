import { useState } from "react";


function Authenticate({ token })
{
	const [error, setError] = useState(null);
	const [message, setMessage] = useState(null);

	async function handleClick(e)
	{
		console.log(e);
		try
		{
			const res = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
			{
				method: 'get',
				headers:
				{
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				},
			});
			const data = await res.json();
			// console.log(data);
			setMessage(data.message);
		}
		catch(error)
		{
			console.log(error);
			setError(error);
		}
	}

	return (
		<>
			<h2>Authenticate</h2>
			{ error && <p>{error}</p> }
			{ message && <p>{message}</p> }
			<button onClick={(e) => {handleClick(e)}}>Authenticate token</button>
		</>
	)
}

export default Authenticate;
