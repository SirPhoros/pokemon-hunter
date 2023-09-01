import React, { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export function UserProvider({ children }) {
	const [userUID, setUserUID] = useState(null)
	const [username, setUsername] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false) // Add this state

	// Load user data from cookies on component mount
	useEffect(() => {
		const storedUID = Cookies.get('userUID')
		const storedUsername = Cookies.get('username')
		if (storedUID && storedUsername) {
			setUserUID(storedUID)
			setUsername(storedUsername)
			setIsLoggedIn(true) // Set isLoggedIn to true if user data is found in cookies
		}
	}, [])

	// Save user data to cookies whenever it changes
	useEffect(() => {
		if (userUID && username) {
			// Set cookies with an expiration date (e.g., 30 days)
			const expirationDays = 30
			const expirationDate = new Date()
			expirationDate.setDate(expirationDate.getDate() + expirationDays)

			Cookies.set('userUID', userUID, { expires: expirationDate })
			Cookies.set('username', username, { expires: expirationDate })
		} else {
			// Remove cookies if data is empty
			Cookies.remove('userUID')
			Cookies.remove('username')
		}
	}, [userUID, username])

	// Add a logout function that clears user data
	const clearUserDataOnLogOut = () => {
		setUserUID(null)
		setUsername(null)
		setIsLoggedIn(false) // Set isLoggedIn to false on logout
		// Clear cookies
		Cookies.remove('userUID')
		Cookies.remove('username')
	}

	return (
		<UserContext.Provider
			value={{
				userUID,
				setUserUID,
				username,
				setUsername,
				setIsLoggedIn,
				isLoggedIn,
				clearUserDataOnLogOut,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
