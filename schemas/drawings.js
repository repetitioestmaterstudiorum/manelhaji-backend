export default {
	name: 'drawing',
	title: 'Drawing',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
		{
			name: 'galleries',
			title: 'Galleries',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'galleries' }],
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
		},
	},
}
