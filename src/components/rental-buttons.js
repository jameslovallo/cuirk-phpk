import { html, scss } from 'cuirk'
import { button, icon } from './index.js'

export const rentalButtons = ({ title, price, variant = 'filled' }) => html`
	<div
		class="rental-buttons"
		data-title="${title}"
		data-price="${price}"
		data-in-cart="false"
	>
		${button({
			children: [
				icon({ name: 'CartPlus' }),
				price ? '$' + price : 'Call for Pricing',
			],
			shape: 'rounded',
			variant,
		})}
		${button({
			children: [icon({ name: 'CartRemove' }), 'Remove'],
			shape: 'rounded',
			variant,
		})}
	</div>
`

rentalButtons.style = scss`
	.rental-buttons {
		.button:last-child {
			--c-primary: #e00;
			--c-primary-1: #e001;
			--c-primary-2: #e002;
			--c-primary-3: #e003;
			--c-primary-color: white;
		}

		&[data-in-cart="false"] > .button:last-child {
			display: none;
		}

		&[data-in-cart="true"] > .button:first-child {
			display: none;
		}
	}
`

rentalButtons.init = () => {
	const item = document.querySelectorAll('.rental-buttons')

	item.forEach((item) => {
		const { title } = item.dataset
		const inCart = getCart().includes(title)
		item.dataset.inCart = inCart

		const addButton = item.querySelector('.button:first-child')
		const removeButton = item.querySelector('.button:last-child')

		addButton.addEventListener('click', (e) => {
			e.preventDefault()
			const inCart = getCart()
			inCart.push(title)
			localStorage.setItem('inCart', JSON.stringify(inCart))
			item.dataset.inCart = true
		})

		removeButton.addEventListener('click', (e) => {
			e.preventDefault()
			const inCart = getCart()
			inCart.splice(inCart.indexOf(title), 1)
			localStorage.setItem('inCart', JSON.stringify(inCart))
			item.dataset.inCart = false
		})
	})
}
