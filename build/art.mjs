// Flat vector scenes drawn in code for each lead (240x110) and card (200x76).
const T = (x, y, s, txt, fill = '#fff', w = 800, anchor = 'start', fam = 'Segoe UI, Arial, sans-serif') =>
  `<text x="${x}" y="${y}" font-family="${fam}" font-size="${s}" font-weight="${w}" fill="${fill}" text-anchor="${anchor}">${txt}</text>`;
const tag = (x, y, txt, bg = '#111', fg = '#fff', s = 11) => {
  const w = txt.length * s * 0.62 + 10;
  return `<rect x="${x}" y="${y}" width="${w}" height="${s + 6}" rx="2" fill="${bg}"/>` + T(x + 5, y + s + 1.5, s, txt, fg);
};
const drone = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})"><path d="M-9 0 L9 0 M0 -3 L0 3" stroke="#222" stroke-width="2"/><circle cx="-9" cy="0" r="3" fill="none" stroke="#222" stroke-width="1.4"/><circle cx="9" cy="0" r="3" fill="none" stroke="#222" stroke-width="1.4"/><rect x="-3" y="-2" width="6" height="4" fill="#222"/></g>`;
const smoke = (x, y, s = 1, c = '#5d5d63') =>
  `<g transform="translate(${x},${y}) scale(${s})" fill="${c}" opacity=".85"><circle cx="0" cy="0" r="8"/><circle cx="8" cy="-8" r="10"/><circle cx="18" cy="-18" r="12"/><circle cx="30" cy="-24" r="11"/></g>`;
const flame = (x, y, s = 1) =>
  `<g transform="translate(${x},${y}) scale(${s})"><path d="M0 0 C-8 -6 -6 -16 0 -24 C2 -16 10 -14 8 -6 C7 -2 4 0 0 0Z" fill="#f08a1c"/><path d="M0 0 C-4 -4 -3 -10 0 -14 C2 -9 5 -8 4 -4 C3 -1 2 0 0 0Z" fill="#ffd34d"/></g>`;

