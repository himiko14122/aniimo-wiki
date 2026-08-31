import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'out');
const EN_INDEX = path.join(OUT_DIR, 'en', 'index.html');
const ROOT_INDEX = path.join(OUT_DIR, 'index.html');

if (!fs.existsSync(EN_INDEX)) {
  console.log('No en/index.html found, skipping mirror.');
  process.exit(0);
}

// localePrefix 'always' 站点：Worker 已对根路径 `/` → `/en/` 做 rewrite，
// 根目录仅需保留首页 index.html。整树复制 out/en/ → out/ 会造成根路径
// {category}/ 与 /en/{category}/ 内容重复（SEO duplicate content + canonical 冲突），
// 属 content-locale-prefix-always-url-integrity 问题族第 8 复现。
// 修复方案：只复制 en/index.html → out/index.html（light-no-fire / terranigma 同型修复）。
fs.copyFileSync(EN_INDEX, ROOT_INDEX);

console.log('Mirrored en/index.html to root index.html');
