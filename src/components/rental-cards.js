import { html, loop, scss, when } from 'cuirk'
import { card, cardActions, cardBody, grid, rentalButtons } from './index.js'

const rentalCard = ({ img, title, description, price, dimensions }) =>
	card({
		children: [
			html`<img src="${img}" alt="${title}" />`,
			cardBody({ title, subtitle: description }),
			cardActions({
				children: [
					rentalButtons({ title, price, variant: 'ghost' }),
					when(dimensions, html`<span>${dimensions}</span>`),
				],
			}),
		],
	})

export const rentalCards = (children) => html`
	<div class="rental-cards">
		${grid({ children: loop(children, rentalCard) })}
	</div>
`

rentalCards.style = scss`
	.rental-cards {
		.card {
			> img {
				aspect-ratio: 4 / 3;
				object-fit: contain;

				&[src*=png] {
					transform: scale(.8);
				}
			}
			> .actions {
				align-items: center;
				display: flex;
				justify-content: space-between;
				position: sticky;
				top: 100%;

				> .button:nth-child(2) {
					display: none;
				}

				> span {
					margin-right: .75rem;
				}
			}
		}
	}
`
