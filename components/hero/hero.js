import React from 'react';
import Image from 'next/image';
import Phone from '../../public/assets/home/desktop/image-hero-phone.png';
import Link from 'next/link';

function hero() {
	return (
		<section className="flex flex-col md:flex-row bg-peach w-full md:w-4/6 self-center items-center align-center justify-center text-center m-auto md:rounded-xl">
			<div>
				<h3 className="text-white text-h3 px-4 font-medium mt-10 mb-5">
					Award-winning custom designs and digital branding solution
				</h3>
				<p className="text-white text-base px-8 leading-6 justify-center leading-5">
					With over 10 years in the industry, we are experienced in creating
					fully responsive websites, app design and engaging brand experiences.
					Find out more about our services
				</p>
				<Link href="/ourcompany">
					<button className="p-5 rounded-xl text-black font-medium bg-white my-6">
						LEARN MORE
					</button>
				</Link>
			</div>
			<div></div>
			<div>
				<Image src={Phone} alt="image" />
			</div>
		</section>
	);
}

export default hero;
