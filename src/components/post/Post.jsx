import React from 'react';

function Post() {
	return (
		<section>
			<h2>My posts</h2>
			<form id="new-post" action="#" method="get" enctype="text/plain">
				<textarea form="new-post" rows="3" cols="70"></textarea>
				<button form="new-post" type="submit">
					Send
          </button>
			</form>
			<article>
				<h3>user name</h3>
				<aside>
					<img src="#" alt="avatar" />
				</aside>
				<p>I agree, Germany is my favorite country.</p>
				<footer>
					<p>
						Posted on
                <time datetime="1914-12-20 08:00"> May 17</time>
					</p>
				</footer>
			</article>
		</section>
	);
}