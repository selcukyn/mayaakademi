// mayaakademi-sanity/schemaTypes/post.js
export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().error('Başlık zorunludur.'),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required().error('Slug zorunludur.'),
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        initialValue: (new Date()).toISOString(),
        validation: Rule => Rule.required(),
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        rows: 3,
        description: 'Blog listeleme sayfasında görünecek kısa özet.',
        validation: Rule => Rule.max(200),
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'Quote', value: 'blockquote'},
            ],
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Code', value: 'code'},
                {title: 'Underline', value: 'underline'},
                {title: 'Strike', value: 'strike-through'}
              ],
            },
          },
          {
            type: 'image',
            options: {hotspot: true},
          },
        ],
        validation: Rule => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
      },
    },
  }