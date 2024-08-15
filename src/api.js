const airTableToken =
	'patVIZxxhTpHfdpoi.b325497997a816b5b496cd63546296897cf55e8c971c911187bd4746869410a3'

export const write = async (table = 'Contact', fields) => {
	fetch(`https://api.airtable.com/v0/appkQY8Tv9j7XUJ0g/${table}`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${airTableToken}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ records: [{ fields }] }),
	}).then((res) => {
		if (res.ok) {
			window.location = '/thank-you'
		}
	})
}
