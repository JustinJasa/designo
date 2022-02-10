import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

function ServicesCard(props) {
	console.log(props);
	return (
		<div className="flex flex-wrap justify-center align-center self-center text-center my-10">
			<div className="bg-black w-card-mobile flex flex-col items-center justify-center h-card-mobile my-5 rounded-2xl">
				<h2 className="text-h2 text-white uppercase ">{props.title[0]}</h2>
				<div className="flex items-center justify-center w-4/5 mt-6">
					<Link href={props.links[0]}>
						<a className=" text-white uppercase whitespace-nowrap">
							View Projects
						</a>
					</Link>
					<ChevronRightIcon className="text-peach w-8 h-8 " />
				</div>
			</div>
			<div className="bg-black w-card-mobile flex flex-col items-center justify-center h-card-mobile my-5 rounded-2xl">
				<h2 className="text-h2 text-white uppercase ">{props.title[1]}</h2>
				<div className="flex items-center justify-center w-4/5 mt-6">
					<Link href={props.links[1]}>
						<a className=" text-white uppercase whitespace-nowrap">
							View Projects
						</a>
					</Link>
					<ChevronRightIcon className="text-peach w-8 h-8 " />
				</div>
			</div>
		</div>
	);
}

export default ServicesCard;
