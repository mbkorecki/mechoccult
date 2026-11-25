const ns='http://www.w3.org/2000/svg';
const grid=['M17 3V17H3','M3 3V17H17V3','M3 3V17H17','M3 3H17V17H3','M3 3H17V17H3Z','M17 3H3V17H17','M3 3H17V17','M3 17V3H17V17','M3 17V3H17'];
const wedges=['M3 3L10 10L17 3','M3 17L10 10L3 3','M3 17L10 10L17 17','M17 3L10 10L17 17'];
function glyph(c){const i=c.toUpperCase().charCodeAt(0)-65;if(i<0||i>25){let s=document.createElement('span');s.className='space';return s;}let svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox','0 0 20 20');svg.setAttribute('aria-hidden','true');let p=document.createElementNS(ns,'path');p.setAttribute('d',i<18?grid[i%9]:wedges[(i-18)%4]);p.setAttribute('fill','none');p.setAttribute('stroke','currentColor');p.setAttribute('stroke-width','1.4');svg.append(p);if((i>=9&&i<18)||i>=22){let dot=document.createElementNS(ns,'circle');let pos=i<18?[10,10]:[[10,5],[5,10],[10,15],[15,10]][(i-18)%4];dot.setAttribute('cx',pos[0]);dot.setAttribute('cy',pos[1]);dot.setAttribute('r','1.15');svg.append(dot);}return svg;}
for(const b of document.querySelectorAll('.cipher')){const g=document.createElement('span');g.className='glyphs';g.setAttribute('aria-hidden','true');for(const c of b.dataset.plain)g.append(glyph(c));const t=document.createElement('span');t.className='plain';t.textContent=b.dataset.plain;t.setAttribute('aria-hidden','true');b.append(g,t);}
for(const b of document.querySelectorAll('.discovery'))b.addEventListener('click',()=>{const p=document.getElementById(b.getAttribute('aria-controls'));p.hidden=!p.hidden;b.setAttribute('aria-expanded',String(!p.hidden));});
const orderUrl='';if(orderUrl){const a=document.getElementById('order');a.href=orderUrl;a.textContent='Obtain a copy';document.getElementById('order-note').textContent='Shipping and payment details at checkout.';}

// Load the circuit engine only when the desktop margins are visible.
const desktopMargins = matchMedia('(min-width: 901px)');
let circuitEngineLoaded = false;
function loadCircuitEngine(){
  if (!desktopMargins.matches || circuitEngineLoaded) return;
  circuitEngineLoaded = true;
  const script = document.createElement('script');
  script.src = 'circuits.js';
  document.head.appendChild(script);
}
loadCircuitEngine();
if(desktopMargins.addEventListener) desktopMargins.addEventListener('change',loadCircuitEngine);
else desktopMargins.addListener(loadCircuitEngine);
