import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

function services() {
	return (
		<section className="flex flex-wrap items-center justify-center">
			<div className="bg-black w-card-mobile flex flex-col items-center justify-center  h-card-mobile my-5 rounded-2xl">
				<h2 className="text-h2 text-white uppercase ">Web Design</h2>
				<div className="flex items-center justify-center w-4/5 mt-6">
					<Link href="/webdesign">
						<a className=" text-white uppercase whitespace-nowrap">
							View Projects
						</a>
					</Link>
					<ChevronRightIcon className="text-peach w-8 h-8 " />
				</div>
			</div>
			<div className="bg-black w-card-mobile flex flex-col items-center justify-center h-card-mobile my-5 rounded-2xl">
				<h2 className="text-h2 text-white uppercase ">App Design</h2>
				<div className="flex items-center justify-center w-4/5 mt-6">
					<Link href="/appdesign">
						<a className=" text-white uppercase whitespace-nowrap">
							View Projects
						</a>
					</Link>
					<ChevronRightIcon className="text-peach w-8 h-8 " />
				</div>
			</div>
			<div className="bg-black w-card-mobile flex flex-col items-center justify-center h-card-mobile my-5 rounded-2xl">
				<h2 className="text-h2 text-white uppercase ">Graphic Design</h2>
				<div className="flex items-center justify-center w-4/5 mt-6">
					<Link href="/graphicdesign">
						<a className=" text-white uppercase whitespace-nowrap">
							View Projects
						</a>
					</Link>
					<ChevronRightIcon className="text-peach w-8 h-8 " />
				</div>
			</div>
		</section>
	);
}

export default services;
