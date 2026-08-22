import Head from 'next/head'
import { useEffect } from 'react'

/* ============================================================
   Content — Mason Choi. Each leaf of the fan is a section.
   ============================================================ */
const HOME = {
  t: 'Mason Choi', idx: 'Software Engineer · Web3 security',
  b: 'Building the formal-methods engine of the future at Olympix. Two degrees in CS & math by eighteen — and a habit of chasing the hardest problems.',
}

const LEAVES = [
  { key:'work', t:'Work', idx:'Ⅰ · Employment',
    b:'Engineering roles — most recent first.',
    lede:'From SEC-scraping ETL to live financial ML, and now formal methods for smart-contract security.',
    li:[
      {a:'Olympix — Software Engineer', d:'Building the formal-methods engine of the future; Web3 cybersecurity, on-site in New York.', y:'2025—'},
      {a:'AlphaSeeker AI — ML Engineer', d:'Automated the training, fine-tuning, and prediction of 12 statistical models; built the entire backend of alphaseekerai.com.', y:'2024—', href:'https://alphaseekerai.com'},
      {a:'Atlantic Prime Estates — Data Engineer', d:'ML models for property appreciation and zipcode-level profitability; pipelines for regional valuation and rent estimation.', y:'2023–24', href:'https://www.atlanticprimeestates.com/'},
      {a:'Solve Advisors — Data Engineer / Analyst', d:'Built a BDC statement parser that saved ~848 hrs/yr; automated bond & loan pricing and treasury scraping on EC2 with Google OAuth.', y:'2022–23', href:'https://solveadvisors.com/'},
      {a:'Advantage Data — Junior Data Engineer', d:'Automated 10-Q/10-K SEC extraction; deployed GCP ETL pipelines into BigQuery.', y:'2021–22', href:'https://advantagedata.com/'},
    ]},
  { key:'projects', t:'Projects', idx:'Ⅱ · Register',
    b:'A register of things built.',
    lede:'Selected work across mobile, ML, and the web. More on GitHub.',
    li:[
      {a:'Vestio', d:'TikTok-style clothes-shopping app with in-house virtual try-on — upload a photo, try clothing on yourself, get recommendations, and share outfits.', y:'2024–25'},
      {a:'Campus Quad', d:'Mobile app bringing a college campus together — social feeds and a goods/services marketplace.', y:'2023–24'},
      {a:'Lexia', d:'Chrome extension improving online-text readability, made for a friend with dyslexia.', y:'2023', href:'https://chromewebstore.google.com/detail/pikdcobajohdjlhcohgkenhkjedgdcpo'},
      {a:'Text2Notes', d:'GPT-3 tool converting textbook prose into topic-broken notes.', y:'2022–23'},
      {a:'Raytracer', d:'A raytracer built from scratch in JavaScript, with Tony Zhang.', y:'2022', href:'https://tony1324.github.io/raytracer/'},
      {a:'Filess', d:'Asset-sharing platform on Flask + AWS S3, deployed on Heroku.', y:'2022', href:'https://filess.org'},
      {a:'EMNIST net', d:'Neural network from scratch in NumPy — 96%+ on EMNIST Balanced (6th best).', y:'2022', href:'https://tennis-ball.github.io/Character-Classification/'},
      {a:'Anchor', d:'Stock-insights platform — daily cloud-trained TensorFlow regression models on EC2/S3, served with Django. Grew to 275+ returning users.', y:'2021'},
      {a:'Computer-vision app', d:'React Native app using Google’s MobileNet for species/object ID, QR scanning, and colour detection.', y:'2021'},
      {a:'Fencing analysis tool', d:'CNNs (TensorFlow + OpenCV) that strip non-fencing frames from bout video — cut watch time by 43%.', y:'2021'},
      {a:'Music generator', d:'Karpathy-style LSTM in TensorFlow generating original melodies and lyrics from scraped songs.', y:'2021'},
    ]},
  { key:'finance', t:'Finance', idx:'Ⅲ · Markets',
    b:'Head of Quantitative Finance, Minutemen Alternative Investment Fund.',
    lede:'Led the quant arm at UMass — running a live portfolio and a trading desk.',
    li:[
      {a:'MAIF — Head of Quantitative Finance', d:'Ran a $100k portfolio to a 40% annualized return; recruited and trained 24 analysts & traders; built the curriculum and oversaw 8 strategies across equities, options, and futures.', y:'2024–25', href:'https://www.minutemenalternativeinvestmentfund.com/'},
      {a:'MAIF — Quantitative Researcher', d:'Led a derivatives team running gamma-scalping and delta-hedging algorithms — ~1% alpha vs. the S&P 500 at a 2.08 Sharpe over four months live.', y:'2024'},
      {a:'Markets', d:'Researching how politics, economics, and events move equities, options, and futures.', y:'ongoing'},
    ]},
  { key:'education', t:'Education', idx:'Ⅳ · Study',
    b:'Two B.S. degrees at UMass Amherst — graduated at eighteen.',
    lede:'Computer science and mathematics in two years, with a statistics & data-science concentration.',
    li:[
      {a:'UMass Amherst — B.S. Computer Science', d:'Graduated with a 3.95 GPA. Independent study with Prof. Jaime Dávila: recommendation-system models for clothing selection.', y:'2023–25'},
      {a:'UMass Amherst — B.S. Mathematics', d:'3.9 GPA, concentration in statistics and data science.', y:'2023–25'},
      {a:'Boston Latin School', d:'Left after grade 10 for university. State épée champion; 4.41 GPA.', y:'2019–23'},
      {a:'Toolkit', d:'Python (expert); Java, C, JavaScript, SQL. TensorFlow, Pandas, NumPy. AWS, GCP, Azure. React, Flask, Django, React Native.', y:''},
    ]},
  { key:'fencing', t:'Fencing', idx:'Ⅴ · Sport',
    b:'Épée, at the national level for seven years.',
    lede:'Nationally ranked, a state champion, and still on the strip.',
    li:[
      {a:'Individual', d:'Peaked 13th in the nation and 1st regionally (Cadet/U17); 5th regionally Junior (U20).', y:'2016–23'},
      {a:'Boston Latin', d:'Varsity since 7th grade; Massachusetts state champions, exchanging A/B positions.', y:'2019–23'},
      {a:'UMass club', d:'1st place at the Smith individual invitational.', y:'2023—'},
    ]},
  { key:'life', t:'Life', idx:'Ⅵ · Off the clock',
    b:'Making things, and being outside.',
    lede:'Objects that move, places to go, and the occasional 4AM fishing trip.',
    li:[
      {a:'3D design & printing', d:'A printed robotic prosthetic hand in an experimental printed fabric.', y:''},
      {a:'Kinetic art', d:'A mechatronic kinetic sculpture inspired by artist Willem van Weeghel.', y:''},
      {a:'Travel', d:'Over 30 countries across four continents.', y:''},
      {a:'Outside', d:'Climbing, and 4AM fishing for bass and carp.', y:''},
      {a:'Service', d:'ZERO HERO Award for hunger-relief work; weekly meals with Boston’s HOME ministry.', y:'2021–23'},
    ]},
  { key:'contact', t:'Contact', idx:'Ⅶ · Reach',
    b:'The quickest way is email.',
    lede:'Say hello — or take the one-page résumé. Always happy to chat.',
    li:[
      {a:'Email', d:'choi.mason@gmail.com', y:'→', href:'mailto:choi.mason@gmail.com'},
      {a:'GitHub', d:'github.com/Tennis-Ball', y:'→', href:'https://github.com/Tennis-Ball'},
      {a:'LinkedIn', d:'in/masonchoi', y:'→', href:'https://www.linkedin.com/in/masonchoi/'},
      {a:'Résumé', d:'One page, PDF.', y:'→', href:'/resumes/Mason_Choi_Resume.pdf'},
    ]},
]

