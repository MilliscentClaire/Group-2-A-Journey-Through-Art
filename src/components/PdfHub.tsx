import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, Download, FileSpreadsheet, FileText, Moon, Printer, Sun } from 'lucide-react';
import { BACK_MATTER_COUNT, CORE_PAGE_COUNT, COURSE } from '../data/slidesData';

type ArchiveTab = 'black' | 'parchment' | 'matrix';
type PdfTheme = 'black' | 'parchment';

interface MatrixEntry {
  num: string;
  name: string;
  role: string;
  section: string;
  pages: string;
  deliverables: string[];
  status: string;
  statusNote?: string;
  assumed?: boolean;
}

const ROSTER_PAIRS: [string, string][] = [
  ['1. Blanqueza, Milliscent Claire Dasalla', '6. Datoon, Jannsen Gata'],
  ['2. Boletic, Althea Alabat', '7. De los Santos, Brian Rene R.'],
  ['3. Calalo, Hazel Mendoza', '8. Dizon, Sean Rey Olbes'],
  ['4. Casanes, Andrie Jimuel Bero', '9. Fernandez, Jake Russel Mañago'],
  ['5. Daco, Thomas Gabriel Tria', '10. Galvan, Jhov Joshua Espiritu'],
];

const MATRIX_ENTRIES: MatrixEntry[] = [
  {
    num: '1',
    name: 'Blanqueza, Milliscent Claire D.',
    role: 'Project Leader, UI Architect & Lead Editor',
    section: 'Front Matter, Back Matter & Overall Assembly',
    pages: 'Pages 1–3, REF-1–REF-6, ROLES',
    deliverables: [
      'Designed task dissemination workflow & unified curation rules across Group 2.',
      'Authored Cover Page (Pl. 01), Interactive TOC (Pl. 02), & Curatorial Statement (Pl. 03).',
      'Built the React interactive exhibition suite, ArtFrame display, and compiled both Black & Parchment 40-page PDF editions.',
      'Compiled auto-paginated Master Reference List (76 APA sources) & Image Credits; ran final QA.',
    ],
    status: 'Completed',
    statusNote: '(Verified)',
  },
  {
    num: '2',
    name: 'Calalo, Hazel M.',
    role: 'Content Researcher & Analyst (Part 1A)',
    section: 'Part 1: Understanding Art',
    pages: 'Pages 4–6',
    deliverables: [
      'Page 4: Defined art and its expressive nature with critical application to Van Gogh’s The Starry Night.',
      'Page 5: Explained the four core assumptions of art (Universal, Cultural, Not Nature, Experience).',
      'Page 6: Analyzed Personal, Social, and Physical functions plus philosophies of art using Picasso’s Guernica.',
      'Supplied verified museum sources and high-resolution artworks for Pages 4–6.',
    ],
    status: 'Completed',
  },
  {
    num: '3',
    name: 'Boletic, Althea A.',
    role: 'Content Researcher & Analyst (Part 1B)',
    section: 'Part 1: Understanding Art',
    pages: 'Pages 7–9',
    deliverables: [
      'Page 7: Authored comparative analysis on Subject vs. Content using Grant Wood’s American Gothic & Hopper’s Nighthawks.',
      'Page 8: Explained the Elements of Design with visual critique of Hokusai’s The Great Wave off Kanagawa.',
      'Page 9: Explained Principles of Design (Balance, Contrast, Emphasis, Movement, Rhythm, Unity) in Van Gogh’s The Bedroom.',
      'Supplied verified APA museum citations and artwork files for Pages 7–9.',
    ],
    status: 'Completed',
  },
  {
    num: '4',
    name: 'Daco, Thomas Gabriel T.',
    role: 'Content Researcher & Analyst (Part 2A)',
    section: 'Part 2: Western Art Traditions',
    pages: 'Pages 10–12',
    deliverables: [
      'Page 10: Surveyed major Western periods (Prehistoric Lascaux, Ancient Egypt, Classical Greece, Renaissance, Baroque).',
      'Page 11: Explained key characteristics, historical contexts, and why Western styles shifted across epochs.',
      'Page 12: Curated and critiqued Polykleitos’s Doryphoros, Augustus of Prima Porta, Da Vinci’s Mona Lisa, & Caravaggio’s Calling of St. Matthew.',
      'Provided institutional art history citations and curated images for Pages 10–12.',
    ],
    status: 'Completed',
  },
  {
    num: '5',
    name: 'Casanes, Andrie Jimuel B.',
    role: 'Content Researcher & Analyst (Part 2B)',
    section: 'Part 2: Western Art Traditions',
    pages: 'Pages 13–15',
    deliverables: [
      'Page 13: Featured modern Western masterworks (Monet’s Impression, Sunrise, Van Gogh’s The Starry Night, Picasso’s Les Demoiselles d’Avignon & Guernica).',
      'Page 14: Analyzed how religion, patronage, and revolutions shaped Western art (Caravaggio, David’s Oath of the Horatii, Picasso’s Guernica).',
      'Page 15: Examined how social class and industrialization shaped art (Millet’s The Gleaners, Monet’s Impression, Sunrise, Daumier’s The Third-Class Carriage).',
      'Provided verified museum references and APA citations for Pages 13–15.',
    ],
    status: 'Completed',
  },
  {
    num: '6',
    name: 'Dizon, Sean Rey O.',
    role: 'Content Researcher & Analyst (Part 3A)',
    section: 'Part 3: Asian & Philippine Art',
    pages: 'Pages 16–18',
    deliverables: [
      'Page 16: Explained Chinese Daoist landscape & Japanese Ukiyo-e / Zen traditions (Fan Kuan & Hokusai).',
      'Page 17: Analyzed devotion, mudras, and cosmic symbolism in Indian art through Chola Shiva Nataraja.',
      'Page 18: Conducted comparative visual and historical critique of Travelers Among Mountains and Streams vs. The Great Wave.',
      'Supplied museum references and high-resolution artworks for Pages 16–18.',
    ],
    status: 'Completed',
  },
  {
    num: '7',
    name: 'De los Santos, Brian Rene R.',
    role: 'Content Researcher & Analyst (Part 3B)',
    section: 'Part 3: Asian & Philippine Art',
    pages: 'Pages 19–21',
    deliverables: [
      'Page 19: Presented indigenous Philippine weaving traditions (T’nalak, Inabel, Yakan, Inaul, Pis Syabit, Dagmay).',
      'Page 20: Documented Philippine pottery, woodcarving & metalwork (Manunggul Jar, Bulul, Okir/Sarimanok, Lingling-o).',
      'Page 21: Analyzed Chinese, Indian & Southeast Asian trade influences (Pandanan Porcelain, Golden Tara, Laguna Copperplate, Maharadia Lawana).',
      'Provided museum/cultural archive citations for Pages 19–21.',
    ],
    status: 'Completed',
  },
  {
    num: '8',
    name: 'Fernandez, Jake Russel M.',
    role: 'Content Researcher & Cultural Analyst (Part 4A)',
    section: 'Part 4: Philippine & Bikolano Heritage',
    pages: 'Pages 22–24',
    deliverables: [
      'Page 22: Showcased Bikolano visual & applied arts: Abaca/Sinamay weaving and Tiwi terracotta pottery (Tiwi, Albay).',
      'Page 23: Highlighted Bikolano literary & performing arts: Ibalong Epic (Baltog, Handyong, Bantong) and Rawitdawit poetry.',
      'Page 24: Featured the Peñafrancia Fluvial Procession devotion to “Ina” along the Naga River in Naga City.',
      'Provided NCCA, CCP, and Bicol University references for Pages 22–24.',
    ],
    status: 'Completed',
  },
  {
    num: '9',
    name: 'Blanqueza, Milliscent Claire D.',
    role: 'Cultural Analyst (Part 4B · Assumed by Leader)',
    section: 'Part 4: Philippine & Bikolano Heritage',
    pages: 'Pages 25–27',
    deliverables: [
      'Assumed and completed all deliverables originally slotted for Member 4B (non-participating).',
      'Page 25: Analyzed historical resilience & nationalist awakening in Daraga Church (1773) and Juan Luna’s Spoliarium (1884).',
      'Page 26: Examined abaca/sinamay artisan livelihoods and Pantomina courtship dance as social cohesion in Bicol.',
      'Page 27: Formulated preservation strategies citing RA No. 10066 (Cagsawa Ruins) & UNESCO Schools of Living Traditions.',
    ],
    status: 'Completed',
    statusNote: '(Assumed by Leader)',
    assumed: true,
  },
  {
    num: '10',
    name: 'Datoon, Jannsen G.',
    role: 'Content Researcher & Contemporary Analyst (Part 5A)',
    section: 'Part 5: Contemporary Art & Innovation',
    pages: 'Pages 28–30',
    deliverables: [
      'Page 28: Defined Contemporary Philippine Art & contrasted it with traditional/modern art via Gerilya’s mural.',
      'Page 29: Surveyed contemporary forms: Installation, Performance, New Media, Mixed Media & Street Art (Leeroy New, Martha Atienza, Cajipe-Endaya, Gerilya).',
      'Page 30: Analyzed Appropriation (Demetrio dela Cruz’s Mishandle with Care) & Improvisation (Miguel Aquilizan’s Assemblages).',
      'Supplied NCCA, Google Arts & Culture, and artist archive links for Pages 28–30.',
    ],
    status: 'Completed',
  },
  {
    num: '11',
    name: 'Galvan, Jhov Joshua E.',
    role: 'Content Researcher & Contemporary Analyst (Part 5B)',
    section: 'Part 5: Contemporary Art & Innovation',
    pages: 'Pages 31–33',
    deliverables: [
      'Page 31: Conducted formal design critique of space and optical illusion in Mark Justiniani’s Arkipelago (2019).',
      'Page 32: Critiqued monumental scale and recycled materiality in Leeroy New’s Mebuyan’s Colony (2022).',
      'Page 33: Analyzed public murals as social commentary & advocacy for Lumad rights in Archie Oclos’s Lupang Ninuno (2018).',
      'Provided verified press and artist citations for Pages 31–33.',
    ],
    status: 'Completed',
  },
];

