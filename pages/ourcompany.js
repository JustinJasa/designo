import React from 'react';
import Image from 'next/image';
import Hero from '../public/assets/about/desktop/image-about-hero.jpg';
import Talent from '../public/assets/about/desktop/image-real-deal.jpg';
import Locations from '../components/locations/locations';

function ourcompany() {
	return (
		<section>
			<div className="bg-peach flex md:flex-row flex-col mx-auto md:w-4/5 w-full md:my-10 md:rounded-2xl">
				<div className="overflow-hidden w-full h-full m-auto">
					<Image src={Hero} alt="Hero" className="md:rounded-2xl" />
				</div>
				<div className="flex flex-col self-center align-center text-center my-8 m-auto">
					<h2 className="text-white text-h2 mb-5 font-medium">About Us</h2>
					<p className="text-white px-4 pb-4 leading-8">
						Founded in 2010, we are a creative agency that produces lasting
						results for our clients. We've partnered with many startups,
						corporations, and nonprofits alike to craft design that make real
						impact. We're always looking foward to creating brands, products,
						and digital experiences that connect with our clients' audiences.
					</p>
				</div>
			</div>
			<div className="bg-peach-card flex md:flex-row flex-col mx-auto md:my-10 md:rounded-2xl text-center pb-8">
				<Image src={Talent} />
				<h2 className="pt-10 pb-8 text-peach font-medium text-h2">
					World-class Talent
				</h2>
				<div className="px-6">
					<p>
						We are a crew of strategists, problem-solvers and technologists.
						Every design is thoughtfully crafted from concept to launch,
						ensuring success in its given market. We are constantly updating our
						skills in a myriad of platforms.
					</p>
					<br />
					<p>
						Our team is multi-disciplinary and we are not merely interested in
						form - content and meaning are just as important. We give great
						importance to craftsmanship, service, and prompt delivery. Clients
						have always been impressed with our high-quality outcomes that
						encapsulates their brand's story and mission.
					</p>
				</div>
			</div>
			<div>
				<Locations />
			</div>
			<div className="bg-peach flex md:flex-row flex-col mx-auto mt-8 mb-14 text-center bg-peach-card">
				<Image src={Talent} alt="Hero" />
				<h2 className="mt-14 text-peach font-medium mb-4 text-h3">
					The Real Deal
				</h2>
				<div className="p-4 mb-20">
					<p>
						As strategic partners in our client's businesses, we are ready to
						take on any challenge as our own. Solving real problems require
						empathy and collaboration, and we strive to bring a fresh
						perspective to every opportunity. We make design and technology more
						accessible and give you tools to measure success.
					</p>
					<br />
					<p>
						We are visual storytellers in appealing and captivating ways. By
						combining business and marketing strategies, we inspire audiences to
						take action and dirve real results
					</p>
				</div>
			</div>
		</section>
	);
}

export default ourcompany;
