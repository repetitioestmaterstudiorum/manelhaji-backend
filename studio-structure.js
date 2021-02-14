import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem => !['about'].includes(listItem.getId())

export default () =>
	S.list()
		.title('Content')
		.items([
			...S.documentTypeListItems().filter(hiddenDocTypes),
			S.listItem()
				.title('About Page Content')
				.child(S.editor().id('about').schemaType('about').documentId('singleton-about')),
		])
