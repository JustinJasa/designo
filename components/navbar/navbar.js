import Image from 'next/image';
import LogoDark from '../../public/assets/shared/desktop/logo-dark.png';

function navbar() {
	return (
		<header className="justify-between flex flex-row">
			<div className="self-center align-center mx-20">
				<Image src={LogoDark} />
			</div>
			<nav className="flex flex-row m-20  justify-between self-center content-center">
				<ul className="flex flex-row self-center justify-between items-center">
					<li className="mx-4 text-lg">Our Company</li>
					<li className="mx-4 text-lg">Location</li>
					<li className="mx-4 text-lg">Contact</li>
				</ul>
			</nav>
		</header>
	);
}

export default navbar;
