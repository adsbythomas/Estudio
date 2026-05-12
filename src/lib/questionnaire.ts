// Cuestionario de automatización — mapa de preguntas, respuestas y contactos.
export type Practice = 'legal' | 'accounting';

export interface Answer {
  id: string;
  label: string;
  nextStep?: string; // ID de siguiente pregunta, o 'results' para finalizar
}

export interface Question {
  id: string;
  practice: Practice;
  question: string;
  answers: Answer[];
  description?: string;
}

export interface Contact {
  name: string;
  role: string;
  specialties: string[];
  email?: string;
  phone?: string;
}

export interface DocumentRequirement {
  name: string;
  category: string;
  description: string;
  optional?: boolean;
}

export interface ResultRoute {
  contactKey: string;
  documents: string[];
  advice: string;
}

// Preguntas del flujo legal
export const legalQuestions: Question[] = [
  {
    id: 'legal-start',
    practice: 'legal',
    question: '¿Cuál es la naturaleza principal de su consulta?',
    description: 'Esto nos ayuda a dirigirlo con el especialista adecuado.',
    answers: [
      { id: 'legal-tax', label: 'Cuestiones tributarias o fiscales', nextStep: 'legal-tax-scope' },
      { id: 'legal-corporate', label: 'Asuntos societarios o corporativos', nextStep: 'legal-corporate-scope' },
      { id: 'legal-labor', label: 'Conflictos laborales', nextStep: 'legal-labor-scope' },
      { id: 'legal-aviation', label: 'Derecho aerocomercial', nextStep: 'results' },
      { id: 'legal-other', label: 'Otra cuestión legal', nextStep: 'legal-other-scope' },
    ],
  },
  {
    id: 'legal-tax-scope',
    practice: 'legal',
    question: '¿Se trata de planificación fiscal, litigio con el fisco, o precios de transferencia?',
    answers: [
      { id: 'legal-tax-planning', label: 'Planificación fiscal / reestructuración', nextStep: 'results' },
      { id: 'legal-tax-litigation', label: 'Litigio con ARCA', nextStep: 'results' },
      { id: 'legal-transfer-pricing', label: 'Precios de transferencia', nextStep: 'results' },
      { id: 'legal-tax-other', label: 'Otra', nextStep: 'results' },
    ],
  },
  {
    id: 'legal-corporate-scope',
    practice: 'legal',
    question: '¿Se trata de fusiones, gobierno corporativo, o acuerdos de accionistas?',
    answers: [
      { id: 'legal-corp-ma', label: 'Fusiones, adquisiciones o due diligence', nextStep: 'results' },
      { id: 'legal-corp-governance', label: 'Gobierno corporativo', nextStep: 'results' },
      { id: 'legal-corp-agreements', label: 'Acuerdos de accionistas', nextStep: 'results' },
      { id: 'legal-corp-other', label: 'Otra cuestión societaria', nextStep: 'results' },
    ],
  },
  {
    id: 'legal-labor-scope',
    practice: 'legal',
    question: '¿Se trata de un conflicto individual, negociación sindical, o reestructuración?',
    answers: [
      { id: 'legal-labor-individual', label: 'Conflicto laboral individual', nextStep: 'results' },
      { id: 'legal-labor-collective', label: 'Negociación sindical o conflictos colectivos', nextStep: 'results' },
      { id: 'legal-labor-restructuring', label: 'Reestructuración de personal', nextStep: 'results' },
    ],
  },
  {
    id: 'legal-other-scope',
    practice: 'legal',
    question: '¿Se trata de penal económico o compliance?',
    answers: [
      { id: 'legal-penal', label: 'Penal económico / delitos económicos', nextStep: 'results' },
      { id: 'legal-compliance', label: 'Compliance penal preventivo', nextStep: 'results' },
      { id: 'legal-unspecified', label: 'No sé muy bien', nextStep: 'results' },
    ],
  },
];

