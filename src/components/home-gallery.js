import { html, scss } from 'cuirk'

export const homeGallery = () => html`
	<div class="home-gallery">
		<div>
			<img src="/src/images/home/1.jpg" />
			<div>
				<img src="/src/images/home/2.jpg" />
				<img src="/src/images/home/3.jpg" />
			</div>
		</div>
		<div>
			<img src="/src/images/home/4.jpg" />
			<div>
				<img src="/src/images/home/5.jpg" />
				<img src="/src/images/home/6.jpg" />
			</div>
		</div>
	</div>
`

homeGallery.style = scss`
	.home-gallery {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		margin-top: 1.5rem;

		> div {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(3, 1fr);

			> img {
				grid-column: span 2;
			}

			> div {
				display: grid;
				gap: 1rem;
				grid-template-rows: repeat(2, 1fr);
			}
		}

		img {
                        aspect-ratio: 1;
			border-radius: 1.5rem;
		}
	}
`
