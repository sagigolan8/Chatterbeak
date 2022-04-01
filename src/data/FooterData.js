import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'GitHub',
		icon: iconStyle(FaGithub), //=> icon: <FaFacebook />,
		to: 'https://github.com/sagigolan8'
	},
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		to: 'https://www.linkedin.com/in/golan-sagi/'
	},
	{
		name: 'Email',
		icon: iconStyle(MdEmail),
		to: 'mailto:sagigolan888@gmail.com'
	},
];

export const footerData = [
	{
		title: 'Company',
		links: [
			{
				path: 'Home',
				to: '/',
			},
			{
				path: 'Pricing',
				to: '/pricing'
			},
			{
				path: 'Team',
				to: '/team'
			},
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
	] 
	},
];
