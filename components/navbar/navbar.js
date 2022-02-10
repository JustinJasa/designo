import { useState } from 'react';
import Image from 'next/image';
import LogoDark from '../../public/assets/shared/desktop/logo-dark.png';
import Link from 'next/link';
import { MenuIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';

function navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className=" flex md:flex-row flex-col">
			<div className="flex self-center align-center justify-between p-6 ">
				<div className="flex justify-center p-6 items-center">
					<Link href="/">
						<Image src={LogoDark} />
					</Link>
				</div>
				<div className="flex justify-center items-center"></div>
				{toggleMenu ? (
					<XIcon
						onClick={() => setToggleMenu(!toggleMenu)}
						className="h-10 w-10 flex md:hidden items-center justify-center m-4"
					/>
				) : (
					<MenuIcon
						onClick={() => setToggleMenu(!toggleMenu)}
						className="h-10 w-10 flex md:hidden items-center justify-center m-4"
					/>
				)}
			</div>
			{toggleMenu && (
				<nav className="flex md:flex-row flex-col justify-between bg-black w-full p-4">
					<ul className="flex md:flex-row flex-col self-center justify-start items-center uppercase tracking-wide">
						<li className="mx-4 py-4 text-lg text-white md:text-black">
							<Link href="/ourcompany">Our Company</Link>
						</li>
						<li className="mx-4 py-4 text-lg text-white md:text-black">
							<Link href="/locations">Locations</Link>
						</li>
						<li className="mx-4 py-4 text-lg text-white md:text-black">
							<Link href="/contactus">Contact</Link>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
}

export default navbar;
