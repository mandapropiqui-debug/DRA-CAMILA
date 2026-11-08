const IG='https://www.instagram.com/camilaalmeida.dermato/';
const PROC={
1:{t:'Testa e glabela',s:'Toxina botulínica',d:'A toxina botulínica suaviza as linhas de expressão da testa e entre as sobrancelhas, mantendo a naturalidade do rosto. A dose e os pontos são definidos em consulta, sem excesso.',c:['Aplicação rápida','Resultado natural','Sem tempo de parada'],p:'R$ 1.200',vids:[{i:'v23.jpg',t:'Botox não é solução para tudo'}],pr:['Protetor solar FPS 50+','Antioxidante para o dia']},
2:{t:'Região dos olhos',s:'Olheiras e linhas finas',d:'Avaliamos a causa da olheira (pigmento, vasos ou sombra do contorno) antes de indicar o tratamento. Associa procedimento e cuidados em casa para a pele fina da região.',c:['Avaliação da causa','Pele fina e sensível','Cuidados em casa'],p:'R$ 450',vids:[],pr:['Creme para a área dos olhos','Vitamina C','Protetor solar']},
3:{t:'Manchas',s:'Melasma e pigmentação',d:'Melasma pede plano de longo prazo: controle da causa, fotoproteção rigorosa e tratamento adequado ao seu tipo de pele. Primeiro o acompanhamento, depois a expectativa realista.',c:['Plano individual','Fotoproteção','Acompanhamento'],p:'R$ 380',vids:[],pr:['Protetor solar com cor','Ácido azelaico','Clareador indicado pela Dra.']},
4:{t:'Poros e textura',s:'Poros abertos, oleosidade',d:'Poros abertos e textura irregular têm tratamento: da rotina de limpeza e ativos ao uso de tecnologias, conforme a sua pele. Sem promessas de hype.',c:['Controle de oleosidade','Textura mais uniforme','Rotina simples'],p:'R$ 420',vids:[{i:'v27.jpg',t:'Poros abertos'}],pr:['Sabonete de limpeza suave','Niacinamida','Hidratante oil free']},
5:{t:'Contorno e firmeza',s:'Linear Z',d:'O Linear Z usa ultrassom micro e macrofocado coreano para melhorar o contorno e a firmeza da pele. A indicação é individual e feita depois de avaliação.',c:['Ultrassom coreano','Sem cirurgia','Estímulo de colágeno'],p:'R$ 2.800',vids:[{i:'v21.jpg',t:'Linear Z'},{i:'v28.jpg',t:'Lançamento'}],pr:['Hidratante firmador','Protetor solar','Antioxidante']},
6:{t:'Cicatrizes de acne',s:'Laser de CO₂',d:'O laser de CO₂ melhora a textura de cicatrizes de acne ao renovar a pele em camadas. O número de sessões e o pós-procedimento são combinados na avaliação.',c:['Laser de CO₂','Renovação da pele','Cuidados pós'],p:'R$ 1.600',vids:[{i:'v18.jpg',t:'Laser de CO₂'}],pr:['Regenerador pós-procedimento','Protetor mineral','Limpeza suave']},
7:{t:'Região perioral',s:'Dermatite perioral',d:'A dermatite perioral causa pequenas lesões ao redor da boca e tem tratamento clínico. A Dra. também já passou por isso e explica como controlar.',c:['Tratamento clínico','Rotina simplificada','Acompanhamento'],p:'R$ 350',vids:[],pr:['Limpeza suave','Creme de barreira','Evitar excesso de produtos']},
8:{t:'Cabelo',s:'Couro cabeludo e queda',d:'Queda, oleosidade e sensibilidade do couro cabeludo são avaliadas com exame clínico. O tratamento une cuidados, produtos adequados e acompanhamento.',c:['Exame do couro cabeludo','Queda de cabelo','Rotina capilar'],p:'R$ 300',vids:[],pr:['Shampoo adequado ao couro cabeludo','Tônico capilar']}};
const PINS=[{n:1,x:204,y:128},{n:2,x:236,y:250},{n:3,x:150,y:284},{n:4,x:258,y:284},{n:5,x:251,y:350},{n:6,x:149,y:350},{n:7,x:204,y:358},{n:8,x:92,y:140}];
const ZONES={
1:['<path d="M152 172 C148 128 172 104 204 100 C236 104 260 128 256 172"/>','<path d="M168 126 q36 -8 72 0" fill="none"/>','<path d="M162 144 q42 -8 84 0" fill="none"/>','<path d="M164 160 q40 -7 80 0" fill="none"/>','<path d="M200 184 v12 M208 184 v12" fill="none"/>'],
2:['<ellipse cx="251" cy="232" rx="32" ry="11"/>','<ellipse cx="157" cy="232" rx="32" ry="11"/>'],
3:['<ellipse cx="144" cy="272" rx="26" ry="19" transform="rotate(-12 144 272)"/>','<ellipse cx="266" cy="272" rx="24" ry="18" transform="rotate(12 266 272)"/>'],
4:['<ellipse cx="204" cy="262" rx="20" ry="30"/>','<circle cx="262" cy="272" r="2"/><circle cx="272" cy="282" r="2"/><circle cx="256" cy="288" r="2"/><circle cx="268" cy="298" r="2"/><circle cx="250" cy="274" r="2"/><circle cx="278" cy="268" r="2"/><circle cx="148" cy="290" r="2"/><circle cx="136" cy="280" r="2"/><circle cx="152" cy="300" r="2"/>'],
5:['<path d="M130 296 C138 328 156 352 182 366 C194 371 214 371 226 366 C252 352 270 328 278 296" fill="none"/>','<path d="M150 344 L138 316 M258 344 L270 316 M138 316 l-1 9 M138 316 l8 -4 M270 316 l1 9 M270 316 l-8 -4" fill="none"/>'],
6:['<ellipse cx="152" cy="324" rx="22" ry="16" transform="rotate(20 152 324)"/>','<ellipse cx="256" cy="324" rx="22" ry="16" transform="rotate(-20 256 324)"/>'],
7:['<ellipse cx="204" cy="338" rx="44" ry="34"/>'],
8:['<path d="M204 54 V98" fill="none"/>','<path d="M130 122 C140 82 170 58 204 56 C238 58 268 82 278 122" fill="none"/>','<path d="M96 236 C88 196 92 160 108 124" fill="none"/><path d="M312 236 C320 196 316 160 300 124" fill="none"/>']};
function zoneSVG(n){const z=ZONES[n].join('');
 return `<mask id="zm${n}" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="560"><g fill="#fff" stroke="#fff" stroke-width="12" stroke-linecap="round">${z.replace(/<(path|ellipse|circle)/g,'<$1 class="mk" pathLength="1"')}</g></mask><g mask="url(#zm${n})"><g fill="#f1d6c80a" stroke="#e8c4b0" stroke-width="1.9" stroke-dasharray="0.1 5.2" stroke-linecap="round">${z}</g></g>`}
