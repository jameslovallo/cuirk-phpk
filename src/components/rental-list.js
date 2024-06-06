import { html, scss } from 'cuirk'
import { button, icon } from './index.js'

export const rentalList = () => html`
	<template id="removeButton">
		${button({
			children: icon({ name: 'CartRemove' }) + 'Remove',
			shape: 'rounded',
			variant: 'ghost',
		})}
	</template>
	<h2
		style="align-items: baseline; display: flex; justify-content: space-between;"
	>
		Your Estimate
		<small
			class="rental-estimate"
			style="color: #080; font-size: 1rem;"
		></small>
	</h2>
	<ul class="rental-list"></ul>
`

rentalList.init = () => {
	const rentalList = document.querySelector('.rental-list')

	if (rentalList) {
		const rentalEstimate = document.querySelector('.rental-estimate')
		const textarea = document.querySelector('textarea[name="rentals"]')
		const removeButton = document.querySelector('#removeButton').innerHTML

		const renderRentalList = () => {
			let estimate = 0
			rentalList.innerHTML = ''
			rentalEstimate.textContent = ''
			textarea.value = ''

			import('/src/data/rentals.js').then(
				({ packages, bouncers, interactive, extras }) => {
					rentalList.innerHTML = [
						...packages,
						...bouncers,
						...interactive,
						...extras,
					]
						.filter(({ title }) => getCart().includes(title))
						.map(
							({ img, title, price }) => `
						<li class="surface" data-title="${title}" data-price="${price}">
							<img src="${img}" />
							<div>
								<h3>${title}</h3>
								<div>
									<b>${price ? '$' + price : 'Call for Pricing'}</b>
									${removeButton}
								</div>
							</div>
						</li>
					`
						)
						.join('')

					if (!rentalList.innerHTML) {
						rentalList.innerHTML = `
					<li>
						After you add some items from the <a href="/your-party">Plan Your Party</a> page they will appear here.
					</li>
				`
					}

					const items = rentalList.querySelectorAll('li')

					items.forEach((item) => {
						const { title, price } = item.dataset

						textarea.value += `${title}: ${price}\n`

						if (price !== 'undefined' && typeof estimate === 'number') {
							estimate += Number(price)
						} else estimate = 'Call for Pricing'

						const removeItemButton = item.querySelector('button')
						if (removeItemButton) {
							removeItemButton.addEventListener('click', () => {
								const inCart = getCart()
								inCart.splice(inCart.indexOf(title), 1)
								localStorage.setItem('inCart', JSON.stringify(inCart))
								renderRentalList()
							})
						}
					})

					if (estimate) {
						rentalEstimate.textContent =
							typeof estimate === 'number' ? '$' + estimate : estimate
					}
				}
			)
		}

		renderRentalList()
	}
}

rentalList.style = scss`
	.rental-list {
		display: grid;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;

		> li.surface {
			align-items: center;
			display: grid;
			gap: 1rem;
			grid-template-columns: 6rem 1fr;
			padding: .5rem;

			> img {
				aspect-ratio: 4/3;
				object-fit: contain;
			}

			> div {
				> h3 {
					margin: 0
				}

				> div {
					align-items: center;
					display: flex;
					justify-content: space-between;

					> b {
						color: #080;
					}

					> .button {
						--c-primary: #e00;
						--c-primary-1: #e001;
						--c-primary-2: #e002;
						--c-primary-3: #e003;
					}
				}
			}
		}
	}
`
