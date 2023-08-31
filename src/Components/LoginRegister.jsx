import React, { useState } from 'react'
import { handleSignUpWithEmail, logIn } from '../firebase-db-utils'

function LoginRegister({ setIsLoggedIn }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		logIn(email, password)
			.then((user) => {
				if (user) {
					setIsLoggedIn(true)
					setEmail('')
					setPassword('')
				} else {
					console.error('User is undefined')
				}
			})
			.catch((error) => {
				console.error(error.message)
			})
	}

	const handleRegister = () => {
		handleSignUpWithEmail(email, password)
			.then((user) => {
				if (user) {
					setIsLoggedIn(true)
				} else {
					console.error('User is undefined')
				}
			})
			.catch((error) => {
				console.error(error.message)
			})
	}

	return (
		<div>
			<h2>Login/Register</h2>
			<input
				type="text"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleRegister}>Register</button>
		</div>
	)
}

export default LoginRegister
