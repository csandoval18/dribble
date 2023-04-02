import React from "react"

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
	return (
		<section className='Hero'>
			<div className='hero-media'>
				<video
					className='hero-media-asset is-visible'
					autoPlay={true}
					muted={true}
					loop={true}
					data-hero-video=''
					data-src-lg='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
					data-src-sm='https://cdn.dribbble.com/uploads/39418/original/0cc960a3bf612d0badc4f6165eb36f7b.mp4?1657824915'
				>
					<source
						src='https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906'
						type='video/mp4'
					/>
				</video>
				<div className='hero-overlay'>
					<div className='hero-menu'>
						<ul>
							<li>
								<a className='btn btn-hero' href='#'>
									Discover
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Animation
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Branding
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Illustration
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Mobile
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Print
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Product Design
								</a>
							</li>
							<li>
								<a className='btn btn-hero' href='#'>
									Web Design
								</a>
							</li>
						</ul>
					</div>
					<div className='hero-headings'>
						<h1>Trending web & landing page designs</h1>
						<p className='sub-heading'>
							Explore trending Web Design, Response Design,
							User Experience and User Interfaces from
							popular design portfolios
						</p>
					</div>
					<div className='search-input-hero search-input-with-dropdown'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							role='img'
							className='icon fill-current search-icon'
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z'
							></path>
						</svg>
						<form
							action='/search'
							className='js-search-input-form search-input-form'
							method='get'
						>
							<label
								htmlFor='search'
								className='accessibility-text'
							>
								Search
							</label>
							<input
								id='search'
								type='search'
								name='q'
								placeholder='Search...'
								value=''
								className='search-input js-search-input'
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
