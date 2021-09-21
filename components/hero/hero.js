import React from 'react';
import Image from 'next/image';
import Phone from '../../public/assets/home/desktop/image-hero-phone.png';

function hero() {
	return (
		<section className="flex flex-row bg-peach w-4/6 self-center items-center align-center pl-28 m-auto rounded-xl">
			<div>
				<h3 className="text-white text-h1 w-4/6 mb-5">
					Award-winning custom designs and digital branding solution
				</h3>
				<p className="text-white w-3/5 text-sm leading-5">
					With over 10 years in the industry, we are experienced in creating
					fully responsive websites, app design and engaging brand experiences.
					Find out more about our services
				</p>
				<button className="p-3 rounded-xl text-black bg-white my-6">
					LEARN MORE
				</button>
			</div>
			<div></div>
			<div>
				<Image src={Phone} alt="image" />
			</div>
		</section>
	);
}

export default hero;
