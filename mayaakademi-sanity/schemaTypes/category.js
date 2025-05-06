// mayaakademi-sanity/schemaTypes/category.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Reponuzda description vardı, ekleyelim:
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
    }),
    // İsteğe bağlı olarak kategoriye de slug ekleyebilirsiniz
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),
  ],
})