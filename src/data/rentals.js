const html = (v) => v

export const packages = [
	{
		title: 'Gold Bear',
		id: 'gold',
		img: '/src/images/home/bear.svg',
		description: html`
			<h4>Your Choice of Bounce House</h4>
			<p><small>(Excluding Rival Arena)</small></p>
			<h4>Pick 1</h4>
			<ul>
				<li>Professional Face Painter</li>
				<li>Professional Hair Stylist</li>
			</ul>
			<h4>Pick 2</h4>
			<ul>
				<li>Popcorn Machine</li>
				<li>Sno-Cone Machine</li>
				<li>Cotton Candy Maker</li>
			</ul>
			<h4>Summer Special: Super Soakers!</h4>
			<p><small>Upon Request/Based on Availability</small></p>
		`,
	},
	{
		title: 'Summer Special',
		id: 'silver',
		price: 499.99,
		img: '/src/images/home/bear.svg',
		description: html`
			<h4>Your Choice of Bounce House</h4>
			<p>
				<small>
					(Excluding Blue Wave Water Slide, Double Lane Slide, Giant Slide,
					Rival Arena, Wet Jump & Slide Bounce House and Young & Wild Combo)
				</small>
			</p>
			<h4>Equipment</h4>
			<ul>
				<li>Popcorn Machine</li>
				<li>Sno-Cone Machine</li>
			</ul>
		`,
	},
	{
		title: 'Twister with a Twist',
		id: 'silver twister',
		price: 399.99,
		img: '/src/images/home/twister.png',
		description: html`
			<h4>Features</h4>
			<ul>
				<li>Inflatable Twister Board</li>
				<li>Margarita Machine</li>
			</ul>
		`,
	},
]

export const bouncers = [
	{
		img: '/src/images/rentals/magic castle plus.png',
		title: 'Magic Castle Plus',
		description: 'Four spire towers and large interior jumping area.',
		price: '225',
		dimensions: "15' x 15'",
	},
	{
		img: '/src/images/rentals/razzle dazzle.png',
		title: 'Razzle Dazzle Princess Castle Plus',
		description: 'A perfect birthday bouncer at an unbeatable value.',
		price: '225',
		dimensions: "15' x 15'",
	},
	{
		img: '/src/images/rentals/c rex.png',
		title: 'C Rex Bounce House',
		price: '225',
		dimensions: "15' x 15'",
	},
	{
		img: '/src/images/rentals/candy castle.png',
		title: 'Candy Castle',
		description:
			'Live the adventure of Kings and Queens. Ask about Candy Land balloon packages!',
		price: '225',
		dimensions: "15' x 15' x 17'",
	},
	{
		img: '/src/images/rentals/frozen.png',
		title: "Disney's Frozen",
		description: "Great for your little girl's party.",
		price: '200',
		dimensions: "13' x 13'",
	},
	{
		img: '/src/images/rentals/turtles.png',
		title: 'Ninja Turtles',
		description: 'Great for all ages.',
		price: '200',
		dimensions: "15' x 15'",
	},
	{
		img: '/src/images/rentals/king castle.png',
		title: 'King Castle',
		description:
			'The vibrancy of this bounce house is like no other, “where joy knows no bounds” Great for any event!',
		price: '225',
		dimensions: "15' x 15'",
	},
	{
		img: '/src/images/rentals/jump and slide.png',
		title: 'Jump & Slide Bouncer (Dry)',
		description:
			'Bounce house plus slide with a basketball hoop on the inside.',
		price: '250',
		dimensions: "13' x 18' x 14'",
	},
	{
		img: '/src/images/rentals/jump and slide.png',
		title: 'Jump & Slide Bouncer (Wet)',
		description:
			'Bounce house plus water slide with a basketball hoop on the inside.',
		price: '275',
		dimensions: "13' x 18' x 14'",
	},
	{
		img: '/src/images/rentals/double lane.png',
		title: 'Double Lane Super Slide (Dry)',
		description: 'This bouncer is a 5 in 1 powerhouse. Dry at this price.',
		price: '300',
		dimensions: "36' x 15' x 15'",
	},
	{
		img: '/src/images/rentals/double lane.png',
		title: 'Double Lane Super Slide (Wet)',
		description: 'This bouncer is a 5 in 1 waterslide with a splash pool.',
		price: '350',
		dimensions: "36' x 15' x 15'",
	},
	{
		img: '/src/images/rentals/kahuna.png',
		title: 'Hyper Kids Kahuna (Dry)',
		description: 'This bouncer is a 5 in 1 powerhouse. Dry at this price.',
		price: '300',
		dimensions: "36' x 15' x 15'",
	},
	{
		img: '/src/images/rentals/kahuna.png',
		title: 'Hyper Kids Kahuna (Wet)',
		description: 'This bouncer is a 5 in 1 waterslide with a splash pool.',
		price: '350',
		dimensions: "36' x 15' x 15'",
	},
	{
		img: '/src/images/rentals/giant slide.png',
		title: 'Giant Slide',
		description:
			'You’ll delight as you watch them zoom down with a big smile on their face over and over again!',
		price: '250',
		dimensions: "17'",
	},
	{
		img: '/src/images/rentals/young and wild.png',
		title: 'Young & Wild Combo',
		description:
			'You’ll delight as you watch them zoom down with a big smile on their face!',
		dimensions: "23' x 24' x 14'",
	},
	{
		img: '/src/images/rentals/blue wave.png',
		title: 'Blue Wave Water Slide',
		description:
			'This is a perfect option for any event where folks want to cool off and have some adrenaline pumping fun.',
		price: '325',
		dimensions: "25' x 9' x 15'",
	},
	{
		img: '/src/images/rentals/bluestar cay.png',
		title: 'Bluestar Cay Water Slide',
		description:
			'A perfect option for any event where folks want to cool off and have some adrenaline-pumping fun.',
		price: 325,
		dimensions: '25 x 9 x 15',
	},
	{
		img: '/src/images/rentals/crash out.png',
		title: 'Crash Out Obstacle Course',
		description:
			'Squeeze through tunnels, jump over barriers, slip underneath bars, and push your way past any obstacle that comes your way while trying to move as fast as possible.',
		dimensions: '47 x 11 x 14',
	},
]

