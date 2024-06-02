import { html, scss } from 'cuirk'
import { icon } from './index.js'

export const nav = () => html`
	<nav>
		<a href="/">Home</a>
		<div>
			<a href="/your-party">${icon({ name: 'Castle' })} Plan Your Party</a>
			${icon({ name: 'ChevronRight' })}
			<a href="/booking">${icon({ name: 'CalendarStar' })} Book It</a>
		</div>
		<a href="/contact">Contact Us</a>
	</nav>
`

nav.style = scss`
	@media (min-width: 600px) {
		body {
			padding-top: 56px;
		}
	}
	nav {
		align-items: center;
		background: var(--c-primary-50);
		display: flex;
		gap: .5rem;
		justify-content: space-between;
		padding: .5rem;

		@media (min-width: 600px) {	
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 500;
		}

		a {
			align-items: center;
			display: flex;
			gap: 0.5rem;
			padding: .5rem;
			text-decoration: none;

			&:hover,
			&:focus {
				color: var(--c-primary);
			}
		}

		> a {
			border-radius: .25rem;

			&:hover,
			&:focus {
				background: var(--c-primary-hover);
			}

			&:active {
				background: var(--c-primary-active);
				color: var(--c-primary);
			}
		}

		> div {
			align-items: center;
			background: var(--c-primary-2);
			border-radius: 3rem;
			display: none;
			padding: 0 .5rem;

			@media (min-width: 600px) {
				display: flex;
			}
		}
	}
`
