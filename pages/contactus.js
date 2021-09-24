import React from 'react';
import Image from 'next/image';
import Hero from '../public/assets/about/desktop/image-about-hero.jpg';

function contactus() {
	return (
		<section>
			<div>
				<h2>About Us</h2>
				<p>
					Founded in 2010, we are a creative agency that produces lasting
					results for our clients. We've partnered with many startups,
					corporations, and nonprofits alike to craft design that make real
					impact. We're always looking foward to creating brands, products, and
					digital experiences that connect with our clients' audiences.
				</p>
				<Image src={Hero} alt="picture 1" />
			</div>
			<div></div>
			<div></div>
			<div></div>
		</section>
	);
}

export default contactus;
