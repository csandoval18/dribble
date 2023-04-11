import React from "react"
import Hero from "../components/Home/Hero"
import CardsGrid from "../components/Layout/CardsGrid"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className='Home'>
			<Hero />
			<CardsGrid />
		</div>
	)
}

export default Home
