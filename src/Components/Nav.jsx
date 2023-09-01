import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function Nav() {
	const { username } = useUser() // Access the username from the UserContext

	return (
		<nav className="nav">
			<Link to="/">Pokémon Searcher </Link>
			<Link to="/collection">My collection </Link>
			{username && <span>Welcome trainer, {username}!</span>}{' '}
		</nav>
	)
}
