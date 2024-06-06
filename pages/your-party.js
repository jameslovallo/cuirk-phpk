import { loop, md } from 'cuirk'
import { linkList, packageCard, rentalCards } from '../src/components/index.js'
import { bouncers, extras, interactive, packages } from '../src/data/rentals.js'

export const meta = {
	title: 'Plan Your Party',
	description:
		'Use this page to customize your party and get an estimate, then contact us to book it!',
}

export const body = md`
# ${meta.title}

Plan your party by choosing a package, or build your own by choosing bounce houses, games, equipment, and services a la carte!

${linkList([
	{ title: 'Packages', href: '#packages', icon: 'Package' },
	{ title: 'Bounce Houses', href: '#bounce-houses', icon: 'Castle' },
	{ title: 'Interactive Games', href: '#interactive-games', icon: 'Trophy' },
	{
		title: 'Equipment and Services',
		href: '#equipment-and-services',
		icon: 'Popcorn',
	},
])}

## Packages

${loop(packages, packageCard)}

## Bounce Houses

${rentalCards(bouncers)}

## Interactive Games

${rentalCards(interactive)}

## Equipment and Services

${rentalCards(extras)}

<style>
	nav [href="/your-party"] {
		color: var(--c-primary);
	}

	.link-list {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	.cap [href="/your-party"] {
		background: rgba(255, 255, 255, 0.05);
		border-bottom-color: white;
	}
</style>
`