export const LEAD_ART = {
  nvidia: () => `
    <rect width="240" height="110" fill="#0f1d14"/>
    <g stroke="#1f3a28" stroke-width="1">${[20, 40, 60, 80, 100].map(y => `<line x1="0" y1="${y}" x2="240" y2="${y}"/>`).join('')}</g>
    <g transform="translate(16,22)">
      <rect x="0" y="0" width="64" height="64" rx="5" fill="#2b2f33" stroke="#76b900" stroke-width="3"/>
      ${[8, 20, 32, 44, 56].map(p => `<rect x="${p - 2}" y="-8" width="4" height="8" fill="#9aa0a6"/><rect x="${p - 2}" y="64" width="4" height="8" fill="#9aa0a6"/><rect x="-8" y="${p - 2}" width="8" height="4" fill="#9aa0a6"/><rect x="64" y="${p - 2}" width="8" height="4" fill="#9aa0a6"/>`).join('')}
      <rect x="12" y="12" width="40" height="40" rx="3" fill="#76b900"/>
      ${T(32, 38, 15, 'CEO', '#0f1d14', 900, 'middle')}
    </g>
    <polyline points="100,92 120,86 138,90 152,84 166,88 180,80 196,44 214,30 232,22" fill="none" stroke="#76b900" stroke-width="4" stroke-linejoin="round"/>
    <polygon points="100,92 120,86 138,90 152,84 166,88 180,80 196,44 214,30 232,22 232,104 100,104" fill="#76b900" opacity=".18"/>
    ${tag(104, 8, 'CLOSE $165.05', '#76b900', '#0f1d14', 12)}
    ${tag(150, 52, '+$950bn', '#ffffff', '#0f1d14', 13)}`,

  libya: () => `
    <defs><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#28345a"/><stop offset="1" stop-color="#e58b4f"/></linearGradient></defs>
    <rect width="240" height="70" fill="url(#sky1)"/>
    <rect y="66" width="240" height="44" fill="#1f4e74"/>
    <path d="M150 66 L150 48 L240 48 L240 66Z" fill="#c9a36b"/>
    <g fill="#3a3a3a"><rect x="168" y="20" width="4" height="30"/><path d="M170 22 L200 22 L200 25 L170 25Z"/><rect x="198" y="25" width="2" height="12"/><rect x="214" y="28" width="4" height="22"/><path d="M216 30 L236 30 L236 33 L216 33Z"/></g>
    <g transform="translate(30,60) rotate(9)">
      <path d="M0 0 L104 0 L94 14 L8 14Z" fill="#4b5563"/>
      <rect x="30" y="-14" width="34" height="14" fill="#5b6473"/><rect x="40" y="-26" width="14" height="12" fill="#5b6473"/><rect x="46" y="-36" width="2" height="10" fill="#333"/>
      <rect x="72" y="-6" width="18" height="6" fill="#5b6473"/>
    </g>
    ${flame(78, 66, 1.1)}${smoke(80, 42, 1.1, '#3b3f46')}
    <g stroke="#e9f2f7" stroke-width="2" fill="none" opacity=".9"><path d="M10 96 l26 -10"/><path d="M8 84 l30 -8"/><path d="M60 102 l22 -16"/></g>
    <g fill="#111"><path d="M34 85 l8 -3 l2 3 l-8 3Z"/><path d="M38 75 l8 -2 l1 3 l-8 2Z"/><path d="M80 85 l7 -5 l2 2 l-7 5Z"/></g>
    ${tag(158, 52, 'BENGHAZI', '#111', '#fff', 11)}
    ${tag(6, 6, 'CORVETTE MERKURY', '#b23a2e', '#fff', 11)}`,

  eu: () => `
    <rect width="240" height="110" fill="#1c3f94"/>
    <g fill="#ffcc00">${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<circle cx="${(44 + 32 * Math.cos(a)).toFixed(1)}" cy="${(52 + 32 * Math.sin(a)).toFixed(1)}" r="4.2"/>`; }).join('')}</g>
    <g transform="translate(96,40)" fill="#e8ecf5"><path d="M0 16 L50 0 L100 16Z"/><rect x="4" y="18" width="92" height="5"/>${[12, 30, 50, 70, 88].map(x => `<rect x="${x - 4}" y="25" width="8" height="34"/>`).join('')}<rect x="0" y="59" width="100" height="7"/>${T(50, 14, 8, 'BANK', '#1c3f94', 900, 'middle')}</g>
    <g transform="translate(150,26) rotate(-8)"><rect x="-50" y="-13" width="100" height="26" fill="#1c3f94" stroke="#ff5a5f" stroke-width="3"/>${T(0, 7, 17, 'SWIFT ✕ 60', '#ff7276', 900, 'middle')}</g>
    <g transform="translate(214,90)"><circle r="13" fill="#fff"/><path d="M0 -6 L5.7 -1.9 L3.5 4.9 L-3.5 4.9 L-5.7 -1.9Z" fill="#222"/><circle r="15" fill="none" stroke="#e5484d" stroke-width="3"/><line x1="-10.6" y1="-10.6" x2="10.6" y2="10.6" stroke="#e5484d" stroke-width="3"/></g>
    ${tag(6, 6, '22ND PACKAGE', '#ffcc00', '#1c3f94', 11)}`,

  iran: () => `
    <rect width="240" height="110" fill="#3a1830"/>
    <path d="M150 110 L150 60 Q170 22 190 60 L190 110Z" fill="#5a2a48"/>
    <rect x="186" y="34" width="3" height="76" fill="#5a2a48"/><rect x="200" y="44" width="10" height="66" fill="#5a2a48"/>
    <circle cx="169" cy="38" r="3" fill="#e0b24a"/>
    <polygon points="70,0 120,0 150,110 40,110" fill="#ffe6a8" opacity=".13"/>
    <g transform="translate(70,30)">
      <path d="M8 18 C-2 30 -4 60 2 80 L30 80 C36 60 34 30 24 18Z" fill="#7b2d52"/>
      <path d="M2 80 L0 80 L0 80Z" fill="#000"/>
      <circle cx="16" cy="10" r="11" fill="#c7926d"/>
      <path d="M5 8 C4 -4 28 -6 27 8 C30 22 34 34 30 46 C24 34 18 22 16 12 C14 22 8 34 2 46 C-2 34 2 20 5 8Z" fill="#20150f"/>
    </g>
    <g stroke="#cfcfcf" stroke-width="2.5"><line x1="122" y1="40" x2="122" y2="108"/><line x1="122" y1="44" x2="104" y2="52"/></g>
    <rect x="98" y="47" width="10" height="7" rx="3" fill="#cfcfcf"/>
    ${tag(6, 6, 'QOM', '#111', '#fff', 11)}
    ${tag(150, 16, '74 LASHES', '#b23a2e', '#fff', 13)}`,
};

export const CARD_ART = {
  kospi: () => `
    <rect width="200" height="76" fill="#14161c"/>
    <g stroke="#2a2e38">${[16, 32, 48, 64].map(y => `<line x1="0" y1="${y}" x2="200" y2="${y}"/>`).join('')}</g>
    ${[[14, 18, 30], [28, 24, 36], [42, 20, 28], [56, 30, 44], [70, 36, 50], [84, 42, 60], [98, 50, 66]].map(([x, a, b], i) => `<line x1="${x + 4}" y1="${a - 4}" x2="${x + 4}" y2="${b + 4}" stroke="${i == 2 ? '#2fae5b' : '#e5484d'}"/><rect x="${x}" y="${a}" width="8" height="${b - a}" fill="${i == 2 ? '#2fae5b' : '#e5484d'}"/>`).join('')}
    ${tag(116, 6, 'KOSPI', '#e5484d', '#fff', 12)}
    ${T(116, 44, 22, '−3.3%', '#ff6b6f', 900)}`,

  belgium: () => `
    <rect width="200" height="76" fill="#d8e3ec"/>
    <rect x="8" y="8" width="104" height="60" rx="3" fill="#1b1f2a"/>
    ${[0, 1, 2, 3].map(i => `<rect x="14" y="${14 + i * 13}" width="38" height="9" fill="#2c3344"/>${T(16, 21.5 + i * 13, 8, ['BRU 07:10', 'BRU 08:45', 'CRL 09:20', 'BRU 11:05'][i], '#ffd34d', 700)}${T(56, 21.5 + i * 13, 8, 'CANCELLED', '#ff6b6f', 800)}`).join('')}
    <g transform="translate(150,40) rotate(-10)"><path d="M-36 0 L30 0 Q38 0 38 4 Q38 8 30 8 L-36 8Z" fill="#fff" stroke="#6b7a8a"/><path d="M-6 0 L-20 -18 L-12 -18 L8 0Z" fill="#9fb0c2"/><path d="M-6 8 L-20 26 L-12 26 L8 8Z" fill="#9fb0c2"/><path d="M-34 0 L-40 -12 L-32 -12 L-26 0Z" fill="#9fb0c2"/></g>
    <g stroke="#d92d2d" stroke-width="6" stroke-linecap="round"><line x1="128" y1="20" x2="172" y2="62"/><line x1="172" y1="20" x2="128" y2="62"/></g>`,

  eu: () => `
    <rect width="200" height="76" fill="#1c3f94"/>
    <g fill="#ffcc00">${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<circle cx="${(40 + 26 * Math.cos(a)).toFixed(1)}" cy="${(38 + 26 * Math.sin(a)).toFixed(1)}" r="3.4"/>`; }).join('')}</g>
    <g transform="translate(96,30) scale(.85)" fill="#e8ecf5"><path d="M0 14 L44 0 L88 14Z"/><rect x="4" y="16" width="80" height="4"/>${[10, 26, 42, 58, 74].map(x => `<rect x="${x - 3}" y="22" width="7" height="28"/>`).join('')}<rect x="0" y="50" width="88" height="6"/></g>
    <g transform="translate(140,24) rotate(-8)"><rect x="-42" y="-11" width="84" height="22" fill="none" stroke="#e5484d" stroke-width="3"/>${T(0, 6, 14, 'SWIFT ✕', '#ff7276', 900, 'middle')}</g>`,

  spain: () => `
    <rect width="200" height="76" fill="#f1e4c8"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<rect x="${12 + i * 0}" y="${10 + i * 6.4}" width="70" height="6.4" fill="${i % 2 ? '#d1242a' : '#f6c600'}"/>`).join('')}
    <rect x="11" y="8" width="2" height="62" fill="#6b4b2a"/>
    <g transform="translate(140,46) rotate(-30)"><rect x="-26" y="-7" width="40" height="14" rx="3" fill="#7a4a24"/><rect x="-12" y="-11" width="12" height="22" rx="2" fill="#8b5a2b"/><rect x="12" y="-3" width="30" height="6" fill="#7a4a24"/></g>
    <rect x="110" y="60" width="64" height="8" rx="2" fill="#5a3a1c"/>
    ${tag(96, 8, 'AMNESTY', '#1f6b3a', '#fff', 12)}`,

  nepal: () => `
    <rect width="200" height="76" fill="#cfe4f3"/>
    <polygon points="0,76 40,26 62,46 96,8 130,48 150,30 200,76" fill="#7b8ea3"/>
    <polygon points="86,20 96,8 106,20 100,18 96,22 92,18" fill="#fff"/><polygon points="34,34 40,26 46,34 40,32" fill="#fff"/>
    <g transform="translate(12,10)"><rect x="0" y="0" width="2" height="34" fill="#444"/><rect x="2" y="0" width="30" height="7" fill="#ff9933"/><rect x="2" y="7" width="30" height="7" fill="#fff"/><rect x="2" y="14" width="30" height="7" fill="#138808"/><circle cx="17" cy="10.5" r="2.6" fill="none" stroke="#000080" stroke-width="1"/></g>
    <g transform="translate(160,8)"><rect x="0" y="0" width="2" height="38" fill="#444"/><path d="M2 0 L26 13 L10 13 L26 28 L2 28Z" fill="#dc143c" stroke="#003893" stroke-width="2.2"/></g>
    ${tag(70, 52, '$1.6bn', '#111', '#fff', 14)}`,

  colombia: () => `
    <rect width="200" height="76" fill="#f3e9dd"/>
    <rect x="96" y="12" width="92" height="56" fill="#c9b9a2"/>${[0, 1, 2].map(r => [0, 1, 2, 3, 4].map(c => `<rect x="${104 + c * 17}" y="${18 + r * 15}" width="10" height="9" fill="#7f6f5a"/>`).join('')).join('')}
    ${smoke(48, 40, 1.2, '#4e4e55')}
    <circle cx="52" cy="54" r="16" fill="#f08a1c"/><circle cx="52" cy="54" r="9" fill="#ffd34d"/>
    <g transform="translate(16,58)"><rect x="0" y="0" width="34" height="10" rx="3" fill="#333"/><circle cx="7" cy="11" r="3.5" fill="#111"/><circle cx="27" cy="11" r="3.5" fill="#111"/></g>
    ${drone(160, 8, 0.9)}
    <rect x="0" y="68" width="200" height="8" fill="#8a8073"/>
    <g transform="translate(140,46)"><path d="M0 0 L14 -4 L28 0 L28 12 Q14 24 0 12Z" fill="#1f4f2f"/>${T(14, 11, 8, 'POLICÍA', '#fff', 800, 'middle')}</g>`,

  myanmar: () => `
    <rect width="200" height="76" fill="#e9edf2"/>
    <g transform="translate(10,10)"><rect width="56" height="34" fill="#012169"/><path d="M0 0 L56 34 M56 0 L0 34" stroke="#fff" stroke-width="7"/><path d="M0 0 L56 34 M56 0 L0 34" stroke="#c8102e" stroke-width="2.5"/><path d="M28 0 V34 M0 17 H56" stroke="#fff" stroke-width="10"/><path d="M28 0 V34 M0 17 H56" stroke="#c8102e" stroke-width="6"/></g>
    <g transform="translate(84,6)"><rect width="74" height="64" fill="#fff" stroke="#9aa5b1"/>${[14, 22, 30, 38].map(y => `<rect x="8" y="${y}" width="${y == 38 ? 40 : 58}" height="3" fill="#c3cad3"/>`).join('')}${T(37, 10, 7.5, 'FCDO', '#333', 800, 'middle')}
      <g transform="translate(40,52) rotate(-14)"><rect x="-34" y="-9" width="68" height="18" fill="none" stroke="#b23a2e" stroke-width="2.4"/>${T(0, 4, 9.5, 'GENOCIDE', '#b23a2e', 900, 'middle')}</g></g>
    <g transform="translate(166,10)"><rect width="28" height="6" fill="#fecb00"/><rect y="6" width="28" height="6" fill="#34b233"/><rect y="12" width="28" height="6" fill="#ea2839"/><polygon points="14,2 16,8 22,8 17,11.5 19,17 14,13.5 9,17 11,11.5 6,8 12,8" fill="#fff"/></g>
    ${tag(162, 50, '×5', '#b23a2e', '#fff', 12)}`,

  perm: () => `
    <rect width="200" height="76" fill="#1d2233"/>
    <g fill="#6b7280"><rect x="20" y="30" width="16" height="40"/><rect x="44" y="20" width="10" height="50"/><rect x="62" y="36" width="34" height="34" rx="16"/><rect x="104" y="26" width="8" height="44"/><rect x="120" y="40" width="40" height="30" rx="4"/><rect x="168" y="14" width="6" height="56"/></g>
    ${flame(49, 22, 1.2)}${flame(78, 38, 1.5)}${flame(140, 42, 1.3)}
    ${smoke(84, 16, 0.9, '#3d4252')}
    ${drone(30, 10, 0.8)}${drone(186, 8, 0.8)}${drone(120, 8, 0.7)}
    <rect y="70" width="200" height="6" fill="#0e111a"/>`,

  yemen: () => `
    <rect width="200" height="76" fill="#e9dcc6"/>
    <rect y="56" width="200" height="20" fill="#3e7ca6"/>
    <g stroke="#6b5b4a" stroke-width="2.2" fill="none"><path d="M46 56 L58 6 L70 56"/><path d="M50 40 L66 40 M53 26 L63 26 M56 14 L60 14"/></g>
    <g fill="#6b5b4a"><rect x="54" y="2" width="8" height="5"/></g>
    ${smoke(70, 22, 1.1, '#555a60')}${flame(64, 56, 1.1)}
    <g fill="#8a7a66"><rect x="120" y="36" width="40" height="20"/><rect x="164" y="20" width="4" height="36"/><path d="M166 22 L196 22 L196 25 L166 25Z"/></g>
    ${tag(104, 6, 'HODEIDAH', '#111', '#fff', 11)}`,

  cricket: () => `
    <rect width="200" height="76" fill="#6fae5a"/>
    <rect x="70" y="20" width="60" height="56" fill="#d9c79a"/>
    <g fill="#f5f1e6">${[90, 98, 106].map(x => `<rect x="${x}" y="30" width="3" height="26"/>`).join('')}<rect x="88" y="28" width="22" height="3"/></g>
    <circle cx="56" cy="54" r="5" fill="#b3261e"/><path d="M52 51 Q56 54 60 51" stroke="#fff" stroke-width=".8" fill="none"/>
    <rect x="132" y="6" width="62" height="30" rx="2" fill="#1b1f2a"/>
    ${T(163, 19, 9, 'DRAW', '#ffd34d', 900, 'middle')}${T(163, 31, 10, 'NZ 239-5', '#fff', 800, 'middle')}`,
};
