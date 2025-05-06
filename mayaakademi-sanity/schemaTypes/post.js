// sanity/schemas/post.js
export default {
    name: 'post',
    title: 'Blog Yazısı',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Başlık',
        type: 'string',
        validation: Rule => Rule.required().error('Başlık alanı zorunludur.'),
      },
      {
        name: 'slug',
        title: 'Slug (URL için)',
        type: 'slug',
        options: {
          source: 'title', // Otomatik olarak başlıktan slug üretir
          maxLength: 96,
        },
        validation: Rule => Rule.required().error('Slug alanı zorunludur.'),
      },
      {
        name: 'description',
        title: 'Açıklama (Meta Description)',
        type: 'text',
        rows: 3, // Metin alanının yüksekliği
        validation: Rule => Rule.required().error('Açıklama alanı zorunludur.'),
      },
      {
        name: 'publishDate',
        title: 'Yayınlanma Tarihi',
        type: 'datetime', // Astro 'date' veya 'datetime' kabul edebilir, datetime daha esnek
        initialValue: (new Date()).toISOString(), // Varsayılan olarak bugünün tarihi
        validation: Rule => Rule.required(),
      },
      {
        name: 'updatedDate', // Frontmatter'da yorum satırındaydı, isterseniz kullanabilirsiniz
        title: 'Güncellenme Tarihi (Opsiyonel)',
        type: 'datetime',
      },
      {
        name: 'coverImage',
        title: 'Kapak Görseli',
        type: 'image',
        options: {
          hotspot: true, // Görselin önemli kısımlarını kırpma için işaretlemeyi sağlar
        },
        fields: [ // Astro'daki coverImage.alt için
          {
            name: 'alt',
            type: 'string',
            title: 'Alternatif Metin (Alt Text)',
            validation: Rule => Rule.required().error('Kapak görseli için alt metin zorunludur.'),
            options: {
              isHighlighted: true // Sanity Studio'da bu alanı vurgular
            }
          }
        ],
        validation: Rule => Rule.required().error('Kapak görseli zorunludur.'),
      },
      {
        name: 'tags',
        title: 'Etiketler',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags' // Sanity Studio'da etiketleri daha iyi gösterir
        }
      },
      {
        name: 'author', // Frontmatter'da basit bir string idi
        title: 'Yazar',
        type: 'string',
        initialValue: 'Maya Akademi', // Varsayılan yazar adı
        validation: Rule => Rule.required(),
      },
      {
        name: 'draft', // Frontmatter'da yorum satırındaydı, kullanışlıdır
        title: 'Taslak mı?',
        type: 'boolean',
        initialValue: false, // Varsayılan olarak yayınlanmış
        description: 'İşaretliyse, yazı sitede görünmez.',
      },
      {
        name: 'body', // Markdown içeriğinin yerini alacak
        title: 'İçerik',
        type: 'blockContent', // Portable Text (zengin metin) için
        validation: Rule => Rule.required().error('İçerik alanı zorunludur.'),
      },
    ],
    orderings: [ // Sanity Studio'da sıralama seçenekleri
      {
        title: 'Yayınlanma Tarihi, Yeni',
        name: 'publishDateDesc',
        by: [{field: 'publishDate', direction: 'desc'}]
      },
      {
        title: 'Yayınlanma Tarihi, Eski',
        name: 'publishDateAsc',
        by: [{field: 'publishDate', direction: 'asc'}]
      }
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author',
        media: 'coverImage',
        date: 'publishDate',
        draft: 'draft',
      },
      prepare(selection) {
        const {author, date, draft} = selection;
        const subtitles = [];
        if (author) subtitles.push(author);
        if (date) subtitles.push(new Date(date).toLocaleDateString('tr-TR'));
        if (draft) subtitles.push('TASLAK');
        return {
          ...selection,
          subtitle: subtitles.join(' - ')
        };
      },
    },
  }