// src/utils/formatDate.ts
export const formatDate = (dateInput: Date | string | undefined | null): string => {
    if (!dateInput) {
      return "Tarih Yok"; // Veya boş string döndürün
    }
  
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
    if (isNaN(date.getTime())) {
      return "Geçersiz Tarih"; // Hatalı tarih girdisi için
    }
  
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long', // 'short' veya '2-digit' de olabilir
      day: 'numeric',    // '2-digit' de olabilir
      // weekday: 'long', // İsteğe bağlı gün adı
      // hour: '2-digit',
      // minute: '2-digit',
    });
  };