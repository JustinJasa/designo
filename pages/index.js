import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/hero/hero';
import Values from '../components/values/values';

export default function Home() {
	return (
		<div>
			<Hero />
			<Values />
		</div>
	);
}
