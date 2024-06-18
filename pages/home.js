import { html, loop, md } from 'cuirk'
import {
	contactForm,
	homeGallery,
	packageCard,
} from '../src/components/index.js'
import { packages } from '../src/data/rentals.js'
import reviews from '../src/data/reviews.js'

export const meta = {
	scripts: [
		{
			src: 'https://unpkg.com/cuick-dev/components/carousel.js',
			type: 'module',
			defer: true,
		},
	],
}

export const body = md`
# Make Your Next Party Magical

Purple Heart Party Kids provides bounce house and party equipment rentals in the greater Metro Detroit area. We take great pride in our service. We believe that the way you do anything is the way you do everything. Book with Purple Heart Party Kids so we can help make your next party experience magical!

${homeGallery()}

## Featured Packages

${loop(packages, packageCard)}

## Reviews

<c-carousel responsive="0: 1">
	${loop(reviews, ({ review }) => html`<p>${review}</p>`)}
</c-carousel>

## Contact Us

${contactForm()}
`
