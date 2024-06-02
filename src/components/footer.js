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
		border-top-left-radius: 1.5rem;
		border-top-right-radius: 1.5rem;
		bottom: 0;
		color: white;
		display: flex;
		gap: 0.25rem;
		justify-content: center;
		position: fixed;
		width: 100%;
		z-index: 100;

		@media (min-width: 600px) {
			display: none;
		}

		> a {
			align-items: center;
			border-bottom: 2px solid transparent;
			border-top: 2px solid transparent;
			display: flex;
			gap: 0.5rem;
			height: 4rem;
			padding: 0 .5rem;
			text-decoration: none;
		}
	}
	footer {
		padding: 0 0 5rem;
		text-align: center;
		top: 100vh;
		z-index: 200;

		@media (min-width: 600px) {
			background: var(--footer, black);
			color: var(--footer-color, white);
			padding: 2rem 1rem;
			position: sticky;
		}
		
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
