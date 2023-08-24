import { useState } from 'react'
import './App.css'
import { client } from './client'
import { gql } from '@apollo/client'
import SearchPokemon from './Components/SearchPokemon'

function App() {
	const [count, setCount] = useState(0)

	client
		.query({
			query: gql`
				{
					getPokemon(pokemon: dragonite) {
						sprite
						num
						species
					}
				}
			`,
		})
		.then((result) => console.log(result))

	return (
		<>
			<h1>Pokemon Hunter</h1>
			<SearchPokemon></SearchPokemon>
		</>
	)
}

export default App
