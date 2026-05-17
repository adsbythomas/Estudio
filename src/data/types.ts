// Tipos compartidos entre los micrositios de servicios (societario, ciudadanía…).
// Cada servicio expone un set de "trámites" con la misma forma: hero, "cuándo",
// documentación, comparativo (opcional) y campos extra para el formulario.

export interface DocItem {
  name: string;
  desc?: string;
  optional?: boolean;
}

export interface ComparativoRow {
  aspecto: string;
  [k: string]: string;
}

export interface ComparativoHeader {
  label: string;
  key: string;
}

export interface Comparativo {
  title: string;
  note?: string;
  headers: ComparativoHeader[];
  rows: ComparativoRow[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  fullWidth?: boolean;
}

export interface Tramite {
  key: string;
  num: string;
  name: string;
  shortDesc: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    plazo?: string;
  };
  cuando: string[];
  documentos: DocItem[];
  comparativo?: Comparativo;
  extraFields?: FormField[];
}

export interface MicrositioLanding {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  cifras: {
    label: string;
    title: string;
    items: { num: string; suffix: string; label: string }[];
  };
  practica: {
    label: string;
    title: string;
    sub: string;
  };
}
