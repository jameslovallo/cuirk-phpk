import { html, scss } from 'cuirk'
import { button, grid, icon } from './index.js'

export const contactForm = () => html`
	<form class="contact-form">
		<label>
			Don’t fill this out if you’re human: <input name="occupation" />
		</label>
		${grid({
			children: [
				html`
					<label>
						<span>Name<sup></sup></span>
						<input type="text" name="Name" required />
					</label>
				`,
				html`
					<label>
						<span>Phone Number<sup></sup></span>
						<input type="tel" name="Phone Number" required />
					</label>
				`,
			],
		})}
		<label>
			<span>Email Address<sup></sup></span>
			<input type="email" name="Email Address" required />
		</label>
		<label>
			<span>Your Message<sup></sup></span>
			<textarea name="Message" required></textarea>
		</label>
		${button({
			children: icon({ name: 'Send' }) + 'Submit',
			type: 'submit',
			shape: 'rounded',
		})}
	</form>
`

contactForm.init = () => {
	const contactFormElement = document.querySelector('.contact-form')
	if (contactFormElement) {
		import('/src/api.js').then(({ write }) => {
			contactFormElement.addEventListener('submit', (e) => {
				e.preventDefault()
				const formData = new FormData(contactFormElement)
				const fields = Object.fromEntries(formData)
				if (!fields.occupation) {
					delete fields.occupation
					write('Contact', fields)
				}
			})
		})
	}
}

contactForm.style = scss`
	.contact-form {
		display: grid;
		gap: 1rem;

		label {
			display: grid;
			gap: 0.5rem;

			&:has([name="occupation"]) {
				display: none;
			}

			sup {
				color: red;
				&:before {
					content: '*';
				}
			}

			&:has(:valid) sup {
				display: none;
			}

			input,
			textarea {
				border: none;
				border-bottom: var(--c-border);
				border-bottom-width: 2px;
				font-size: 1rem;
				padding: 0.5rem;

				&:focus {
					border-bottom-color: var(--c-primary);
					outline: none;
				}
			}

			textarea {
				height: 8rem;
				resize: none;
			}
		}
	}
`
