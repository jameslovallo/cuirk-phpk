import { loop, md } from 'cuirk'
import {
	button,
	icon,
	packageCard,
	rentalCards,
} from '../src/components/index.js'
import { bouncers, extras, packages } from '../src/data/rentals.js'

export const meta = {
	title: 'Plan Your Party',
	description:
		'Use this page to customize your party and get an estimate, then contact us to book it!',
}

export const body = md`
# ${meta.title}

Plan your party by choosing a package, or build your own by choosing bounce houses, equipment, and services a la carte!

## Packages

${loop(packages, packageCard)}

## Bounce Houses

${rentalCards(bouncers)}

## Equipment and Services

${rentalCards(extras)}

<div class="floating">
	${button({
		children: icon({ name: 'CalendarStar' }),
		href: '/booking',
		shape: 'circle',
		size: 'lg',
	})}
</div>

<style>
	.floating {
		bottom: 2rem;
		position: fixed;
		right: 2rem;
	}
	.floating .button {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		height: 4rem;
		width: 4rem;
	}
</style>
`
