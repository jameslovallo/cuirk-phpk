import { html, scss } from 'cuirk'

export const rentalList = () => html`
	<h2 style="display: flex; justify-content: space-between;">
		Your Estimate
		<span class="rental-estimate"></span>
	</h2>
	<ul class="rental-list"></ul>
	<textarea name="rentals" hidden></textarea>
`

rentalList.init = () => {
	const rentalEstimate = document.querySelector('.rental-estimate')
	const rentalList = document.querySelector('.rental-list')
	const textArea = document.querySelector('textarea[name="rentals"]')

	const removeCart =
		'M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9L9.9 1.5L12 3.6L14.1 1.5L15.5 2.9L13.4 5L15.5 7.1L14.1 8.5M7 18C8.1 18 9 18.9 9 20S8.1 22 7 22 5 21.1 5 20 5.9 18 7 18M17 18C18.1 18 19 18.9 19 20S18.1 22 17 22 15 21.1 15 20 15.9 18 17 18M7.2 14.8C7.2 14.9 7.3 15 7.4 15H19V17H7C5.9 17 5 16.1 5 15C5 14.6 5.1 14.3 5.2 14L6.5 11.6L3 4H1V2H4.3L8.6 11H15.6L19.5 4L21.2 5L17.3 12C17 12.6 16.3 13 15.6 13H8.1L7.2 14.6V14.8Z'

	const rentalListItem = ({ img, price, title }) => `
		<li class="surface">
			<img src="${img}" alt="${title}" />
			<div>
				<h3>${title}</h3>
				<div class="actions">
					<span class="price">$${price}</span>
					<button class="button ghost rounded md">
						<span class="hover-cover"></span>
						<svg class="mdi" viewBox="0 0 24 24" width="24">
							<path d="${removeCart}" fill="currentColor" />
						</svg>
						Remove
					</button>
				</div>
			</div>
		</li>
	`

	const renderList = () => {
		import('/src/data/rentals.js').then(({ packages, bouncers, extras }) => {
			let estimate = 0

			rentalList.innerHTML = ''
			;[...packages, ...bouncers, ...extras]
				.filter((item) => getCart().includes(item.title))
				.forEach((item) => {
					rentalList.innerHTML += rentalListItem(item)
					estimate += Number(item.price)
					textArea.value += `${item.title}: $${item.price}\n`
				})

			textArea.value += `\nTotal: $${estimate}`
			rentalEstimate.textContent = `$${estimate}`

			document.querySelectorAll('.rental-list .surface').forEach((item) => {
				const name = item.querySelector('h3').textContent
				const remove = item.querySelector('.actions > .button')

				remove.addEventListener('click', (e) => {
					e.preventDefault()
					const inCart = getCart()
					inCart.splice(inCart.indexOf(name), 1)
					localStorage.setItem('inCart', JSON.stringify(inCart))
					renderList()
				})
			})
		})
	}

	rentalList && renderList()
}

rentalList.style = scss`
	.rental-estimate {
		color: green;
	}

	.rental-list {
		--c-primary: #f00;
		--c-primary-1: #f001;
		--c-primary-2: #f002;
		--c-primary-3: #f003;
		display: grid;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;

		li {
			align-items: center;
			display: grid;
			gap: 1rem;
			grid-template-columns: 6rem 1fr;
			padding: .5rem;

			img {
				aspect-ratio: 4/3;
				object-fit: cover;
			}

			h3 {
				margin: 0;
			}

			.actions {
				align-items: center;
				display: flex;
				justify-content: space-between;
				margin-bottom: -.5rem;
				margin-right: -.25rem;

				.price {
					color: green;
					font-weight: bold;
				}
			}
		}
	}
`