// Preguntas del flujo contable
export const accountingQuestions: Question[] = [
  {
    id: 'accounting-start',
    practice: 'accounting',
    question: '¿Cuál es su principal necesidad contable?',
    description: 'Esto nos ayuda a asignarle el especialista adecuado.',
    answers: [
      { id: 'accounting-taxes', label: 'Liquidación de impuestos (IVA, Ganancias, IIBB)', nextStep: 'results' },
      { id: 'accounting-statements', label: 'Estados contables o balance anual', nextStep: 'accounting-statements-scope' },
      { id: 'accounting-audit', label: 'Auditoría contable', nextStep: 'results' },
      { id: 'accounting-planning', label: 'Planificación fiscal', nextStep: 'results' },
      { id: 'accounting-payroll', label: 'Liquidación de sueldos', nextStep: 'results' },
      { id: 'accounting-intl', label: 'Operaciones internacionales', nextStep: 'results' },
    ],
  },
  {
    id: 'accounting-statements-scope',
    practice: 'accounting',
    question: '¿Necesita estados contables anuales, intermedios, o auditoría de estados?',
    answers: [
      { id: 'accounting-annual', label: 'Estados contables anuales', nextStep: 'results' },
      { id: 'accounting-interim', label: 'Estados contables intermedios', nextStep: 'results' },
      { id: 'accounting-audit-states', label: 'Auditoría de estados financieros', nextStep: 'results' },
    ],
  },
];

// Contactos y especialidades
export const contacts: Record<string, Contact> = {
  pantarotto: {
    name: 'Pantarotto',
    role: 'Socio',
    specialties: ['Tributario', 'Penal Económico'],
  },
  lertora: {
    name: 'Lértora',
    role: 'Socio',
    specialties: ['Tributario', 'Penal Económico'],
  },
  bardagi: {
    name: 'Bardagí',
    role: 'Socio',
    specialties: ['Aerocomercial', 'Administrativo Regulatorio'],
  },
  accounting: {
    name: 'Equipo Contable',
    role: 'Responsable del Área',
    specialties: ['Impuestos', 'Auditoría', 'Estados Contables'],
  },
};

// Documentos requeridos por tipo de consulta
export const documentsByRoute: Record<string, DocumentRequirement[]> = {
  // Legal - Tributario
  legal_tax: [
    { name: 'Últimas 3 declaraciones juradas (DDJJ)', category: 'Impuestos', description: 'Declaraciones de ganancias y/o IVA de los últimos tres años' },
    { name: 'Última nota de auditoría o balance', category: 'Contabilidad', description: 'Estado contable anual más reciente' },
    { name: 'Contrato o escritura de constitución', category: 'Sociedades', description: 'Documento de constitución de la sociedad' },
    { name: 'Listado de accionistas/socios', category: 'Sociedades', description: 'Estructura accionaria actual', optional: true },
  ],
  // Legal - Societario
  legal_corporate: [
    { name: 'Estatuto social o contrato de constitución', category: 'Sociedades', description: 'Documento constitutivo vigente' },
    { name: 'Último balance y DDJJ de ganancias', category: 'Contabilidad', description: 'Estados contables y fiscales más recientes' },
    { name: 'Acta de asamblea o reunión de directorio', category: 'Sociedades', description: 'Actas que acrediten decisiones corporativas', optional: true },
    { name: 'Documentación del acuerdo propuesto', category: 'Transacción', description: 'Propuesta de fusión, acuerdo o reorganización', optional: true },
  ],
  // Legal - Laboral
  legal_labor: [
    { name: 'Contrato laboral del empleado', category: 'Laboral', description: 'Contrato de empleo vigente' },
    { name: 'Recibos de sueldo y aportes', category: 'Laboral', description: 'Últimos 6 recibos de haberes' },
    { name: 'Historial de comunicaciones', category: 'Laboral', description: 'Cartas, mails, o documentos de discrepancia con el empleado', optional: true },
    { name: 'Historial de asistencia', category: 'Laboral', description: 'Registro de asistencia si es relevante', optional: true },
  ],
  // Legal - Aerocomercial
  legal_aviation: [
    { name: 'Contrato de aviación o leasing', category: 'Aerocomercial', description: 'Contrato con aerolínea o proveedor' },
    { name: 'Documentación regulatoria ANAC', category: 'Aerocomercial', description: 'Certificados o autorizaciones de la ANAC' },
    { name: 'Póliza de seguros aéreos', category: 'Aerocomercial', description: 'Documentación de cobertura de seguros', optional: true },
  ],
  // Legal - Penal Económico
  legal_penal: [
    { name: 'Notificación de la autoridad (fiscal, juzgado)', category: 'Penal', description: 'Documento que acredita investigación o imputación' },
    { name: 'Estados contables y DDJJ relevantes', category: 'Contabilidad', description: 'Documentación financiera del período investigado' },
    { name: 'Correspondencia anterior en el caso', category: 'Penal', description: 'Comunicaciones previas con autoridades', optional: true },
  ],
  // Accounting - Impuestos
  accounting_taxes: [
    { name: 'DDJJ de ganancias del año anterior', category: 'Impuestos', description: 'Últimas dos declaraciones juradas anuales' },
    { name: 'Balances y estados contables', category: 'Contabilidad', description: 'Balance general y estado de resultados' },
    { name: 'Estructura accionaria y datos de socios', category: 'Sociedades', description: 'Identificación de accionistas y porcentajes de participación' },
    { name: 'Listado de activos fijos', category: 'Contabilidad', description: 'Detalle de bienes de uso con años de adquisición', optional: true },
  ],
  // Accounting - Estados Contables
  accounting_statements: [
    { name: 'Últimas dos DDJJ anuales', category: 'Impuestos', description: 'Declaraciones juradas de los dos años anteriores' },
    { name: 'Mayor general y mayores analíticos', category: 'Contabilidad', description: 'Registros contables detallados' },
    { name: 'Inventario de existencias', category: 'Contabilidad', description: 'Detalle de stock y bienes finales', optional: true },
    { name: 'Composición de deuda y acreencias', category: 'Contabilidad', description: 'Listado de deudores, acreedores y obligaciones', optional: true },
  ],
  // Accounting - Auditoría
  accounting_audit: [
    { name: 'Últimas tres DDJJ anuales', category: 'Impuestos', description: 'Declaraciones juradas de los tres años bajo revisión' },
    { name: 'Estados contables anuales', category: 'Contabilidad', description: 'Balances y estados de resultados a auditar' },
    { name: 'Listado de transacciones mayores', category: 'Contabilidad', description: 'Operaciones significativas del período' },
    { name: 'Actas de asamblea o directorio', category: 'Sociedades', description: 'Decisiones corporativas del período', optional: true },
  ],
};

