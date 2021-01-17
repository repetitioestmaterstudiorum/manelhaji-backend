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
			name: 'drawing',
			title: 'Drawing',
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
			name: 'slug',
			title: 'URL (slug)',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 70,
			},
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'drawing',
		},
	},
}
