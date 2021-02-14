export default {
	title: 'About Page Content',
	name: 'about',
	type: 'document',
	fields: [
		{
			title: 'Page Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			title: 'Some Text About You',
			name: 'text',
			type: 'text',
			validation: Rule => Rule.required(),
		},
		{
			name: 'image',
			title: 'A Picture',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
}
