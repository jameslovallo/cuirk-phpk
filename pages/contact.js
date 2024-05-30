import { md } from 'cuirk'
import { contactForm, linkList } from '../src/components/index.js'
import social from '../src/data/social.js'

export const meta = {
	title: 'Contact',
}

export const body = md`
# Contact

## Social Media

${linkList(social)}

## Contact Form

${contactForm()}
`
