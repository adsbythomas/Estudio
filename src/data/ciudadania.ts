// Contenido del micrositio del área de ciudadanía y residencias.
// Trámites de ciudadanía argentina (naturalización y opción), residencias
// migratorias ante la Dirección Nacional de Migraciones y gestiones consulares
// (apostillado, traducción pública). El estudio NO tramita ciudadanías
// extranjeras (italiana, española, etc.) — sólo ciudadanía argentina.
//
// Las referencias normativas y plazos pueden variar — verificar a la fecha
// de presentación de cada expediente.
import type { Tramite, MicrositioLanding } from './types';

export const ciudadania: MicrositioLanding = {
  hero: {
    eyebrow: 'Área de ciudadanía y migraciones',
    title: 'Ciudadanía argentina, residencias y trámites consulares.',
    lead: 'Asesoramiento y representación en ciudadanía argentina (naturalización y opción), residencias migratorias ante la Dirección Nacional de Migraciones y gestiones consulares —apostilla, traducción pública y trámites con o sin poder—. Cada expediente, con un abogado asignado del estudio.',
    ctaPrimary: 'Iniciar trámite online',
    ctaSecondary: 'Hablar con un abogado',
  },
  cifras: {
    label: 'En cifras',
    title: 'El área de ciudadanía en números',
    items: [
      { num: '25', suffix: '+', label: 'Años de oficio en derecho de extranjería y migratorio' },
      { num: '4',  suffix: '',  label: 'Líneas de trámite con flujo digital propio' },
      { num: '48', suffix: 'h', label: 'Asignación de abogado tras cargar el expediente' },
      { num: '100',suffix: '%', label: 'Confidencialidad y secreto profesional' },
    ],
  },
  practica: {
    label: 'Práctica de ciudadanía',
    title: 'Servicios',
    sub: 'Cuatro líneas de trabajo en ciudadanía argentina, residencias y gestiones consulares, integradas al resto del estudio.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 4 TRÁMITES
// ─────────────────────────────────────────────────────────────────────────────

export const tramites: Tramite[] = [
  {
    key: 'naturalizacion-argentina',
    num: '01',
    name: 'Ciudadanía argentina por naturalización',
    shortDesc: 'Extranjeros con residencia continua en el país · Trámite judicial federal.',
    hero: {
      eyebrow: 'Naturalización · 01 / de 04',
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
      eyebrow: 'Opción · 02 / de 04',
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
    key: 'residencias-migratorias',
    num: '03',
    name: 'Residencias migratorias',
    shortDesc: 'Mercosur y no-Mercosur · Temporaria y permanente · Ante DNM.',
    hero: {
      eyebrow: 'Residencias · 03 / de 04',
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
    num: '04',
    name: 'Trámites consulares y apostillado',
    shortDesc: 'Apostilla de La Haya · Traducciones públicas · Gestión ante consulados.',
    hero: {
      eyebrow: 'Consulares · 04 / de 04',
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
      { name: 'idiomas',       label: 'Si es traducción, idioma de origen y destino', type: 'text', placeholder: 'Ej. inglés → español' },
      { name: 'cantidad',      label: 'Cantidad aproximada de documentos', type: 'text', placeholder: 'Ej. 5 partidas + 2 antecedentes' },
    ],
  },
];

export const tramiteByKey = (key: string) => tramites.find((t) => t.key === key);
