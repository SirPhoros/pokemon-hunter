import { useState } from 'react'
import './App.css'
import SearchPokemon from './Components/SearchPokemon'
import LoginRegister from './Components/LoginRegister'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<>
			<h1>Pokemon Hunter</h1>
			{isLoggedIn ? (
				<SearchPokemon /> // Render the main component if the user is logged in
			) : (
				<LoginRegister setIsLoggedIn={setIsLoggedIn} /> // Pass setIsLoggedIn to your login/register component
			)}
		</>
	)
}

export default App
