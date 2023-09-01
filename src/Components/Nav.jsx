import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { logOut } from '../firebase-db-utils'

export default function Nav() {
	const { username, clearUserDataOnLogOut } = useUser()

	const handleLogOut = () => {
		//Clear all the data in UserContext + Cookies when logging out
		clearUserDataOnLogOut()
        
		logOut()
	}

	console.log(username, 'username')

	return (
		<nav className="nav">
			<Link to="/">Pokémon Searcher </Link>
			<Link to="/collection">My collection </Link>
			{username && <span>Welcome trainer, {username}!</span>}{' '}
			<button onClick={() => handleLogOut}>Log out</button>
		</nav>
	)
}
