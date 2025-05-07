// mayaakademi-sanity/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Sanity Studio React kullandığı için bu genellikle gereklidir

export default defineConfig({
  plugins: [react()],
  base: '/admin/' // <-- ÇOK ÖNEMLİ! Studio'nun temel yolunu belirtiyoruz. SONUNDA SLASH OLMALI.
  // Eğer Sanity'nin kendi Vite plugin'i varsa veya build için özel ayarları varsa,
  // onlar da burada olabilir. Sanity dokümantasyonunda veya mevcut vite.config'inizde
  // Sanity'ye özel bir plugin importu varsa (örn: sanityPlugin()), o da kalmalı.
  // Örneğin:
  // import {sanityTool} from 'sanity/vite'
  // plugins: [react(), sanityTool()],
});