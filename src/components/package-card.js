import { html, scss } from 'cuirk'
import { rentalButtons } from './index.js'

export const packageCard = ({ id, img, title, description, price }) => html`
	<div class="package-card surface ${id}">
		<div class="header">
			<img src="${img}" />
			<div>
				<h3>${title}</h3>
				${rentalButtons({ title, price })}
			</div>
		</div>
		<div class="body">${description}</div>
	</div>
`

packageCard.style = scss`
	.package-card {
		margin-bottom: 1rem;

		> .header {
			--c-primary: #fff;
			--c-primary-color: black;
			align-items: center;
			background: #697e9b linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
			color: white;
			display: grid;
			grid-template-columns: 150px 1fr;
			padding: 1rem 1rem 1rem 0;

			> img {
				aspect-ratio: 4/3;
				object-fit: cover;
			}

			> div {
				padding: 1rem;

				> h3 {
					margin-top: 0;
				}
			}
		}

		.body {
			padding: 0 1rem;

			h4 {
				margin-bottom: 0;

				& + p,
				& + ul {
					margin-top: 0;
				}
			}

			> p {
				opacity: 0.75;
			}
		}

		&.gold {
			> .header {
				background: #ffc107 linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
				color: black;
			}
		}

		&.twister {
			img {
				margin-left: .5rem;
				width: calc(100% - 1rem);
			}
		}
	}
`
