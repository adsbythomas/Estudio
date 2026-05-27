// Open Graph image generada como SVG.
// 1200×630 px (estándar Twitter / OG card).
// Branding del estudio sobre fondo navy, con isotipo y tagline.
//
// Para usarla, las páginas deben referenciar /og.svg en og:image (lo
// hace BaseLayout). Algunas plataformas no soportan SVG en OG (Slack/
// LinkedIn prefieren PNG/JPG) — si en algún momento queremos máxima
// compatibilidad, generamos un PNG con un satori-like, pero esto cubre
// Twitter, Facebook y WhatsApp.

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Fondo radial sutil que da profundidad -->
    <radialGradient id="bg" cx="22%" cy="28%" r="78%">
      <stop offset="0%"  stop-color="#3d4863"/>
      <stop offset="60%" stop-color="#2e3750"/>
      <stop offset="100%" stop-color="#242b42"/>
    </radialGradient>
    <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stop-color="#c19a4f" stop-opacity="0"/>
      <stop offset="50%"  stop-color="#c19a4f" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#c19a4f" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Fondo -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Marco fino interior -->
  <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#3d4863" stroke-width="1"/>

  <!-- Línea dorada superior -->
  <rect x="600" y="100" width="1" height="48" fill="#c19a4f" opacity="0.7"/>

  <!-- Kicker mono -->
  <text x="600" y="190" text-anchor="middle"
        font-family="ui-monospace, SF Mono, Menlo, monospace"
        font-size="20" letter-spacing="6"
        fill="#c19a4f" font-weight="700">
    PANTAROTTO LÉRTORA · BUENOS AIRES
  </text>

  <!-- Línea dorada horizontal -->
  <rect x="0" y="220" width="1200" height="1" fill="url(#line)"/>

  <!-- Título serif grande -->
  <text x="600" y="345" text-anchor="middle"
        font-family="Lora, Georgia, serif"
        font-style="italic"
        font-size="80" font-weight="500"
        fill="#e9e9f2" letter-spacing="-1">
    Derecho empresarial,
  </text>
  <text x="600" y="430" text-anchor="middle"
        font-family="Lora, Georgia, serif"
        font-style="italic"
        font-size="80" font-weight="500"
        fill="#7e93bb" letter-spacing="-1">
    25 años de oficio.
  </text>

  <!-- Tagline pequeño -->
  <text x="600" y="510" text-anchor="middle"
        font-family="Montserrat, system-ui, sans-serif"
        font-size="22" fill="#bfc1d1">
    Asesoramos, defendemos y representamos en todas las áreas.
  </text>

  <!-- Footer mono -->
  <text x="600" y="572" text-anchor="middle"
        font-family="ui-monospace, SF Mono, Menlo, monospace"
        font-size="16" letter-spacing="4"
        fill="#8b94a7" font-weight="600">
    PL-ABOGADOS.COM
  </text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