let active=0;
function faceSVG(){const a=active;let p='';
 PINS.forEach(k=>{const on=a===k.n,op=(a&&!on)?.3:1;
  p+=`<g data-n="${k.n}" style="cursor:pointer" opacity="${op}"><circle cx="${k.x}" cy="${k.y}" r="26" fill="transparent"/>${on?`<circle cx="${k.x}" cy="${k.y}" r="27" fill="#f1d6c8" opacity=".16"/><circle cx="${k.x}" cy="${k.y}" r="20" fill="none" stroke="#f1d6c8" stroke-width="1.2"/>`:`<circle class="pg" data-pg="${k.n}" cx="${k.x}" cy="${k.y}" r="18" fill="#f1d6c8" opacity=".14"/>`}<circle cx="${k.x}" cy="${k.y}" r="11.5" fill="${on?'#f1d6c8':'#2a1b11'}" stroke="#f1d6c8" stroke-width="1.5"/><text x="${k.x}" y="${k.y+4.2}" text-anchor="middle" font-family="DM Sans" font-weight="600" font-size="12" fill="${on?'#2a1b11':'#f1d6c8'}">${k.n}</text></g>`});
 return `<svg viewBox="0 0 400 560" width="100%" height="100%" fill="none" stroke-linecap="round" stroke-linejoin="round"><image href="face.png" x="0" y="4" width="400" height="553" opacity="${a?.78:1}"/>${a?zoneSVG(a):''}${p}</svg>`}
