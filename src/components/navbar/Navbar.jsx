import React from 'react';

export function Navbar() {
	return (
		<aside>
			<div>
				<img src="#" alt="user background" />
			</div>
			<figure>
				<img src="#" alt="user avatar" />
				<figcaption>User Name</figcaption>
			</figure>
			<nav>
				<h2>My profile</h2>
				<ul>
					<li><a href="#">Profile</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">News</a></li>
					<li><a href="#">Messenger</a></li>
					<li><a href="#">Friends</a></li>
					<li><a href="#">Communities</a></li>
					<li><a href="#">Photos</a></li>
					<li><a href="#">Settings</a></li>
				</ul>
			</nav>
		</aside>
	);
}