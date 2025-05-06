// src/lib/sanityClient.js
import { createClient } from '@sanity/client';

// Sanity projenizin ID'sini ve dataset'ini manage.sanity.io'dan veya
// mayaakademi-sanity/sanity.json dosyasından bulabilirsiniz.
const projectId = 'ydyiledi'; // Kendi Proje ID'nizi buraya girin
const dataset = 'production';       // Genellikle 'production'
const apiVersion = '2023-05-03';    // Güncel bir tarih veya Sanity API versiyonu

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: import.meta.env.PROD, // Build sırasında true, dev sırasında false olur
  // Token gerekirse (örneğin draft içerik çekmek için):
  // token: 'YOUR_SANITY_READ_TOKEN', // Sadece okuma token'ı yeterli
  // перспектива: 'published', // Sadece yayınlanmış içerikleri getirir, draftları görmezden gelir
});