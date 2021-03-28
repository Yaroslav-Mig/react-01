import React from 'react';
import { images } from '../../assets/images';

export function Header() {
	return (
		<header>
			<a href='#'>
				<img src={`${images.logo}`} alt='Logo'/>
			</a>
			<a href='#'>
				<h1>KeepInTouch</h1>
			</a>
		</header>
	);
}