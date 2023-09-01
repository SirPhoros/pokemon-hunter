import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export function UserProvider({ children }) {
	const [userUID, setUserUID] = useState(null)
	const [username, setUsername] = useState(null)

	return (
		<UserContext.Provider
			value={{ userUID, setUserUID, username, setUsername }}
		>
			{children}
		</UserContext.Provider>
	)
}
