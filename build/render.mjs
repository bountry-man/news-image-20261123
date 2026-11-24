// Builds page.html (a 1024x1024 front page for Monday 23 November 2026) from stories.mjs + art.mjs.
// Usage: node render.mjs [out.html]
import { writeFileSync } from 'node:fs';
import { DAY, LEADS, CARDS, BRIEFS, TIMELINE, DATECHECK } from './stories.mjs';
import { LEAD_ART, CARD_ART } from './art.mjs';

const out = process.argv[2] || 'page.html';
const REG = { Europe: '#2f5d9e', 'Middle East': '#b23a2e', Africa: '#2f8a4c', 'Central Asia': '#8a6d1f', 'South Asia': '#c96f0e', 'East Asia': '#c2410c', 'Southeast Asia': '#a16207', Oceania: '#14858a', 'North America': '#6b4aa0', 'Latin America': '#9d3a8a', World: '#4b5563' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const drawn = [...LEADS, ...CARDS];
drawn.forEach((s, i) => (s.n = i + 1));
const all = [...LEADS, ...CARDS, ...BRIEFS];
const nStories = all.length;
const regionCount = {};
for (const s of all) regionCount[s.region] = (regionCount[s.region] || 0) + 1;
const regions = Object.keys(REG).filter(r => regionCount[r]);
const nRegions = regions.filter(r => r !== 'World').length;
const fields = new Set([...drawn.map(s => s.field), 'Security', 'Energy', 'Economy', 'Environment', 'Tech', 'Disaster', 'Labour', 'Diplomacy', 'Law', 'Sport']);
const nFields = fields.size;

const BADGE = { OFFICIAL: '#1f6b3a', REPORTED: '#2f5d9e', CLAIM: '#b5651d', RESULT: '#1f6b3a' };
const badge = b => `<span class="badge" style="background:${BADGE[b]}">${b}</span>`;
const kicker = s => `<div class="kick"><span style="color:${REG[s.region]}">${s.region.toUpperCase()}</span> · ${s.field.toUpperCase()}</div>`;

// --- world map (equirectangular, lon -170..180, lat 76..-48) with rough hand-drawn land shapes
const MW = 212, MH = 100, L0 = -170, L1 = 180, A0 = 76, A1 = -48;
const px = (lon, lat) => [((lon - L0) / (L1 - L0)) * MW, ((A0 - lat) / (A0 - A1)) * MH];
const LAND = [
  [[-168, 65], [-140, 70], [-95, 72], [-80, 63], [-62, 56], [-55, 48], [-70, 43], [-76, 35], [-81, 25], [-97, 26], [-97, 18], [-87, 15], [-79, 8], [-83, 9], [-105, 20], [-117, 32], [-124, 42], [-125, 50], [-140, 59], [-165, 55]],
  [[-55, 60], [-44, 60], [-22, 70], [-20, 76], [-62, 76], [-72, 76]],
  [[-79, 8], [-60, 10], [-50, 0], [-35, -6], [-40, -22], [-48, -28], [-58, -38], [-65, -48], [-74, -48], [-72, -30], [-70, -18], [-81, -5], [-78, 2]],
  [[-10, 36], [-9, 43], [-2, 44], [-5, 48], [2, 51], [8, 54], [10, 58], [5, 62], [15, 69], [28, 71], [40, 67], [60, 70], [80, 73], [110, 76], [140, 73], [180, 70], [180, 66], [170, 64], [160, 60], [143, 59], [140, 50], [130, 43], [127, 40], [121, 40], [122, 30], [117, 24], [107, 21], [109, 13], [106, 10], [104, 1], [100, 3], [98, 15], [92, 22], [88, 22], [80, 15], [77, 8], [72, 20], [67, 24], [57, 23], [52, 17], [44, 13], [35, 30], [36, 36], [28, 41], [22, 37], [15, 40], [12, 44], [3, 42]],
  [[-17, 15], [-17, 21], [-10, 30], [-5, 36], [10, 37], [20, 32], [32, 31], [34, 28], [43, 12], [51, 12], [40, -2], [40, -15], [33, -26], [20, -35], [12, -17], [13, -5], [9, 4], [-8, 5], [-15, 10]],
  [[114, -22], [122, -18], [131, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [140, -38], [132, -32], [115, -34]],
  [[130, 31], [135, 34], [140, 36], [142, 40], [141, 45], [139, 38], [132, 34]],
  [[-6, 50], [1, 51], [0, 53], [-3, 58], [-6, 57], [-3, 54]],
  [[95, 5], [106, -6], [115, -8], [120, -9], [110, -3], [103, 1]], [[109, 1], [117, 7], [119, 1], [116, -4], [110, -3]],
  [[172, -34], [178, -38], [174, -41], [167, -46], [172, -41]], [[44, -16], [50, -15], [47, -25], [44, -22]],
];
const pinNudge = { belgium: [-5, -4], eu: [5, 2], myanmar: [-6, 3], spain: [0, 2] };
const mapSvg = `<svg width="${MW}" height="${MH}" viewBox="0 0 ${MW} ${MH}">
  <rect width="${MW}" height="${MH}" fill="#dfe8ee"/>
  ${LAND.map(p => `<polygon points="${p.map(([a, b]) => px(a, b).map(v => v.toFixed(1)).join(',')).join(' ')}" fill="#c8bfae"/>`).join('')}
  ${drawn.map(s => { let [x, y] = px(s.lon, s.lat); const d = pinNudge[s.id] || [0, 0]; x += d[0]; y += d[1]; return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.8" fill="${REG[s.region]}" stroke="#fff" stroke-width="1.2"/><text x="${x.toFixed(1)}" y="${(y + 3.2).toFixed(1)}" font-size="8.5" font-weight="800" fill="#fff" text-anchor="middle" font-family="Segoe UI,Arial">${s.n}</text>`; }).join('')}
