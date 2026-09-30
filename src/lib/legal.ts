// Contenido del área legal (abogados).
export const legal = {
  slug: '',
  eyebrow: 'Área Legal',
  hero: {
    titleLine1: 'Derecho empresarial,',
    titleLine2: '25 años de práctica.',
    lead:
      'Estudio de abogados y contadores. Asesoramos, defendemos y representamos en todas las áreas, con la misma exigencia dentro y fuera del país.<br/><br/>25 años de práctica desde Buenos Aires, con corresponsalías internacionales.',
    ctaPrimary: 'Solicitar consulta',
  },
  counters: {
    label: 'En cifras',
    title: 'El estudio en números',
    sub: 'Veinticinco años de trabajo continuo, con foco y método.',
    items: [
      { num: '25', suffix: '',   label: 'Años de trayectoria',  desc: 'Veinticinco años asesorando y representando en operaciones tributarias, societarias y penales económicas complejas.', icon: 'clock' },
      { num: '9',  suffix: '',   label: 'Áreas especializadas', desc: 'Tributario, laboral, societario, empresarial y comercial, concursos y quiebras, aerocomercial, penal y penal económico, derecho de la salud, migratorio y ciudadanías.', icon: 'layers' },
      { num: '3',  suffix: '',   label: 'Jurisdicciones',       desc: 'Sede en Buenos Aires, con corresponsalías activas en distintos países.', icon: 'globe' },
      { num: '100',suffix: '%',  label: 'Confidencialidad',     desc: 'Secreto profesional y reserva estricta sobre toda la información del cliente.', icon: 'shield' },
    ],
  },
  practice: {
    label: 'Práctica profesional',
    title: 'Áreas',
    sub: 'Nueve áreas de práctica, ejercidas con autonomía y coordinación entre sí. Dos cuentan con micrositio propio y formulario online: <a href="/societario" class="link-area">Societario</a> y <a href="/ciudadania" class="link-area">Migratorio y Ciudadanías</a>.',
    items: [
      {
        key: 'tributario',
        name: 'Tributario',
        desc: 'Planificación fiscal, litigios ante el fisco, precios de transferencia, tributario internacional y reestructuraciones impositivas.',
        meetingTopic: 'derecho tributario',
        intro: 'El derecho tributario regula la relación entre los contribuyentes y el fisco. Asesoramos a empresas y grupos económicos en la planificación de su carga fiscal, la defensa ante inspecciones y reclamos de ARCA-DGI y los fiscos provinciales, y la estructuración de operaciones complejas que impactan en impuestos nacionales, provinciales y municipales.',
        services: [
          { title: 'Planificación fiscal',        desc: 'Diseño de estructuras impositivas eficientes para empresas locales e internacionales, en cumplimiento con la normativa vigente.' },
          { title: 'Litigios ante el fisco',      desc: 'Defensa en procedimientos de determinación de oficio, recursos administrativos y acciones contencioso-tributarias en todas las instancias.' },
          { title: 'Precios de transferencia',    desc: 'Estudio y documentación de operaciones entre empresas vinculadas, con foco en BEPS y los lineamientos OCDE.' },
          { title: 'Tributación internacional',   desc: 'Análisis de convenios para evitar la doble imposición, residencia fiscal de personas físicas y jurídicas, e impuestos por inversiones extranjeras.' },
          { title: 'Reestructuraciones impositivas', desc: 'Reorganizaciones societarias con tratamiento fiscal — fusiones, escisiones, transferencias de fondos de comercio, sin pérdida de quebrantos ni cómputos pendientes.' },
        ],
      },
      {
        key: 'laboral',
        name: 'Laboral',
        desc: 'Relaciones individuales y colectivas de trabajo, negociación sindical, conflictos laborales y reestructuraciones de personal.',
        meetingTopic: 'derecho laboral',
        intro: 'Asesoramos en relaciones individuales y colectivas de trabajo, conflictos laborales, negociación con sindicatos y reestructuraciones de personal. Defensa empresarial en juicios laborales y prevención de contingencias por despidos, accidentes y reclamos sindicales.',
        services: [
          { title: 'Relaciones individuales',     desc: 'Contratos de trabajo, despidos con y sin causa, indemnizaciones, sanciones disciplinarias y modificaciones contractuales.' },
          { title: 'Relaciones colectivas',       desc: 'Negociación de convenios colectivos, paritarias, conflictos sindicales y procedimientos de conciliación obligatoria.' },
          { title: 'Negociación sindical',        desc: 'Acuerdos de empresa con representaciones gremiales, soluciones de conflictos colectivos y manejo de medidas de fuerza.' },
          { title: 'Conflictos laborales',        desc: 'Defensa en juicios por despidos, ART, seguros laborales, accidentes y enfermedades profesionales.' },
          { title: 'Reestructuraciones de personal', desc: 'Programas de retiro voluntario, suspensiones, traslados y modificaciones contractuales en contextos de crisis o transformación.' },
        ],
      },
      {
        key: 'societario',
        name: 'Societario',
        desc: 'Gobierno corporativo, fusiones y adquisiciones, due diligence, acuerdos de accionistas y transformaciones societarias.',
        // El área societaria tiene micrositio propio con trámites y formulario online.
        href: '/societario',
        meetingTopic: 'derecho societario',
        intro: 'Cubrimos todo el ciclo de vida societario: constitución, gobierno corporativo, fusiones y adquisiciones, due diligence y reorganizaciones. Asesoramos a accionistas, directores y comités en sus deberes, derechos y conflictos, y acompañamos transacciones complejas con corresponsalías en distintos países.',
        services: [
          { title: 'Gobierno corporativo',        desc: 'Deberes fiduciarios, reglamentos internos, políticas de governance, comités de auditoría y prácticas de buen gobierno.' },
          { title: 'Fusiones y adquisiciones',    desc: 'Estructuración de transacciones, acuerdos de compraventa, garantías, cláusulas de ajuste y mecanismos de earn-out.' },
          { title: 'Due diligence',               desc: 'Revisiones legales completas para operaciones de M&A, financiamiento estructurado o reorganizaciones internas.' },
          { title: 'Acuerdos de accionistas',     desc: 'Pactos de sindicación, derechos de tag-along y drag-along, vetos, mecanismos de salida y resolución de conflictos.' },
          { title: 'Transformaciones societarias',desc: 'Cambios de tipo social, escisiones, fusiones, disoluciones y reorganizaciones con impacto en ingresos brutos y ganancias.' },
        ],
      },
      {
        key: 'empresarial',
        name: 'Empresarial y Comercial',
        desc: 'Contratos comerciales, distribución y franquicias, defensa del consumidor y la competencia, y asesoramiento integral a la operación diaria de la empresa.',
        meetingTopic: 'derecho empresarial y comercial',
        intro: 'Acompañamos a empresas en su operación diaria y en sus decisiones estratégicas: redacción y negociación de contratos, relaciones con proveedores, distribuidores y clientes, y resolución de conflictos comerciales, en sede judicial o arbitral.',
        services: [
          { title: 'Contratos comerciales',       desc: 'Redacción, revisión y negociación de contratos de suministro, compraventa, locación de servicios, confidencialidad y colaboración empresaria.' },
          { title: 'Distribución y franquicias',  desc: 'Contratos de agencia, concesión, distribución y franquicia, con foco en exclusividades, territorios y rescisión.' },
          { title: 'Defensa del consumidor',      desc: 'Adecuación de prácticas comerciales a la Ley 24.240, defensa ante reclamos administrativos y judiciales de consumidores.' },
          { title: 'Defensa de la competencia',   desc: 'Notificación de concentraciones económicas y asesoramiento en conductas anticompetitivas ante la autoridad de aplicación.' },
          { title: 'Litigios comerciales',        desc: 'Representación en juicios comerciales, cobros, medidas cautelares y arbitrajes nacionales e internacionales.' },
        ],
      },
      {
        key: 'concursos',
        name: 'Concursos y Quiebras',
        heading: 'Concursos y <span style="color: var(--brand-500)">quiebras</span>',
        desc: 'Concursos preventivos, acuerdos preventivos extrajudiciales, quiebras, verificación de créditos y reestructuración de pasivos.',
        meetingTopic: 'concursos y quiebras',
        intro: 'Asesoramos a deudores y acreedores en situaciones de insolvencia bajo la Ley 24.522: desde la reestructuración de pasivos y los acuerdos preventivos extrajudiciales hasta el concurso preventivo y la quiebra, con foco en preservar el valor de la empresa y el recupero de los créditos.',
        services: [
          { title: 'Concurso preventivo',         desc: 'Presentación, período de exclusividad, negociación de propuestas con acreedores y homologación del acuerdo.' },
          { title: 'Acuerdo preventivo extrajudicial', desc: 'Negociación privada con acreedores y posterior homologación judicial como alternativa ágil al concurso.' },
          { title: 'Quiebras',                    desc: 'Pedidos de quiebra, defensa del fallido, conversión en concurso, acciones de responsabilidad y de ineficacia.' },
          { title: 'Verificación de créditos',    desc: 'Verificación tempestiva y tardía, revisión e impugnación de créditos y privilegios en representación de acreedores.' },
          { title: 'Reestructuración de pasivos', desc: 'Diagnóstico financiero-legal y diseño de planes de pago y refinanciación para evitar la insolvencia.' },
        ],
      },
      {
        key: 'aerocomercial',
        name: 'Aerocomercial',
        desc: 'Derecho aeronáutico, contratos de aviación, regulación de aerolíneas, seguros aéreos y representación ante la ANAC.',
        meetingTopic: 'derecho aerocomercial',
        intro: 'Práctica especializada en derecho aeronáutico y aerocomercial, con experiencia en regulación de aerolíneas, contratos de aviación, seguros y representación ante la ANAC y otras autoridades regulatorias del sector. Una de las áreas pilares del estudio desde 2015.',
        services: [
          { title: 'Derecho aeronáutico',         desc: 'Normativa aplicable a operadores aéreos, servicios aeroportuarios, transporte de carga y pasajeros y contratos vinculados a la aviación civil.' },
          { title: 'Contratos de aviación',       desc: 'Arrendamiento de aeronaves (dry lease, wet lease, ACMI), contratos de mantenimiento, handling y servicios de tierra.' },
          { title: 'Regulación de aerolíneas',    desc: 'Licencias, certificados de explotador (CESA), aprobaciones técnicas y operativas, y trámites de habilitación de rutas.' },
          { title: 'Seguros aéreos',              desc: 'Pólizas de cascos, responsabilidad civil aérea, war risk, asesoramiento en siniestros y reclamos internacionales.' },
          { title: 'Representación ante la ANAC', desc: 'Trámites administrativos, autorizaciones, infracciones y procedimientos sancionatorios ante la Administración Nacional de Aviación Civil.' },
        ],
      },
      {
        key: 'penal',
        name: 'Penal y Penal Económico',
        desc: 'Defensa y querellas en causas penales, delitos económicos, lavado de activos, fraudes, corrupción corporativa y compliance penal preventivo.',
        meetingTopic: 'derecho penal y penal económico',
        intro: 'Defensa penal y representación de querellantes en todas las instancias, con especialización en delitos económicos, lavado de activos, fraude, corrupción corporativa y compliance preventivo. Asesoramiento empresarial para minimizar la exposición a la responsabilidad penal de las personas jurídicas bajo la Ley 27.401.',
        services: [
          { title: 'Defensa penal',               desc: 'Defensa de personas humanas en causas penales, desde la primera citación o detención hasta la sentencia firme y sus recursos.' },
          { title: 'Querellas',                   desc: 'Representación de víctimas y empresas damnificadas como parte querellante, impulsando la investigación y el recupero de activos.' },
          { title: 'Defensa penal económica',     desc: 'Asesoramiento desde la imputación inicial, pasando por la elevación a juicio, hasta la sentencia firme y eventuales recursos extraordinarios.' },
          { title: 'Lavado de activos',           desc: 'Defensa en investigaciones sobre operaciones sospechosas y prevención del lavado en sujetos obligados (escribanos, contadores, agentes financieros).' },
          { title: 'Fraude corporativo',          desc: 'Investigaciones internas, querellas, defensa de directivos y empresas en delitos contra el patrimonio y la administración fraudulenta.' },
          { title: 'Corrupción corporativa',      desc: 'Programas de integridad bajo Ley 27.401, defensa en cohecho, tráfico de influencias y negociaciones incompatibles con la función pública.' },
          { title: 'Compliance penal preventivo', desc: 'Diseño e implementación de programas de cumplimiento, capacitación, canales de denuncia, investigaciones internas y auditorías de integridad.' },
        ],
      },
      {
        key: 'salud',
        name: 'Derecho de la Salud',
        heading: 'Derecho de la <span style="color: var(--brand-500)">salud</span>',
        desc: 'Amparos de salud, reclamos a obras sociales y prepagas, cobertura de discapacidad, responsabilidad profesional médica y regulación sanitaria.',
        meetingTopic: 'derecho de la salud',
        intro: 'Representamos a pacientes, familias, profesionales e instituciones en conflictos vinculados con la salud: acceso a prestaciones y medicamentos, cobertura de obras sociales y empresas de medicina prepaga, responsabilidad médica y cumplimiento de la regulación sanitaria.',
        services: [
          { title: 'Amparos de salud',            desc: 'Acciones urgentes para obtener tratamientos, medicamentos, cirugías y prestaciones negadas o demoradas.' },
          { title: 'Obras sociales y prepagas',   desc: 'Reclamos por cobertura, aumentos de cuotas, rescisiones de contratos y exclusión de preexistencias.' },
          { title: 'Discapacidad',                desc: 'Cobertura integral bajo la Ley 24.901, certificado único de discapacidad, prestaciones educativas y terapéuticas.' },
          { title: 'Responsabilidad médica',      desc: 'Defensa de profesionales e instituciones y representación de pacientes en reclamos por mala praxis.' },
          { title: 'Regulación sanitaria',        desc: 'Habilitaciones, trámites ante ANMAT y autoridades sanitarias, y cumplimiento normativo de establecimientos de salud.' },
        ],
      },
      {
        key: 'ciudadania',
        name: 'Migratorio y Ciudadanías',
        desc: 'Residencias temporarias y permanentes ante la Dirección Nacional de Migraciones, ciudadanía argentina (naturalización y opción), ciudadanías extranjeras y trámites consulares.',
        // El área de ciudadanía tiene micrositio propio con trámites y formulario online.
        href: '/ciudadania',
        meetingTopic: 'derecho migratorio y ciudadanías',
      },
    ],
  },
  team: {
    label: 'Equipo',
    title: 'Los socios y el equipo de asociados.',
    sub: 'Cada socio lidera una o dos áreas y coordina con el resto del equipo. El estudio suma asociados y un <a href="/contable" class="link-contable">equipo contable</a> integrado.',
    members: [
      // photoFocal: valor CSS object-position. Sube el % (Y) para "bajar" el recorte
      // y mostrar más torso / menos espacio arriba de la cabeza. Calibrado para
      // alinear los ojos a ~35% desde arriba del cuadrado en todas las cards.
      // Si cambia una foto, recalibrar SÓLO la que cambió.
      // Orden: primero los que tienen foto (4), después los placeholders (2).
      { key: 'matias-pantarotto',     initials: 'MP', name: 'Matías Pantarotto',      role: 'Socio Director', spec: 'Tributario · Penal Económico',                    photo: '/team/matias-pantarotto.jpg',      photoFocal: 'center 8%'  },
      { key: 'maria-ines-lertora',    initials: 'ML', name: 'María Inés Lértora',     role: 'Asociada',       spec: 'Tributario · Penal Económico',                    photo: '/team/maria-ines-lertora.jpg',     photoFocal: 'center 14%' },
      { key: 'maria-alejandra-rivero',initials: 'MR', name: 'María Alejandra Rivero', role: 'Socia',          spec: 'Laboral · Societario',                            photo: '/team/maria-alejandra-rivero.jpg', photoFocal: 'center 26%' },
      { key: 'agustin',               initials: 'AZ', name: 'Agustín Zabaleta',       role: 'Asociado',       spec: 'Societario · Penal Económico',                    email: 'azabaleta@pl-abogados.com',  photo: '/team/agustin.jpg',                photoFocal: 'center 20%' },
      // Sin photo cargada todavía → muestran sólo el placeholder de iniciales.
      // Cuando lleguen las fotos, restituir el campo `photo` con su ruta y
      // calibrar photoFocal/photoScale como el resto del equipo.
      { key: 'maria-paz-bardagi',     initials: 'MB', name: 'María Paz Bardagí',      role: 'Asociada',       spec: 'Aerocomercial · Administrativo Regulatorio' },
      { key: 'german',                initials: 'GC', name: 'Germán Carballo',        role: 'Asociado',  spec: 'Tributario',                                      email: 'Gcarballo@pl-abogados.com' },
    ],
    ctaText: '',
  },
  timeline: {
    label: 'Trayectoria',
    title: 'Trayectoria',
    items: [
      { year: '2001', title: 'Fundación',         desc: 'Se constituye Pantarotto Lértora & Asocs. en Buenos Aires.' },
      { year: '2010', title: 'Red internacional', desc: 'Apertura de corresponsalías en distintos países.' },
      { year: '2015', title: 'Área aerocomercial',desc: 'La práctica aerocomercial se consolida como pilar del estudio.' },
      { year: '2020', title: 'División <a href="/contable" class="link-contable">contable</a>', desc: 'Incorporación del <a href="/contable" class="link-contable">área contable</a> integrada al servicio jurídico.' },
      { year: '2026', title: '25 años',           desc: 'Veinticinco años asesorando y representando en clientes nacionales e internacionales.' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: 'Hablemos de',
    titleAccent: 'su caso',
    desc: 'Le ofrecemos una consulta inicial para evaluar su situación. Nuestro equipo le responderá dentro de las 24 horas hábiles.',
    formAreas: ['Tributario', 'Laboral', 'Societario', 'Empresarial y Comercial', 'Concursos y Quiebras', 'Aerocomercial', 'Penal y Penal Económico', 'Derecho de la Salud', 'Migratorio y Ciudadanías', 'Otro'],
  },
};
