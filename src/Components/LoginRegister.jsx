import React, { useState } from 'react'
import { handleSignUpWithEmail, logIn } from '../firebase-db-utils'
import { useUser } from '../context/UserContext'

function LoginRegister({ setIsLoggedIn }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { setUserUID } = useUser()

	const handleLogin = () => {
		logIn(email, password)
			.then((user) => {
				if (user) {
					setIsLoggedIn(true)
					setEmail('')
					setPassword('')
					// Set the user's UID in the context
					setUserUID(user.uid)
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
					setEmail('')
					setPassword('')
					setIsLoggedIn(true)
					// Set the user's UID in the context
					setUserUID(user.uid)
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
