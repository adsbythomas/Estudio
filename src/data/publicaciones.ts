// Publicaciones propias del estudio (informes, doctrina).
// A diferencia de radar.json, este archivo NO lo pisa el bot del radar:
// se edita a mano y sus items se muestran primero en /novedades.
// Los PDFs van en public/informes/.

import type { NewsItem } from '@lib/news';

export const publicacionesLegal: NewsItem[] = [
  {
    date: '30 sep 2026',
    title: 'Resolución General IGJ 11/2026: comparativa de modificaciones y texto actualizado',
    desc: 'Informe N.º 01 · Derecho Societario. La RG IGJ 11/2026 modifica las RG 15/2024 y 6/2017 y deroga las RG 3/2020 y 11/2024. Síntesis de los cambios y texto completo comparado en dos columnas.',
    source: 'Informe PL · Derecho Societario',
    url: 'https://www.boletinoficial.gob.ar/seccion/primera/20260922',
    categories: ['societario', 'IGJ'],
    author: 'Dr. Matías Luis Pantarotto · Socio',
    pdf: '/informes/informe-rg-igj-11-2026.pdf',
    pdfLabel: 'PDF · 374 páginas · 10,7 MB',
    summary:
      'El 22 de septiembre de 2026 se publicó en el Boletín Oficial la Resolución General IGJ N.º 11/2026, dictada el 18 de septiembre y vigente desde el día siguiente al de su publicación. La norma modifica el Anexo A de la RG IGJ 15/2024, que sistematiza el régimen registral del Organismo, y el Anexo A de la RG IGJ 6/2017, que regula las Sociedades por Acciones Simplificadas. Además, deroga en su totalidad las RG IGJ 3/2020 y 11/2024. Según sus considerandos, la reforma busca adecuar el régimen registral a los principios de simplificación, proporcionalidad, seguridad jurídica y apertura a la inversión. El informe sintetiza las modificaciones y reproduce el texto completo de ambas resoluciones en dos columnas: el texto vigente hasta el 22 de septiembre de 2026 y el texto actualizado según la nueva norma.',
    keyPoints: [
      'La constitución de sociedades ya no requiere dictamen de precalificación, salvo en los casos exigidos; su presentación pasa a ser facultativa (art. 47, RG 15/2024).',
      'El objeto social puede formularse por categorías de actividades, sin exigir conexidad entre ellas ni adecuación del capital; en las SAS se admite la fórmula «la realización de cualquier actividad lícita» (art. 61).',
      'Se incorpora una sede electrónica complementaria mediante la declaración de un correo electrónico, que no sustituye la sede física (art. 60).',
      'Se amplían los medios para acreditar la integración de aportes dinerarios; hasta DOS (2) Salarios Mínimos Vitales y Móviles basta una declaración jurada o un acta de recepción (art. 62).',
      'Los aportes no dinerarios, incluidos los activos virtuales, quedan regulados en un solo artículo (art. 63).',
      'Las cláusulas arbitrales se rigen por el art. 1649 del Código Civil y Comercial y pueden obligar a la sociedad, a los socios y a los miembros de los órganos; se deroga el modelo del Anexo V (art. 69).',
      'Las SAS quedan sujetas al régimen general de constitución de la RG 15/2024 (art. 52), y se deroga la mayor parte del Título IV de la RG 6/2017.',
    ],
    impact:
      'La RG 11/2026 concentra en la RG 15/2024 el régimen de constitución de todos los tipos sociales, incluidas las SAS, y suprime reglas reglamentarias que duplicaban la ley. La lectura conjunta de los textos deja abiertos algunos puntos de interpretación: la derogación de los arts. 29 a 31, 46 y 47 de la RG 6/2017 deja a las SAS sin reglas propias sobre representación, fiscalización, garantía de los administradores y estados contables; la RG 12/2024 no figura entre las normas derogadas; y la derogación de la RG 3/2020 no fue acompañada de una sustitución expresa del Anexo A3 de la RG 6/2017 (modelo de edicto).',
  },
];
