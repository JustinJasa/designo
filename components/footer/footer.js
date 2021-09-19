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
		<footer className="bg-black flex flex-col w-full justify-between">
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

			<section className="flex flex-row justify-evenly">
				<div className="text-gray-dark">
					<p className="font-bold">Designo Central Office</p>
					<p>1 Walker Street</p>
					<p>North Sydney</p>
				</div>
				<div className="text-gray-dark font-bold">
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
			</section>
		</footer>
	);
}

export default footer;
