import { html, loop, md } from 'cuirk'
import {
	button,
	contactForm,
	homeGallery,
	icon,
	packageCard,
} from '../src/components/index.js'
import { packages } from '../src/data/rentals.js'
import reviews from '../src/data/reviews.js'

export const body = md`
# Make Your Next Party Magical

Purple Heart Party Kids provides bounce house and party equipment rentals in the greater Metro Detroit area. We take great pride in our service. We believe that the way you do anything is the way you do everything. Book with Purple Heart Party Kids so we can help make your next party experience magical!

${button({
	children: icon({ name: 'Castle' }) + 'Plan Your Party',
	href: '/your-party',
	shape: 'rounded',
})}

${homeGallery()}

## Featured Packages

${loop(packages, packageCard)}

## Reviews

<snappy-carousel>
	${loop(reviews, ({ review }) => html`<p>${review}</p>`)}
</snappy-carousel>

## Contact Us

${contactForm()}

<style>
	snappy-carousel {
		--desktop: 100%;
		--gap: .5rem;
		--tablet: 100%;
	}

	snappy-carousel::part(indicators),
	snappy-carousel::part(prev),
	snappy-carousel::part(next) {
		color: var(--c-primary);
	}

	snappy-carousel p {
		margin: 0;
	}
</style>

<script type="module" defer>
	import "//unpkg.com/@snappywc/carousel";
</script>
`
