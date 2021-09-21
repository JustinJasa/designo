import React from 'react';
import Image from 'next/image';
import LogoLight from '../../public/assets/shared/desktop/logo-light.png';
/* import {
	Facebook,
	Youtube,
	Twitter,
	Pinterest,
	Instagram,
} from 'grommet-icons'; */

import Link from 'next/link';

function footer() {
	return (
		<footer className="">
			<section className="flex flex-row self-center items-center align-center content-center w-4/5 p-14 justify-evenly m-auto bg-peach text-white mt-6 rounded-xl">
				<div>
					<h2>Let's talk about your project</h2>
					<p>
						Ready to take it to the next level? Contact us today and find out
						how our expertise can help your business grow.
					</p>
				</div>
				<div>
					<button className="w-30 rounded-xl bg-white text-black text-lg p-5">
						GET IN TOUCH
					</button>
				</div>
			</section>
			<section className="bg-black flex flex-col w-full justify-between py-12">
				<div className="flex flex-row justify-between items-center mx-20">
					<div>
						<Image src={LogoLight} />
					</div>
					<nav className="justify-between mx-20">
						<ul className="flex flex-row self-center items-center">
							<li className="mx-4 text-lg text-gray-light">Our Company</li>
							<li className="mx-4 text-lg text-gray-light">Location</li>
							<li className="mx-4 text-lg text-gray-light">Contact</li>
						</ul>
					</nav>
				</div>

				<div className="flex flex-row justify-evenly">
					<div className="text-gray">
						<p className="font-bold text-gray">Designo Central Office</p>
						<p className="text-gray">1 Walker Street</p>
						<p className="text-gray">North Sydney</p>
					</div>
					<div className="text-gray font-bold">
						<p>Contact Us (Sydney Office)</p>
						<p>P: 123123123</p>
						<p>Email: contact@designo.com</p>
					</div>
					{/* 				<div>
					<ul>
						<li>
							<Facebook />
						</li>
						<li>
							<Youtube />
						</li>
						<li>
							<Twitter />
						</li>
						<li>
							<Pinterest />
						</li>
						<li>
							<Instagram />
						</li>
					</ul>
				</div> */}
				</div>
			</section>
		</footer>
	);
}

export default footer;
