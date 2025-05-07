import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import sanity from '@sanity/astro'; // <-- DOĞRU İMPORT
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; // <-- VERCEL ADAPTÖRÜNÜ IMPORT ET


const sanityProjectId = 'ydyiledi'; // Gerçek Sanity Proje ID'niz
const sanityDataset = 'production'; // Genellikle 'production', Sanity projenizdeki dataset adı


export default defineConfig({
  site: "https://mayaakademi.vercel.app", // Sitenizin URL'si
  output: "server",
  adapter: vercel(), 
  base: "/",
  siteMetadata: {
    title: 'Maya Akademi',
    description: 'Teknoloji, eğitim ve daha fazlası üzerine yazılar ve kaynaklar.',
    ogImage: '/android-chrome-192x192.png', // public klasöründe varsayılan bir OG görseli
    // Diğer meta bilgiler (örn: twitterHandle: '@MayaAkademi')
  },
  integrations: [
    tailwind(),
    sitemap(),
    sanity({ // <-- Sanity entegrasyonu
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: true, // Varsayılan olarak production'da true, dev'de false olur.
                      // Geliştirme için false bırakabilirsiniz: import.meta.env.PROD
      apiVersion: '2023-05-03', // Veya daha güncel bir Sanity API versiyonu (örn: 'v2024-03-14')
      // studioBasePath: '/studio', // Eğer Astro projeniz içinde Sanity Studio'yu da serve ediyorsanız (şu an ayrı bir projeniz var, bu satır gereksiz)
    }),
    react()
  ],
  // ...varsa diğer ayarlarınız
});
