import puppeteer from 'puppeteer-core'
const CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT=process.env.OUT, sleep=ms=>new Promise(r=>setTimeout(r,ms))
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--no-sandbox']})
const p=await b.newPage(); await p.setViewport({width:1440,height:900,deviceScaleFactor:1})
for (const k of ['work','projects','finance','education','fencing','life','contact']) {
  await p.goto(`http://localhost:3000/#${k}`,{waitUntil:'networkidle0'}); await sleep(600)
  const m=await p.evaluate(()=>{const c=document.querySelector('.panel .card');
    return {fits:c.scrollHeight<=c.clientHeight, over:c.scrollHeight-c.clientHeight}})
  console.log(k.padEnd(10), JSON.stringify(m))
  if(k==='projects') await p.screenshot({path:`${OUT}/final-panel.png`})
}
await b.close()
