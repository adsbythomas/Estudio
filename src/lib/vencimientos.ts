export type TaxCategory = 'todos' | 'monotributo' | 'ri' | 'sociedades';

export interface Vencimiento {
  id: string;
  date: string; // YYYY-MM-DD
  label: string;
  detail: string;
  categories: Exclude<TaxCategory, 'todos'>[];
}

export const CATEGORY_LABELS: Record<TaxCategory, string> = {
  todos:       'Todos',
  monotributo: 'Monotributo',
  ri:          'Resp. Inscripto',
  sociedades:  'Sociedades',
};

// Datos 2026 — estimados sobre calendario ARCA (dígito CUIT promedio).
// Actualizar según resoluciones ARCA de cada año.
// (Nota: ARCA reemplaza a AFIP desde 2024 — Decreto 953/2024.)
export const vencimientos2026: Vencimiento[] = [
  // ── ENERO ──────────────────────────────────────────────────────────────────
  { id: 'jan-mt',   date: '2026-01-20', label: 'Monotributo',            detail: 'Pago mensual unificado (categoría A–K)',                      categories: ['monotributo'] },
  { id: 'jan-iva',  date: '2026-01-20', label: 'IVA — período dic/25',   detail: 'Presentación DJ F.731 y pago. Varía por dígito CUIT 0-9',    categories: ['ri'] },
  { id: 'jan-cs',   date: '2026-01-13', label: 'Cargas sociales dic/25', detail: 'SIPA + obra social + ART (empleadores)',                       categories: ['ri', 'sociedades'] },

  // ── FEBRERO ────────────────────────────────────────────────────────────────
  { id: 'feb-mt',   date: '2026-02-20', label: 'Monotributo',            detail: 'Pago mensual unificado',                                       categories: ['monotributo'] },
  { id: 'feb-iva',  date: '2026-02-20', label: 'IVA — período ene/26',   detail: 'Presentación DJ F.731 y pago',                                categories: ['ri'] },
  { id: 'feb-cs',   date: '2026-02-12', label: 'Cargas sociales ene/26', detail: 'SIPA + obra social + ART',                                     categories: ['ri', 'sociedades'] },

  // ── MARZO ──────────────────────────────────────────────────────────────────
  { id: 'mar-mt',   date: '2026-03-20', label: 'Monotributo',            detail: 'Pago mensual unificado',                                       categories: ['monotributo'] },
  { id: 'mar-iva',  date: '2026-03-20', label: 'IVA — período feb/26',   detail: 'Presentación DJ F.731 y pago',                                categories: ['ri'] },
  { id: 'mar-cs',   date: '2026-03-12', label: 'Cargas sociales feb/26', detail: 'SIPA + obra social + ART',                                     categories: ['ri', 'sociedades'] },
  { id: 'mar-iibb', date: '2026-03-16', label: 'Ingresos Brutos CM',     detail: 'Convenio Multilateral — anticipo bimestral',                   categories: ['ri', 'sociedades'] },

  // ── ABRIL ──────────────────────────────────────────────────────────────────
  { id: 'apr-mt',   date: '2026-04-20', label: 'Monotributo',            detail: 'Pago mensual unificado',                                       categories: ['monotributo'] },
  { id: 'apr-iva',  date: '2026-04-21', label: 'IVA — período mar/26',   detail: 'Presentación DJ F.731 y pago',                                categories: ['ri'] },
  { id: 'apr-cs',   date: '2026-04-14', label: 'Cargas sociales mar/26', detail: 'SIPA + obra social + ART',                                     categories: ['ri', 'sociedades'] },
  { id: 'apr-iigg-soc', date: '2026-04-15', label: 'Ganancias — soc. cierre dic/25', detail: 'Cuarta cuota anticipo Ganancias (sociedades)',    categories: ['sociedades'] },

  // ── MAYO ───────────────────────────────────────────────────────────────────
  { id: 'may-mt',      date: '2026-05-20', label: 'Monotributo',              detail: 'Pago mensual unificado',                                   categories: ['monotributo'] },
  { id: 'may-iva',     date: '2026-05-20', label: 'IVA — período abr/26',     detail: 'Presentación DJ F.731 y pago',                            categories: ['ri'] },
  { id: 'may-cs',      date: '2026-05-12', label: 'Cargas sociales abr/26',   detail: 'SIPA + obra social + ART',                                 categories: ['ri', 'sociedades'] },
  { id: 'may-iigg-soc',date: '2026-05-12', label: 'Ganancias — soc. cierre dic/25', detail: 'DJ y pago. Cierre fiscal diciembre 2025 (4 meses)', categories: ['sociedades'] },
  { id: 'may-iibb',    date: '2026-05-18', label: 'Ingresos Brutos CM',       detail: 'Convenio Multilateral — anticipo bimestral',               categories: ['ri', 'sociedades'] },

  // ── JUNIO ──────────────────────────────────────────────────────────────────
  { id: 'jun-mt',      date: '2026-06-20', label: 'Monotributo',              detail: 'Pago mensual unificado',                                   categories: ['monotributo'] },
  { id: 'jun-mt-rec',  date: '2026-06-20', label: 'Recategorización Monotributo', detail: 'Primer recategorización semestral del año (ene–jun)', categories: ['monotributo'] },
  { id: 'jun-iva',     date: '2026-06-22', label: 'IVA — período may/26',     detail: 'Presentación DJ F.731 y pago',                            categories: ['ri'] },
  { id: 'jun-cs',      date: '2026-06-12', label: 'Cargas sociales may/26',   detail: 'SIPA + obra social + ART',                                 categories: ['ri', 'sociedades'] },
  { id: 'jun-iigg-ph', date: '2026-06-12', label: 'Ganancias — personas físicas', detail: 'DJ F.711 y pago. Varía por CUIT dígito 0-9 (12–18 jun)', categories: ['monotributo', 'ri'] },
  { id: 'jun-bp',      date: '2026-06-12', label: 'Bienes Personales',        detail: 'DJ F.762/763 y pago. Varía por CUIT dígito 0-9 (12–18 jun)', categories: ['monotributo', 'ri'] },

  // ── JULIO ──────────────────────────────────────────────────────────────────
  { id: 'jul-mt',      date: '2026-07-20', label: 'Monotributo',              detail: 'Pago mensual unificado',                                   categories: ['monotributo'] },
  { id: 'jul-iva',     date: '2026-07-20', label: 'IVA — período jun/26',     detail: 'Presentación DJ F.731 y pago',                            categories: ['ri'] },
  { id: 'jul-cs',      date: '2026-07-13', label: 'Cargas sociales jun/26',   detail: 'SIPA + obra social + ART',                                 categories: ['ri', 'sociedades'] },
  { id: 'jul-iibb',    date: '2026-07-16', label: 'Ingresos Brutos CM',       detail: 'Convenio Multilateral — anticipo bimestral',               categories: ['ri', 'sociedades'] },
  { id: 'jul-iigg-soc2', date: '2026-07-14', label: 'Ganancias — soc. cierre mar/26', detail: 'DJ y pago. Cierre fiscal marzo 2026',             categories: ['sociedades'] },

  // ── AGOSTO ─────────────────────────────────────────────────────────────────
  { id: 'aug-mt',   date: '2026-08-20', label: 'Monotributo',              detail: 'Pago mensual unificado',                                     categories: ['monotributo'] },
  { id: 'aug-iva',  date: '2026-08-20', label: 'IVA — período jul/26',    detail: 'Presentación DJ F.731 y pago',                               categories: ['ri'] },
  { id: 'aug-cs',   date: '2026-08-12', label: 'Cargas sociales jul/26',  detail: 'SIPA + obra social + ART',                                    categories: ['ri', 'sociedades'] },

  // ── SEPTIEMBRE ─────────────────────────────────────────────────────────────
  { id: 'sep-mt',   date: '2026-09-21', label: 'Monotributo',              detail: 'Pago mensual unificado',                                     categories: ['monotributo'] },
  { id: 'sep-iva',  date: '2026-09-21', label: 'IVA — período ago/26',    detail: 'Presentación DJ F.731 y pago',                               categories: ['ri'] },
  { id: 'sep-cs',   date: '2026-09-14', label: 'Cargas sociales ago/26',  detail: 'SIPA + obra social + ART',                                    categories: ['ri', 'sociedades'] },
  { id: 'sep-iibb', date: '2026-09-16', label: 'Ingresos Brutos CM',      detail: 'Convenio Multilateral — anticipo bimestral',                  categories: ['ri', 'sociedades'] },

  // ── OCTUBRE ────────────────────────────────────────────────────────────────
  { id: 'oct-mt',   date: '2026-10-20', label: 'Monotributo',              detail: 'Pago mensual unificado',                                     categories: ['monotributo'] },
  { id: 'oct-iva',  date: '2026-10-20', label: 'IVA — período sep/26',    detail: 'Presentación DJ F.731 y pago',                               categories: ['ri'] },
  { id: 'oct-cs',   date: '2026-10-13', label: 'Cargas sociales sep/26',  detail: 'SIPA + obra social + ART',                                    categories: ['ri', 'sociedades'] },

  // ── NOVIEMBRE ──────────────────────────────────────────────────────────────
  { id: 'nov-mt',      date: '2026-11-20', label: 'Monotributo',              detail: 'Pago mensual unificado',                                   categories: ['monotributo'] },
  { id: 'nov-mt-rec',  date: '2026-11-20', label: 'Recategorización Monotributo', detail: 'Segunda recategorización semestral (jul–dic)',        categories: ['monotributo'] },
  { id: 'nov-iva',     date: '2026-11-20', label: 'IVA — período oct/26',    detail: 'Presentación DJ F.731 y pago',                            categories: ['ri'] },
  { id: 'nov-cs',      date: '2026-11-12', label: 'Cargas sociales oct/26',  detail: 'SIPA + obra social + ART',                                 categories: ['ri', 'sociedades'] },
  { id: 'nov-iibb',    date: '2026-11-16', label: 'Ingresos Brutos CM',      detail: 'Convenio Multilateral — anticipo bimestral',               categories: ['ri', 'sociedades'] },

  // ── DICIEMBRE ──────────────────────────────────────────────────────────────
  { id: 'dec-mt',   date: '2026-12-21', label: 'Monotributo',              detail: 'Pago mensual unificado',                                     categories: ['monotributo'] },
  { id: 'dec-iva',  date: '2026-12-21', label: 'IVA — período nov/26',    detail: 'Presentación DJ F.731 y pago',                               categories: ['ri'] },
  { id: 'dec-cs',   date: '2026-12-14', label: 'Cargas sociales nov/26',  detail: 'SIPA + obra social + ART',                                    categories: ['ri', 'sociedades'] },
];

export const DISCLAIMER =
  'Fechas estimadas sobre el calendario ARCA habitual. Verificar siempre en arca.gob.ar ante posibles corrimientos por feriados o resoluciones.';
