// Diccionario ES → EN para el toggle de idioma.
// Las claves son los strings en español TAL COMO aparecen en el DOM (trimmed).
// El script del cliente camina los text nodes y reemplaza coincidencias exactas.
// Mantener orden: primero los largos para que los replaces funcionen bien.

export const ES_TO_EN: Record<string, string> = {
  // ── Nav ──────────────────────────────────────────────
  'Práctica': 'Practice',
  'Equipo': 'Team',
  'Novedades': 'News',
  'Contacto': 'Contact',
  '→ Contable': '→ Accounting',
  '→ Legal': '→ Legal',
  'Inicio': 'Home',
  'Desde 2003': 'Since 2003',
  'Abrir menú': 'Open menu',
  'Cerrar': 'Close',

  // ── Hero ─────────────────────────────────────────────
  'Abogados · Buenos Aires': 'Attorneys · Buenos Aires',
  'Contadores Públicos · Buenos Aires': 'Certified Public Accountants · Buenos Aires',
  'Derecho empresarial,': 'Corporate Law,',
  'Contabilidad e impuestos,': 'Accounting & Tax,',
  '20 años de oficio.': '20 years of practice.',
  'Solicitar consulta': 'Request a Consultation',
  'Ver áreas de práctica': 'View Practice Areas',
  '→ Ir al área contable': '→ Go to Accounting Practice',
  '→ Ir al área legal': '→ Go to Legal Practice',
  'Estudio integral de abogados y contadores públicos con sede en Buenos Aires y corresponsales en Estados Unidos y Uruguay. Tributario, societario, laboral, aerocomercial y penal económico.':
    'Full-service firm of attorneys and certified public accountants headquartered in Buenos Aires, with correspondents in the United States and Uruguay. Tax, corporate, employment, aviation and white-collar crime.',
  'Área contable del estudio, integrada al equipo legal. Liquidación de impuestos, estados contables, auditoría, planificación fiscal y sueldos — en Argentina y en operaciones internacionales.':
    "Firm's accounting practice, fully integrated with the legal team. Tax filings, financial statements, audit, tax planning and payroll — in Argentina and across international operations.",

  // ── CrossLink ────────────────────────────────────────
  'También ofrecemos': 'We also offer',
  'Área contable': 'Accounting Practice',
  'Área legal': 'Legal Practice',
  'Visitar área': 'Visit Practice',
  'El estudio integra un equipo propio de contadores públicos matriculados: liquidación de impuestos, estados contables, auditoría y planificación fiscal. Coordinación permanente con el área jurídica.':
    'The firm has its own team of certified public accountants: tax filings, financial statements, audit and tax planning. Ongoing coordination with the legal practice.',
  'El estudio integra cinco áreas de derecho empresarial: tributario, societario, laboral, aerocomercial y penal económico. Coordinación permanente con el área contable.':
    'The firm covers five areas of corporate law: tax, corporate, employment, aviation and white-collar crime. Ongoing coordination with the accounting practice.',

  // ── Counters (legal) ─────────────────────────────────
  'En cifras': 'By the numbers',
  'El estudio en números': 'The firm in numbers',
  'El área contable en números': 'The accounting practice in numbers',
  'Dos décadas de trabajo continuo, con foco y método.':
    'Two decades of continuous work, with focus and method.',
  'Dos décadas acompañando empresas con números que se sostienen.':
    'Two decades supporting companies with numbers that hold up.',
  'Años de trayectoria': 'Years of Practice',
  'Áreas especializadas': 'Specialized Practices',
  'Servicios centrales': 'Core Services',
  'Jurisdicciones': 'Jurisdictions',
  'Jurisdicciones activas': 'Active Jurisdictions',
  'Confidencialidad': 'Confidentiality',
  'Integración legal': 'Legal Integration',
  'Dos décadas asesorando a empresas en operaciones tributarias, societarias y penales económicas complejas.':
    'Two decades advising companies on complex tax, corporate and white-collar crime matters.',
  'Tributario, laboral, societario, aerocomercial y penal económico.':
    'Tax, employment, corporate, aviation and white-collar crime.',
  'Argentina, Estados Unidos y Uruguay, con corresponsales activos en cada mercado.':
    'Argentina, the United States and Uruguay, with active correspondents in each market.',
  'Secreto profesional y reserva estricta sobre toda la información del cliente.':
    'Attorney-client privilege and strict confidentiality over all client information.',
  'Dos décadas de asesoramiento contable e impositivo a empresas y grupos familiares.':
    'Two decades of accounting and tax advisory services for companies and family groups.',
  'Impuestos, estados contables, auditoría, planificación, sueldos y contabilidad internacional.':
    'Tax, financial statements, audit, planning, payroll and international accounting.',
  'Argentina, Estados Unidos y Uruguay, con corresponsales para operaciones transfronterizas.':
    'Argentina, the United States and Uruguay, with correspondents for cross-border operations.',
  'Coordinación permanente con el equipo jurídico — soluciones contables y legales bajo el mismo mandato.':
    'Ongoing coordination with the legal team — accounting and legal solutions under a single engagement.',

  // ── Practice (legal) ─────────────────────────────────
  'Práctica profesional': 'Professional Practice',
  'Áreas': 'Practice Areas',
  'Cinco áreas de derecho empresarial, ejercidas con autonomía y coordinación entre sí.':
    'Five areas of corporate law, practiced independently and in coordination with one another.',
  'Tributario': 'Tax',
  'Aduanero': 'Customs',
  'Laboral': 'Employment',
  'Societario': 'Corporate',
  'Aerocomercial': 'Aviation',
  'Penal Económico': 'White-Collar Crime',
  'Otro': 'Other',
  'Consultar →': 'Inquire →',
  'Consultar': 'Inquire',
  'Planificación fiscal, litigios ante el fisco, precios de transferencia, tributario internacional y reestructuraciones impositivas.':
    'Tax planning, tax litigation, transfer pricing, international tax and tax restructurings.',
  'Penal aduanero, comercio exterior, importación y exportación, infracciones y representación ante la ARCA-DGA.':
    'Customs criminal law, foreign trade, imports and exports, infractions and representation before ARCA-DGA.',
  'Relaciones individuales y colectivas de trabajo, negociación sindical, conflictos laborales y reestructuraciones de personal.':
    'Individual and collective employment relations, union negotiations, labor disputes and workforce restructurings.',
  'Gobierno corporativo, fusiones y adquisiciones, due diligence, acuerdos de accionistas y transformaciones societarias.':
    'Corporate governance, mergers and acquisitions, due diligence, shareholder agreements and corporate reorganizations.',
  'Derecho aeronáutico, contratos de aviación, regulación de aerolíneas, seguros aéreos y representación ante la ANAC.':
    'Aviation law, aircraft contracts, airline regulation, aviation insurance and representation before ANAC.',
  'Defensa penal en delitos económicos, lavado de activos, fraudes, corrupción corporativa y compliance penal preventivo.':
    'Criminal defense in economic crimes, money laundering, fraud, corporate corruption and preventive compliance.',

  // ── Services (accounting) ────────────────────────────
  'Servicios contables': 'Accounting Services',
  'Servicios': 'Services',
  'Cobertura completa de las necesidades contables e impositivas de la empresa.':
    'Full coverage of a company’s accounting and tax needs.',
  'Liquidación de Impuestos': 'Tax Filings',
  'Estados Contables': 'Financial Statements',
  'Auditoría Contable': 'Audit',
  'Auditoría': 'Audit',
  'Planificación Impositiva': 'Tax Planning',
  'Liquidación de Sueldos': 'Payroll',
  'Sueldos': 'Payroll',
  'Contabilidad Internacional': 'International Accounting',
  'Liquidación mensual y anual de IVA, Ganancias, Ingresos Brutos, Bienes Personales, retenciones y percepciones.':
    'Monthly and annual filings for VAT, Income Tax, Gross Receipts, Personal Assets, withholdings and collections.',
  'Preparación de estados contables anuales e intermedios bajo NIIF y normas profesionales argentinas.':
    'Preparation of annual and interim financial statements under IFRS and Argentine professional standards.',
  'Auditoría de estados financieros, revisiones limitadas, procedimientos acordados y due diligence contable.':
    'Financial statement audits, limited reviews, agreed-upon procedures and financial due diligence.',
  'Estructuración fiscal, análisis de carga tributaria, reorganizaciones empresariales y precios de transferencia.':
    'Tax structuring, tax burden analysis, corporate reorganizations and transfer pricing.',
  'Liquidación de haberes, cargas sociales, aportes y contribuciones. Presentación de DJ ante ARCA.':
    'Wage settlement, social charges, employee contributions and payroll tax filings with ARCA.',
  'Asesoramiento para empresas con operaciones en el exterior. Consolidación NIIF y conversión de moneda.':
    'Advisory for companies with operations abroad. IFRS consolidation and currency translation.',

  // ── Team ─────────────────────────────────────────────
  'Equipo contable': 'Accounting Team',
  'Los socios y el equipo de asociados.': 'Our partners and associate team.',
  'Contadores públicos matriculados.': 'Certified Public Accountants.',
  'Cada socio lidera una o dos áreas y coordina con el resto del equipo. El estudio suma asociados y un equipo contable integrado.':
    'Each partner leads one or two practices and coordinates with the rest of the team. The firm includes associates and an integrated accounting team.',
  'Cada cliente tiene un contador responsable que conoce la operación en detalle, en coordinación permanente con el área legal.':
    'Each client has a dedicated accountant who knows the operation in detail, in ongoing coordination with the legal practice.',
  'Socio': 'Partner',
  'Responsable del Área': 'Practice Lead',
  'Especialista Impositivo': 'Tax Specialist',
  'Equipo completo de asociados y contadores públicos especializados por sector.':
    'Full team of associates and certified public accountants specialized by sector.',
  'Equipo completo de contadores y auxiliares especializados por sector — en coordinación permanente con el área legal.':
    'Full team of accountants and staff specialized by sector — in ongoing coordination with the legal practice.',
  'Contactar al equipo': 'Contact the Team',

  // ── Timeline ─────────────────────────────────────────
  'Trayectoria': 'History',
  'Fundación': 'Founding',
  'Fundación del estudio': 'Firm Founded',
  'Red internacional': 'International Network',
  'Área aerocomercial': 'Aviation Practice',
  'Servicios aduaneros': 'Customs Services',
  'División contable': 'Accounting Division',
  'División autónoma': 'Autonomous Division',
  '20 años': '20 Years',
  'Anterior': 'Previous',
  'Siguiente': 'Next',
  'Se constituye Pantarotto Lértora Bardagí & Asocs. en Buenos Aires.':
    'Pantarotto Lértora Bardagí & Assocs. is founded in Buenos Aires.',
  'Se constituye Pantarotto Lértora Bardagí & Asocs.':
    'Pantarotto Lértora Bardagí & Assocs. is founded.',
  'Apertura de corresponsales en Estados Unidos y Uruguay.':
    'Correspondents established in the United States and Uruguay.',
  'Apertura de corresponsales contables en Estados Unidos y Uruguay.':
    'Accounting correspondents established in the United States and Uruguay.',
  'La práctica aerocomercial se consolida como pilar del estudio.':
    "The aviation practice consolidates as one of the firm's core pillars.",
  'Incorporación de liquidación aduanera, reintegros y devolución de IVA.':
    'Launch of customs filings, tax refunds and VAT recovery.',
  'Incorporación del área contable integrada al servicio jurídico.':
    'Integration of the accounting practice with the legal service.',
  'Consolidación del área contable como práctica propia.':
    'Consolidation of the accounting practice as an independent division.',
  'Dos décadas asesorando a empresas nacionales e internacionales.':
    'Two decades advising domestic and international companies.',
  'Dos décadas de asesoramiento impositivo y contable.':
    'Two decades of tax and accounting advisory services.',

  // ── Contact ──────────────────────────────────────────
  'Hablemos de': "Let's discuss",
  'su caso': 'your case',
  'su situación': 'your situation',
  'Le ofrecemos una consulta inicial para evaluar su situación. Nuestro equipo le responderá dentro de las 24 horas hábiles.':
    'We offer an initial consultation to assess your situation. Our team will respond within 24 business hours.',
  'Nuestro equipo contable le brinda una consulta inicial para evaluar sus necesidades y proponer el servicio más adecuado.':
    'Our accounting team provides an initial consultation to assess your needs and propose the most suitable service.',
  'Formulario de consulta': 'Inquiry Form',
  'Nombre completo': 'Full Name',
  'Empresa u organización': 'Company or Organization',
  'Email': 'Email',
  'Teléfono': 'Phone',
  'Seleccione una opción': 'Select an option',
  'Área de consulta': 'Area of Inquiry',
  'Servicio requerido': 'Service Required',
  'Mensaje': 'Message',
  'Enviar consulta': 'Submit Inquiry',
  'Respondemos dentro de las 24 horas hábiles. Toda consulta es confidencial.':
    'We respond within 24 business hours. All inquiries are confidential.',
  'Dirección': 'Address',
  'Horario': 'Hours',
  'Sedes': 'Offices',
  'Canales': 'Channels',
  'Email vía formulario': 'Email via form',
  'Consulta enviada · gracias': 'Inquiry submitted · thank you',
  'Lunes a viernes · 9:00 a 18:00 hs.': 'Monday to Friday · 9:00 AM – 6:00 PM',

  // ── Footer ───────────────────────────────────────────
  'El estudio': 'The firm',
  'Estudio integral de abogados': 'Full-service firm of attorneys',
  'y contadores públicos': 'and certified public accountants',
  'en Buenos Aires.': 'in Buenos Aires.',
  'Abogados & Contadores Públicos': 'Attorneys & Certified Public Accountants',
  'Navegación': 'Navigation',
  'Estudio': 'Firm',
  'Corresponsalías': 'Correspondents',
  'Privacidad': 'Privacy',
  'Términos': 'Terms',
  'Piso 16 · Oficina 1605': '16th Floor · Suite 1605',
  'C1042 · Buenos Aires': 'C1042 · Buenos Aires',

  // ── BaseLayout / misc ────────────────────────────────
  'Saltar al contenido': 'Skip to content',

  // ── News ─────────────────────────────────────────────
  'Radar normativo': 'Regulatory Radar',
  'Radar impositivo': 'Tax Radar',
  'Resoluciones, decretos y leyes relevantes para el área — actualizado automáticamente desde el Boletín Oficial.':
    'Resolutions, decrees and laws relevant to the practice — automatically updated from the Official Gazette.',
  'Resoluciones, decretos y leyes relevantes para el área legal — aerocomercial, societario, laboral y penal económico. Radar actualizado automáticamente desde el Boletín Oficial.':
    'Resolutions, decrees and laws relevant to the legal practice — aviation, corporate, employment and white-collar crime. Radar automatically updated from the Official Gazette.',
  'Resoluciones de ARCA, decretos y novedades tributarias y aduaneras. Radar actualizado automáticamente desde el Boletín Oficial.':
    'ARCA resolutions, decrees and tax and customs updates. Radar automatically updated from the Official Gazette.',
  'Ver todas': 'View all',
  'Leer →': 'Read →',
  '← Volver al estudio': '← Back to the firm',
  '← Volver al área contable': '← Back to Accounting Practice',
  '← Todas las novedades': '← All News',
  'Sin novedades por el momento. Vuelva a consultar en las próximas horas.':
    'No updates for the moment. Check back in the coming hours.',
  'Sin novedades por el momento.': 'No updates for the moment.',
  'Importante.': 'Important.',
  'contáctenos': 'contact us',
  'Este radar se nutre del Boletín Oficial. Para el texto completo de la norma, acceda a la fuente oficial:':
    'This radar is sourced from the Official Gazette. For the full text, visit the official source:',
  'Este resumen tiene fines informativos y no reemplaza el asesoramiento profesional. Si necesita una opinión sobre cómo esta norma afecta a su empresa,':
    'This summary is for informational purposes only and does not replace professional advice. If you need an opinion on how this rule affects your company,',
  'Este resumen tiene fines informativos y no reemplaza el asesoramiento profesional. Para un análisis sobre cómo esta norma afecta a su empresa,':
    'This summary is for informational purposes only and does not replace professional advice. For an analysis of how this rule affects your company,',

  // ── Page titles ──────────────────────────────────────
  'PLB Abogados — Derecho empresarial · Buenos Aires · 20 años':
    'PLB Attorneys — Corporate Law · Buenos Aires · 20 years',
  'PLB Contable — Contabilidad & Impuestos · Buenos Aires · 20 años':
    'PLB Accounting — Accounting & Tax · Buenos Aires · 20 years',
  'Novedades — PLB Abogados': 'News — PLB Attorneys',
  'Novedades — PLB Contable': 'News — PLB Accounting',

  // ── Labels sueltos (eyebrows) ────────────────────────
  'Área Legal': 'Legal Practice',
  'Área Contable': 'Accounting Practice',

  // ── Tags/kickers adicionales ─────────────────────────
  'Pantarotto · Lértora · Bardagí': 'Pantarotto · Lértora · Bardagí',
};

// Prefijos dinámicos — se manejan por matching de prefijo en el script.
// Formato: [prefijo ES, prefijo EN]
export const ES_TO_EN_PREFIXES: [string, string][] = [
  ['Última actualización:', 'Last updated:'],
  ['Actualizado:', 'Updated:'],
  ['Leer en ', 'Read in '],
  ['Fuente:', 'Source:'],
  ['de ', 'of '],
];
