import { html, scss } from 'cuirk'
import { icon } from './index.js'

export const nav = () => html`
	<nav>
		<div>
			<a href="/">Home</a>
		</div>
		<div>
			<a href="/your-party">${icon({ name: 'Castle' })} Plan Your Party</a>
			${icon({ name: 'ChevronRight' })}
			<a href="/booking">${icon({ name: 'CalendarStar' })} Book It</a>
		</div>
		<div>
			<a href="/contact">Contact</a>
		</div>
	</nav>
`

nav.style = scss`
	@media (min-width: 600px) {
		body {
			padding-top: 56px;
		}
	}
  
  @keyframes shadow-in {
    to { box-shadow: 0 5px 10px #0006 }
  }

	nav {
		align-items: center;
		background: var(--c-primary-50);
		display: grid;
		gap: .5rem;
		grid-template-columns: 1fr auto 1fr;
		padding: .5rem;

		@media (min-width: 600px) {	
			animation: shadow-in auto linear both;
			animation-range: 0% 100px;
			animation-timeline: scroll();
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

		> div:nth-child(1) a,
		> div:nth-child(3) a {
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

		> div:nth-child(1),
		> div:nth-child(3) {
			align-items: center;
			display: flex;
		}

		> div:nth-child(3) {
			justify-content: flex-end;
		}

		> div:nth-child(2) {
			align-items: center;
			background: var(--c-primary-2);
			border-radius: 3rem;
			display: flex;
			padding: 0 .5rem;

			> * {
				display: none;

				@media (min-width: 600px) {
					display: flex;
				}
			}
		}
	}
`
