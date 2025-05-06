// mayaakademi-sanity/sanity.config.js
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision'; // GROQ sorgularını test etmek için kullanıyorsanız ekleyebilirsiniz.

// Şema tanımlarınızı schemaTypes klasöründen import edin
import post from './schemaTypes/post';
import author from './schemaTypes/author';
import category from './schemaTypes/category';
import blockContent from './schemaTypes/blockContent'; // blockContent.js dosyanız da var, onu da import edin.

// Proje ID'nizi ve dataset'inizi .env dosyasından veya doğrudan buraya yazabilirsiniz.
// Reponuzda .env dosyası göremedim, bu yüzden doğrudan ekliyorum.
// GERÇEK Proje ID'nizi ve dataset'inizi sanity.io/manage adresinden kontrol edin.
const projectId = 'ydyiledi'; // Reponuzdaki package.json'dan aldım, doğruluğunu kontrol edin.
const dataset = 'production';   // Genellikle 'production' olur, kontrol edin.

export default defineConfig({
  name: 'maya-akademi-studio', // Studio'nuz için bir isim
  title: 'Maya Akademi Sanity Studio', // Studio'nuzun başlığı

  projectId: projectId,
  dataset: dataset,

  plugins: [
    structureTool(),
    visionTool(), // İsteğe bağlı, GROQ sorgularını test etmek için kullanışlıdır.
  ],

  schema: {
    types: [
      // Import ettiğiniz tüm şema tanımlarını buraya dizi olarak ekleyin
      post,
      author,
      category,
      blockContent, // blockContent'i de eklemeyi unutmayın
    ],
  },
});