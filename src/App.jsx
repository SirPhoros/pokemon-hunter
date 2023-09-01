import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import { UserProvider } from './context/UserContext'
import Collection from './Components/Collection'
import HomePage from './Components/HomePage'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<BrowserRouter>
			<UserProvider>
				<Nav setIsLoggedIn={setIsLoggedIn} />
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
					<Route
						path="/collection"
						element={<Collection />}
					/>
				</Routes>
			</UserProvider>
		</BrowserRouter>
	)
}

export default App
