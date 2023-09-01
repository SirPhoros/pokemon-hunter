import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { logOut } from '../firebase-db-utils'

export default function Nav({ setIsLoggedIn }) {
	const { username, clearUserDataOnLogOut } = useUser()

	const handleLogOut = () => {
		// Clear all the data in UserContext + Cookies when logging out
		clearUserDataOnLogOut()
		// Update the login state to false
		setIsLoggedIn(false)
		// Call Firebase function to log out
		logOut()
	}

	console.log(username, 'username')

	return (
		<nav className="nav">
			<Link to="/">Pokémon Searcher </Link>
			<Link to="/collection">My collection </Link>
			{username && <span>Welcome trainer, {username}!</span>}{' '}
			<button onClick={handleLogOut}>Log out</button>
		</nav>
	)
}
