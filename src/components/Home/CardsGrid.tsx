import React from "react"
import Card from "../Card"

interface GridProps {}

interface Image {
	imageSrc: String
	title: String
	user: String
	company: string | null
}

const CardsGrid: React.FC<GridProps> = () => {
	const imageData: Image[] = [
		{
			imageSrc: "./assets/87f3f444-2f03-4e0a-91c2-90913cf4b799_4x.webp",
			title: "creative Sotuh 2023",
			user: "Victor Korchuk",
			company: "unfold",
		},
		{
			imageSrc: "./assets/original-4b7479781c7ca2b5012eb061cf517dcd.webp",
			title: "I love you Arizona!",
			user: "Robinsson Cravents",
			company: null,
		},
		{
			imageSrc: "./assets/original-4d22d3766a57565f0d0ed09bbe2bf990.webp",
			title: "Fried Egg & Hot Dog",
			user: "Matt Anderson",
			company: "Canopy",
		},
		{
			imageSrc: "./assets/original-49d2a7c358059461f53ba0ae9e0094fe.webp",
			title: "Lailatul Qadr Ramadan Illustration",
			user: "Labib Ahmadin",
			company: "Odama",
		},
		{
			imageSrc: "./assets/original-81e91a282c3ce332de69954ee1115b78.webp",
			title: "",
			user: "",
			company: "",
		},
	]
	return (
		<div className='Cards-Grid'>
			<ol className='grid-layout'>
				<Card></Card>
			</ol>
		</div>
	)
}

export default CardsGrid