function MemberContributionsDocument() {
  return (
    <section aria-label="Group 2 Member Contributions Matrix Document" className="plaque-border bg-wall2/90 overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.6)]">
      {/* Header Banner */}
      <div className="bg-[#16161A] text-[#EDE7DB] p-6 sm:p-8 border-b-2 border-gold flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-[760px]">
          <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[#C5A059] font-semibold">
            Final Performance Task · Art Appreciation Portfolio
          </div>
          <h3 className="font-serif text-[26px] sm:text-[32px] font-semibold leading-tight mt-2 text-[#EDE7DB]">
            GROUP 2: OFFICIAL ROSTER, ASSIGNED ROLES &amp; SPECIFIC CONTRIBUTIONS
          </h3>
          <p className="font-serif italic text-[16px] sm:text-[18px] text-[#C5A059] mt-1">
            {COURSE.portfolioTitle}: {COURSE.portfolioSubtitle}
          </p>
        </div>
        <a
          href={COURSE.contributionDocxPath}
          download="Group2_AA_Contribution_Matrix.docx"
          className="inline-flex items-center gap-2 bg-[#C5A059] text-[#0d0d0f] px-4 py-2.5 text-[12px] font-semibold hover:brightness-110 transition shrink-0"
        >
          <Download size={14} /> Download .DOCX
        </a>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 plaque-border text-[12.5px]">
          <div className="grid grid-cols-[160px_1fr] border-b border-line md:border-r">
            <div className="bg-card/80 px-3.5 py-2.5 font-semibold text-ink border-r border-line">Group Number</div>
            <div className="px-3.5 py-2.5 text-ink/90">Group 2 (10 Active Contributors · 1 Slot Covered by Leader)</div>
          </div>
          <div className="grid grid-cols-[160px_1fr] border-b border-line">
            <div className="bg-card/80 px-3.5 py-2.5 font-semibold text-ink border-r border-line">Course &amp; Instructor</div>
            <div className="px-3.5 py-2.5 text-ink/90">{COURSE.course} · {COURSE.instructor}</div>
          </div>
          <div className="grid grid-cols-[160px_1fr] border-b border-line md:border-r">
            <div className="bg-card/80 px-3.5 py-2.5 font-semibold text-ink border-r border-line">Project Leader</div>
            <div className="px-3.5 py-2.5 text-ink/90">Milliscent Claire D. Blanqueza</div>
          </div>
          <div className="grid grid-cols-[160px_1fr] border-b border-line">
            <div className="bg-card/80 px-3.5 py-2.5 font-semibold text-ink border-r border-line">Portfolio Length</div>
            <div className="px-3.5 py-2.5 text-ink/90">{CORE_PAGE_COUNT} Core Pages + {BACK_MATTER_COUNT} Back Matter Pages (40 Total)</div>
          </div>
          <div className="grid grid-cols-[160px_1fr] border-b md:border-b-0 border-line md:border-r">
            <div className="bg-card/80 px-3.5 py-2.5 font-semibold text-ink border-r border-line">Output Platform</div>
            <div className="px-3.5 py-2.5 text-ink/90">Interactive Web Suite &amp; Dual Black / Parchment PDFs</div>
          </div>
          <div className="grid grid-cols-[160px_1fr]">
            <div className="bg-card/80 px-3.5 py-2.5 font-semibold text-ink border-r border-line">Submission &amp; URL</div>
            <div className="px-3.5 py-2.5 text-ink/90 truncate">
              Nov 21, 2026 ·{' '}
              <a href="https://group2ajourneythroughart.vercel.app/" target="_blank" rel="noreferrer" className="text-gold underline hover:brightness-110">
                group2ajourneythroughart.vercel.app
              </a>
            </div>
          </div>
        </div>

        {/* 1. Executive Summary */}
        <div className="space-y-2.5">
          <h4 className="font-serif text-[21px] font-semibold text-ink border-b border-gold/50 pb-1.5">
            1. Executive Summary of Task Distribution
          </h4>
          <p className="text-[13px] leading-relaxed text-muted">
            To ensure complete syllabus coverage and full accountability across Group 2 (Criteria 6: Individual Roles, Contributions, and Group Accountability), the portfolio is organized into {CORE_PAGE_COUNT} core pages across five curatorial wings plus {BACK_MATTER_COUNT} Back Matter pages (Master References, Originality Disclosure, and Member Roles):
          </p>
          <ul className="space-y-1.5 text-[13px] text-ink/90 pl-4 list-disc">
            <li>
              <b className="text-gold">Project Leader (Milliscent Claire D. Blanqueza):</b> Authored Front Matter (Pages 1–3) and Back Matter (REF-1–REF-6 &amp; ROLES), assumed and authored Part 4B (Pages 25–27) for the remaining non-participating slot, compiled all APA references and artwork credits, built the interactive exhibition suite and dual Black &amp; Parchment PDF editions, and ran final quality assurance.
            </li>
            <li>
              <b className="text-gold">Contributing Pair Members (9 Active Wing Contributors + Project Leader):</b> Nine active groupmates completed original explanations, analyses, artwork curation, and verified citations for Parts 1A, 1B, 2A, 2B, 3A, 3B, 4A, 5A, and 5B (3 pages each), while the Project Leader completed Part 4B so every section meets rubric expectations.
            </li>
          </ul>
        </div>

        {/* 2. Official Alphabetical Roster */}
        <div className="space-y-3">
          <h4 className="font-serif text-[21px] font-semibold text-ink border-b border-gold/50 pb-1.5">
            2. Official Group 2 Member Roster (Alphabetical Index — 10 Active Contributors)
          </h4>
          <div className="plaque-border overflow-hidden">
            <table className="w-full text-left border-collapse text-[13px]">
              <tbody>
                {ROSTER_PAIRS.map(([left, right], idx) => (
                  <tr key={left} className={`border-b border-line last:border-b-0 ${idx % 2 === 0 ? 'bg-card/45' : 'bg-wall/40'}`}>
                    <td className="px-4 py-2 font-serif text-[14.5px] text-ink border-r border-line w-1/2">{left}</td>
                    <td className="px-4 py-2 font-serif text-[14.5px] text-ink w-1/2">{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Detailed Breakdown Table */}
        <div className="space-y-3">
          <h4 className="font-serif text-[21px] font-semibold text-ink border-b border-gold/50 pb-1.5">
            3. Detailed Breakdown of Individual Roles &amp; Specific Contributions
          </h4>
          <div className="plaque-border overflow-x-auto thin-scroll">
            <table className="w-full min-w-[780px] text-left border-collapse text-[12px]">
              <thead>
                <tr className="bg-[#1C1C21] text-[#C5A059] font-serif text-[13px] border-b border-gold">
                  <th className="px-3 py-2.5 text-center w-10 border-r border-gold/30">#</th>
                  <th className="px-3.5 py-2.5 w-[210px] border-r border-gold/30">Member Name &amp; Role</th>
                  <th className="px-3.5 py-2.5 w-[180px] border-r border-gold/30">Assigned Section &amp; Pages</th>
                  <th className="px-3.5 py-2.5 border-r border-gold/30">Specific Contributions &amp; Deliverables Completed</th>
                  <th className="px-3 py-2.5 text-center w-[125px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_ENTRIES.map((e, idx) => (
                  <tr key={`${e.num}-${e.pages}`} className={`border-b border-line last:border-b-0 align-top ${idx % 2 === 0 ? 'bg-card/50' : 'bg-wall/35'}`}>
                    <td className="px-3 py-3 text-center font-serif font-semibold text-gold border-r border-line">{e.num}</td>
                    <td className="px-3.5 py-3 border-r border-line">
                      <div className="font-serif font-semibold text-[13.5px] text-ink leading-snug">{e.name}</div>
                      <div className="text-[11px] text-muted mt-1 leading-snug">Role: {e.role}</div>
                    </td>
                    <td className="px-3.5 py-3 border-r border-line">
                      <div className="font-semibold text-ink leading-snug">{e.section}</div>
                      <div className="font-mono text-[10.5px] text-gold mt-1">{e.pages}</div>
                    </td>
                    <td className="px-3.5 py-3 border-r border-line">
                      <ul className="space-y-1 text-ink/90 leading-snug">
                        {e.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-1.5">
                            <span className="text-gold shrink-0">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className={`inline-flex items-center gap-1 font-semibold text-[11px] ${e.assumed ? 'text-terra' : 'text-gold'}`}>
                        <CheckCircle2 size={12} /> {e.status}
                      </span>
                      {e.statusNote && (
                        <div className={`text-[10px] mt-0.5 ${e.assumed ? 'text-terra/90' : 'text-muted'}`}>{e.statusNote}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Originality & Disclosure Footer */}
        <div className="plaque-border bg-card/40 p-5 space-y-2.5">
          <h4 className="font-serif text-[19px] font-semibold text-ink">
            4. Originality, Citation Verification &amp; AI Use Disclosure Statement
          </h4>
          <ol className="text-[12.5px] text-muted space-y-1.5 list-decimal pl-5 leading-relaxed">
            <li><b className="text-ink">Originality of Explanations &amp; Critical Analysis:</b> All explanations, comparative breakdowns, and artwork critiques across Parts 1 to 5 reflect original student writing grounded in course lectures and verified academic, museum, and cultural heritage sources.</li>
            <li><b className="text-ink">Disclosure of AI Tool Usage:</b> AI assistance was used transparently as a support tool for scaffolding the interactive web portfolio and dual-theme PDF export pipeline, formatting references, and proofreading drafts for clarity and grammar.</li>
            <li><b className="text-ink">Human Verification &amp; Cultural Respect:</b> Historical dates, attributions, indigenous Philippine/Bikolano cultural descriptions, and APA references were manually checked before final submission.</li>
          </ol>
          <div className="pt-3 border-t border-line flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="font-mono text-[9.5px] uppercase tracking-widest text-muted">Prepared, Verified, and Submitted by</div>
              <div className="font-serif font-semibold text-[17px] text-ink mt-0.5">MILLISCENT CLAIRE D. BLANQUEZA</div>
              <div className="text-[11.5px] italic text-gold">Project Leader, Group 2 — Art Appreciation Final Portfolio</div>
            </div>
            <a
              href={COURSE.contributionDocxPath}
              download="Group2_AA_Contribution_Matrix.docx"
              className="inline-flex items-center gap-2 plaque-border px-4 py-2 text-[12px] text-ink hover:bg-gold/10 transition"
            >
              <FileSpreadsheet size={15} className="text-gold" /> Download Official .DOCX Matrix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PdfHub({ onGoPrint }: { onGoPrint: () => void }) {
  const [activeTab, setActiveTab] = useState<ArchiveTab>('black');
  const [lastPdfTheme, setLastPdfTheme] = useState<PdfTheme>('black');
  const [status, setStatus] = useState<'checking' | 'ok' | 'missing'>('checking');

  const activePdfPath = lastPdfTheme === 'black' ? COURSE.pdfBlackPath : COURSE.pdfParchmentPath;
  const activeFileName =
    lastPdfTheme === 'black'
      ? 'Group2_Art_Appreciation_Portfolio_Black.pdf'
      : 'Group2_Art_Appreciation_Portfolio_Parchment.pdf';

  const selectTab = (tab: ArchiveTab) => {
    setActiveTab(tab);
    if (tab === 'black' || tab === 'parchment') {
      setLastPdfTheme(tab);
    }
  };

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
      <div className="max-w-[1180px] mx-auto px-6 py-8 flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold">Mode 2 · PDF &amp; Contributions Archive</div>
            <h2 className="font-serif text-[44px] leading-none mt-2">Embedded PDF &amp; Download Hub</h2>
            <p className="text-muted text-[13px] mt-2 max-w-[660px]">
              View and download the Gallery Black or Editorial Parchment PDF ({CORE_PAGE_COUNT} core pages + {BACK_MATTER_COUNT} Back Matter pages), or review the complete Group 2 Member Contributions Matrix inline and download it as a Word document (.docx).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap plaque-border p-0.5 bg-wall2" role="tablist" aria-label="Archive Document View">
              <button
                id="pdf-theme-black-btn"
                type="button"
                role="tab"
                aria-selected={activeTab === 'black'}
                onClick={() => selectTab('black')}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] transition-colors ${activeTab === 'black' ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/80 hover:text-gold'}`}
              >
                <Moon size={14} /> Gallery Black PDF
              </button>
              <button
                id="pdf-theme-parchment-btn"
                type="button"
                role="tab"
                aria-selected={activeTab === 'parchment'}
                onClick={() => selectTab('parchment')}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] transition-colors ${activeTab === 'parchment' ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/80 hover:text-gold'}`}
              >
                <Sun size={14} /> Parchment PDF
              </button>
              <button
                id="view-matrix-tab-btn"
                type="button"
                role="tab"
                aria-selected={activeTab === 'matrix'}
                onClick={() => selectTab('matrix')}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] transition-colors ${activeTab === 'matrix' ? 'bg-gold text-[#0d0d0f] font-semibold' : 'text-ink/80 hover:text-gold'}`}
              >
                <FileSpreadsheet size={14} /> Member Contributions Matrix
              </button>
            </div>
            <a
              id="download-pdf-btn"
              href={activePdfPath}
              download={activeFileName}
              className={`flex items-center gap-2 px-5 py-3 text-[13px] font-semibold ${status === 'ok' ? 'bg-gold text-[#0d0d0f] hover:brightness-110' : 'bg-gold/30 text-ink/60 pointer-events-none'}`}
            >
              <Download size={16} /> {lastPdfTheme === 'black' ? 'Download Black PDF' : 'Download Parchment PDF'}
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

        {activeTab === 'matrix' ? (
          <MemberContributionsDocument />
        ) : (
          <>
            <div className="plaque-border bg-wall2 h-[72vh] min-h-[480px] relative">
              {status === 'ok' && (
                <iframe
                  key={activePdfPath}
                  title={`Group 2 Art Appreciation Portfolio (${lastPdfTheme === 'black' ? 'Gallery Black' : 'Parchment'}) PDF`}
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

            <MemberContributionsDocument />
          </>
        )}
      </div>
    </div>
  );
}
