export default {
	title: 'About Page Content',
	name: 'about',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
