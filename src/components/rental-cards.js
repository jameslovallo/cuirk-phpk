import { html, loop, scss, when } from 'cuirk'
import { button, card, cardActions, cardBody, grid, icon } from './index.js'

const rentalCard = ({ img, title, description, price, dimensions }) =>
	card({
		children: [
			html`<img src="${img}" alt="${title}" />`,
			cardBody({ title, subtitle: description }),
			cardActions({
				children: [
					button({
						children: icon({ name: 'CartPlus' }) + '$' + price,
						shape: 'rounded',
						variant: 'ghost',
					}),
					button({
						children: icon({ name: 'CartRemove' }) + 'Remove',
						shape: 'rounded',
						variant: 'ghost',
					}),
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

rentalCards.init = () => {
	document.querySelectorAll('.rental-cards .card').forEach((card) => {
		const name = card.querySelector('h3').textContent
		const add = card.querySelector('.button:first-of-type')
		const remove = card.querySelector('.button:last-of-type')
		if (getCart().includes(name)) card.classList.add('in-party')

		add.addEventListener('click', () => {
			const inCart = getCart()
			inCart.push(name)
			localStorage.setItem('inCart', JSON.stringify(inCart))
			card.classList.add('in-party')
		})

		remove.addEventListener('click', () => {
			const inCart = getCart()
			inCart.splice(inCart.indexOf(name), 1)
			localStorage.setItem('inCart', JSON.stringify(inCart))
			card.classList.remove('in-party')
		})
	})
}

rentalCards.style = scss`
	.rental-cards {
		.card {
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

			&.in-party {
				--c-primary: #f00;
				--c-primary-1: #f001;
				--c-primary-2: #f002;
				--c-primary-3: #f003;
				
				> .actions {
					> .button:nth-child(1) {
						display: none;
					}

					> .button:nth-child(2) {
						display: inline-flex;
					}
				}
			}
		}
	}
`
