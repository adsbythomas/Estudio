// Datos globales del estudio — editar acá cuando cambien los datos de contacto.
export const site = {
  firmName: 'Pantarotto Lértora & Asocs.',
  firmShort: 'PL & Asocs.',
  abbr: { a: 'P', b: 'L' },
  foundingYear: 2001,
  yearsOfExperience: 25,
  address: {
    line1: 'Av. Corrientes 1464',
    line2: 'Piso 16 · Oficina 1605',
    postalCode: 'C1042',
    city: 'Ciudad Autónoma de Buenos Aires',
    country: 'Argentina',
  },
  hours: 'Lunes a viernes · 9:00 a 18:00 hs.',
  phonePlaceholder: '+54 11 0000-0000',
  emailPlaceholder: 'contacto@pl-abogados.com',
  // Teléfono y WhatsApp del estudio — mismo número, dos canales.
  // Formato para tel:/wa.me (sin "+" ni espacios) y formato legible.
  phone: '5491178212945',
  phoneDisplay: '+54 9 11 7821-2945',
  whatsappPhone: '5491178212945',
  whatsappDisplay: '+54 9 11 7821-2945',
  offices: ['Buenos Aires'],
  linkedin: 'https://www.linkedin.com/company/pl-abogados/',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9973518279826!2d-58.390031323855155!3d-34.60422847295404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac1942fc08d%3A0x90e50a4d7964f611!2sPantarotto%20L%C3%A9rtora%20%26%20Asocs!5e0!3m2!1ses-419!2sar!4v1775170188725!5m2!1ses-419!2sar',
} as const;

export type Practice = 'legal' | 'accounting';
