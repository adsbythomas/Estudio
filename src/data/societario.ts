// Contenido del micrositio del área societaria.
// Fuente inicial: propuesta interna PDF · 2026. Editar y ampliar acá.
import type { Tramite, MicrositioLanding } from './types';

export const societario: MicrositioLanding = {
  hero: {
    eyebrow: 'Área societaria',
    title: 'Trámites societarios, 25 años de oficio.',
    lead: 'Constitución, reformas, designación de autoridades y cumplimiento anual ante la Inspección General de Justicia y la Dirección Provincial de Personas Jurídicas. Cada expediente, asignado a un abogado del estudio.',
    ctaPrimary: 'Iniciar trámite online',
    ctaSecondary: 'Hablar con un abogado',
  },
  cifras: {
    label: 'En cifras',
    title: 'El área societaria en números',
    items: [
      { num: '25', suffix: '+',  label: 'Años de oficio en derecho societario' },
      { num: '6',  suffix: '',   label: 'Trámites con flujo digital propio' },
      { num: '3',  suffix: '',   label: 'Jurisdicciones — IGJ, DPPJ y registros provinciales' },
      { num: '100',suffix: '%',  label: 'Confidencialidad y secreto profesional' },
    ],
  },
  practica: {
    label: 'Práctica societaria',
    title: 'Servicios',
    sub: 'Seis líneas de trabajo, ejercidas con autonomía y coordinación con el resto del estudio.',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 6 TRÁMITES
// ─────────────────────────────────────────────────────────────────────────────

export const tramites: Tramite[] = [
  {
    key: 'constitucion',
    num: '01',
    name: 'Constitución de sociedades',
    shortDesc: 'SRL, SA y SAS · CABA y Provincia · Vehículos del Art. 123 LGS.',
    hero: {
      eyebrow: 'Constitución · 01 / de 06',
      title: 'Constitución de sociedades — SRL, SA y SAS',
      lead: 'Inscripción de sociedades ante la Inspección General de Justicia (IGJ) o la Dirección Provincial de Personas Jurídicas (DPPJ). Asistimos en la elección del tipo societario, la redacción del instrumento constitutivo y todo el trámite registral hasta la inscripción.',
      plazo: '25 a 45 días hábiles según jurisdicción.',
    },
    cuando: [
      'Quiere formalizar un emprendimiento o PyME con socios.',
      'Necesita una sociedad para canalizar inversión, contratos o licitaciones.',
      'Va a constituir un vehículo del Art. 123 LGS para una sociedad del exterior.',
      'Tiene que decidir entre SRL, SA o SAS y necesita orientación previa.',
    ],
    documentos: [
      { name: 'DNI de socios y autoridades', desc: 'Frente y dorso de cada socio fundador y administrador.' },
      { name: 'Constancia de domicilio', desc: 'Servicio o constancia que acredite el domicilio sede social propuesto.' },
      { name: 'Datos de la sociedad propuesta', desc: 'Denominación, objeto, capital, plazo, sede.' },
      { name: 'Proyecto de estatuto o instrumento', desc: 'Si ya tiene uno; si no, lo redactamos.', optional: true },
      { name: 'Comprobante de integración de capital', desc: 'En caso de aportes en efectivo, depósito bancario; en bienes, inventario y avalúo.', optional: true },
    ],
    comparativo: {
      title: 'Comparativo SRL · SA · SAS',
      note: 'Valores y referencias normativas a verificar a la fecha de presentación.',
      headers: [
        { label: 'SRL', key: 'srl' },
        { label: 'SA',  key: 'sa'  },
        { label: 'SAS', key: 'sas' },
      ],
      rows: [
        { aspecto: 'Cantidad de socios', srl: '2 a 50',             sa: '2 o más',         sas: '1 o más' },
        { aspecto: 'Capital mínimo',     srl: 'Sin mínimo legal',   sa: 'Fijado por IGJ',  sas: '2 SMVM' },
        { aspecto: 'Administración',     srl: 'Gerencia',           sa: 'Directorio',      sas: 'Administrador' },
        { aspecto: 'Sindicatura',        srl: 'Optativa',           sa: 'Obligatoria s/capital', sas: 'Optativa' },
        { aspecto: 'Balance ante IGJ',   srl: 'No (regla)',         sa: 'Sí',              sas: 'No' },
        { aspecto: 'Inscripción digital',srl: 'Parcial',            sa: 'Parcial',         sas: 'Sí (TAD)' },
      ],
    },
    extraFields: [
      { name: 'tipo_societario', label: 'Tipo societario propuesto', type: 'select', required: true,
        options: ['SRL', 'SA', 'SAS', 'No estoy seguro · pido orientación'] },
      { name: 'jurisdiccion',    label: 'Jurisdicción', type: 'select', required: true,
        options: ['CABA — IGJ', 'Provincia de Buenos Aires — DPPJ', 'Otra provincia'] },
      { name: 'denominacion',    label: 'Denominación propuesta', type: 'text',
        placeholder: 'Ej. Ferrocarril del Sur SRL' },
      { name: 'objeto',          label: 'Objeto social principal', type: 'textarea', fullWidth: true,
        placeholder: 'Actividades principales que va a desarrollar la sociedad.' },
    ],
  },

  {
    key: 'reformas-estatutarias',
    num: '02',
    name: 'Reformas estatutarias',
    shortDesc: 'Sede, objeto y denominación · Variaciones de capital · Fusión y escisión.',
    hero: {
      eyebrow: 'Reformas · 02 / de 06',
      title: 'Reformas del estatuto social',
      lead: 'Modificación del instrumento constitutivo cuando cambia la sede, el objeto, la denominación, el capital o cualquier cláusula esencial. Incluye fusiones y escisiones.',
      plazo: '30 a 60 días hábiles según jurisdicción y tipo de reforma.',
    },
    cuando: [
      'Necesita mudar la sede legal a otra jurisdicción.',
      'Va a ampliar o reducir el capital social.',
      'Quiere modificar el objeto social para sumar nuevas actividades.',
      'Está evaluando una fusión, escisión o transformación.',
    ],
    documentos: [
      { name: 'Estatuto vigente', desc: 'Última versión inscripta, con todas las reformas anteriores.' },
      { name: 'Acta de asamblea o reunión de socios', desc: 'Que resuelva la reforma con quórum y mayorías legales.' },
      { name: 'Balance especial', desc: 'Para reducción o aumento por revalúo / capitalización.', optional: true },
      { name: 'Publicación en Boletín Oficial', desc: 'Lo gestionamos según la reforma.', optional: true },
    ],
    extraFields: [
      { name: 'tipo_reforma', label: 'Tipo de reforma', type: 'select', required: true,
        options: ['Sede social', 'Objeto', 'Denominación', 'Capital (aumento o reducción)', 'Fusión / Escisión', 'Transformación', 'Otra'] },
      { name: 'razon_social', label: 'Razón social actual', type: 'text', required: true },
      { name: 'detalle_reforma', label: 'Detalle de la reforma', type: 'textarea', fullWidth: true,
        placeholder: 'Describí brevemente qué querés modificar.' },
    ],
  },

  {
    key: 'designacion-autoridades',
    num: '03',
    name: 'Designación de autoridades',
    shortDesc: 'Directorio, gerencia y sindicatura · Garantía obligatoria.',
    hero: {
      eyebrow: 'Autoridades · 03 / de 06',
      title: 'Designación y cesación de autoridades',
      lead: 'Inscripción de directores, gerentes, síndicos y administradores ante el registro correspondiente, con la constitución de la garantía obligatoria.',
      plazo: '15 a 30 días hábiles.',
    },
    cuando: [
      'Vence el mandato del directorio o gerencia.',
      'Hay una renuncia o reemplazo de autoridades.',
      'Designa síndico (titular y suplente).',
      'Necesita inscribir la garantía obligatoria de directores/gerentes.',
    ],
    documentos: [
      { name: 'Acta de asamblea o reunión de socios', desc: 'Donde se designan las nuevas autoridades.' },
      { name: 'DNI de las autoridades designadas', desc: 'Frente y dorso.' },
      { name: 'Aceptación del cargo y constitución de domicilio', desc: 'Lo redactamos junto a las autoridades designadas.' },
      { name: 'Garantía obligatoria', desc: 'Póliza, depósito en efectivo o aval bancario, según corresponda.' },
    ],
    extraFields: [
      { name: 'razon_social', label: 'Razón social', type: 'text', required: true },
      { name: 'tipo_autoridad', label: 'Tipo de inscripción', type: 'select', required: true,
        options: ['Designación de directorio', 'Designación de gerencia (SRL)', 'Designación de sindicatura', 'Renuncia / cesación', 'Renovación de mandato'] },
      { name: 'cantidad_autoridades', label: 'Cantidad de personas a inscribir', type: 'text',
        placeholder: 'Ej. 1 director titular, 1 suplente' },
    ],
  },

  {
    key: 'cesiones-transferencias',
    num: '04',
    name: 'Cesiones y transferencias',
    shortDesc: 'Cuotas SRL, transferencia de acciones, pactos de socios.',
    hero: {
      eyebrow: 'Cesiones · 04 / de 06',
      title: 'Cesión de cuotas, acciones y pactos de socios',
      lead: 'Instrumentación e inscripción de transferencias de cuotas en SRL, transferencia de acciones en SA/SAS, y redacción de pactos de socios o accionistas.',
      plazo: '20 a 40 días hábiles para inscripciones; pactos de socios sin plazo registral.',
    },
    cuando: [
      'Va a comprar o vender participaciones en una sociedad.',
      'Necesita instrumentar el ingreso o egreso de un socio.',
      'Quiere redactar un pacto de socios con derechos de tag-along, drag-along, vetos o salida.',
      'Está evaluando una operación de M&A con due diligence societario.',
    ],
    documentos: [
      { name: 'Estatuto vigente y última inscripción', desc: 'Para verificar restricciones a la transferencia.' },
      { name: 'Datos de cedente y cesionario', desc: 'DNI/CUIT y domicilio.' },
      { name: 'Precio y forma de pago acordados', desc: 'Para redactar el instrumento de cesión.' },
      { name: 'Libro de socios o registro de acciones', desc: 'Vigente, para asentar la transferencia.', optional: true },
    ],
    extraFields: [
      { name: 'razon_social', label: 'Razón social', type: 'text', required: true },
      { name: 'tipo_operacion', label: 'Tipo de operación', type: 'select', required: true,
        options: ['Cesión de cuotas (SRL)', 'Transferencia de acciones (SA/SAS)', 'Pacto de socios / accionistas', 'Aporte irrevocable a cuenta', 'Otra'] },
      { name: 'porcentaje', label: 'Porcentaje que se transfiere', type: 'text', placeholder: 'Ej. 25%' },
      { name: 'detalle_operacion', label: 'Detalle de la operación', type: 'textarea', fullWidth: true },
    ],
  },

  {
    key: 'cumplimiento-anual',
    num: '05',
    name: 'Cumplimiento anual',
    shortDesc: 'Asambleas, balances, beneficiario final, rúbrica de libros.',
    hero: {
      eyebrow: 'Cumplimiento · 05 / de 06',
      title: 'Cumplimiento anual societario',
      lead: 'Asambleas ordinarias, presentación de estados contables, régimen de beneficiario final, rúbrica de libros y todo el cumplimiento registral anual ante IGJ/DPPJ.',
      plazo: 'Calendario anual; los plazos dependen del cierre de ejercicio de la sociedad.',
    },
    cuando: [
      'Su sociedad cierra ejercicio y necesita aprobar estados contables.',
      'Tiene que presentar el régimen de beneficiario final.',
      'Necesita rubricar nuevos libros (Actas, Inventarios, IVA, Sueldos).',
      'Quiere tercerizar el seguimiento del calendario societario anual.',
    ],
    documentos: [
      { name: 'Estados contables del ejercicio', desc: 'Firmados por contador con certificación del Consejo Profesional.' },
      { name: 'Acta de aprobación de balance', desc: 'La redactamos y asistimos a la asamblea si se requiere.' },
      { name: 'Padrón de socios o accionistas', desc: 'Actualizado al cierre del ejercicio.' },
      { name: 'Información de beneficiario final', desc: 'Identificación de personas humanas que controlan la sociedad.' },
    ],
    extraFields: [
      { name: 'razon_social',    label: 'Razón social', type: 'text', required: true },
      { name: 'cierre_ejercicio',label: 'Fecha de cierre de ejercicio', type: 'text', placeholder: 'Ej. 31/12' },
      { name: 'servicios_anuales',label: '¿Qué necesita cubrir?', type: 'textarea', fullWidth: true,
        placeholder: 'Asambleas, presentación de balance, beneficiario final, rúbrica de libros, etc.' },
    ],
  },

  {
    key: 'profesionales',
    num: '06',
    name: 'Atención a profesionales',
    shortDesc: 'Soporte registral para contadores y colegas con cartera propia.',
    hero: {
      eyebrow: 'Profesionales · 06 / de 06',
      title: 'Soporte registral para contadores y colegas',
      lead: 'Trabajamos con estudios contables y abogados con cartera propia que necesitan delegar la parte registral societaria. Tarifas mayoristas, abogado asignado por cliente y respuesta en 48 hs hábiles.',
      plazo: 'Según trámite delegado; coordinación mensual o por expediente.',
    },
    cuando: [
      'Es contador y necesita un estudio que resuelva los trámites societarios de sus clientes.',
      'Es abogado y necesita reforzar capacidad operativa en IGJ/DPPJ.',
      'Quiere ofrecer un servicio integral a su cartera sin contratar abogado propio.',
      'Busca acuerdos de tarifa mayorista o por volumen.',
    ],
    documentos: [
      { name: 'Datos del estudio o profesional', desc: 'CUIT, matrícula, contacto.' },
      { name: 'Estimación de volumen mensual', desc: 'Para proponer modalidad de trabajo y tarifa.', optional: true },
      { name: 'Listado de trámites recurrentes', desc: 'Qué tipo de operaciones lleva usualmente.', optional: true },
    ],
    extraFields: [
      { name: 'profesion',  label: 'Profesión', type: 'select', required: true,
        options: ['Contador público', 'Abogado / Escribano', 'Otro profesional'] },
      { name: 'estudio',    label: 'Estudio o razón social', type: 'text' },
      { name: 'volumen',    label: 'Volumen estimado mensual', type: 'select',
        options: ['1 a 3 trámites', '4 a 10 trámites', 'Más de 10 trámites', 'Por proyecto'] },
      { name: 'modalidad',  label: '¿Qué modalidad busca?', type: 'textarea', fullWidth: true,
        placeholder: 'Trámite por trámite, paquete mensual, retainer, etc.' },
    ],
  },
];

export const tramiteByKey = (key: string) => tramites.find((t) => t.key === key);
