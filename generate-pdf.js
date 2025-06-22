import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = `file://${path.resolve(__dirname, 'index.html')}`;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(filePath, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: 'CV_SARDELLA_EN.pdf',
        printBackground: true,
        width: '794px',
        height: `1684px`,
        margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
        pageRanges: '1',
    });

    await browser.close();
    console.log('✅ PDF generato correttamente come una sola pagina.');
})();