const ROMAN = ['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ']

export default function Home() {
  useEffect(() => { return initFan() }, [])

  return (
    <>
      <Head>
        <title>Mason Choi</title>
        <meta name="description" content="Mason Choi — software engineer in Web3 cybersecurity at Olympix. Two degrees in computer science and mathematics by eighteen; quantitative finance, machine learning, data engineering, and national-level épée." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Mason Choi" />
        <meta property="og:description" content="Software engineer · Web3 security at Olympix. Quant, builder, fencer." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#E9E4D8" />
      </Head>

      <div className="ruling" />
      <div className="grain" />

      <div className="corner tl">Mason Choi</div>
      <div className="corner tr">MMXXVI</div>
      <div className="corner bl hint">Hover a leaf &nbsp;·&nbsp; <b>click the rivet</b> or press space to fold &nbsp;·&nbsp; centre to read</div>

      {/* ---------- the fan (desktop) ---------- */}
      <div className="stage" id="stage" aria-hidden="true">
        <div className="ground" />
        <div className="fanwrap">
          <div className="fangroup" id="fangroup">
            <div className="tassel" id="tassel"><div className="cord" /><div className="bob" /><div className="tuft" /></div>
            <div className="rivet" id="rivet" />
          </div>
        </div>
      </div>

      <div className="readout" id="readout" aria-hidden="true">
        <span className="idx fade" id="r-idx">{HOME.idx}</span>
        <h1 className="fade" id="r-title">{HOME.t}</h1>
        <p className="fade" id="r-body">{HOME.b}</p>
        <span className="more fade" id="r-more">Open ↗</span>
      </div>

      {/* ---------- the index (mobile + accessible + crawlable) ---------- */}
      <nav className="index-list" aria-label="Sections">
        <header className="masthead">
          <p className="kick">{HOME.idx}</p>
          <h1>Mason Choi</h1>
          <p>{HOME.b}</p>
        </header>
        {LEAVES.map((L, i) => (
          <button key={L.key} className="leaf-row" data-i={i}>
            <span>
              <span className="lr-name">{L.t}</span>
              <span className="lr-blurb">{L.b}</span>
            </span>
            <span className="lr-rn">{ROMAN[i]}</span>
          </button>
        ))}
        <p className="list-foot">
          <a href="mailto:choi.mason@gmail.com">Email</a> · <a href="https://github.com/Tennis-Ball" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/masonchoi/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="/resumes/Mason_Choi_Resume.pdf">Résumé</a>
        </p>
      </nav>

      {/* ---------- reading panel (shared) ---------- */}
      <div className="panel" id="panel" role="dialog" aria-modal="true" aria-label="Section detail">
        <div className="card">
          <span className="rn" id="p-rn" />
          <h2 id="p-title" />
          <p className="lede" id="p-lede" />
          <div id="p-list" />
          <button className="back" id="p-back">↩ Close</button>
        </div>
      </div>

      {/* ---------- full content for search engines / no-JS ---------- */}
      <div className="sr-only">
        {LEAVES.map((L) => (
          <section key={L.key}>
            <h2>{L.t}</h2><p>{L.lede}</p>
            <ul>{L.li.map((x, k) => <li key={k}>{x.a} — {x.d} {x.y}</li>)}</ul>
          </section>
        ))}
      </div>
    </>
  )
}