export const interactive = [
	{
		img: '/src/images/rentals/rival arena.png',
		title: 'Rival Arena',
		description:
			'Take things up a notch and have a party like no other. Watch the video!',
		dimensions: "15' x 15' x 13'",
	},
	{
		img: '/src/images/rentals/warp speed arena.png',
		title: 'Hyper Kids Arena',
		description:
			'This distinctive bounce house takes the exercise and competition to 11. Watch the video!',
		dimensions: "14' x 14' x 9.5'",
	},
	{
		img: '/src/images/rentals/twister.png',
		title: 'Party Kids Twister',
		description: 'For adults and kids.',
		price: '150',
		dimensions: '150',
	},
	{
		img: '/src/images/rentals/connect 8.png',
		title: 'Shoot & Score Connect Four',
		description:
			'This amazing Shoot & Score challenge is a fun and exciting way to play inflatable Connect 4.',
		dimensions: "9' x 11' x 10'",
	},
	{
		img: '/src/images/rentals/home run.png',
		title: 'Home Run Challenge',
		description:
			'Step up to the plate and test your hitting skills with our Home Run Challenge - Batter Up! ⚾',
		dimensions: '10 x 12.5 x 10.5',
	},
	{
		img: '/src/images/rentals/super bowl.png',
		title: 'Super Bowl Toss',
		description:
			'The Superbowl Toss is an exciting inflatable game that lets players young and old show off their passing game.',
		dimensions: '10 x 10 x 11',
	},
]

export const extras = [
	{
		img: '/src/images/rentals/face painting.webp',
		title: 'Face Painting',
		description: 'Great for all ages.',
	},
	{
		img: '/src/images/rentals/super soaker.png',
		title: '16 Super Soakers',
		description: 'We bring 16 Super Soakers and lead battles up to 8 vs. 8!',
		price: '25',
	},
	{
		img: '/src/images/rentals/cotton candy.png',
		title: 'Cotton Candy Machine',
		description:
			'Bring the carnival to the party with the cotton candy machine.',
		price: '100',
	},
	{
		img: '/src/images/rentals/hot dogs.png',
		title: 'Hot Dog Machine',
		description: 'This industrial hot-dog maker makes grilling a breeze!',
		price: '65',
	},
	{
		img: '/src/images/rentals/nachos.png',
		title: 'Nacho machine',
		description:
			'Does it get any better than an all you can eat nacho station? We think not.',
		price: '150',
	},
	{
		img: '/src/images/rentals/popcorn.png',
		title: 'Popcorn Machine',
		description:
			'Perfect for all occasions and includes bags, seasoning, kernels and popping oil.',
		price: '100',
	},
	{
		img: '/src/images/rentals/sno cone.png',
		title: 'Sno-Cone Machine',
		description:
			'This industrial sno-cone machine comes with sno-cone cups and 2 kid flavors.',
		price: '100',
	},
	{
		img: '/src/images/rentals/generator.png',
		title: 'Generator',
		description:
			'For outdoor parties that are set up far away from electrical outlets.',
	},
	{
		img: '/src/images/rentals/porta potty.png',
		title: 'Porta Potty',
	},
]
