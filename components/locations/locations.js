import React from 'react';
import Image from 'next/image';
import Hero from '../../public/assets/about/desktop/image-about-hero.jpg';

function Locations() {
	return (
		<div className="flex flex-row m-auto w-4/5 text-center py-20">
			<div>
				<Image src={Hero} alt="Hero" className="rounded-2xl " />
				<h3>Canada</h3>
				<button>See Location</button>
			</div>
			<div>
				<Image src={Hero} alt="Hero" className="rounded-2xl " />
				<h3>Canada</h3>
				<button>See Location</button>
			</div>
			<div>
				<Image src={Hero} alt="Hero" className="rounded-2xl " />
				<h3>Canada</h3>
				<button>See Location</button>
			</div>
		</div>
	);
}

export default Locations;