</svg>`;

const lead = s => `<div class="lead">
  <div class="art">${LEAD_ART[s.id] ? `<svg viewBox="0 0 240 110" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${LEAD_ART[s.id]()}</svg>` : `<svg viewBox="0 0 200 76" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${CARD_ART[s.id]()}</svg>`}
    <span class="num" style="background:${REG[s.region]}">${s.n}</span>${badge(s.badge)}</div>
  <div class="body"><div class="place">${esc(s.place)}</div><h2>${esc(s.head)}</h2><p>${esc(s.dek)}</p><div class="src">${esc(s.src)}</div></div></div>`;

const card = s => `<div class="card">
  <div class="art">${CARD_ART[s.id] ? `<svg viewBox="0 0 200 76" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${CARD_ART[s.id]()}</svg>` : `<svg viewBox="0 10 240 88" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">${LEAD_ART[s.id]()}</svg>`}
    <span class="num" style="background:${REG[s.region]}">${s.n}</span>${badge(s.badge)}</div>
  <div class="body"><div class="place" style="color:${REG[s.region]}">${esc(s.place)} <span class="fld">· ${s.field.toUpperCase()}</span></div><h3>${esc(s.head)}</h3><p>${esc(s.dek)}</p><div class="src">${esc(s.src)}</div></div></div>`;

const brief = (b, i) => `<div class="brief" style="border-color:${REG[b.region]}"><b>${esc(b.where)}</b> ${esc(b.text)} <span class="bsrc">${esc(b.src)}</span></div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1024px;height:1024px;overflow:hidden;background:#f6f0e4;color:#16181d;font-family:"Segoe UI",Arial,sans-serif}
.page{padding:7px 12px 0}
.top{display:flex;justify-content:space-between;font-size:12.5px;font-weight:800;letter-spacing:.6px;border-bottom:2px solid #16181d;padding-bottom:3px}
.top .l{color:#b23a2e}
h1{font-family:Georgia,"Times New Roman",serif;font-size:72px;line-height:74px;font-weight:700;letter-spacing:-1.5px;text-align:center;margin-top:1px;white-space:nowrap}
.sub{font-family:Georgia,serif;font-style:italic;color:#b23a2e;font-size:19.5px;text-align:center;line-height:24px;margin-top:-1px}
.strip{display:flex;gap:6px;align-items:center;margin-top:5px;font-size:11.5px;white-space:nowrap}
.chip{color:#fff;font-weight:800;padding:2px 6px;border-radius:3px;font-size:11px}
.utc{display:flex;gap:7px;align-items:center;background:#16181d;color:#fff;border-radius:3px;padding:3px 8px;margin-top:5px;font-size:12.5px;white-space:nowrap;overflow:hidden}
.utc b{color:#ffcc4d;margin-right:3px}.utc .u{background:#b23a2e;font-weight:800;padding:0 5px;border-radius:2px}
.row1{display:grid;grid-template-columns:1fr 1fr 1fr 214px;gap:8px;margin-top:7px;height:228px}
.lead,.card{background:#fffdf8;border:1px solid #cfc6b4;border-radius:4px;overflow:hidden;display:flex;flex-direction:column}
.lead .art{height:96px;position:relative}.card .art{height:58px;position:relative}
.art svg{display:block}
.num{position:absolute;left:5px;bottom:5px;color:#fff;font-weight:900;font-size:12px;width:19px;height:19px;border-radius:50%;text-align:center;line-height:19px;border:1.5px solid #fff}
.badge{position:absolute;right:5px;bottom:5px;color:#fff;font-weight:800;font-size:9.5px;letter-spacing:.4px;padding:1px 5px;border-radius:2px;border:1px solid #fff}
.body{padding:4px 7px 5px;display:flex;flex-direction:column;flex:1}
.place{font-size:10.5px;font-weight:800;letter-spacing:.5px;color:#7a2f25}
.fld{color:#555b66}
h2{font-family:Georgia,serif;font-size:21px;line-height:23px;font-weight:700;margin-top:1px}
.lead p{font-size:12.5px;line-height:15.5px;color:#2d3038;margin-top:3px}
h3{font-family:Georgia,serif;font-size:16.5px;line-height:18.5px;font-weight:700;margin-top:1px}
.card p{font-size:12px;line-height:14.5px;color:#2d3038;margin-top:2px}
.src{margin-top:auto;font-size:9.5px;color:#6b7078;padding-top:2px}
.nums{background:#16263f;color:#fff;border-radius:4px;padding:6px 9px}
.nums h4{font-size:12px;letter-spacing:.8px;color:#ffcc4d;border-bottom:1px solid #3a4d6e;padding-bottom:3px;margin-bottom:2px}
.nums .n{display:flex;flex-direction:column;margin-top:3px}
.nums .n b{font-size:19px;line-height:19px;color:#8fd0ff;font-family:Georgia,serif}
.nums .n span{font-size:10px;line-height:11px;color:#dfe6f0}
.cards{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:8px}
.card{height:166px}
.bottom{display:grid;grid-template-columns:1fr 252px;gap:10px;margin-top:8px}
.also h4,.where h4{font-size:12.5px;font-weight:900;letter-spacing:.6px;border-bottom:2px solid #16181d;margin-bottom:3px}
.also{margin-top:8px}.bl{column-count:4;column-gap:10px}.where{background:#fffdf8;border:1px solid #cfc6b4;border-radius:4px;padding:5px 6px}.pinnote{font-size:10px;color:#6b7078;margin-top:2px}.legend b{font-weight:900}
.brief{break-inside:avoid;border-left:3.5px solid;padding:0 0 0 5px;margin-bottom:4px;font-size:12.5px;line-height:14.6px}
.brief b{font-weight:800}.bsrc{color:#6b7078;font-size:10px;white-space:nowrap}
.where svg{display:block;border:1px solid #cfc6b4}
.legend{display:flex;flex-wrap:wrap;gap:3px 8px;font-size:11px;margin-top:4px}
.legend i{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:2px;vertical-align:-1px}
.check{margin-top:6px;border:2px solid #b23a2e;border-radius:4px;padding:4px 8px;font-size:11px;line-height:14px;background:#fff8f3}
.check .h{color:#fff;background:#b23a2e;font-weight:900;padding:0 5px;border-radius:2px;margin-right:4px}
.check .x{color:#7a2f25;font-weight:700}
.foot{font-size:9.5px;color:#6b7078;text-align:center;margin-top:3px}
</style></head><body><div class="page">
<div class="top"><span class="l">THE WORLD IN ONE DAY</span><span>${nStories} STORIES · ${nRegions} REGIONS · ${nFields} FIELDS · ALL FROM THIS MONDAY</span></div>
<h1>${DAY.weekday} ${DAY.date}</h1>
<div class="sub">${esc(DAY.subtitle)}</div>
<div class="utc"><span class="u">UTC</span>${TIMELINE.map(([t, e]) => `<span><b>${t}</b>${esc(e)}</span>`).join('<span>·</span>')}</div>
<div class="row1">${LEADS.map(lead).join('')}
  <div class="where"><h4>WHERE IT HAPPENED</h4>${mapSvg}<div class="pinnote">Pins = numbered stories</div>
    <div class="legend">${regions.map(r => `<span><i style="background:${REG[r]}"></i>${r} <b>${regionCount[r]}</b></span>`).join('')}</div></div>
</div>
<div class="cards">${CARDS.map(card).join('')}</div>
<div class="also"><h4>ALSO ON MONDAY 23 NOVEMBER · ${BRIEFS.length} MORE STORIES</h4><div class="bl">${BRIEFS.map(brief).join('')}</div></div>
<div class="check"><span class="h">DATE CHECK ✓</span>${esc(DATECHECK.intro)} <span class="x">Left out, other days:</span> ${DATECHECK.left.map(([a, d]) => `${esc(a)} <b>(${d})</b>`).join(' · ')}.</div>
<div class="foot">OFFICIAL = announced by the body itself · REPORTED = carried by wires/outlets · CLAIM = one side's account · RESULT = final score · All pictures are drawings, not photographs</div>
</div>
<script>
// QA: report any element whose content overflows its box
const bad=[];document.querySelectorAll('h1,h2,h3,p,.brief,.card,.lead,.utc,.check,.page,.bl').forEach(e=>{if(e.scrollHeight>e.clientHeight+1||e.scrollWidth>e.clientWidth+1)bad.push(e.className||e.tagName)});
const pg=document.querySelector('.page');document.title='H='+pg.scrollHeight+' bad='+bad.join(',');
</script>
</body></html>`;
writeFileSync(out, html);
console.log('wrote', out, 'stories', nStories, 'regions', nRegions, 'fields', nFields);
