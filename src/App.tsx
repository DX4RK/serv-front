import './App.css'

import { Header } from "@/components/ui/header"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import  Home from "@/pages/home/page"
import Login from "@/pages/login/page"
import Upload from "@/pages/upload/page"

function App() {
	return (
		<BrowserRouter>
			<Header />
			 <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/upload" element={<Upload />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
