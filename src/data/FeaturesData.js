import React from 'react';

import { IoIosOptions } from 'react-icons/io';
import { RiChatPrivateLine, RiFileWarningLine, RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { AiOutlineCloudUpload, AiOutlineSafety } from 'react-icons/ai';
import { BiSupport, BiDollar, BiBookContent, BiCommentEdit } from 'react-icons/bi';
import { GrHostMaintenance, GrSecure } from 'react-icons/gr';
import { FaConnectdevelop, } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
const iconStyle = (Icon,color) => <Icon size="3rem" color={color} />;

export const WhyUsData = [
	{
		name: 'Best Security',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(GrSecure,'#0f0f0f'),
		imgClass: 'one',
	},
	{
		name: 'Ease of Use',
		description: 'Our system is easy to use and integrate',
		icon: iconStyle(IoIosOptions,'#0f0f0f'),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GrHostMaintenance,'#0f0f0f'),
		imgClass: 'three',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport,'#0f0f0f'),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar,'#0f0f0f'),
		imgClass: 'five',
	},
	{
		name: 'Scalable',
		description:
			'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(AiOutlineCloudUpload,'#0f0f0f'),
		imgClass: 'six',
	},
];

export const SafetyData = [
	{
		name: 'Best Security',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(RiGitRepositoryPrivateFill,'#fff'),
		imgClass: 'one',
	},
	{
		name: 'Content Moderation',
		description: 'We accept and investigate user reports of abuse on our platform',
		icon: iconStyle(BiBookContent,'#fff'),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(CgWebsite,'#fff'),
		imgClass: 'three',
	},
	{
		name: 'Reports',
		description:
		'We receive and evaluate reports of abuse and violations reported from the clients, we work relentlessly to keep our users and our platform safe',
		icon: iconStyle(RiFileWarningLine,'#fff'),
		imgClass: 'six',
	},
	{
		name: 'Transparency',
		description:
		'Chatterbeak believes that transparency is critical to building trust and fostering the free and open exchange of ideas',
		icon: iconStyle(BiCommentEdit,'#fff'),
		imgClass: 'eight',
	},
	{
		name: 'Features',
		description:
		'A wide range of features users can enable and customize to help combat meeting disruptions',
		icon: iconStyle(FaConnectdevelop,'#fff'),
		imgClass: 'nine',
	},
	{
		name: 'Privacy',
		description: 'Chatterbeak has an extensive variety of privacy features to help our users control who attends their meetings',
		icon: iconStyle(RiChatPrivateLine,'#fff'),
		imgClass: 'seven',
	},
	{
		name: '24/7 Support',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(BiSupport,'#fff'),
		imgClass: 'four',
	},
	{
		name: 'Our Trust & Safety Team',
		description: 'Our team is comprised of lawyers and engineers, as well data science, security, privacy, and various other technical experts',
		icon: iconStyle(AiOutlineSafety,'#fff'),
		imgClass: 'five',
	},
];
