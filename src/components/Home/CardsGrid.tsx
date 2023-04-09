import React from "react"
import Card from "../Card"
import { Image } from "../../utils/types"

interface GridProps {}

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
			title: "Harlem",
			user: "Patryk Wojciechowicsz",
			company: "Fireart Studio",
		},
		{
			imageSrc: "./assets/original-378a8f118d15fdab93279416242e09aa.webp",
			title: "Morning Clarity",
			user: "Nathan Walker",
			company: null,
		},
		{
			imageSrc: "./assets/original-825ebd5d60ba5ca08964422e2f765ad4.webp",
			title: "Crawfish Boil Merch",
			user: "Joseph Ernst",
			company: null,
		},
		{
			imageSrc: "./assets/original-960aadf470d648a38747122dd0750480.webp",
			title: "Nike Sneakers Illustration",
			user: "Mako Zakaidze",
			company: null,
		},
		{
			imageSrc: "./assets/original-6683d80b5b1e6d75ba883f202d8ff980.webp",
			title: "Goog-a-roony",
			user: "Ann-sophie De Sterur",
			company: null,
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
