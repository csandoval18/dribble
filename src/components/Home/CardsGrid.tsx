import React from "react"
import Card from "../Card"
import { CardProps } from "../../utils/types"

interface GridProps {}

const CardsGrid: React.FC<GridProps> = () => {
	const cardData: CardProps[] = [
		{
			imageSrc: "src/assets/87f3f444-2f03-4e0a-91c2-90913cf4b799_4x.webp",
			title: "creative Sotuh 2023",
			user: "Victor Korchuk",
			company: "unfold",
		},
		{
			imageSrc: "src/assets/original-4b7479781c7ca2b5012eb061cf517dcd.webp",
			title: "I love you Arizona!",
			user: "Robinsson Cravents",
			company: null,
		},
		{
			imageSrc: "src/assets/original-4d22d3766a57565f0d0ed09bbe2bf990.webp",
			title: "Fried Egg & Hot Dog",
			user: "Matt Anderson",
			company: "Canopy",
		},
		{
			imageSrc: "src/assets/original-49d2a7c358059461f53ba0ae9e0094fe.webp",
			title: "Lailatul Qadr Ramadan Illustration",
			user: "Labib Ahmadin",
			company: "Odama",
		},
		{
			imageSrc: "src/assets/original-81e91a282c3ce332de69954ee1115b78.webp",
			title: "Harlem",
			user: "Patryk Wojciechowicsz",
			company: "Fireart Studio",
		},
		{
			imageSrc: "src/assets/original-378a8f118d15fdab93279416242e09aa.webp",
			title: "Morning Clarity",
			user: "Nathan Walker",
			company: null,
		},
		{
			imageSrc: "src/assets/original-825ebd5d60ba5ca08964422e2f765ad4.webp",
			title: "Crawfish Boil Merch",
			user: "Joseph Ernst",
			company: null,
		},
		{
			imageSrc: "src/assets/original-960aadf470d648a38747122dd0750480.webp",
			title: "Nike Sneakers Illustration",
			user: "Mako Zakaidze",
			company: null,
		},
		{
			imageSrc: "src/assets/original-6683d80b5b1e6d75ba883f202d8ff980.webp",
			title: "Goog-a-roony",
			user: "Ann-sophie De Sterur",
			company: null,
		},
		{
			imageSrc: "src/assets/original-621596f85c1b864fada293ec5eb1bf6a.webp",
			title: "Toot!",
			user: "Rik Catlow",
			company: null,
		},
		{
			imageSrc: "src/assets/original-a5e1e93a9139b353b734ef99c983d4ee.webp",
			title: "A1 Basketball Card",
			user: "Kyle Loaney",
			company: null,
		},
		{
			imageSrc: "src/assets/original-cbecb02a127c88f1d255410ba9d763d4.webp",
			title: "The creative paperwork outline",
			user: "Tyler Pate",
			company: null,
		},
		{
			imageSrc: "src/assets/original-fd7f75a47397823036cc31ce1ed668a3.webp",
			title: "Dev jokes. Fatal error.",
			user: "SAVATAGE",
			company: null,
		},
		{
			imageSrc: "src/assets/original-fd78bf0c98c90e3159a2def5cece9788.webp",
			title: "Space Chasers",
			user: "Isaac LeFever",
			company: null,
		},
	]
	return (
		<div className='Cards-Grid'>
			<ol className='grid-layout'>
				{cardData.map((cardFields: CardProps) => (
					<Card
						imageSrc={cardFields.imageSrc}
						title={cardFields.title}
						user={cardFields.user}
						company={cardFields.company}
					></Card>
				))}
			</ol>
		</div>
	)
}

export default CardsGrid