/* ============================================================
   The fan engine. Runs client-side; returns a cleanup fn.
   ============================================================ */
function initFan() {
  if (typeof window === 'undefined') return
  const N = LEAVES.length, FULL = 118, SCENE = '/art/fan-scene.jpg'
  const ac = new AbortController(), sig = { signal: ac.signal }
  let raf = 0
  const $ = (id) => document.getElementById(id)
  const fangroup = $('fangroup'), rivet = $('rivet'), tassel = $('tassel'),
        readout = $('readout'), panel = $('panel'), stage = $('stage')
  if (!fangroup || !panel) return

  const desktop = window.matchMedia('(min-width:760px) and (pointer:fine)').matches
  const blades = [], tags = []
  let hoverIdx = -1, sel = -1, shown = -2
  let openF = 0.06, openTarget = 1
  let cursorX = null, cxF = 0, cyF = 0, tiltX = 0, tiltY = 0
  let tPhi = 0, tOmega = 0
  const start = performance.now()

  // ---- reading panel (used by fan + list) ----
  function openPanel(i) {
    const S = LEAVES[i]; if (!S) return
    $('p-rn').textContent = S.idx
    $('p-title').textContent = S.t
    $('p-lede').textContent = S.lede
    $('p-list').innerHTML = S.li.map((x) => {
      const name = x.href
        ? `<a class="en-link" href="${x.href}" target="_blank" rel="noreferrer">${x.a}</a>`
        : x.a
      return `<div class="entry"><span class="en">${name}<span class="ed">${x.d}</span></span><span class="ey">${x.y || ''}</span></div>`
    }).join('')
    panel.classList.add('on')
  }
  function closePanel() { panel.classList.remove('on') }
  $('p-back').addEventListener('click', closePanel, sig)
  panel.addEventListener('click', (e) => { if (e.target === panel) closePanel() }, sig)

  // wire the accessible / mobile list
  document.querySelectorAll('.leaf-row').forEach((b) =>
    b.addEventListener('click', () => openPanel(+b.dataset.i), sig))

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closePanel(); return }
    if (!desktop) return
    if (e.key === ' ') { e.preventDefault(); toggleFold(); return }
    if (openTarget < 0.5) openTarget = 1
    if (['ArrowRight','ArrowDown'].includes(e.key)) { sel = ((sel<0?-1:sel)+1+N)%N; preview(sel) }
    if (['ArrowLeft','ArrowUp'].includes(e.key)) { sel = ((sel<0?1:sel)-1+N)%N; preview(sel) }
    if (e.key === 'Enter' && sel >= 0) openPanel(sel)
  }, sig)

  if (!desktop) return () => ac.abort()   // mobile: list only, no fan

  // ---- build the fan ----
  LEAVES.forEach((L, i) => {
    const b = document.createElement('div')
    b.className = 'blade' + (i === 0 || i === N - 1 ? ' guard' : '')
    b.style.setProperty('--scene', `url("${SCENE}")`)
    b.style.setProperty('--sceneW', (N * 100) + '%')
    b.style.setProperty('--px', (i / (N - 1) * 100) + '%')
    b.innerHTML = '<div class="leaf"></div><div class="tip"></div>'
    b.addEventListener('pointerenter', () => { hoverIdx = i; preview(i) }, sig)
    b.addEventListener('pointerleave', () => { hoverIdx = -1; preview(sel) }, sig)
    b.addEventListener('click', (e) => { e.stopPropagation(); sel = i; preview(i); tOmega += 2 }, sig)
    fangroup.appendChild(b); blades.push(b)

    const t = document.createElement('div'); t.className = 'tag'; t.textContent = L.t
    t.addEventListener('pointerenter', () => { hoverIdx = i; preview(i) }, sig)
    t.addEventListener('pointerleave', () => { hoverIdx = -1; preview(sel) }, sig)
    t.addEventListener('click', (e) => { e.stopPropagation(); sel = i; preview(i) }, sig)
    fangroup.appendChild(t); tags.push(t)
  })

  const geo = () => ({
    pivotX: innerWidth / 2, pivotY: innerHeight * 0.88,
    R: Math.min(innerHeight * 0.60, innerWidth * 0.46),
    W: Math.max(44, Math.min(92, innerWidth * 0.06)),
  })

  window.addEventListener('pointermove', (e) => {
    cursorX = e.clientX; cxF = e.clientX / innerWidth - .5; cyF = e.clientY / innerHeight - .5
  }, { passive: true, signal: ac.signal })

  function render(now) {
    const { pivotX, pivotY, R, W } = geo()
    openF += (openTarget - openF) * 0.09
    const spread = FULL * Math.max(0, openF)
    const t = (now - start) / 1000

    tiltX += ((-cyF * 6) - tiltX) * 0.06; tiltY += ((cxF * 9) - tiltY) * 0.06
    fangroup.style.transform = `perspective(1500px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`

    blades.forEach((bl, i) => {
      let ang = N > 1 ? (-spread / 2 + spread * (i / (N - 1))) : 0
      if (hoverIdx >= 0) { const d = i - hoverIdx; if (d !== 0) ang += Math.sign(d) * 6 * Math.exp(-Math.abs(d) * 0.7) }
      ang += Math.sin(t * 0.8 + i * 0.6) * 0.5 * openF
      const rad0 = ang * Math.PI / 180, tipx = pivotX + Math.sin(rad0) * R
      let breeze = 0; if (cursorX != null) breeze = Math.max(0, 1 - Math.abs(tipx - cursorX) / (innerWidth * 0.15))
      const lift = ((i === hoverIdx || i === sel) ? R * 0.035 : 0) + breeze * R * 0.03
      bl.style.left = pivotX + 'px'; bl.style.top = (pivotY - R) + 'px'; bl.style.width = W + 'px'; bl.style.height = R + 'px'
      bl.style.transform = `translate(-50%, ${(-lift).toFixed(1)}px) rotate(${ang.toFixed(2)}deg)`
      bl.style.setProperty('--lb', (0.58 + breeze * 0.34).toFixed(2))
      const rad = ang * Math.PI / 180, tipR = R + 30, tx = pivotX + Math.sin(rad) * tipR, ty = pivotY - Math.cos(rad) * tipR
      tags[i].style.left = tx + 'px'; tags[i].style.top = ty + 'px'
      tags[i].style.opacity = openF < 0.55 ? Math.max(0, (openF - 0.2) / 0.35) : 1
    })
    rivet.style.left = pivotX + 'px'; rivet.style.top = pivotY + 'px'

    const targetPhi = tiltY * 0.9
    tOmega += (targetPhi - tPhi) * 0.015 - tOmega * 0.055; tPhi += tOmega
    tassel.style.left = pivotX + 'px'; tassel.style.top = pivotY + 'px'
    tassel.style.setProperty('--L', (R * 0.16).toFixed(0) + 'px')
    tassel.style.transform = `translateX(-50%) rotate(${tPhi.toFixed(2)}deg)`

    raf = requestAnimationFrame(render)
  }
  raf = requestAnimationFrame(render)

  function highlight(i) { blades.forEach((b, k) => b.classList.toggle('on', k === i)); tags.forEach((t, k) => t.classList.toggle('on', k === i)) }
  function write(o) {
    readout.classList.add('swap')
    setTimeout(() => {
      $('r-idx').textContent = o.idx || HOME.idx
      $('r-title').textContent = o.t || HOME.t
      $('r-body').textContent = o.b
      readout.classList.toggle('has', !!o.li)
      readout.classList.remove('swap')
    }, 170)
  }
  function preview(i) {
    if (i < 0) { highlight(sel); if (shown !== sel) { write(sel < 0 ? HOME : LEAVES[sel]); shown = sel } return }
    highlight(i); if (shown !== i) { write(LEAVES[i]); shown = i }
  }
  write(HOME); shown = -1

  function toggleFold() { openTarget = openTarget > 0.5 ? 0.12 : 1; tOmega += openTarget > 0.5 ? -7 : 7 }
  rivet.addEventListener('click', (e) => { e.stopPropagation(); toggleFold() }, sig)
  readout.addEventListener('click', (e) => { if (e.target.id === 'r-more' && sel >= 0) openPanel(sel) }, sig)
  stage.addEventListener('click', (e) => { if (e.target === stage || e.target.classList.contains('ground')) { sel = -1; preview(-1) } }, sig)

  return () => { cancelAnimationFrame(raf); ac.abort(); blades.forEach((b) => b.remove()); tags.forEach((t) => t.remove()) }
}
