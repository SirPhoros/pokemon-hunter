import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<nav className="nav">
			<Link to="/">Pokémon Searcher </Link>
			<Link to="/collection">My collection </Link>
		</nav>
	)
}
