import { html, scss } from 'cuirk'
import meta from '../data/meta.js'
import { icon } from './index.js'

const date = new Date().getFullYear()

export const footer = () => html`
	<div class="cap">
		<a href="/your-party">${icon({ name: 'Castle' })} Plan Your Party</a>
		${icon({ name: 'ChevronRight' })}
		<a href="/booking">${icon({ name: 'CalendarStar' })} Book It</a>
	</div>
	<footer>
		<small>© ${date} ${meta.title}. All Rights Reserved.</small>
	</footer>
`

footer.style = scss`
	.cap {
		align-items: center;
		background: var(--c-primary);
		border-top-left-radius: 2rem;
		border-top-right-radius: 2rem;
		bottom: 0;
		color: white;
		display: flex;
		gap: 0.25rem;
		justify-content: center;
		position: sticky;

		@media (min-width: 600px) {
			display: none;
		}

		> a {
			align-items: center;
			border-bottom: 2px solid transparent;
			border-top: 2px solid transparent;
			display: flex;
			gap: 0.5rem;
			height: 3rem;
			padding: 0 .5rem;
			text-decoration: none;
		}
	}
	footer {
		background: var(--footer, black);
		color: var(--footer-color, white);
		display: grid;
		gap: 1.5rem;
		justify-content: center;
		padding: 2rem 1rem;
		position: sticky;
		text-align: center;
		top: 100vh;
		
		> div {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			justify-content: center;

			> a {
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`
