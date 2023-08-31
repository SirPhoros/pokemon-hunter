import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export function UserProvider({ children }) {
	const [userUID, setUserUID] = useState(null)

	return (
		<UserContext.Provider value={{ userUID, setUserUID }}>
			{children}
		</UserContext.Provider>
	)
}
