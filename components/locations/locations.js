import React from 'react';
import Image from 'next/image';
import Hero from '../../public/assets/about/desktop/image-about-hero.jpg';
import Australia from '../../public/assets/shared/desktop/illustration-australia.svg';
import Canada from '../../public/assets/shared/desktop/illustration-canada.svg';
import UK from '../../public/assets/shared/desktop/illustration-united-kingdom.svg';
import Link from 'next/link';

function Locations() {
	return (
		<div className="flex md:flex-row flex-col justify-center text-center align-center self-center py-20">
			<div>
				<Image src={Canada} alt="Hero" className="rounded-2xl " />
				<h3 className="py-6 tracking-widest uppercase font-medium">Canada</h3>
				<Link href="/locations">
					<button className="bg-peach p-4 text-white mb-6 rounded-xl uppercase tracking-wide">
						See Location
					</button>
				</Link>
			</div>
			<div>
				<Image src={Australia} alt="Hero" className="rounded-2xl " />
				<h3 className="py-6 tracking-widest uppercase font-medium">
					Australia
				</h3>
				<Link href="/locations">
					<button className="bg-peach p-4 text-white mb-6 rounded-xl uppercase tracking-wide">
						See Location
					</button>
				</Link>
			</div>
			<div>
				<Image src={UK} alt="Hero" className="rounded-2xl " />
				<h3 className="py-6 tracking-widest uppercase font-medium">
					United Kingdom
				</h3>
				<Link href="/locations">
					<button className="bg-peach p-4 text-white mb-6 rounded-xl uppercase tracking-wide">
						See Location
					</button>
				</Link>
			</div>
		</div>
	);
}

export default Locations;
