import { loop, md } from 'cuirk'
import { packageCard, rentalCards } from '../src/components/index.js'
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

<style>
	nav [href="/your-party"] {
		color: var(--c-primary);
	}

	.cap [href="/your-party"] {
		background: rgba(255, 255, 255, 0.05);
		border-bottom-color: white;
	}
</style>
`
