// Editable geometric source. Run: node output/oxflow-identity/build.cjs
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const sharpDir = fs.readdirSync(path.join(root, 'node_modules/.pnpm')).find(n => n.startsWith('sharp@'));
const sharp = require(path.join(root, 'node_modules/.pnpm', sharpDir, 'node_modules/sharp'));
const out = __dirname;
const ring = (x) => `<path fill-rule="evenodd" d="M${x+62} 36a62 63 0 1 1 0 126a62 63 0 1 1 0-126ZM${x+62} 66a32 33 0 1 0 0 66a32 33 0 1 0 0-66Z"/>`;
const word = ring(0) + '<path d="M133 40h38l31 39 31-39h79v30h-63l-28 30 49 60h-40l-30-38-31 38h-39l51-61Z"/><g transform="translate(20 0)"><path d="M260 0h112v30h-80v38h66v30h-66v62h-32Z"/><path d="M386 0h32v160h-32Z"/>' + ring(434) + '<path d="M570 40h33l22 78 24-78h29l24 78 22-78h33l-39 120h-32l-23-74-24 74h-32Z"/></g>';
// The compact ox shares a broad intersection; no fragile slit or disconnected tip.
const symbol = '<path fill-rule="evenodd" d="M48 0a48 48 0 1 1 0 96a48 48 0 1 1 0-96ZM48 25a23 23 0 1 0 0 46a23 23 0 1 0 0-46Z"/><path d="M77 4h30l20 25 20-25h31l-36 43 39 45h-32l-23-27-22 27H73l38-45Z"/><path d="M83 35h36v26H83Z"/>';
const favicon = '<path fill-rule="evenodd" d="M48 0a48 48 0 1 1 0 96a48 48 0 1 1 0-96ZM48 27a21 21 0 1 0 0 42a21 21 0 1 0 0-42Z"/><path d="M76 0h34l18 24 18-24h34l-36 47 39 49h-35l-21-28-22 28H70l40-49Z"/><path d="M82 34h38v28H82Z"/>';
const svg = (w,h,body,color='#000000') => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="${color}">${body}</svg>`;
const assets = {
  horizontal: [841,226,`<g transform="translate(32 32)">${word}</g>`],
  wordmark: [809,194,`<g transform="translate(16 16)">${word}</g>`],
  symbol: [213,128,`<g transform="translate(16 16)">${symbol}</g>`],
  avatar: [256,256,`<g transform="translate(37.5 80)">${symbol}</g>`],
  favicon: [192,192,`<g transform="translate(13.65 52.8) scale(.9)">${favicon}</g>`],
};
async function main() {
  for (const [name,[w,h,body]] of Object.entries(assets)) {
    for (const [variant,color] of Object.entries({black:'#000000',white:'#FFFFFF',color:'#245B4B'})) {
      const source=svg(w,h,body,color);
      assert(!/<(?:text|image)\b/.test(source), 'Logos must be outlined vectors');
      fs.writeFileSync(path.join(out,`${name}-${variant}.svg`),source);
      const targetWidth=name==='avatar'?1024:name==='favicon'?192:name==='symbol'?852:1642;
      await sharp(Buffer.from(source)).resize({width:targetWidth}).png().toFile(path.join(out,`${name}-${variant}.png`));
    }
  }
  for (const size of [16,24,32,48]) {
    await sharp(path.join(out,'favicon-black.svg')).resize(size,size).png().toFile(path.join(out,`favicon-${size}.png`));
  }
  const dark='#17221E';
  const label=(x,y,t,color='#727771',size=14)=>`<text x="${x}" y="${y}" fill="${color}" font-family="Helvetica,Arial,sans-serif" font-size="${size}">${t}</text>`;
  let board=`<rect width="1400" height="1120" fill="#F7F7F2"/>${label(64,56,'oxFlow / Shared stroke / Refined identity')}`;
  board+=`<g transform="translate(110 132) scale(1.3)" fill="#000">${word}</g>`;
  board+=label(110,400,'PRIMARY WORDMARK — a single shared stroke connects x and F');
  board+=`<rect x="0" y="450" width="1400" height="320" fill="${dark}"/><g transform="translate(110 525) scale(.92)" fill="#fff">${word}</g><g transform="translate(1060 545)" fill="#fff">${symbol}</g>`;
  board+=label(110,730,'REVERSED / solid white','#BBC8C0');
  board+=`<g transform="translate(78 838) scale(.8)" fill="#245B4B">${symbol}</g>`;
  board+=label(64,966,'OX MONOGRAM / forest accent');
  board+=`<g transform="translate(380 850) scale(.24)" fill="#000">${word}</g>`;
  board+=label(380,930,'187 px wordmark / 39 px lettering');
  for(const [i,size] of [16,24,32].entries()) {
    const data=fs.readFileSync(path.join(out,`favicon-${size}.png`)).toString('base64');
    board+=`<image x="${850+i*130}" y="850" width="${size}" height="${size}" href="data:image/png;base64,${data}"/>`+label(840+i*130,930,`${size} px`);
  }
  board+=label(64,1060,'Original path-drawn lettering • Black / White / Forest #245B4B • Actual-size favicon samples');
  // Presentation only contains embedded pixel samples; the 15 logo SVG exports are paths only.
  fs.writeFileSync(path.join(out,'presentation.svg'),svg(1400,1120,board));
  await sharp(Buffer.from(svg(1400,1120,board))).png().toFile(path.join(out,'presentation.png'));
  for(const name of ['horizontal','wordmark','symbol','avatar','favicon']) {
    for(const variant of ['black','white','color']) {
      const p=path.join(out,`${name}-${variant}.png`);
      const meta=await sharp(p).metadata();
      assert(meta.hasAlpha,`${p} must retain transparency`);
      const {data}=await sharp(p).ensureAlpha().raw().toBuffer({resolveWithObject:true});
      let transparent=0,opaque=0;
      for(let i=3;i<data.length;i+=4){if(data[i]===0)transparent++;if(data[i]===255)opaque++;}
      assert(transparent>0&&opaque>0,`${p} must contain artwork and transparent padding`);
    }
  }
  fs.writeFileSync(path.join(out,'verification.txt'),'PASS: 15 logo SVGs contain no text or raster images.\nPASS: 15 PNGs have visible artwork and transparent padding.\nPASS: favicon PNGs rendered at 16, 24, 32, 48 pixels.\n');
  console.log('Exported and checked 15 SVGs, 15 transparent PNGs, 4 favicon sizes, and presentation.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