const it=k=>`<div class="it glass" data-n="${k}"><em>${k}</em><div>${PROC[k].t}<small>${PROC[k].s}</small></div></div>`;
document.getElementById('sl').innerHTML=[1,2,3,4].map(it).join('');
document.getElementById('sr').innerHTML=[5,6,7,8].map(it).join('');
function render(){document.getElementById('face').innerHTML=faceSVG();document.querySelectorAll('#rosto .it').forEach(e=>e.classList.toggle('on',+e.dataset.n===active))}
render();
const sheet=document.getElementById('sheet'),ov=document.getElementById('ov'),shc=document.getElementById('shc');
function openSheet(n){active=n;render();const d=PROC[n];
 const vids=d.vids.length?d.vids.map(v=>`<a class="vid" href="${IG}" target="_blank"><img src="${v.i}" alt=""><span class="pl" style="margin-top:0"></span><span>${v.t}</span></a>`).join(''):'';
 const ph=`<a class="vid" href="${IG}" target="_blank"><span class="pl" style="margin-top:0"></span><span>Vídeo da Dra.<br>em breve</span></a>`;
 shc.innerHTML=`<div class="sh-top"><div class="sh-n">${n}</div><div><h3>${d.t}</h3><small>${d.s}</small></div></div><p>${d.d}</p><div class="chips">${d.c.map(c=>`<span>${c}</span>`).join('')}</div><div class="price"><div><small>A partir de</small><b>${d.p}</b></div><i>ILUSTRATIVO</i></div><div class="sh-h">Vídeos da Dra.</div><div class="vrow">${vids}${ph}${d.vids.length?'':ph}</div><div class="sh-h">Produtos que a Dra. indica para esta região</div><div class="prow">${d.pr.map(x=>`<span>${x}</span>`).join('')}</div><div class="note">Categorias de exemplo. As marcas são definidas pela Dra.</div><a class="wa" target="_blank" href="https://wa.me/5586988021233?text=${encodeURIComponent('Olá, Dra. Camila! Tenho interesse em: '+d.t+' ('+d.s+').')}">Agendar avaliação desta região</a>`;
 sheet.scrollTop=0;setTimeout(()=>{sheet.classList.add('on');ov.classList.add('on')},650)}
function closeSheet(){sheet.classList.remove('on');ov.classList.remove('on')}
document.getElementById('sx').onclick=closeSheet;ov.onclick=closeSheet;
document.getElementById('rosto').addEventListener('click',e=>{const t=e.target.closest('[data-n]');if(t)openSheet(+t.dataset.n)});

/* piscadas: 1,2,7,6 e depois aleatório */
(function(){const seq=[1,2,7,6];let i=0;setInterval(()=>{if(active)return;const n=i<seq.length?seq[i]:1+Math.floor(Math.random()*8);i++;
 const li=document.querySelector('#rosto .it[data-n="'+n+'"] em'),pg=document.querySelector('.pg[data-pg="'+n+'"]');
 [li].forEach(e=>{if(e){e.classList.remove('blinkit');void e.offsetWidth;e.classList.add('blinkit')}});
 if(pg){pg.style.transition='opacity .4s';pg.setAttribute('opacity','.7');setTimeout(()=>pg.setAttribute('opacity','.14'),500)}},1300)})();

