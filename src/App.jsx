import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import { UserProvider } from './context/UserContext'
import Collection from './Components/Collection'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'

function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Nav />
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/collection"
						element={<Collection />}
					/>
				</Routes>
				<Footer />
			</UserProvider>
		</BrowserRouter>
	)
}

export default App
