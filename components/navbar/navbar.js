import React from 'react';
import Image from 'next/image';
import LogoDark from '../../public/assets/shared/desktop/logo-dark.png';

function navbar() {
	return (
		<header>
			<nav className="flex flex-row m-11 px-6 py-7 justify-between self-center content-center width-full">
				<ul className="flex flex-row self-center justify-between items-center">
					<li className="mx-8">
						<Image src={LogoDark} />
					</li>
					<li className="mx-4 text-lg">Our Company</li>
					<li className="mx-4 text-lg">Location</li>
					<li className="mx-4 text-lg">Contact</li>
				</ul>
			</nav>
		</header>
	);
}

export default navbar;
