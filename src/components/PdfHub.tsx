import { useEffect, useState } from 'react';
import { AlertTriangle, Download, FileText, Moon, Printer, Sun } from 'lucide-react';
import { BACK_MATTER_COUNT, CORE_PAGE_COUNT, COURSE } from '../data/slidesData';

type PdfTheme = 'black' | 'parchment';

export function PdfHub({ onGoPrint }: { onGoPrint: () => void }) {
  const [pdfTheme, setPdfTheme] = useState<PdfTheme>('black');
  const [status, setStatus] = useState<'checking' | 'ok' | 'missing'>('checking');

  const activePdfPath = pdfTheme === 'black' ? COURSE.pdfBlackPath : COURSE.pdfParchmentPath;
  const activeFileName =
    pdfTheme === 'black'
      ? 'Group2_Art_Appreciation_Portfolio_Black.pdf'
      : 'Group2_Art_Appreciation_Portfolio_Parchment.pdf';

  useEffect(() => {
    let active = true;
    setStatus('checking');
    fetch(activePdfPath, { method: 'HEAD' })
      .then((r) => {
        if (!active) return;
        setStatus(r.ok && (r.headers.get('content-type') ?? '').includes('pdf') ? 'ok' : 'missing');
      })
      .catch(() => {
        if (active) setStatus('missing');
      });
    return () => {
      active = false;
    };
  }, [activePdfPath]);

  return (
    <div className="h-full overflow-y-auto thin-scroll">
      <div className="max-w-[1180px] mx-auto px-6 py-8 flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold">Mode 2 · PDF Archive</div>
            <h2 className="font-serif text-[44px] leading-none mt-2">Embedded PDF & Download Hub</h2>
            <p className="text-muted text-[13px] mt-2 max-w-[640px]">
              For offline review and Google Classroom verification. Choose either the Gallery Black or Editorial Parchment edition (each mirrors all {CORE_PAGE_COUNT} core pages plus {BACK_MATTER_COUNT} Back Matter pages).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex plaque-border p-0.5 bg-wall2" role="group" aria-label="PDF Edition Theme">
              <button
                id="pdf-theme-black-btn"
                type="button"
                onClick={() => setPdfTheme('black')}
                aria-pressed={pdfTheme === 'black'}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] transition-colors ${pdfTheme === 'black' ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/80 hover:text-gold'}`}
              >
                <Moon size={14} /> Gallery Black PDF
              </button>
              <button
                id="pdf-theme-parchment-btn"
                type="button"
                onClick={() => setPdfTheme('parchment')}
                aria-pressed={pdfTheme === 'parchment'}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] transition-colors ${pdfTheme === 'parchment' ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/80 hover:text-gold'}`}
              >
                <Sun size={14} /> Parchment PDF
              </button>
            </div>
            <a
              id="download-pdf-btn"
              href={activePdfPath}
              download={activeFileName}
              className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold ${status === 'ok' ? 'bg-gold text-[#0d0d0f] hover:brightness-110' : 'bg-gold/30 text-ink/60 pointer-events-none'}`}
            >
              <Download size={16} /> {pdfTheme === 'black' ? 'Download Black PDF' : 'Download Parchment PDF'}
            </a>
            <a
              id="download-matrix-btn"
              href={COURSE.contributionDocxPath}
              download="Group2_AA_Contribution_Matrix.docx"
              className="flex items-center gap-2 plaque-border px-5 py-3 text-[13px] hover:bg-gold/10 text-ink"
            >
              <FileText size={16} className="text-gold" /> Download Member Contributions Matrix
            </a>
          </div>
        </div>

        <div className="plaque-border bg-wall2 h-[72vh] min-h-[480px] relative">
          {status === 'ok' && (
            <iframe
              key={activePdfPath}
              title={`Group 2 Art Appreciation Portfolio (${pdfTheme === 'black' ? 'Gallery Black' : 'Parchment'}) PDF`}
              src={activePdfPath}
              className="w-full h-full"
            />
          )}
          {status === 'checking' && <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-muted">Checking archive…</div>}
          {status === 'missing' && (
            <div className="absolute inset-0 flex items-center justify-center p-8 spotlight">
              <div className="max-w-[560px] text-center flex flex-col items-center gap-4">
                <AlertTriangle className="text-gold" size={30} strokeWidth={1.3} />
                <h3 className="font-serif text-[30px] leading-tight">This PDF edition hasn’t been placed in the archive yet</h3>
                <ol className="text-left text-[13px] text-muted space-y-2 list-decimal pl-5">
                  <li>Open <b className="text-ink">Export All Pages</b> mode and click <b className="text-ink">Export All {CORE_PAGE_COUNT + BACK_MATTER_COUNT} Pages to PDF</b>.</li>
                  <li>In Chrome’s print dialog choose <b className="text-ink">Save as PDF</b>, Margins: <b className="text-ink">None</b>, and tick <b className="text-ink">Background graphics</b>.</li>
                  <li>Save it as <code className="font-mono text-gold">{activeFileName}</code> inside the project’s <code className="font-mono text-gold">/public</code> folder.</li>
                  <li>Refresh this tab — the viewer and download button activate automatically.</li>
                </ol>
                <button id="goto-print-btn" onClick={onGoPrint} className="flex items-center gap-2 bg-gold text-[#0d0d0f] px-5 py-2.5 text-[13px] font-semibold mt-2">
                  <Printer size={15} /> Go to Export All Pages
                </button>
                <div className="font-mono text-[10px] text-muted flex items-center gap-1.5"><FileText size={11} /> Expected path: public{activePdfPath}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
