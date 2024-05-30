import { html, scss } from 'cuirk'
import { button, icon } from './index.js'

export const packageCard = ({ id, img, title, description, price }) => html`
	<div class="package-card surface ${id}">
		<div class="header">
			<img src="${img}" />
			<div>
				<h3>${title}</h3>
				${button({
					children: icon({ name: 'CartPlus' }) + '$' + price,
					shape: 'rounded',
				})}
				${button({
					children: icon({ name: 'CartRemove' }) + 'Remove',
					shape: 'rounded',
				})}
			</div>
		</div>
		<div class="body">${description}</div>
	</div>
`

packageCard.init = () => {
	document.querySelectorAll('.package-card').forEach((card) => {
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

packageCard.style = scss`
	.package-card {
		--c-primary: white;
		--c-primary-color: black;
		margin-bottom: 1rem;

		> .header {
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

				.button:last-of-type {
					--c-primary: red;
					--c-primary-color: white;
					display: none;
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
		}

		&.in-party {
			> .header {
				.button:first-of-type {
					display: none;
				}

				.button:last-of-type {
					display: inline-flex;
				}
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
