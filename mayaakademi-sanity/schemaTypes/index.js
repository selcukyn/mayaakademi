// sanity/schemas/schema.js (veya index.js)
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Oluşturduğumuz şemaları import ediyoruz
import blockContent from './blockContent'
import post from './post'
// Eğer başka şemalarınız varsa (örn: author, category) onları da buraya ekleyin

export default createSchema({
  name: 'default',
  // Şemaları schemaTypes ile birleştiriyoruz
  types: schemaTypes.concat([
    post,
    blockContent,
    // ...diğer şemalarınız
  ]),
})