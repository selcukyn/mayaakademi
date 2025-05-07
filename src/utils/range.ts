// src/utils/range.ts
// Belirli bir aralıktaki sayıları içeren bir dizi oluşturur.
export const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };