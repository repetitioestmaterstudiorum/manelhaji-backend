export default {
	name: 'drawings',
	title: 'Drawings',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required(),
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: Rule => Rule.required(),
		},
		{
			title: 'Short Description',
			name: 'shortDescription',
			type: 'text',
		},
		{
			title: 'Tags',
			name: 'tags',
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
