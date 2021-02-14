export default {
	name: 'drawings',
	title: 'Drawings',
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
			name: 'shortDescription',
			title: 'Short Description',
			type: 'text',
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
			},
		},
	],
	preview: {
		select: {
			media: 'image',
			title: 'title',
			subtitle: 'shortDescription',
		},
	},
}
