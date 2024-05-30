import { md } from 'cuirk'
import { bookingForm } from '../src/components/index.js'

export const meta = {
	title: 'Book Your Party',
}

export const body = md`
# ${meta.title}

When you are finished building [your party](/your-party) you will see your estimate below. To book your party, please complete the form below and we will get back to you as soon as possible.

${bookingForm()}
`