// Mapeo de respuestas a contactos y documentos
export const responseRoutes: Record<string, ResultRoute> = {
  // Legal routes
  'legal-tax': {
    contactKey: 'pantarotto', // Tributario es Pantarotto o Lértora
    documents: ['legal_tax'],
    advice: 'Su consulta será atendida por nuestro equipo de derecho tributario. Prepare la documentación fiscal de los últimos años para agilizar el análisis.',
  },
  'legal-tax-planning': {
    contactKey: 'pantarotto',
    documents: ['legal_tax'],
    advice: 'Especializamos en estructuración fiscal y reestructuraciones impositivas. Traiga su situación contable y fiscal actual.',
  },
  'legal-tax-litigation': {
    contactKey: 'pantarotto',
    documents: ['legal_tax'],
    advice: 'Contamos con experiencia en litigios ante ARCA. Traiga toda correspondencia del fisco y sus últimos balances.',
  },
  'legal-transfer-pricing': {
    contactKey: 'pantarotto',
    documents: ['legal_tax'],
    advice: 'El análisis de precios de transferencia requiere documentación contable detallada y estructura de las operaciones relacionadas.',
  },
  'legal-corporate': {
    contactKey: 'bardagi',
    documents: ['legal_corporate'],
    advice: 'Nuestra área societaria atiende fusiones, governance y reorganizaciones. Prepare su estatuto y últimos estados contables.',
  },
  'legal-labor': {
    contactKey: 'lertora',
    documents: ['legal_labor'],
    advice: 'Nuestro equipo laboral maneja conflictos individuales y colectivos. Tenga a mano los contratos y comunicaciones relevantes.',
  },
  'legal-aviation': {
    contactKey: 'bardagi',
    documents: ['legal_aviation'],
    advice: 'El Dr. Bardagí es nuestro especialista en derecho aerocomercial. Prepare contratos de aviación y documentación regulatoria de la ANAC.',
  },
  'legal-penal': {
    contactKey: 'pantarotto',
    documents: ['legal_penal'],
    advice: 'Nuestro equipo de penal económico maneja defensa en delitos económicos. Si hay investigación en curso, contacte inmediatamente.',
  },
  'legal-compliance': {
    contactKey: 'pantarotto',
    documents: ['legal_penal'],
    advice: 'Ofrecemos compliance penal preventivo. Prepare información sobre estructura corporativa y operaciones principales.',
  },

  // Accounting routes
  'accounting-taxes': {
    contactKey: 'accounting',
    documents: ['accounting_taxes'],
    advice: 'Nuestro equipo contable maneja liquidación de impuestos mensuales y anuales. Traiga sus últimas DDJJ e información de operaciones.',
  },
  'accounting-statements': {
    contactKey: 'accounting',
    documents: ['accounting_statements'],
    advice: 'Preparamos estados contables bajo NIIF y normas profesionales. Traiga sus registros contables completos del período.',
  },
  'accounting-audit': {
    contactKey: 'accounting',
    documents: ['accounting_audit'],
    advice: 'Realizamos auditoría de estados financieros y procedimientos acordados. Prepare documentación contable y DDJJ de los años bajo revisión.',
  },
  'accounting-planning': {
    contactKey: 'accounting',
    documents: ['accounting_taxes'],
    advice: 'Estructuramos soluciones fiscales integrales. Traiga su información contable, fiscal y estructura accionaria.',
  },
  'accounting-payroll': {
    contactKey: 'accounting',
    documents: ['accounting_taxes'],
    advice: 'Liquidamos sueldos y presentamos información ante ARCA. Comunique cantidad de empleados y cambios de personal.',
  },
  'accounting-intl': {
    contactKey: 'accounting',
    documents: ['accounting_statements'],
    advice: 'Asesoramos en contabilidad internacional y consolidación NIIF. Traiga información de operaciones en otros países.',
  },

  // Rutas del sub-paso de estados contables
  'accounting-annual': {
    contactKey: 'accounting',
    documents: ['accounting_statements'],
    advice: 'Preparamos estados contables anuales completos. Traiga sus registros contables del año cerrado y la última DDJJ.',
  },
  'accounting-interim': {
    contactKey: 'accounting',
    documents: ['accounting_statements'],
    advice: 'Elaboramos estados contables intermedios — trimestrales o semestrales. Traiga sus registros contables del período.',
  },
  'accounting-audit-states': {
    contactKey: 'accounting',
    documents: ['accounting_audit'],
    advice: 'Auditamos estados financieros bajo normas profesionales. Prepare sus estados contables y la documentación de respaldo.',
  },

  // Rutas del sub-paso societario
  'legal-corp-ma': {
    contactKey: 'bardagi',
    documents: ['legal_corporate'],
    advice: 'Asesoramos fusiones, adquisiciones y due diligence. Traiga el estatuto y documentación de la transacción propuesta.',
  },
  'legal-corp-governance': {
    contactKey: 'bardagi',
    documents: ['legal_corporate'],
    advice: 'Atendemos gobierno corporativo y estructura de órganos sociales. Prepare estatuto, actas y estructura actual.',
  },
  'legal-corp-agreements': {
    contactKey: 'bardagi',
    documents: ['legal_corporate'],
    advice: 'Redactamos y revisamos acuerdos de accionistas. Traiga el estatuto y el acuerdo propuesto o existente.',
  },
  'legal-corp-other': {
    contactKey: 'bardagi',
    documents: ['legal_corporate'],
    advice: 'Atendemos toda cuestión societaria. Traiga el estatuto y documentación relevante de su caso.',
  },

  // Rutas del sub-paso laboral
  'legal-labor-individual': {
    contactKey: 'lertora',
    documents: ['legal_labor'],
    advice: 'Manejamos conflictos laborales individuales. Traiga el contrato del empleado, recibos de sueldo y comunicaciones.',
  },
  'legal-labor-collective': {
    contactKey: 'lertora',
    documents: ['legal_labor'],
    advice: 'Asesoramos en negociación sindical y conflictos colectivos. Traiga el convenio aplicable y documentación gremial.',
  },
  'legal-labor-restructuring': {
    contactKey: 'lertora',
    documents: ['legal_labor'],
    advice: 'Estructuramos reducciones o reorganizaciones de personal. Traiga nómina, contratos y situación económica de la empresa.',
  },

  // Rutas del sub-paso tributario "otra"
  'legal-tax-other': {
    contactKey: 'pantarotto',
    documents: ['legal_tax'],
    advice: 'Atendemos toda consulta tributaria. Traiga sus últimas DDJJ y documentación contable para analizar su situación.',
  },

  // Ruta para casos no específicos
  'legal-unspecified': {
    contactKey: 'pantarotto',
    documents: ['legal_tax'],
    advice: 'En la primera reunión evaluamos su situación y lo derivamos al especialista correcto. Traiga toda documentación que considere relevante.',
  },
};
