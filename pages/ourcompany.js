import React from 'react';
import Image from 'next/image';
import Hero from '../public/assets/about/desktop/image-about-hero.jpg';
import Talent from '../public/assets/about/desktop/image-real-deal.jpg';

function ourcompany() {
	return (
		<section>
			<div className="bg-peach w-7/12 flex flex-row mx-auto my-10 rounded-2xl">
				<div className="flex flex-col self-center align-center p-20 m-auto">
					<h2 className="text-white text-h1 w-4/5 mb-5 font-bold">About Us</h2>
					<p className="w-4/6">
						Founded in 2010, we are a creative agency that produces lasting
						results for our clients. We've partnered with many startups,
						corporations, and nonprofits alike to craft design that make real
						impact. We're always looking foward to creating brands, products,
						and digital experiences that connect with our clients' audiences.
					</p>
				</div>
				<div className="overflow-hidden w-full h-full m-auto">
					<Image src={Hero} alt="Hero" className="rounded-2xl " />
				</div>
			</div>
			<div className="bg-peach w-7/12 flex flex-row mx-auto my-10 rounded-2xl">
				<Image src={Talent} />
				<h2>World-class Talent</h2>
				<p>
					We are a crew of strategists, problem-solvers and technologists. Every
					design is thoughtfully crafted from concept to launch, ensuring
					success in its given market. We are constantly updating our skills in
					a myriad of platforms.
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
			<div className="flex flex-row m-auto w-4/5 text-center py-20">
				<div>
					<Image src={Hero} alt="Hero" className="rounded-2xl " />
					<h3>Canada</h3>
					<button>See Location</button>
				</div>
				<div>
					<Image src={Hero} alt="Hero" className="rounded-2xl " />
					<h3>Canada</h3>
					<button>See Location</button>
				</div>
				<div>
					<Image src={Hero} alt="Hero" className="rounded-2xl " />
					<h3>Canada</h3>
					<button>See Location</button>
				</div>
			</div>
			<div className="bg-peach w-7/12 flex flex-row mx-auto my-10 rounded-2xl">
				<h2>The Real Deal</h2>
				<p>
					As strategic partners in our client's businesses, we are ready to take
					on any challenge as our own. Solving real problems require empathy and
					collaboration, and we strive to bring a fresh perspective to every
					opportunity. We make design and technology more accessible and give
					you tools to measure success.
				</p>
				<br />
				<p>
					We are visual storytellers in appealing and captivating ways. By
					combining business and marketing strategies, we inspire audiences to
					take action and dirve real results
				</p>
				<Image src={Hero} alt="Hero" />
			</div>
		</section>
	);
}

export default ourcompany;
