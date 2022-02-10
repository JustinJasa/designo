import React from 'react';
import Image from 'next/image';
import LogoLight from '../../public/assets/shared/desktop/logo-light.png';
import Facebook from '../../public/assets/shared/desktop/icon-facebook.svg';
import Instagram from '../../public/assets/shared/desktop/icon-instagram.svg';
import Pinterest from '../../public/assets/shared/desktop/icon-pinterest.svg';
import Twitter from '../../public/assets/shared/desktop/icon-twitter.svg';
import Youtube from '../../public/assets/shared/desktop/icon-youtube.svg';
import Link from 'next/link';

function footer() {
	return (
		<div className="flex flex-col">
			<section className="bg-peach mx-6 text-center rounded-3xl p-4 -mb-52 z-50">
				<div>
					<p className="text-white pt-10 pb-4 px-4 text-h3 font-medium">
						Let's talk about your project
					</p>
					<p className="text-white leading-6">
						Ready to take it to the next level? Contact us today and find out
						how our expertise can help your business grow.
					</p>
				</div>
				<div className="m-4 pt-4 pb-12">
					<Link href="/contactus">
						<button className="p-4 bg-white rounded-md font-medium tracking-wide">
							GET IN TOUCH
						</button>
					</Link>
				</div>
			</section>

			<footer>
				<section className="bg-black pt-80 text-center">
					<div>
						<div className="w-4/6 mb-4 m-auto">
							<Image src={LogoLight} />
						</div>
						<hr className="bg-gray-light text-gray-light w-5/6 m-auto" />

						<nav className="my-12">
							<ul>
								<Link href="/ourcompany">
									<li className="mx-4 my-4 text-md text-gray-light">
										OUR COMPANY
									</li>
								</Link>
								<Link href="/locations">
									<li className="mx-4 my-4 text-md text-gray-light">
										LOCATIONS
									</li>
								</Link>
								<Link href="/contactus">
									<li className="mx-4 my-4 text-md text-gray-light">CONTACT</li>
								</Link>
							</ul>
						</nav>
					</div>
					<div>
						<div className="text-gray my-4">
							<p className="font-bold text-gray">Designo Central Office</p>
							<p>1 Walker Street</p>
							<p>North Sydney</p>
						</div>
						<div className="text-gray my-12">
							<p className=" font-bold">Contact Us (Sydney Office)</p>
							<p>P : 123123123</p>
							<p>Email : contact@designo.com</p>
						</div>
					</div>
					<div className="flex justify-center items-center pb-10">
						<div className="mx-2">
							<Image src={Facebook} className="w-5 h-5 " />
						</div>
						<div className="mx-2">
							<Image src={Instagram} className="w-5 h-5 " />
						</div>
						<div className="mx-2">
							<Image src={Pinterest} className="w-5 h-5" />
						</div>
						<div className="mx-2">
							<Image src={Twitter} className="w-5 h-5" />
						</div>
						<div className="mx-2">
							<Image src={Youtube} className="w-5 h-5 " />
						</div>
					</div>
				</section>
			</footer>
		</div>
	);
}

export default footer;
