import Head from 'next/head'
import { useEffect } from 'react'

/* ============================================================
   Content — Mason Choi. Each leaf of the fan is a section.
   ============================================================ */
const HOME = {
  t: 'Mason Choi', idx: 'Software Engineer · Web3 security',
  b: 'Building the formal-methods engine of the future at Olympix. Two degrees in computer science and mathematics by eighteen.',
}

const LEAVES = [
  { key:'work', t:'Work', idx:'Ⅰ · Employment',
    b:'Five years of engineering roles.',
    lede:'From SEC-scraping ETL to live financial ML, and now formal methods for smart-contract security.',
    li:[
      {a:'Olympix — Software Engineer', d:'Building the formal-methods engine of the future. Web3 cybersecurity, in New York.', y:'2025—'},
      {a:'AlphaSeeker AI — ML Engineer', d:'Automated training and inference for 12 statistical models; built the backend end to end.', y:'2024—', href:'https://alphaseekerai.com'},
      {a:'Atlantic Prime Estates — Data Engineer', d:'ML for property appreciation and zipcode-level profitability, plus the pipelines feeding it.', y:'2023–24', href:'https://www.atlanticprimeestates.com/'},
      {a:'Solve Advisors — Data Engineer', d:'A BDC statement parser that saved ~848 hrs/yr; automated bond, loan, and treasury pricing.', y:'2022–23', href:'https://solveadvisors.com/'},
      {a:'Advantage Data — Data Engineer', d:'Automated 10-Q/10-K SEC extraction; GCP ETL pipelines into BigQuery.', y:'2021–22', href:'https://advantagedata.com/'},
    ]},
  { key:'projects', t:'Projects', idx:'Ⅱ · Register',
    b:'A register of things built.',
    lede:'Selected work. More on GitHub.',
    li:[
      {a:'Vestio', d:'A clothes-shopping app with in-house virtual try-on — upload a photo and wear the catalogue.', y:'2024–25'},
      {a:'Lexia', d:'Chrome extension improving online-text readability, made for a friend with dyslexia.', y:'2023', href:'https://chromewebstore.google.com/detail/pikdcobajohdjlhcohgkenhkjedgdcpo'},
      {a:'Raytracer', d:'Built from scratch in JavaScript, with Tony Zhang.', y:'2022', href:'https://tony1324.github.io/raytracer/'},
      {a:'Filess', d:'Asset-sharing platform on Flask and AWS S3.', y:'2022', href:'https://filess.org'},
      {a:'EMNIST net', d:'A neural network from scratch in NumPy — 96%+ on EMNIST Balanced, 6th on the benchmark.', y:'2022', href:'https://tennis-ball.github.io/Character-Classification/'},
      {a:'Anchor', d:'Stock predictions from TensorFlow models retrained nightly on EC2. Grew to 275+ returning users.', y:'2021'},
    ]},
  { key:'finance', t:'Finance', idx:'Ⅲ · Markets',
    b:'Head of Quantitative Finance at the Minutemen fund.',
    lede:'Led the quant arm at UMass — a live portfolio and a trading desk.',
    li:[
      {a:'MAIF — Head of Quantitative Finance', d:'Ran a $100k portfolio to a 40% annualized return; recruited and trained 24 analysts and traders across 8 strategies.', y:'2024–25', href:'https://www.minutemenalternativeinvestmentfund.com/'},
      {a:'MAIF — Quantitative Researcher', d:'Led a derivatives team running gamma-scalping and delta-hedging — ~1% alpha vs. the S&P 500 at a 2.08 Sharpe, live.', y:'2024'},
    ]},
  { key:'education', t:'Education', idx:'Ⅳ · Study',
    b:'Two degrees at UMass Amherst, at eighteen.',
    lede:'Computer science and mathematics in two years.',
    li:[
      {a:'B.S. Computer Science', d:'3.95 GPA. Independent study with Prof. Jaime Dávila on recommender models for clothing selection.', y:'2023–25'},
      {a:'B.S. Mathematics', d:'3.9 GPA, concentration in statistics and data science.', y:'2023–25'},
      {a:'Boston Latin School', d:'Left after grade 10 for university. State épée champion.', y:'2019–23'},
      {a:'Toolkit', d:'Python, Java, C, JavaScript, SQL · TensorFlow, Pandas, NumPy · AWS, GCP · React, Flask, Django.', y:''},
    ]},
  { key:'fencing', t:'Fencing', idx:'Ⅴ · Sport',
    b:'Épée, at the national level for seven years.',
    lede:'Nationally ranked, a state champion, and still on the strip.',
    li:[
      {a:'Individual', d:'Peaked 13th in the nation and 1st regionally at Cadet; 5th regionally at Junior.', y:'2016–23'},
      {a:'Boston Latin', d:'Varsity from 7th grade; Massachusetts state champions.', y:'2019–23'},
      {a:'UMass club', d:'1st at the Smith individual invitational.', y:'2023—'},
    ]},
  { key:'life', t:'Life', idx:'Ⅵ · Off the clock',
    b:'Making things, and being outside.',
    lede:'Objects that move, places to go, and the occasional 4AM fishing trip.',
    li:[
      {a:'Making', d:'A 3D-printed robotic prosthetic hand in experimental printed fabric, and a mechatronic sculpture after Willem van Weeghel.', y:''},
      {a:'Travel', d:'Over 30 countries across four continents.', y:''},
      {a:'Outside', d:'Climbing, and 4AM fishing for bass and carp.', y:''},
      {a:'Service', d:'ZERO HERO Award for hunger-relief work; weekly meals with Boston’s HOME ministry.', y:'2021–23'},
    ]},
  { key:'contact', t:'Contact', idx:'Ⅶ · Reach',
    b:'The quickest way is email.',
    lede:'Say hello — or take the one-page résumé.',
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
  let hoverIdx = -1, shown = -2
  let openF = 0.05, openTarget = 1
  let cursorX = null, cxF = 0, cyF = 0, tiltX = 0, tiltY = 0
  let tPhi = 0, tOmega = 0

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
    try { history.replaceState(null, '', '#' + LEAVES[i].key) } catch (e) {}
  }
  function closePanel() {
    panel.classList.remove('on')
    try { history.replaceState(null, '', location.pathname + location.search) } catch (e) {}
  }
  $('p-back').addEventListener('click', closePanel, sig)
  panel.addEventListener('click', (e) => { if (e.target === panel) closePanel() }, sig)

  // wire the accessible / mobile list
  document.querySelectorAll('.leaf-row').forEach((b) =>
    b.addEventListener('click', () => openPanel(+b.dataset.i), sig))

  // shareable deep links: /#work opens that section on load
  const h0 = decodeURIComponent(location.hash.replace('#', ''))
  const hi0 = LEAVES.findIndex((L) => L.key === h0)
  if (hi0 >= 0) openPanel(hi0)

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closePanel(); return }
    if (!desktop) return
    if (e.key === ' ') { e.preventDefault(); toggleFold(); return }
    if (openTarget < 0.5) openTarget = 1
    if (['ArrowRight','ArrowDown'].includes(e.key)) setHover(((hoverIdx < 0 ? -1 : hoverIdx) + 1 + N) % N)
    if (['ArrowLeft','ArrowUp'].includes(e.key)) setHover(((hoverIdx < 0 ? 1 : hoverIdx) - 1 + N) % N)
    if (e.key === 'Enter' && hoverIdx >= 0) openPanel(hoverIdx)
  }, sig)

  if (!desktop) return () => ac.abort()   // mobile: list only, no fan

  // ---- build the fan (visual only; interaction is angle-based) ----
  LEAVES.forEach((L, i) => {
    const b = document.createElement('div')
    b.className = 'blade' + (i === 0 || i === N - 1 ? ' guard' : '')
    b.style.setProperty('--scene', `url("${SCENE}")`)
    b.style.setProperty('--sceneW', (N * 100) + '%')
    b.style.setProperty('--px', (i / (N - 1) * 100) + '%')
    b.innerHTML = '<div class="leaf"></div><div class="tip"></div>'
    fangroup.appendChild(b); blades.push(b)
    const t = document.createElement('div'); t.className = 'tag'; t.textContent = L.t
    fangroup.appendChild(t); tags.push(t)
  })

  // Lifted so the tassel always hangs clear of the bottom edge.
  const geo = () => ({
    pivotX: innerWidth / 2, pivotY: innerHeight * 0.82,
    R: Math.min(innerHeight * 0.50, innerWidth * 0.42),
    W: Math.max(42, Math.min(86, innerWidth * 0.055)),
  })

  // Stable, angle-based hover: which sector is the cursor in? The leaves can
  // move without changing the answer, so hovering never fights itself.
  function hitTest(x, y) {
    if (openF < 0.6) return -1
    const { pivotX, pivotY, R } = geo()
    const dx = x - pivotX, dy = y - pivotY, dist = Math.hypot(dx, dy)
    if (dist < 0.12 * R || dist > 1.2 * R) return -1
    const a = Math.atan2(dx, -dy) * 180 / Math.PI          // 0 = straight up
    const spread = FULL * openF, step = spread / (N - 1)
    if (Math.abs(a) > spread / 2 + step * 0.6) return -1
    return Math.max(0, Math.min(N - 1, Math.round((a + spread / 2) / step)))
  }
  function setHover(i) { if (i !== hoverIdx) { hoverIdx = i; preview(i) } }

  window.addEventListener('pointermove', (e) => {
    cursorX = e.clientX; cxF = e.clientX / innerWidth - .5; cyF = e.clientY / innerHeight - .5
    if (!panel.classList.contains('on')) setHover(hitTest(e.clientX, e.clientY))
  }, { passive: true, signal: ac.signal })

  function render() {
    const { pivotX, pivotY, R, W } = geo()
    openF += (openTarget - openF) * 0.085
    const spread = FULL * Math.max(0, openF)
    const openness = Math.max(0, Math.min(1, (openF - 0.4) / 0.55))   // 0 folded .. 1 open

    tiltX += ((-cyF * 3.5) - tiltX) * 0.045; tiltY += ((cxF * 5.5) - tiltY) * 0.045
    fangroup.style.transform = `perspective(1700px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`

    blades.forEach((bl, i) => {
      const baseAng = N > 1 ? (-spread / 2 + spread * (i / (N - 1))) : 0
      let splay = 0
      if (hoverIdx >= 0) { const d = i - hoverIdx; if (d !== 0) splay = Math.sign(d) * 5 * Math.exp(-Math.abs(d) * 0.7) }
      const prevAng = bl._ang == null ? baseAng : bl._ang
      const tipx = pivotX + Math.sin(prevAng * Math.PI / 180) * R
      let breeze = 0; if (cursorX != null && openness > 0) breeze = Math.max(0, 1 - Math.abs(tipx - cursorX) / (innerWidth * 0.16))
      const targetAng = baseAng + splay * openness
      const targetLift = (((i === hoverIdx) ? R * 0.03 : 0) + breeze * R * 0.026) * openness
      const targetBr = 0.58 + breeze * 0.30 * openness
      bl._ang = bl._ang == null ? targetAng : bl._ang + (targetAng - bl._ang) * 0.15
      bl._lift = bl._lift == null ? targetLift : bl._lift + (targetLift - bl._lift) * 0.15
      bl._br = bl._br == null ? targetBr : bl._br + (targetBr - bl._br) * 0.15
      bl.style.left = pivotX + 'px'; bl.style.top = (pivotY - R) + 'px'; bl.style.width = W + 'px'; bl.style.height = R + 'px'
      bl.style.transform = `translate(-50%, ${(-bl._lift).toFixed(2)}px) rotate(${bl._ang.toFixed(3)}deg)`
      bl.style.setProperty('--lb', bl._br.toFixed(3))
      // Label sits a fixed gap beyond the leaf's *actual* tip — the lift is
      // included, so a hovered leaf can never rise into its own text. Side
      // labels anchor outward instead of centring, so they never sit on the leaf.
      const rad = bl._ang * Math.PI / 180, s = Math.sin(rad), c = Math.cos(rad), gap = 34
      tags[i].style.left = (pivotX + s * (R + gap)) + 'px'
      tags[i].style.top = (pivotY - bl._lift - c * (R + gap)) + 'px'
      tags[i].style.transform = `translate(${s > 0.34 ? '0%' : s < -0.34 ? '-100%' : '-50%'}, -50%)`
      tags[i].style.opacity = (openF < 0.62 ? Math.max(0, (openF - 0.28) / 0.34) : 1).toFixed(2)
    })
    rivet.style.left = pivotX + 'px'; rivet.style.top = pivotY + 'px'

    const targetPhi = tiltY * 0.9
    tOmega += (targetPhi - tPhi) * 0.015 - tOmega * 0.055; tPhi += tOmega
    tassel.style.left = pivotX + 'px'; tassel.style.top = pivotY + 'px'
    tassel.style.setProperty('--L', (R * 0.15).toFixed(0) + 'px')
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
      readout.classList.remove('swap')
    }, 150)
  }
  function preview(i) { highlight(i); if (shown !== i) { write(i < 0 ? HOME : LEAVES[i]); shown = i } }
  write(HOME); shown = -1

  function toggleFold() {
    const closing = openTarget > 0.5
    openTarget = closing ? 0 : 1
    tOmega += closing ? -7 : 7
    if (closing) setHover(-1)
  }
  rivet.addEventListener('click', (e) => { e.stopPropagation(); toggleFold() }, sig)
  stage.addEventListener('click', () => {
    if (openF < 0.5) { toggleFold(); return }          // a tap on the folded fan opens it
    if (hoverIdx >= 0) { openPanel(hoverIdx); tOmega += 1.5 }
  }, sig)

  return () => { cancelAnimationFrame(raf); ac.abort(); blades.forEach((b) => b.remove()); tags.forEach((t) => t.remove()) }
}
