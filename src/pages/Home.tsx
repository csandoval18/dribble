import React from "react"
import Hero from "../components/Home/Hero"
import Grid from "../components/Grid"

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className='home'>
			<Hero />
			<Grid></Grid>
		</div>
	)
}

export default Home
