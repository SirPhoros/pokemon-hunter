import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { handleSignUpWithEmail, logIn } from '../firebase-db-utils'
import { useUser } from '../context/UserContext'

function LoginRegister() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { setUserUID, setUsername, setIsLoggedIn } = useUser()

	const handleLogin = () => {
		logIn(email, password)
			.then((user) => {
				if (user) {
					setIsLoggedIn(true)
					setEmail('')
					setPassword('')
					// Set the user's UID and username in the context
					setUserUID(user.uid)
					setUsername(user.email.split('@')[0])
					// Successfully logged in, set user data as cookies
					Cookies.set('userUID', user.uid)
					Cookies.set('username', user.email.split('@')[0])
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
					// Set the user's UID and username in the context
					setUserUID(user.uid)
					setUsername(user.email.split('@')[0])
					// Successfully registered in, set user data as cookies
					Cookies.set('userUID', user.uid)
					Cookies.set('username', user.email.split('@')[0])
				} else {
					console.error('User is undefined')
				}
			})
			.catch((error) => {
				console.error(error.message)
			})
	}

	return (
		<section>
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
		</section>
	)
}

export default LoginRegister
