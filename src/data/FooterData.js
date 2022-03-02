import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook), //=> icon: <FaFacebook />,
		to: '/'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		to: '/'
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		to: '/'
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		to: '/'
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		to: '/'
	},
	{
		name: 'Email',
		icon: iconStyle(MdEmail),
		to: 'mailto:office@chatterbeack.com'
	},
];

export const footerData = [
	{
		title: 'Company',
		links: [
			{
				path: 'Our Team',
				to: '/team'
			},
			{
				path: 'Home',
				to: '/',
			},
			{
				path: 'Pricing',
				to: '/pricing'
			},

			// {
			// 	path: 'FAQs',
			// 	to: '/faqs'
			// },
		],
	},
	{
		title: 'Product',
		links: [
			{
				path: 'Profile',
				to: '/profile',
			},
			{
				path: 'Sign Up',
				to: '/signup'
			},
			{
				path: 'Sign In',
				to: '/signin'
			},
			// {
			// 	path: 'Services',
			// 	to: '/services'
			// },
		
		
		] 
	},
	{
		title: 'Support',
		links: [
			{
				path: 'Trust & Safety',
				to: '/safety'
			},
			{
				path: 'Contact Us',
				to: '/contact'
			},
			{
				path: 'Feedback',
				to: '/feedback'
			},
			// {
			// 	path: 'Blog',
			// 	to: '/blog'
			// },
		] 
	},
	{
		title: 'Legal',
		links: [
			{
				path: 'Privacy Policy',
				to: '/policy'
			},
			{
				path: 'Terms of Use',
				to: '/terms'
			},
			{
				path: 'Disclaimer',
				to: '/disclaimer'
			},
			// {
			// 	path: 'Report',
			// 	to: '/report'
			// },
	] 
	},
];
