// mayaakademi-sanity/schemaTypes/post.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Yazı', // Başlığı Türkçe yapabilirsiniz
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required().error('Başlık alanı zorunludur.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Dostu İsim)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Yazar',
      type: 'reference',
      to: {type: 'author'}, // 'author' şemanıza referans
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true, // Görselin önemli alanını işaretlemeyi sağlar
      },
      fields: [ // Görsele alt yazı gibi ekstra alanlar ekleyebilirsiniz
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin (SEO için önemli)',
          validation: (Rule) => Rule.required().error('Görsel için alternatif metin zorunludur.'),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Görsel Alt Yazısı',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Kategoriler',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}], // 'category' şemanıza referans
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayınlanma Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Varsayılan olarak şu anki zamanı ayarlar
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'İçerik',
      type: 'blockContent', // blockContent.js'deki şemanızın adı
      validation: (Rule) => Rule.required(),
    }),
    // Reponuzda 'excerpt' alanı da vardı, isterseniz ekleyebilirsiniz:
    defineField({
      name: 'excerpt',
      title: 'Özet (Kısa Açıklama)',
      type: 'text',
      rows: 3, // Metin kutusunun yüksekliği
      validation: (Rule) => Rule.max(200).warning('Özet 200 karakterden kısa olmalıdır.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `Yazar: ${author}`}
    },
  },
})