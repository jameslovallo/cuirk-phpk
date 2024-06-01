import { html, scss } from 'cuirk'
import { icon } from './index.js'

export const nav = () => html`
	<nav>
		<a href="/">${icon({ name: 'Home' })}Home</a>
		<div>
			<a href="/your-party">${icon({ name: 'Castle' })} Plan Your Party</a>
			${icon({ name: 'ChevronRight' })}
			<a href="/booking">${icon({ name: 'CalendarStar' })} Book It</a>
		</div>
	</nav>
`

nav.style = scss`
	nav {
		align-items: center;
		background: var(--c-primary-50);
		display: flex;
		gap: .5rem;
		justify-content: space-between;
		padding: .5rem;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 500;

		a {
			align-items: center;
			display: flex;
			gap: 0.5rem;
			padding: .5rem;
			text-decoration: none;

			&:hover {
				color: var(--c-primary);
			}
		}

		> div {
			align-items: center;
			background: var(--c-primary-2);
			border-radius: 3rem;
			display: flex;
			padding: 0 .5rem;
		}
	}
`
