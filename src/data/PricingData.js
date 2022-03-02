export const pricingData = [
	{
		title: 'Basic',
		price: 'Free, forever. No credit card required',
		features: [
			'Host up to 100 participants',
			'Private & Group Chat'
		],
		to:'/signup',
		blank:'',
	},
	{
		title: 'Standard',
		price: '$18.99 All the benefits of Basic, plus:',
		features: [
			'Host up to 100 participants',
			'Social media streaming',
			'1 GB cloud recording (per license)',
		],
		to:'https://s3.us-east-2.amazonaws.com/chatterbeak.payment/index.html',
		blank:'_blank',
	},
	{
		title: 'Premium',
		price: '$32.50 All the benefits of Standard, plus:',
		features: [
			'Host up to 300 participants',
			'Recording transcripts',
			'Managed domains',
		],
		to:'https://s3.us-east-2.amazonaws.com/chatterbeak.payment/index.html',
		blank:'_blank',
	},

	{
		title: 'Enterprise',
		price: '$55.50 All the benefits of Premium, plus:',
		features: [
			'Host up to 500 Participants',
			'Unlimited cloud storage',
			'Recording transcripts'
		],
		to:'https://s3.us-east-2.amazonaws.com/chatterbeak.payment/index.html',
		blank:'_blank',
	},
];
