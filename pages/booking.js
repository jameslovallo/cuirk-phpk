import { md } from 'cuirk'
import { bookingForm, rentalList } from '../src/components/index.js'

export const meta = {
	title: 'Book Your Party',
}

export const body = md`
# ${meta.title}

When you are finished building [your party](/your-party) you will see your estimate below. To book your party, please complete the form below and we will get back to you as soon as possible.

${rentalList()}
${bookingForm()}

<style>
	nav [href="/booking"] {
		color: var(--c-primary);
	}

	.cap [href="/booking"] {
		background: rgba(255, 255, 255, 0.05);
		border-bottom-color: white;
	}
</style>
`
