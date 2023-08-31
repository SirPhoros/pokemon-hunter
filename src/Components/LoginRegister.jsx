import React, { useState } from 'react'
import { handleSignUpWithEmail, logIn } from '../firebase-db-utils'

function LoginRegister({ setIsLoggedIn }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		logIn(email, password)
			.then(() => {
				setIsLoggedIn(true) // If login is successful, set the user as logged in
			})
			.catch((error) => {
				console.error(error.message) // Handle login error here
			})
	}

	const handleRegister = () => {
		handleSignUpWithEmail(email, password)
			.then(() => {
				setIsLoggedIn(true) // If registration is successful, set the user as logged in
			})
			.catch((error) => {
				console.error(error.message) // Handle registration error here
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
