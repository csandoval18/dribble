import React from "react"
import Hero from "../components/Home/Hero"
import CardsGrid from "../components/CardsGrid"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className='home'>
			<Hero />
			<CardsGrid />
		</div>
	)
}

export default Home
