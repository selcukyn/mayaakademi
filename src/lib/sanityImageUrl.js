// src/lib/sanityImageUrl.js
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanityClient'; // Bir önceki adımda oluşturduğumuz client'ı import ediyoruz

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source || !source.asset) {
    // Eğer source veya source.asset tanımsızsa, hata almamak için null veya varsayılan bir URL döndür.
    // console.warn('urlFor fonksiyonuna geçersiz görsel kaynağı geldi:', source);
    return null; // Veya placeholder bir görselin URL'ini döndürebilirsiniz.
  }
  return builder.image(source);
}