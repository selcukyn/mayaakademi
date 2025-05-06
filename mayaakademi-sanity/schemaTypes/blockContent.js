// sanity/schemas/blockContent.js
export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block', // Paragraflar, başlıklar vb.
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'Alıntı', value: 'blockquote'},
        ],
        lists: [{title: 'Madde İmli', value: 'bullet'}, {title: 'Numaralı', value: 'number'}],
        marks: {
          decorators: [
            {title: 'Kalın', value: 'strong'},
            {title: 'Eğik', value: 'em'},
            {title: 'Kod', value: 'code'},
            {title: 'Altı Çizili', value: 'underline'},
            {title: 'Üstü Çizili', value: 'strike-through'}
          ],
          annotations: [
            {
              title: 'URL',
              name: 'link',
              type: 'object',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                  validation: Rule => Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel']
                  })
                },
              ],
            },
          ],
        },
      },
      { // İçeriğe görsel eklemek için
        type: 'image',
        options: {hotspot: true},
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternatif Metin',
            validation: Rule => Rule.required(),
            options: {
              isHighlighted: true,
            },
          },
          {
            name: 'caption',
            type: 'string',
            title: 'Görsel Alt Yazısı (Caption)',
            options: {
              isHighlighted: true,
            },
          },
        ],
      },
      // İsterseniz 'sanity-plugin-code-input' gibi eklentilerle kod blokları da ekleyebilirsiniz.
      // {
      //   type: 'code',
      //   options: {
      //     withFilename: true, // Dosya adı gösterme seçeneği
      //   }
      // }
    ],
  }