/* seção ativa + fala do mascote */
const secs=[...document.querySelectorAll('section')],links=[...document.querySelectorAll('#nav a')];
let cur='';function setSec(id,say){if(cur===id)return;cur=id;links.forEach(a=>a.classList.toggle('on',a.dataset.s===id));
 const a=document.querySelector('#nav a.on');if(a){const n=document.getElementById('nav');n.scrollTo({left:a.offsetLeft-n.clientWidth/2+a.clientWidth/2,behavior:'smooth'})}
}
function onScroll(){const mid=innerHeight*0.45;let best=secs[0];secs.forEach(s=>{const r=s.getBoundingClientRect();if(r.top<=mid)best=s});setSec(best.id,best.dataset.say)}
addEventListener('scroll',onScroll,{passive:true});onScroll();
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.s).scrollIntoView({behavior:'smooth'})}));
document.querySelectorAll('a[href^="#"]:not(#nav a)').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'})}));
(function(){var a=document.getElementById('app');function k(){a.style.setProperty('--k',Math.min(a.clientWidth,480)/540)}k();addEventListener('resize',k)})();
(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const root=document.documentElement;root.classList.add('js');
const $=(q,r=document)=>[...r.querySelectorAll(q)];
const rnd=(a,b)=>a+Math.random()*(b-a);
/* camadas de fundo animadas por seção */
const CNT='<svg class="cnt" style="top:%TOP%" viewBox="0 0 560 90" fill="none" stroke="#8b5a3e" stroke-opacity=".4" stroke-width="1.1"><path d="M0 40C80 10 150 70 250 40S430 0 560 36"/><path d="M0 56C80 26 150 86 250 56S430 16 560 52"/><path d="M0 72C80 42 150 102 250 72S430 32 560 68"/></svg>';
const RET='<svg class="rtc" style="top:%TOP%" viewBox="0 0 90 90" fill="none" stroke="#8b5a3e" stroke-opacity=".5" stroke-width="1.2"><circle cx="45" cy="45" r="34" stroke-dasharray="1.5 5" stroke-linecap="round"/><circle cx="45" cy="45" r="20"/><path d="M45 2v14M45 74v14M2 45h14M74 45h14"/><circle cx="45" cy="45" r="3" fill="#8b5a3e" stroke="none"/></svg>';
['rosto','linearz','videos','produtos','trajetoria','vida','agendar'].forEach(id=>{
 const sec=document.getElementById(id);if(!sec)return;const pastel=sec.classList.contains('pastel');
 let h='<i class="orb o1'+(pastel?' pe':'')+'"></i><i class="orb o2'+(pastel?' pe':'')+'"></i><i class="orb o3'+(pastel?' pe':'')+'"></i>';
 if(pastel){h+=CNT.replace('%TOP%','18%')+CNT.replace('%TOP%','62%')+RET.replace('%TOP%','8%');for(let i=0;i<5;i++)h+='<i class="pls" style="left:'+rnd(6,92).toFixed(0)+'%;top:'+rnd(8,92).toFixed(0)+'%;animation-delay:-'+rnd(0,4).toFixed(1)+'s"></i>'}
 else{for(let i=0;i<16;i++)h+='<u style="left:'+rnd(2,98).toFixed(0)+'%;--t:'+rnd(11,22).toFixed(1)+'s;--dl:-'+rnd(0,20).toFixed(1)+'s;--dx:'+rnd(-40,40).toFixed(0)+'px;width:'+rnd(2,5).toFixed(1)+'px;height:'+rnd(2,5).toFixed(1)+'px"></u>'}
 const d=document.createElement('div');d.className='fx';d.innerHTML=h;sec.insertBefore(d,sec.firstChild)});
/* varredura no rosto + ondas no Linear Z */
const st=document.querySelector('#rosto .stage');if(st){const sc=document.createElement('div');sc.className='scan';st.appendChild(sc)}
const lz=document.querySelector('.lz');if(lz){lz.insertAdjacentHTML('beforeend','<i class="rip"></i><i class="rip"></i><i class="rip"></i><i class="swp"></i>')}
/* títulos em linhas que sobem */
$('h2.t').forEach(h=>{if(h.closest('#inicio'))return;const p=h.innerHTML.split(/<br\s*\/?>/i);h.innerHTML=p.map((l,i)=>'<span class="ln"><span style="--li:'+i+'">'+l+'</span></span>').join('');h.classList.add('rvh')});
/* envolver imagens para zoom lento */
$('.two img,.mos img').forEach(img=>{const w=document.createElement('div');w.className='kbw '+(img.className||'');img.className='';img.parentNode.insertBefore(w,img);w.appendChild(img)});
const PAR={'.mos>.a':.05,'.mos>.b':-.06,'.mos>.c':.08,'.two>.kbw:nth-child(1)':.04,'.two>.kbw:nth-child(2)':-.04};
Object.keys(PAR).forEach(q=>$(q).forEach(e=>e.dataset.par=PAR[q]));
/* alvos de revelação */
const R=[['section:not(#inicio) .eyebrow','up'],['section:not(#inicio) p.lead','up'],['.bub','up'],['.stage','fade'],['.cta-wrap','up'],['.lz','cl'],['.feat>div','pop'],['#linearz>a.cta','up'],['.rail.v>a','slide'],['.rail.p>a','slide'],['.linkbtn','up'],['.tl .st','left'],['.two>.kbw','cl'],['h3.pf','up'],['.chipsd>span','pop'],['.mos>.kbw','cl'],['#agendar>div','up'],['.card','up'],['.row','left'],['footer','up'],['.side .it','pop']];
const targets=[];
R.forEach(([q,v])=>{const seen=new Map();$(q).forEach(e=>{if(e.classList.contains('rv'))return;const par=e.parentNode;const i=seen.get(par)||0;seen.set(par,i+1);e.classList.add('rv','v-'+v);e.style.setProperty('--d',Math.min(i*.09,.55).toFixed(2)+'s');targets.push(e)})});
$('.rvh').forEach(h=>targets.push(h));
if(RM){targets.forEach(e=>e.classList.add('in'))}
else{const io=new IntersectionObserver(es=>es.forEach(en=>{const e=en.target,once=e.dataset.once;if(en.isIntersecting){e.classList.add('in');if(e.classList.contains('v-cl')){clearTimeout(e._t);e._t=setTimeout(()=>e.classList.add('done'),1900)}if(once)io.unobserve(e)}else if(!once&&en.intersectionRatio===0){e.classList.remove('in','done');clearTimeout(e._t)}}),{threshold:[0,.12],rootMargin:'0px 0px -6% 0px'});targets.forEach(e=>{if(e.parentNode.classList.contains('rail'))e.dataset.once=1;io.observe(e)})}
/* rolagem: progresso, parallax, linha do tempo, fundo do hero */
const inicio=document.getElementById('inicio'),tl=document.querySelector('.tl');let tk=false;
function frame(){tk=false;const vh=innerHeight,sy=scrollY,max=root.scrollHeight-vh;
 root.style.setProperty('--sp',max>0?Math.min(1,sy/max).toFixed(4):0);
 inicio.style.setProperty('--sy',Math.min(sy,900));
 if(!RM){$('[data-par]').forEach(e=>{const r=e.getBoundingClientRect();e.style.translate='0 '+((r.top+r.height/2-vh/2)*e.dataset.par).toFixed(1)+'px'})}
 if(tl){const r=tl.getBoundingClientRect();tl.style.setProperty('--p',Math.max(0,Math.min(1,(vh*.62-r.top)/r.height)).toFixed(3))}}
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(frame)}},{passive:true});addEventListener('resize',frame);frame();
/* carrosséis andam sozinhos */
if(!RM){$('.rail.v,.rail.p').forEach(rl=>{let dir=1,pause=0,vis=false,pos=0;
 new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(rl);
 ['pointerdown','touchstart','wheel'].forEach(ev=>rl.addEventListener(ev,()=>{pause=performance.now()+5500;rl.style.scrollSnapType='x mandatory'},{passive:true}));
 let was=false;
 (function tick(){const now=performance.now();
  if(vis&&now>pause){if(!was){pos=rl.scrollLeft;was=true;rl.style.scrollSnapType='none'}
   const max=rl.scrollWidth-rl.clientWidth;pos+=dir*.55;if(pos>=max){pos=max;dir=-1}if(pos<=0){pos=0;dir=1}rl.scrollLeft=pos}else was=false;
  requestAnimationFrame(tick)})()})}
/* ondinha de toque nos botões */
document.addEventListener('pointerdown',e=>{const t=e.target.closest('.cta,.h-b1,.h-b2,.btn2,.wa,.row,.rail a');if(!t)return;const r=t.getBoundingClientRect(),d=Math.max(r.width,r.height)*2.2;const s=document.createElement('span');s.className='rp';s.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';t.appendChild(s);setTimeout(()=>s.remove(),750)});
})();
