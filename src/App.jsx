import { useState } from 'react'
import './App.css'
import { client } from './client'
import { gql } from '@apollo/client'

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
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
		</>
	)
}

export default App
