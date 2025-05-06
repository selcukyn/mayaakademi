
// mayaakademi-sanity/schemaTypes/author.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Yazar',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'İsim',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profil Resmi',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin',
          validation: (Rule) => Rule.required().error('Görsel için alternatif metin zorunludur.'),
        }
      ]
    }),
    defineField({
      name: 'bio',
      title: 'Biyografi',
      type: 'array', // Zengin metin editörü için
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})