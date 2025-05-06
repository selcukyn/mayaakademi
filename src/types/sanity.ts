// src/types/sanity.ts
import type { SanityImageSource as OriginalSanityImageSource } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock, PortableTextMarkDefinition, ArbitraryTypedObject } from '@portabletext/types';

export type SanityImageSource = OriginalSanityImageSource;

export interface SanityImageObjectWithAsset {
  _type: 'image';
  _key?: string; // Opsiyonel
  asset: SanityImageSource;
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanityPost {
  _id: string;
  title?: string;
  slugValue?: string;
  mainImage?: SanityImageObjectWithAsset;
  author?: { name?: string; };
  publishedAt?: string;
  body?: PortableTextBlock[];
  excerpt?: string;
}

export interface SanityPostSlug { slug: string; }

export interface PortableTextTypeComponentProps {
  value: ArbitraryTypedObject & { asset?: SanityImageSource; alt?: string };
}
export interface PortableTextMarkComponentProps {
  children: any;
  value?: PortableTextMarkDefinition & { href?: string };
}