import { useEffect, useState } from 'react';
import { AlertTriangle, Download, FileSpreadsheet, FileText, Printer } from 'lucide-react';
import { COURSE, GROUP_MEMBERS } from '../data/slidesData';

function downloadMatrix() {
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const rows = [['ID', 'Name', 'Role', 'Pair', 'Assigned Pages', 'Section', 'Specific Contributions'], ...GROUP_MEMBERS.map((m) => [m.id, m.name, m.role, m.pair, m.pages, m.sections, m.contributions])];
  const csv = '\uFEFF' + rows.map((r) => r.map(esc).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: 'Group2_Member_Contributions_Matrix.csv' });
  a.click();
  URL.revokeObjectURL(url);
}

export function PdfHub({ onGoPrint }: { onGoPrint: () => void }) {
  const [status, setStatus] = useState<'checking' | 'ok' | 'missing'>('checking');
  useEffect(() => {
    fetch(COURSE.pdfPath, { method: 'HEAD' })
      .then((r) => setStatus(r.ok && (r.headers.get('content-type') ?? '').includes('pdf') ? 'ok' : 'missing'))
      .catch(() => setStatus('missing'));
  }, []);

  return (
    <div className="h-full overflow-y-auto thin-scroll">
      <div className="max-w-[1180px] mx-auto px-6 py-8 flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold">Mode 2 · PDF Archive</div>
            <h2 className="font-serif text-[44px] leading-none mt-2">Embedded PDF & Download Hub</h2>
            <p className="text-muted text-[13px] mt-2 max-w-[620px]">For offline review and Google Classroom verification. The PDF mirrors the 33 core pages plus 3 Back Matter pages.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a id="download-pdf-btn" href={COURSE.pdfPath} download className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold ${status === 'ok' ? 'bg-gold text-[#0d0d0f] hover:brightness-110' : 'bg-gold/30 text-ink/60 pointer-events-none'}`}>
              <Download size={16} /> Download Static PDF
            </a>
            <button id="download-matrix-btn" onClick={downloadMatrix} className="flex items-center gap-2 plaque-border px-5 py-3 text-[13px] hover:bg-gold/10">
              <FileSpreadsheet size={16} className="text-gold" /> Download Member Contributions Matrix
            </button>
          </div>
        </div>

        <div className="plaque-border bg-wall2 h-[72vh] min-h-[480px] relative">
          {status === 'ok' && <iframe title="Group 2 Art Appreciation Portfolio PDF" src={COURSE.pdfPath} className="w-full h-full" />}
          {status === 'checking' && <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-muted">Checking archive…</div>}
          {status === 'missing' && (
            <div className="absolute inset-0 flex items-center justify-center p-8 spotlight">
              <div className="max-w-[560px] text-center flex flex-col items-center gap-4">
                <AlertTriangle className="text-gold" size={30} strokeWidth={1.3} />
                <h3 className="font-serif text-[30px] leading-tight">The PDF hasn’t been placed in the archive yet</h3>
                <ol className="text-left text-[13px] text-muted space-y-2 list-decimal pl-5">
                  <li>Open <b className="text-ink">Export All Pages</b> mode and click <b className="text-ink">Export All 36 Pages to PDF</b>.</li>
                  <li>In Chrome’s print dialog choose <b className="text-ink">Save as PDF</b>, Margins: <b className="text-ink">None</b>, and tick <b className="text-ink">Background graphics</b>.</li>
                  <li>Save it as <code className="font-mono text-gold">Group2_Art_Appreciation_Portfolio.pdf</code> inside the project’s <code className="font-mono text-gold">/public</code> folder.</li>
                  <li>Refresh this tab — the viewer and download button activate automatically.</li>
                </ol>
                <button id="goto-print-btn" onClick={onGoPrint} className="flex items-center gap-2 bg-gold text-[#0d0d0f] px-5 py-2.5 text-[13px] font-semibold mt-2">
                  <Printer size={15} /> Go to Export All Pages
                </button>
                <div className="font-mono text-[10px] text-muted flex items-center gap-1.5"><FileText size={11} /> Expected path: public{COURSE.pdfPath}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
