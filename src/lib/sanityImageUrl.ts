// src/lib/sanityImageUrl.ts
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource, SanityImageObjectWithAsset } from '../types/sanity'; // Tipleri buradan alıyoruz
import { client } from './sanityClient';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource | SanityImageObjectWithAsset | null | undefined) {
  if (!source || typeof source !== 'object') {
    return null;
  }

  // Eğer source bir SanityImageObjectWithAsset ise ve asset'i varsa, onu kullan.
  // Eğer source doğrudan bir SanityImageSource (örn: asset referansı) ise, onu kullan.
  const imageSourceToUse: SanityImageSource | undefined =
    'asset' in source && source.asset // Eğer source.asset varsa (SanityImageObjectWithAsset durumu)
      ? source.asset // source.asset'i kullan (bu SanityImageSource olmalı)
      : '_ref' in source || '_id' in source // Eğer source doğrudan bir asset referansı veya asset objesi ise
      ? source as SanityImageSource // source'u SanityImageSource olarak kullan
      : undefined;

  if (!imageSourceToUse) {
    return null;
  }
  return builder.image(imageSourceToUse);
}