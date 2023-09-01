import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { logOut } from '../firebase-db-utils'

import SearchIcon from '@mui/icons-material/Search'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Nav() {
	const { username, clearUserDataOnLogOut } = useUser()

	const handleLogOut = () => {
		// Clear all the data in UserContext + Cookies when logging out
		clearUserDataOnLogOut()
		// Call Firebase function to log out
		logOut()
	}

	console.log(username, 'username')

	return (
		<nav className="nav">
			<Link to="/">
				<SearchIcon />
				Pokémon Searcher{' '}
			</Link>
			<Link to="/collection">
				<MenuBookIcon />
				My collection{' '}
			</Link>
			{username && (
				<span>
					Welcome trainer, {username}!{' '}
					<button
						style={{
							border: 'none',
							background: 'none',
							padding: '0', // Optional: Remove any padding or margin if needed
						}}
						onClick={handleLogOut}
					>
						<LogoutIcon fontSize="small" />
					</button>
				</span>
			)}
		</nav>
	)
}
