// Contenido del micrositio del área de ciudadanía y residencias.
// Trámites de ciudadanía argentina (naturalización y opción), ciudadanías
// europeas más demandadas (italiana y española), residencias migratorias ante
// la Dirección Nacional de Migraciones y gestiones consulares.
//
// Las referencias normativas y plazos pueden variar — verificar a la fecha
// de presentación de cada expediente.
import type { Tramite, MicrositioLanding } from './types';

export const ciudadania: MicrositioLanding = {
  hero: {
    eyebrow: 'Área de ciudadanía y migraciones',
    title: 'Ciudadanías, residencias y trámites consulares.',
    lead: 'Asesoramiento y representación en ciudadanía argentina (naturalización y opción), ciudadanías italiana y española por descendencia, residencias migratorias ante la Dirección Nacional de Migraciones y gestiones consulares. Cada expediente, con un abogado asignado del estudio.',
    ctaPrimary: 'Iniciar trámite online',
    ctaSecondary: 'Hablar con un abogado',
  },
  cifras: {
    label: 'En cifras',
    title: 'El área de ciudadanía en números',
    items: [
      { num: '25', suffix: '+', label: 'Años de oficio en derecho de extranjería' },
      { num: '6',  suffix: '',  label: 'Líneas de trámite con flujo digital propio' },
      { num: '4',  suffix: '',  label: 'Jurisdicciones — Argentina, Italia, España y consulares' },
      { num: '100',suffix: '%', label: 'Confidencialidad y secreto profesional' },
    ],
  },
  practica: {
    label: 'Práctica de ciudadanía',
    title: 'Servicios',
    sub: 'Seis líneas de trabajo en ciudadanía, residencias y gestiones consulares, integradas al resto del estudio.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 6 TRÁMITES
// ─────────────────────────────────────────────────────────────────────────────

export const tramites: Tramite[] = [
  {
    key: 'naturalizacion-argentina',
    num: '01',
    name: 'Ciudadanía argentina por naturalización',
    shortDesc: 'Extranjeros con residencia continua en el país · Trámite judicial federal.',
    hero: {
      eyebrow: 'Naturalización · 01 / de 06',
      title: 'Ciudadanía argentina por naturalización',
      lead: 'Trámite judicial ante el Juzgado Federal con competencia en el domicilio del solicitante, conforme a la Ley 346 y normas modificatorias. Requiere acreditar residencia continua mínima de dos años en el país, medios honestos de vida y antecedentes penales.',
      plazo: '6 a 18 meses según juzgado interviniente y carga de trabajo.',
    },
    cuando: [
      'Es extranjero mayor de 18 años con DNI argentino y al menos dos años de residencia continua en el país.',
      'Quiere obtener pasaporte argentino y ejercer derechos políticos (votar, postularse, acceso a cargos públicos).',
      'Está casado/a con argentino/a o tiene hijos argentinos (el plazo de residencia puede reducirse).',
      'Tuvo un trámite rechazado o demorado y necesita reorganizar la documentación.',
    ],
    documentos: [
      { name: 'Pasaporte vigente del país de origen', desc: 'Frente y dorso, con todos los sellos de ingreso y egreso del país.' },
      { name: 'DNI argentino vigente', desc: 'Otorgado por DNM/RENAPER con residencia legal acreditada.' },
      { name: 'Partida de nacimiento del solicitante', desc: 'Apostillada o legalizada y traducida al castellano si corresponde.' },
      { name: 'Antecedentes penales argentinos', desc: 'Certificado del Registro Nacional de Reincidencia, vigencia 90 días.' },
      { name: 'Antecedentes penales del país de origen', desc: 'Apostillados o legalizados consularmente y traducidos.' },
      { name: 'Constancia de residencia continua', desc: 'Certificación de DNM con movimientos migratorios y residencia.' },
      { name: 'Acreditación de medios honestos de vida', desc: 'Recibos de sueldo, monotributo, contratos, declaración jurada — según corresponda.' },
    ],
    extraFields: [
      { name: 'pais_origen',      label: 'País de origen', type: 'text', required: true, placeholder: 'Ej. Venezuela' },
      { name: 'tiempo_residencia',label: 'Tiempo de residencia continua en Argentina', type: 'select', required: true,
        options: ['Menos de 2 años', '2 a 5 años', '5 a 10 años', 'Más de 10 años'] },
      { name: 'tiene_dni',        label: '¿Tiene DNI argentino?', type: 'select', required: true,
        options: ['Sí, vigente', 'Sí, vencido', 'En trámite', 'No tengo'] },
      { name: 'situacion_familiar',label: 'Situación familiar relevante', type: 'select',
        options: ['Soltero/a sin hijos en AR', 'Casado/a con argentino/a', 'Tengo hijos argentinos', 'Otra'] },
    ],
  },

  {
    key: 'opcion-argentina',
    num: '02',
    name: 'Ciudadanía argentina por opción',
    shortDesc: 'Hijos de argentinos nacidos en el exterior · Trámite ante RENAPER o consulados.',
    hero: {
      eyebrow: 'Opción · 02 / de 06',
      title: 'Ciudadanía argentina por opción',
      lead: 'Reconocimiento de ciudadanía para hijos de argentinos nativos nacidos en el extranjero, conforme al art. 75 inc. 12 de la Constitución Nacional y la Ley 346. El trámite puede iniciarse ante el RENAPER (en el país) o ante los consulados argentinos en el exterior.',
      plazo: '3 a 6 meses según jurisdicción y completitud de la documentación.',
    },
    cuando: [
      'Nació en el exterior y al menos uno de sus padres es argentino nativo.',
      'Quiere acceder a DNI y pasaporte argentino sin haber vivido en el país.',
      'Necesita inscribir su nacimiento en el Registro Civil argentino.',
      'Es menor de edad y los padres quieren tramitar la opción en su nombre.',
    ],
    documentos: [
      { name: 'Partida de nacimiento del solicitante', desc: 'Apostillada o legalizada y traducida al castellano.' },
      { name: 'DNI o partida de nacimiento del progenitor argentino', desc: 'Acreditando ciudadanía argentina nativa.' },
      { name: 'Partida de matrimonio de los padres', desc: 'Si los padres están casados.', optional: true },
      { name: 'Documento de identidad del solicitante', desc: 'Pasaporte o documento del país de nacimiento.' },
      { name: 'Acta de nacimiento traducida por traductor público', desc: 'Si está en idioma extranjero.', optional: true },
    ],
    extraFields: [
      { name: 'pais_nacimiento',  label: 'País de nacimiento del solicitante', type: 'text', required: true },
      { name: 'fecha_nacimiento', label: 'Fecha de nacimiento (AAAA-MM-DD)', type: 'text', required: true, placeholder: '1992-08-14' },
      { name: 'progenitor',       label: '¿Quién es el progenitor argentino?', type: 'select', required: true,
        options: ['Padre', 'Madre', 'Ambos'] },
      { name: 'documentacion',    label: '¿Tiene la documentación apostillada?', type: 'select',
        options: ['Sí, completa', 'Parcial', 'No, necesito ayuda para conseguirla'] },
    ],
  },

  {
    key: 'ciudadania-italiana',
    num: '03',
    name: 'Ciudadanía italiana por descendencia',
    shortDesc: 'Jure sanguinis · Vía consular en Argentina o vía judicial en Italia.',
    hero: {
      eyebrow: 'Italiana · 03 / de 06',
      title: 'Ciudadanía italiana por descendencia (jure sanguinis)',
      lead: 'Reconocimiento de ciudadanía italiana por descendencia, sin límite generacional cuando la línea de transmisión está sin interrupciones. Trabajamos las dos vías: consular —turno ante el consulado italiano competente en Argentina— y judicial en Italia, particularmente útil ante backlog consular o casos con línea materna anterior a 1948.',
      plazo: 'Vía consular: 2 a 5 años desde el otorgamiento del turno. Vía judicial en Italia: 12 a 24 meses.',
    },
    cuando: [
      'Tiene un ascendiente italiano y la línea de transmisión está documentada y sin renuncia.',
      'Quiere obtener pasaporte de la Unión Europea para vivir, trabajar o estudiar en el espacio Schengen.',
      'Su línea incluye una mujer transmisora antes de 1948 ("línea materna 1948"): la vía judicial en Italia es la habitual.',
      'Está cansado de la espera consular y quiere evaluar costos y plazos de la vía judicial.',
    ],
    documentos: [
      { name: 'Partida de nacimiento del solicitante', desc: 'Reciente, apostillada y traducida al italiano por traductor público.' },
      { name: 'Línea ascendente completa', desc: 'Nacimiento, matrimonio y defunción de cada ascendiente, hasta el italiano de origen — todas apostilladas y traducidas.' },
      { name: 'Certificado de no naturalización', desc: 'Del ascendiente italiano: acredita que no perdió la ciudadanía italiana antes del nacimiento del siguiente en la línea.' },
      { name: 'Partida italiana del ascendiente', desc: 'Solicitada al comune de origen en Italia.' },
      { name: 'Certificados de antecedentes', desc: 'Para residentes en Argentina, según requiera el consulado.', optional: true },
    ],
    extraFields: [
      { name: 'via',           label: '¿Qué vía le interesa?', type: 'select', required: true,
        options: ['Consular (Argentina)', 'Judicial en Italia', 'No estoy seguro · pido orientación'] },
      { name: 'linea_materna', label: '¿Su línea incluye una mujer transmisora antes de 1948?', type: 'select', required: true,
        options: ['Sí', 'No', 'No estoy seguro'] },
      { name: 'generaciones',  label: '¿Cuántas generaciones lo separan del italiano de origen?', type: 'select',
        options: ['1 (hijo)', '2 (nieto)', '3 (bisnieto)', '4 o más'] },
      { name: 'tiene_partidas',label: '¿Cuenta con las partidas en línea ascendente?', type: 'select',
        options: ['Sí, completas', 'Parcial', 'No, necesito ayuda para conseguirlas'] },
    ],
  },

  {
    key: 'ciudadania-espanola',
    num: '04',
    name: 'Ciudadanía española',
    shortDesc: 'Por opción, descendencia o residencia · Asesoramiento sobre la vía aplicable.',
    hero: {
      eyebrow: 'Española · 04 / de 06',
      title: 'Ciudadanía española por descendencia o residencia',
      lead: 'Asesoramos las distintas vías de acceso a la nacionalidad española: la Ley de Memoria Democrática (Ley de Nietos), opción para hijos de españoles de origen, residencia abreviada por descendencia (dos años) y residencia general (diez años). Cada caso requiere analizar la vía aplicable y la documentación específica.',
      plazo: '6 meses a 3 años según vía, consulado y completitud documental.',
    },
    cuando: [
      'Es hijo o nieto de español/a y quiere evaluar las vías por opción o por descendencia.',
      'Tiene ascendiente español originario y la línea de descendencia está documentada.',
      'Reside en España y cumple plazos para residencia abreviada (2 años) o general (10 años).',
      'Necesita analizar si su caso aún encuadra en la Ley de Memoria Democrática.',
    ],
    documentos: [
      { name: 'Partida de nacimiento del solicitante', desc: 'Apostillada y vigente.' },
      { name: 'Documentación del ascendiente español', desc: 'Partida de nacimiento y, si corresponde, certificado de nacionalidad española.' },
      { name: 'Certificado de antecedentes penales argentinos', desc: 'Apostillado, vigencia según consulado.' },
      { name: 'Certificado de antecedentes penales españoles', desc: 'Si residió en España.', optional: true },
      { name: 'DNI o pasaporte argentino', desc: 'Vigente.' },
      { name: 'Certificación de inscripción consular', desc: 'Si los padres se inscribieron en el consulado.', optional: true },
    ],
    extraFields: [
      { name: 'via_aplicable',  label: '¿Por cuál vía cree que aplica?', type: 'select', required: true,
        options: ['Ley de Memoria Democrática (Ley de Nietos)', 'Opción (hijo de español)', 'Residencia abreviada (2 años en España)', 'Residencia general (10 años)', 'No estoy seguro · pido orientación'] },
      { name: 'vinculo',        label: 'Vínculo con el ascendiente español', type: 'select',
        options: ['Hijo/a', 'Nieto/a', 'Bisnieto/a', 'Otro'] },
      { name: 'reside_espana',  label: '¿Reside actualmente en España?', type: 'select',
        options: ['Sí, con residencia legal', 'Sí, sin residencia', 'No, vivo en Argentina', 'Vivo en otro país'] },
    ],
  },

  {
    key: 'residencias-migratorias',
    num: '05',
    name: 'Residencias migratorias',
    shortDesc: 'Mercosur y no-Mercosur · Temporaria y permanente · Ante DNM.',
    hero: {
      eyebrow: 'Residencias · 05 / de 06',
      title: 'Residencias migratorias en Argentina',
      lead: 'Tramitamos residencias ante la Dirección Nacional de Migraciones (DNM): transitoria, temporaria y permanente, en los criterios de Mercosur y no-Mercosur. Cubrimos renovaciones, cambios de categoría, regularización migratoria y trámites por arraigo familiar, laboral o estudiantil.',
      plazo: 'Mercosur: 3 a 6 meses. No-Mercosur: 6 a 12 meses según categoría y completitud.',
    },
    cuando: [
      'Es extranjero y necesita regularizar su situación migratoria en Argentina.',
      'Tiene residencia temporaria vigente y quiere pasar a permanente.',
      'Es ciudadano de un país Mercosur o asociado y quiere acceder al criterio simplificado.',
      'Ingresó como turista y necesita cambiar a una categoría que le permita trabajar legalmente.',
    ],
    documentos: [
      { name: 'Pasaporte vigente del país de origen', desc: 'Con sellos de ingreso al país y validez no menor a 6 meses.' },
      { name: 'Partida de nacimiento apostillada', desc: 'Y traducida al castellano por traductor público.' },
      { name: 'Antecedentes penales del país de origen', desc: 'Apostillados o legalizados, vigencia 6 meses.' },
      { name: 'Antecedentes penales argentinos', desc: 'Si reside hace más de un año en el país.', optional: true },
      { name: 'Comprobante de ingreso al país', desc: 'Sello de Migraciones o constancia de ingreso.' },
      { name: 'Acreditación de medios de vida', desc: 'Laborales, familiares o estudiantiles según el criterio invocado.' },
    ],
    extraFields: [
      { name: 'pais_origen',    label: 'País de origen', type: 'text', required: true },
      { name: 'tipo_residencia',label: '¿Qué tipo de residencia necesita?', type: 'select', required: true,
        options: ['Transitoria', 'Temporaria', 'Permanente', 'Cambio de categoría', 'Regularización'] },
      { name: 'criterio',       label: 'Criterio aplicable', type: 'select', required: true,
        options: ['Mercosur o asociados', 'Familiar de argentino', 'Trabajador con contrato', 'Estudiante', 'Inversor / pensionado', 'Otro'] },
      { name: 'situacion_actual',label: 'Situación migratoria actual', type: 'textarea', fullWidth: true,
        placeholder: 'Cómo ingresó al país, fecha aproximada, si está en situación irregular, etc.' },
    ],
  },

  {
    key: 'tramites-consulares',
    num: '06',
    name: 'Trámites consulares y apostillado',
    shortDesc: 'Apostilla de La Haya · Traducciones públicas · Gestión ante consulados.',
    hero: {
      eyebrow: 'Consulares · 06 / de 06',
      title: 'Apostillado, traducciones y trámites consulares',
      lead: 'Servicios complementarios a los trámites de ciudadanía y residencia: legalización y apostilla de documentos públicos para su uso en el exterior, traducción pública certificada por traductor matriculado, y gestiones ante consulados argentinos o extranjeros con o sin poder.',
      plazo: 'Apostilla: 1 a 5 días hábiles. Traducciones: 3 a 10 días según extensión.',
    },
    cuando: [
      'Necesita apostillar partidas o documentos públicos para presentar en otro país.',
      'Le solicitan una traducción pública certificada por traductor matriculado.',
      'Tiene un trámite consular y prefiere delegar la presentación o seguimiento.',
      'Está armando la carpeta para un trámite de ciudadanía y necesita la documentación lista.',
    ],
    documentos: [
      { name: 'Documento original o copia certificada', desc: 'Lo que se va a apostillar o traducir.' },
      { name: 'Datos del país de destino', desc: 'Para verificar requisitos específicos del consulado.' },
      { name: 'Idiomas de origen y destino', desc: 'Para asignar al traductor matriculado correspondiente.', optional: true },
    ],
    extraFields: [
      { name: 'tipo_servicio', label: 'Tipo de servicio', type: 'select', required: true,
        options: ['Apostilla de La Haya', 'Legalización consular', 'Traducción pública', 'Trámite consular con poder', 'Combinación de los anteriores'] },
      { name: 'pais_destino',  label: 'País de destino del trámite', type: 'text' },
      { name: 'idiomas',       label: 'Si es traducción, idioma de origen y destino', type: 'text', placeholder: 'Ej. español → italiano' },
      { name: 'cantidad',      label: 'Cantidad aproximada de documentos', type: 'text', placeholder: 'Ej. 5 partidas + 2 antecedentes' },
    ],
  },
];

export const tramiteByKey = (key: string) => tramites.find((t) => t.key === key);
