// mayaakademi-sanity/schemaTypes/blockContent.js
import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'İçerik Bloğu',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Alıntı', value: 'blockquote'},
      ],
      lists: [
        {title: 'Madde İşaretli', value: 'bullet'},
        {title: 'Numaralı', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Kalın', value: 'strong'},
          {title: 'İtalik', value: 'em'},
          {title: 'Kod', value: 'code'},
          {title: 'Altı Çizili', value: 'underline'},
          {title: 'Üstü Çizili', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                    allowRelative: true, // İzin veriliyorsa
                  }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Görsel Alt Yazısı',
        },
      ],
    }),
    // Eğer kod bloklarını ayrı bir type olarak eklemek isterseniz
    // (genellikle sanity-plugin-code-input gibi bir eklenti ile daha iyi olur)
    // defineArrayMember({
    //   name: 'codeBlock', // veya sadece 'code'
    //   title: 'Kod Bloğu',
    //   type: 'code', // Eğer 'code' tipi varsa (bir eklenti ile gelir)
    //   options: { // Eklentiye göre options değişebilir
    //     language: 'javascript',
    //     withFilename: true,
    //   }
    // }),
  ],
})