/* =====================================================================
 *  MASTER CONTENT FILE — Group 2 Art Appreciation Portfolio
 *  ---------------------------------------------------------------------
 *  ✏️  Edit ONLY this file to change text, member names, images & refs.
 *  📁  Local images: drop files into /public/images/ using the names
 *      shown on each slide's footer (e.g. /images/Part1_Slide4.jpg).
 *      Local files are tried FIRST, then the Wikimedia URL, then a
 *      museum placeholder. See HOW_TO_EDIT_CONTENT.md.
 * ===================================================================== */
import type { Artwork, GroupMember, PartMeta, PartNumber, PortfolioSlide } from '../types';

/* ---------------------------------------------------------------------
 * 1. COURSE & GROUP DETAILS
 * ------------------------------------------------------------------- */
export const COURSE = {
  portfolioTitle: 'A Journey Through Art',
  portfolioSubtitle: 'From Western Art to Philippine and Bikolano Cultural Heritage',
  group: 'Group 2',
  course: 'GE 6 — Art Appreciation',
  section: 'Section: [Your Section]',
  instructor: 'Instructor: [Instructor Name]',
  school: '[University / College Name]',
  term: 'First Semester, A.Y. 2026–2027',
  pdfPath: '/Group2_Art_Appreciation_Portfolio_Black.pdf',
  pdfBlackPath: '/Group2_Art_Appreciation_Portfolio_Black.pdf',
  pdfParchmentPath: '/Group2_Art_Appreciation_Portfolio_Parchment.pdf',
  contributionDocxPath: '/AA_CONTRIBUTION.docx',
};

/** ✏️ Replace "Member 1A" etc. with real names — every slide updates automatically. */
export const GROUP_MEMBERS: GroupMember[] = [
  { id: 'L', name: 'Milliscent Claire D. Blanqueza', role: 'Group Leader · Lead Curator & Editor', pair: 'Leader', pages: '1–3, REF-1, REF-2, ROLES', sections: 'Front Matter & Back Matter', contributions: 'Cover, TOC, curatorial introduction; overall editing, layout direction, reference compilation, AI disclosure & final PDF export.' },
  { id: '1A', name: 'Hazel M. Calalo', role: 'Content Researcher & Analyst (Part 1A)', pair: 'Pair 1', pages: '4–6', sections: 'Part 1: Understanding Art (Items 1 & 2)', contributions: 'Researched and wrote original explanations defining art, its nature, and core assumptions; discussed and analyzed the functions and philosophies of art with cited visual examples and references.' },
  { id: '1B', name: 'Althea A. Boletic', role: 'Content Researcher & Analyst (Part 1B)', pair: 'Pair 1', pages: '7–9', sections: 'Part 1: Understanding Art (Items 3 & 4)', contributions: 'Authored comparative analysis explaining the difference between subject and content using specific artworks; presented and analyzed the elements and principles of design with illustrated artwork examples and proper citations.' },
  { id: '2A', name: 'Thomas Gabriel T. Daco', role: 'Content Researcher & Analyst (Part 2A)', pair: 'Pair 2', pages: '10–12', sections: 'Part 2: Western Art Traditions (Items 1, 2 & 3a)', contributions: 'Discussed major Western art periods/movements covered in class and explained their characteristics and historical contexts (Slides 10–11); curated and analyzed notable early/classical Western artists and their representative artworks with citations (Slide 12).' },
  { id: '2B', name: 'Milliscent Claire D. Blanqueza', role: 'Content Researcher & Analyst (Part 2B)', pair: 'Pair 2', pages: '13–15', sections: 'Part 2: Western Art Traditions (Items 3b & 4)', contributions: 'Featured notable modern Western artists and analyzed their key artworks (Slide 13); wrote critical analysis on how history, society, and culture shaped the styles, ideas, and purposes of Western art across periods, with full references (Slides 14–15).' },
  { id: '3A', name: 'Sean Rey O. Dizon', role: 'Content Researcher & Analyst (Part 3A)', pair: 'Pair 3', pages: '16–18', sections: 'Part 3: Asian & Philippine Art (Items 1 & 2)', contributions: 'Explained the distinct characteristics of Chinese, Japanese and Indian art traditions; conducted a comparative analysis of selected Asian artworks focusing on their cultural and historical significance, including citations.' },
  { id: '3B', name: 'Brian Rene R. De los Santos', role: 'Content Researcher & Analyst (Part 3B)', pair: 'Pair 3', pages: '19–21', sections: 'Part 3: Asian & Philippine Art (Items 3 & 4)', contributions: 'Presented and analyzed examples of Philippine indigenous art and traditional crafts; explained how Asian cultures and traditions influenced Philippine artistic practices using concrete visual examples and credible sources.' },
  { id: '4A', name: 'Jake Russel M. Fernandez', role: 'Content Researcher & Analyst (Part 4A)', pair: 'Pair 4', pages: '22–24', sections: 'Part 4: Philippine & Bikolano Heritage (Items 1 & 2)', contributions: 'Presented curated examples of Philippine and Bikolano visual, literary, performing, and applied arts (Slides 22–23); featured notable local Bikolano artists, artisans, traditional crafts, landmarks, and cultural traditions with cited sources (Slide 24).' },
  { id: '4B', name: 'Milliscent Claire D. Blanqueza', role: 'Content Researcher & Analyst (Part 4B)', pair: 'Pair 4', pages: '25–27', sections: 'Part 4: Philippine & Bikolano Heritage (Items 3 & 4)', contributions: 'Analyzed the historical, cultural, and social significance of the featured Philippine and Bikolano cultural works (Slides 25–26); formulated strategies and discussions on preserving and promoting local artistic heritage for future generations (Slide 27).' },
  { id: '5A', name: 'Jannsen G. Datoon', role: 'Content Researcher & Analyst (Part 5A)', pair: 'Pair 5', pages: '28–30', sections: 'Part 5: Contemporary Art & Innovation (Items 1 & 2)', contributions: 'Discussed contemporary Philippine art and its diverse forms (Slides 28–29); explained the concepts of appropriation and improvisation in contemporary practice using relevant visual examples and citations (Slide 30).' },
  { id: '5B', name: 'Jhov Joshua E. Galvan', role: 'Content Researcher & Analyst (Part 5B)', pair: 'Pair 5', pages: '31–33', sections: 'Part 5: Contemporary Art & Innovation (Items 3 & 4)', contributions: 'Critiqued how contemporary artists utilize the elements and principles of design in modern works (Slides 31–32); analyzed how contemporary art communicates ideas, addresses social issues, and responds to societal changes, with references (Slide 33).' },
];

const by = (id: string): string => {
  const m = GROUP_MEMBERS.find((x) => x.id === id)!;
  return id === 'L' ? `${m.name} — Group Leader` : `${m.name} — ${m.pair} · Member ${id}`;
};

/* ---------------------------------------------------------------------
 * 2. PART / WING METADATA
 * ------------------------------------------------------------------- */
export const PARTS: PartMeta[] = [
  { part: 0, label: 'Front Matter', title: 'Front Matter', range: 'Pages 1–3', blurb: 'Cover, interactive contents and curatorial introduction.' },
  { part: 1, label: 'Part 1', title: 'Understanding Art', range: 'Pages 4–9', blurb: 'Nature, assumptions, functions, philosophies, elements & principles.' },
  { part: 2, label: 'Part 2', title: 'Western Art Traditions', range: 'Pages 10–15', blurb: 'Classical antiquity to Modernism — masters, patrons and revolutions.' },
  { part: 3, label: 'Part 3', title: 'Asian and Philippine Art', range: 'Pages 16–21', blurb: 'China, Japan, India and the indigenous crafts of the archipelago.' },
  { part: 4, label: 'Part 4', title: 'Philippine and Bikolano Cultural Heritage', range: 'Pages 22–27', blurb: 'Abaca, Tiwi clay, Ibalong, Peñafrancia and living Bikol traditions.' },
  { part: 5, label: 'Part 5', title: 'Contemporary Art and Artistic Innovation', range: 'Pages 28–33', blurb: 'Installation, new media, appropriation and art as social commentary.' },
  { part: 6, label: 'Back Matter', title: 'References & Roles', range: 'REF-1 · REF-2 · ROLES', blurb: 'Master references, AI disclosure, rubric checklist and member roles.' },
];
const partTitle = (p: PartNumber) => PARTS[p].title;

/* ---------------------------------------------------------------------
 * 3. ARTWORK LIBRARY (Wikimedia Commons public-domain / open-access)
 * ------------------------------------------------------------------- */
const wm = (file: string, w = 1400) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${w}`;
const wmPage = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

function A(id: string, file: string, title: string, artist: string, yearOrPeriod: string, mediumOrOrigin: string, caption: string, calloutTags?: string[]): Artwork {
  return { id, title, artist, yearOrPeriod, mediumOrOrigin, imageUrl: file ? wm(file) : '', sourceUrl: file ? wmPage(file) : 'https://ncca.gov.ph/', caption, calloutTags };
}
/** Artwork with NO open-licence image online — shows museum placeholder until you add the local file. */
function L(id: string, title: string, artist: string, yearOrPeriod: string, mediumOrOrigin: string, caption: string, sourceUrl: string, calloutTags?: string[]): Artwork {
  return { id, title, artist, yearOrPeriod, mediumOrOrigin, imageUrl: '', sourceUrl, caption, calloutTags };
}

const LOCAL_IMAGES = import.meta.glob('../images/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const stem = (p: string) => (p.split('/').pop() ?? '').replace(/\.[^.]+$/, '').toLowerCase();
/** First local file whose name matches one of `names`; otherwise the /public path shown on the placeholder. */
const localImg = (...names: string[]): string => {
  for (const n of names) {
    const hit = Object.entries(LOCAL_IMAGES).find(([k]) => stem(k) === n.toLowerCase());
    if (hit) return hit[1];
  }
  return `/images/${names[0]}.jpg`;
};

const ART = {
  monaLisa: A('mona-lisa', 'Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg', 'Mona Lisa', 'Leonardo da Vinci', 'c. 1503–1519', 'Oil on poplar panel · Louvre, Paris', 'Sfumato modelling dissolves contour into atmosphere, making the sitter seem alive.'),
  starryNight: A('starry-night', 'Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', 'The Starry Night', 'Vincent van Gogh', '1889', 'Oil on canvas · MoMA, New York', 'Swirling impasto turns a night sky into a record of inner turbulence.'),
  greatWave: A('great-wave', 'Tsunami_by_hokusai_19th_century.jpg', 'The Great Wave off Kanagawa', 'Katsushika Hokusai', 'c. 1831', 'Woodblock print (ukiyo-e) · Japan', 'A clawing wave dwarfs boatmen while Mount Fuji sits small and still.'),
  schoolAthens: { ...A('school-athens', '"The_School_of_Athens"_by_Raffaello_Sanzio_da_Urbino.jpg', 'The School of Athens', 'Raphael', '1509–1511', 'Fresco · Apostolic Palace, Vatican', 'One-point perspective converges on Plato and Aristotle — Renaissance humanism made visible.'), localImagePath: localImg('School of Athens Raphael') },
  venus: A('birth-venus', 'Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg', 'The Birth of Venus', 'Sandro Botticelli', 'c. 1484–1486', 'Tempera on canvas · Uffizi, Florence', 'A pagan goddess revived for Medici humanists through flowing line.'),
  creationAdam: A('creation-adam', 'Michelangelo_-_Creation_of_Adam_(cropped).jpg', 'The Creation of Adam', 'Michelangelo Buonarroti', 'c. 1508–1512', 'Fresco · Sistine Chapel ceiling', 'The charged gap between two fingers is the most famous negative space in art.'),
  nightWatch: A('night-watch', 'The_Night_Watch_-_HD.jpg', 'The Night Watch', 'Rembrandt van Rijn', '1642', 'Oil on canvas · Rijksmuseum, Amsterdam', 'Baroque chiaroscuro turns a civic militia portrait into living drama.'),
  pearl: A('pearl-earring', '1665_Girl_with_a_Pearl_Earring.jpg', 'Girl with a Pearl Earring', 'Johannes Vermeer', 'c. 1665', 'Oil on canvas · Mauritshuis, The Hague', 'A single highlight on the pearl anchors the whole composition.'),
  impression: A('impression-sunrise', 'Claude_Monet,_Impression,_soleil_levant.jpg', 'Impression, Sunrise', 'Claude Monet', '1872', 'Oil on canvas · Musée Marmottan Monet', 'The painting that named Impressionism: a fleeting moment of light.'),
  liberty: A('liberty', 'Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple.jpg', 'Liberty Leading the People', 'Eugène Delacroix', '1830', 'Oil on canvas · Louvre, Paris', 'Romantic allegory of revolution — a pyramid of bodies driven upward.'),
  gleaners: A('gleaners', 'Jean-François_Millet_-_Gleaners_-_Google_Art_Project_2.jpg', 'The Gleaners', 'Jean-François Millet', '1857', 'Oil on canvas · Musée d’Orsay', 'Realism grants monumental dignity to the rural poor.'),
  thirdMay: A('third-may', 'El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg', 'The Third of May 1808', 'Francisco Goya', '1814', 'Oil on canvas · Museo del Prado', 'A faceless firing squad versus a lit, Christ-like victim: the birth of modern war painting.'),
  grandeJatte: A('grande-jatte', 'A_Sunday_on_La_Grande_Jatte,_Georges_Seurat,_1884.jpg', 'A Sunday on La Grande Jatte', 'Georges Seurat', '1884–1886', 'Oil on canvas · Art Institute of Chicago', 'Pointillist dots build rhythm, pattern and stillness.'),
  kandinsky: A('composition-vii', 'Vassily_Kandinsky,_1913_-_Composition_7.jpg', 'Composition VII', 'Wassily Kandinsky', '1913', 'Oil on canvas · Tretyakov Gallery', 'Pure colour and line as visual music — a manifesto of abstraction.'),
  fountain: A('fountain', 'Duchamp_Fountaine.jpg', 'Fountain (photo by Alfred Stieglitz)', 'Marcel Duchamp', '1917', 'Readymade (porcelain urinal)', 'The readymade asked: is art the object, or the idea and its context?'),
  parthenon: A('parthenon', 'The_Parthenon_in_Athens.jpg', 'The Parthenon', 'Iktinos & Kallikrates', '447–432 BCE', 'Marble temple · Acropolis, Athens', 'Classical proportion and harmony as civic and divine ideals.'),
  david: A('david', "Michelangelo's_David_-_right_view_2.jpg", 'David', 'Michelangelo Buonarroti', '1501–1504', 'Carrara marble · Galleria dell’Accademia', 'Contrapposto and anatomy celebrate human potential.'),
  kells: A('book-kells', 'KellsFol032vChristEnthroned.jpg', 'Book of Kells — Christ Enthroned', 'Insular monks', 'c. 800 CE', 'Illuminated manuscript · Trinity College Dublin', 'Medieval art served sacred text through dense ornament.'),
  calling: A('calling-matthew', 'The_Calling_of_Saint_Matthew-Caravaggo_(1599-1600).jpg', 'The Calling of Saint Matthew', 'Caravaggio', '1599–1600', 'Oil on canvas · San Luigi dei Francesi, Rome', 'A raking beam of light dramatises divine grace — Counter-Reformation theatre.'),
  wanderer: A('wanderer', 'Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg', 'Wanderer above the Sea of Fog', 'Caspar David Friedrich', 'c. 1818', 'Oil on canvas · Hamburger Kunsthalle', 'The Romantic sublime: the individual confronting vast nature.'),
  qingming: A('qingming', 'Along_the_River_During_the_Qingming_Festival_(detail_of_original).jpg', 'Along the River During the Qingming Festival (detail)', 'Zhang Zeduan', '12th c. Song Dynasty', 'Handscroll, ink & colour on silk · Palace Museum', 'A handscroll unrolls city life as a journey through time.'),
  fanKuan: A('fan-kuan', 'Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg', 'Travelers Among Mountains and Streams', 'Fan Kuan', 'c. 1000 CE', 'Hanging scroll, ink on silk · National Palace Museum', 'Tiny travellers beneath a monumental peak express Daoist humility.'),
  ryoanji: A('ryoanji', 'RyoanJi-Dry_garden.jpg', 'Ryōan-ji Dry Rock Garden', 'Zen Buddhist designers', 'late 15th c.', 'Karesansui garden · Kyoto', 'Raked gravel and fifteen stones cultivate emptiness and contemplation.'),
  tajMahal: A('taj-mahal', 'Taj_Mahal_(Edited).jpeg', 'Taj Mahal', 'Ustad Ahmad Lahauri (attrib.)', '1632–1653', 'White marble mausoleum · Agra, India', 'Mughal symmetry and pietra dura evoke a paradise garden.'),
  nataraja: A('nataraja', 'Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg', 'Shiva as Lord of the Dance (Nataraja)', 'Chola artisans', 'c. 950–1000 CE', 'Bronze · LACMA', 'Shiva dances the cosmos into creation and destruction within a ring of fire.'),
  borobudur: A('borobudur', 'Borobudur-Nothwest-view.jpg', 'Borobudur', 'Shailendra dynasty', '9th c. CE', 'Andesite stupa-mandala · Java', 'A walkable mandala: pilgrims ascend from desire to enlightenment.'),
  ajanta: A('ajanta', 'Ajanta_Padmapani.jpg', 'Bodhisattva Padmapani, Cave 1', 'Ajanta painters', 'c. 5th c. CE', 'Mural (tempera) · Ajanta, Maharashtra', 'Graceful tribhanga pose embodies compassion.'),
  spoliarium: { ...A('spoliarium', 'Juan_Luna_Spoliarium.jpg', 'Spoliarium', 'Juan Luna', '1884', 'Oil on canvas · National Museum of Fine Arts, Manila', 'Gold medal at Madrid (1884); read by ilustrados as an allegory of colonial oppression.'), localImagePath: localImg('Part4_Slide4_Spoliarium_Juan_Luna') },
  manunggul: A('manunggul', 'Manunggul_Jar.jpg', 'Manunggul Jar', 'Ancient Palawan potters', 'c. 890–710 BCE', 'Earthenware burial jar · Tabon Caves', 'Two souls ride a spirit boat to the afterlife — a National Treasure.'),
  bulul: A('bulul', 'Bulul_in_the_Ifugao_Museum,_Kiangan.jpg', 'Bulul (Rice Granary Guardian)', 'Ifugao carvers', '19th–20th c.', 'Narra wood · Cordillera', 'Seated rice deities guard the harvest and embody ancestral power.'),
  tnalak: L('tnalak', 'T’nalak Textile', "T'boli weavers of Lake Sebu", 'Living tradition', 'Abaca ikat, dream-woven · South Cotabato', 'Patterns are said to come to weavers like Lang Dulay in dreams from Fu Dalu, the abaca spirit.', 'https://ncca.gov.ph/', ['Ikat resist-dye', 'Dream-weaving', 'Abaca']),
  inabel: L('inabel', 'Inabel Binakol Blanket', 'Ilocano weavers', 'Living tradition', 'Cotton, pedal loom · Ilocos', 'Whirlwind binakol patterns were believed to confuse and repel malevolent spirits.', 'https://ncca.gov.ph/', ['Op-art geometry', 'Protective motif']),
  yakan: L('yakan', 'Yakan Seputangan', 'Yakan weavers of Basilan', 'Living tradition', 'Backstrap loom textile · Basilan/Zamboanga', 'Dense supplementary-weft diamonds mark identity and status.', 'https://ncca.gov.ph/', ['Supplementary weft', 'Bright geometry']),
  okir: L('okir', 'Okir Panolong of the Torogan', 'Maranao carvers', '18th–19th c.', 'Carved hardwood · Lanao del Sur', 'Flowing pako rabong (fern) and naga motifs adorn the royal torogan house.', 'https://ncca.gov.ph/', ['Curvilinear', 'Naga & Pako rabong']),
  daraga: A('daraga', 'Facade_and_bell_tower_of_Daraga_Church.jpg', 'Our Lady of the Gate Parish (Daraga Church)', 'Franciscan builders', '1772–1773', 'Volcanic stone Baroque church · Daraga, Albay', 'Ornate volcanic-tuff façade facing Mayon — a National Cultural Treasure.'),
  cagsawa: A('cagsawa', 'Cagsawa_Ruins_with_Mayon_in_the_background.jpg', 'Cagsawa Ruins with Mayon Volcano', 'Franciscan builders', '1724 (ruined 1814)', 'Belfry ruins · Daraga, Albay', 'A belfry survives the 1814 eruption — memory, faith and catastrophe.'),
  penafrancia: L('penafrancia', 'Traslacion & Fluvial Procession of Ina', 'Devotees of Our Lady of Peñafrancia', 'Since 1710', 'Marian devotion · Naga City', 'Voyadores carry the image of Ina through Naga and along the Bicol River every September.', 'https://www.penafrancia.org/', ['Fluvial procession', 'Voyadores', 'Ina']),
  abaca: L('abaca', 'Sinamay & Abaca Crafts', 'Bikolano weavers', 'Living tradition', 'Abaca fibre · Albay, Catanduanes, Sorsogon', 'Hand-stripped abaca becomes sinamay, bags, hats and slippers for global markets.', 'https://www.philfida.da.gov.ph/', ['Abaca fibre', 'Sinamay', 'Livelihood']),
  tiwi: L('tiwi', 'Tiwi Terracotta Pottery', 'Tiwi potters, Albay', 'Living tradition', 'Red earthenware · Tiwi, Albay', 'Generations of potters shape local clay into palayok, banga and decorative ware.', 'https://ncca.gov.ph/', ['Coil & paddle', 'Red clay']),
  ibalong: L('ibalong', 'Ibalong Festival Street Dance', 'Legazpi City performers', 'Revived 1990s', 'Festival performance · Legazpi, Albay', 'Heroes Baltog, Handyong and Bantong re-enact the epic’s triumph over monsters.', 'https://ncca.gov.ph/', ['Epic re-enactment', 'Costume & mask']),
  pantomina: L('pantomina', 'Pantomina (Dance of Doves)', 'Sorsogon & Bicol communities', 'Traditional', 'Courtship dance · Sorsogon', 'Couples mimic courting doves; showering bills honours newlyweds.', 'https://ncca.gov.ph/', ['Courtship', 'Kasanggayahan']),
  bencab: L('bencab-sabel', 'Sabel series', 'BenCab (Benedicto Cabrera), National Artist', '1965–present', 'Oil / mixed media', 'A Manila scavenger wrapped in plastic becomes an icon of displacement and dignity.', 'https://www.bencabmuseum.org/', ['Line', 'Drapery', 'Muted palette']),
  aquilizan: L('aquilizan', 'In-Flight (Project: Another Country)', 'Alfredo & Isabel Aquilizan', '2008–present', 'Participatory installation', 'Community-built miniature planes from recycled materials speak of migration and home.', 'https://www.qagoma.qld.gov.au/', ['Participation', 'Recycled material']),
  medalla: L('medalla', 'Cloud Canyons (Bubble Machine)', 'David Medalla', '1963–present', 'Kinetic auto-creative sculpture', 'Foam endlessly births itself — a pioneer of kinetic and participatory art.', 'https://www.tate.org.uk/art/artists/david-medalla-1601', ['Kinetic', 'Ephemeral']),
  santos: L('santiago-bose', 'Pasyon at Rebolusyon', 'Santiago Bose', '1980s', 'Mixed media / assemblage', 'Folk Catholic imagery is appropriated to speak of revolution and martial law.', 'https://ncca.gov.ph/', ['Appropriation', 'Folk iconography']),
  pacita: L('pacita-abad', 'Trapunto paintings', 'Pacita Abad', '1980s–2004', 'Stitched, padded & painted canvas', 'Quilted canvases with mirrors, beads and shells merge painting and textile.', 'https://www.pacitaabad.com/', ['Texture', 'Colour', 'Mixed media']),
  streetArt: L('street-art', 'Public Murals of Manila & Naga', 'Filipino street artists (e.g., Archie Oclos, Doktor Karayom)', '2010s–present', 'Aerosol & acrylic on walls', 'Monumental murals put farmers, indigenous peoples and workers on city walls.', 'https://ncca.gov.ph/', ['Scale', 'Public space']),
  digital: L('digital-art', 'Digital & New Media Works', 'Filipino new media artists', '2000s–present', 'Projection, code, AR/VR', 'Screens, sensors and code expand the canvas into time and interaction.', 'https://www.ccp.gov.ph/', ['Interactivity', 'Time-based']),
};

/* ---------------------------------------------------------------------
 * 4. SHARED REFERENCES (APA 7th)
 * ------------------------------------------------------------------- */
const R = {
  caslib: 'Caslib, B. N., Jr., Garing, D. C., & Casaul, J. A. R. (2018). Art appreciation. Rex Book Store.',
  ortiz: 'Ortiz, M. A. R., Erestain, T. D., Guillermo, A. G., Montano, M. C., & Pilar, S. A. (1976). Art: Perception and appreciation. Goodwill Trading.',
  dewey: 'Dewey, J. (1934). Art as experience. Minton, Balch & Company.',
  bell: 'Bell, C. (1914). Art. Chatto & Windus.',
  tolstoy: 'Tolstoy, L. (1995). What is art? (R. Pevear & L. Volokhonsky, Trans.). Penguin. (Original work published 1897)',
  arnheim: 'Arnheim, R. (1974). Art and visual perception: A psychology of the creative eye (New ed.). University of California Press.',
  gombrich: 'Gombrich, E. H. (1995). The story of art (16th ed.). Phaidon.',
  berger: 'Berger, J. (1972). Ways of seeing. Penguin.',
  gardner: 'Kleiner, F. S. (2020). Gardner’s art through the ages: A global history (16th ed.). Cengage Learning.',
  janson: 'Davies, P. J. E., Hofrichter, F. F., Jacobs, J. F., Roberts, A. M., & Simon, D. L. (2016). Janson’s history of art: The Western tradition (8th ed.). Pearson.',
  baxandall: 'Baxandall, M. (1988). Painting and experience in fifteenth-century Italy (2nd ed.). Oxford University Press.',
  hauser: 'Hauser, A. (1999). The social history of art (3rd ed., Vols. 1–4). Routledge. (Original work published 1951)',
  nochlin: 'Nochlin, L. (1971). Why have there been no great women artists? ARTnews, 69(9), 22–39, 67–71.',
  sullivan: 'Sullivan, M. (2018). The arts of China (6th ed.). University of California Press.',
  mason: 'Mason, P. (2005). History of Japanese art (2nd ed.). Pearson Prentice Hall.',
  okakura: 'Okakura, K. (1906). The book of tea. Fox, Duffield & Company.',
  craven: 'Craven, R. C. (1997). Indian art: A concise history (Rev. ed.). Thames & Hudson.',
  guillermo: 'Guillermo, A. G. (2001). Image to meaning: Essays on Philippine art. Ateneo de Manila University Press.',
  ccp: 'Tiongson, N. G. (Ed.). (1994). CCP encyclopedia of Philippine art (Vols. 1–10). Cultural Center of the Philippines.',
  fox: 'Fox, R. B. (1970). The Tabon caves: Archaeological explorations and excavations on Palawan Island, Philippines. National Museum.',
  flores: 'Flores, P. D. (1999). Painting history: Revisions in Philippine colonial art. University of the Philippines Office of Research Coordination & National Commission for Culture and the Arts.',
  realubit: 'Realubit, M. L. F. (1983). Bikols of the Philippines: History, literature and general notes. A.M.S. Press.',
  castano: 'Castaño, J. M. (1895). Breve noticia acerca del origen, religión, creencias y supersticiones de los antiguos indios del Bicol. In W. E. Retana (Ed.), Archivo del bibliófilo filipino (Vol. 1). Viuda de M. Minuesa de los Ríos.',
  ncca: 'National Commission for Culture and the Arts. (n.d.). Philippine cultural heritage. https://ncca.gov.ph/',
  ra10066: 'Republic Act No. 10066. (2010). National Cultural Heritage Act of 2009. Official Gazette of the Republic of the Philippines.',
  unesco: 'UNESCO. (2003). Convention for the safeguarding of the intangible cultural heritage. https://ich.unesco.org/en/convention',
  gamaba: 'National Commission for Culture and the Arts. (n.d.). Gawad sa Manlilikha ng Bayan (GAMABA). https://ncca.gov.ph/',
  philfida: 'Philippine Fiber Industry Development Authority. (n.d.). Abaca. https://www.philfida.da.gov.ph/',
  smith: 'Smith, T. (2011). Contemporary art: World currents. Pearson.',
  bishop: 'Bishop, C. (2012). Artificial hells: Participatory art and the politics of spectatorship. Verso.',
  bourriaud: 'Bourriaud, N. (2002). Relational aesthetics (S. Pleasance & F. Woods, Trans.). Les presses du réel.',
  benjamin: 'Benjamin, W. (2008). The work of art in the age of mechanical reproduction (J. A. Underwood, Trans.). Penguin. (Original work published 1936)',
  paul: 'Paul, C. (2015). Digital art (3rd ed.). Thames & Hudson.',
  wikimedia: 'Wikimedia Commons. (n.d.). Public-domain artwork reproductions [Image files]. https://commons.wikimedia.org/',
};

/* ---------------------------------------------------------------------
 * 4b. SUBMITTED CONTENT — PART 1, 2, 3, 4 & 5
 *     Local images are picked up automatically from /src/images/PART X/
 *     (matched by file name, any extension). Drop a missing file in with
 *     the name shown on its placeholder and it will appear.
 * ------------------------------------------------------------------- */
interface SubmittedOpts { names: string[]; commons?: string; pos?: string; tags?: string[]; notes?: { label: string; text: string }[] }
function S(id: string, title: string, artist: string, yearOrPeriod: string, mediumOrOrigin: string, caption: string, sourceUrl: string, o: SubmittedOpts): Artwork {
  return { id, title, artist, yearOrPeriod, mediumOrOrigin, imageUrl: o.commons ? wm(o.commons) : '', localImagePath: localImg(...o.names), caption, sourceUrl, objectPosition: o.pos, calloutTags: o.tags, notes: o.notes };
}

const P1 = {
  starryNight: S('starry-night', 'The Starry Night', 'Vincent van Gogh', '1889', 'Oil on canvas', 'The Starry Night — Vincent van Gogh, 1889. Oil on canvas.', 'https://www.moma.org/collection/works/79802', { names: ['The Starry Night'], commons: 'Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' }),
  guernica: S('guernica', 'Guernica', 'Pablo Picasso', '1937', 'Oil on canvas', 'Guernica — Pablo Picasso, 1937. Oil on canvas.', 'https://www.museoreinasofia.es/en/collections/artwork/guernica-0', { names: ['Guernica'] }),
  americanGothic: S('american-gothic', 'American Gothic', 'Grant Wood', '1930', 'Oil on beaverboard', 'American Gothic — Grant Wood, 1930. Oil on beaverboard.', 'https://commons.wikimedia.org/wiki/File%3AArt_Institute_of_Chicago-0955.jpg', { names: ['Part1_Slide4_AmericanGothic', 'American Gothic'], commons: 'Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg' }),
  nighthawks: S('nighthawks', 'Nighthawks', 'Edward Hopper', '1942', 'Oil on canvas', 'Nighthawks — Edward Hopper, 1942. Oil on canvas.', 'https://blog.artsper.com/en/a-closer-look/artwork-analysis-nighthawks-by-edward-hopper/', { names: ['Part1_Slide4_Nighthawks', 'Nighthawks'], commons: 'Nighthawks_by_Edward_Hopper_1942.jpg' }),
  greatWave: S('great-wave', 'The Great Wave off Kanagawa', 'Katsushika Hokusai', '1830–1832', 'Woodblock print, ink and color on paper', 'Under the Wave off Kanagawa — Katsushika Hokusai, 1830–1832. Woodblock print, ink and color on paper.', 'https://www.metmuseum.org/art/collection/search/45434', { names: ['Part1_Slide5_GreatWave', 'Part3_Slide1_Hokusai_GreatWave'], commons: 'Tsunami_by_hokusai_19th_century.jpg' }),
  bedroom: S('the-bedroom', 'The Bedroom', 'Vincent van Gogh', '1889', 'Oil on canvas', 'The Bedroom — Vincent van Gogh, 1889. Oil on canvas.', 'https://www.artic.edu/artworks/28560/the-bedroom', { names: ['Part1_Slide6_TheBedroom', 'The Bedroom'], commons: 'Vincent_van_Gogh_-_Van_Gogh\'s_Bedroom_in_Arles_-_Google_Art_Project.jpg' }),
};

const C1 = {
  starryNight: 'The Museum of Modern Art. (n.d.). Vincent van Gogh. The Starry Night. Saint Rémy, June 1889. https://www.moma.org/collection/works/79802',
  guernica: 'Museo Nacional Centro de Arte Reina Sofía. (n.d.). Guernica. https://www.museoreinasofia.es/en/collections/artwork/guernica-0',
  americanGothic: 'Whitney Museum of American Art. (n.d.). Grant Wood: American Gothic and other fables. https://commons.wikimedia.org/wiki/File%3AArt_Institute_of_Chicago-0955.jpg',
  nighthawks: 'The Art Institute of Chicago. (n.d.). Nighthawks. https://blog.artsper.com/en/a-closer-look/artwork-analysis-nighthawks-by-edward-hopper/',
  greatWave: 'The Metropolitan Museum of Art. (n.d.). Under the wave off Kanagawa (Kanagawa oki nami ura), also known as The Great Wave. https://www.metmuseum.org/art/collection/search/45434',
  bedroom: 'The Art Institute of Chicago. (n.d.). The bedroom. https://www.artic.edu/artworks/28560/the-bedroom',
};

const P2 = {
  // ---- Part 2A (Thomas Gabriel T. Daco) ----
  lascaux: S('lascaux', 'Lascaux Cave Paintings', 'Prehistoric Paleolithic artists', 'c. 40,000–15,000 BCE', 'Natural pigments (ochre, charcoal) on cave wall · Dordogne, France', 'Lascaux Cave Paintings — Prehistoric visual expression using natural pigments.', 'https://smarthistory.org/hall-of-bulls-lascaux/', { names: ['Lascaux Cave Paintings', 'Lascaux_Cave_Paintings'], commons: 'Lascaux_painting.jpg' }),
  nefertiti: S('nefertiti', 'Bust of Nefertiti', 'Thutmose', 'c. 3100–30 BCE (Amarna c. 1345 BCE)', 'Painted stucco-coated limestone · Neues Museum, Berlin', 'Bust of Nefertiti by Thutmose — Ancient Egyptian royal art & symbolism.', 'https://www.metmuseum.org/toah/hd/amar/hd_amar.htm', { names: ['Bust of Nefertiti', 'Bust_of_Nefertiti'], commons: 'Nofretete_Neues_Museum.jpg', pos: '50% 6%' }),
  doryphoros: S('doryphoros', 'Doryphoros (Spear Bearer)', 'Polykleitos', 'c. 450–440 BCE (Greece c. 900–31 BCE)', 'Roman marble copy after Greek bronze original · Naples Archaeological Museum', 'Doryphoros (Spear Bearer) by Polykleitos — Classical Greek idealized proportion & contrapposto.', 'https://smarthistory.org/polykleitos-doryphoros-spear-bearer/', { names: ['Doryphoros Polykleitos', 'Doryphoros_Polykleitos'], commons: 'Doryphoros_MAN_Napoli_Inv6011-2.jpg', pos: '50% 4%' }),
  augustus: S('augustus', 'Augustus of Prima Porta', 'Unknown Roman Artist', 'c. 20 BCE / 1st century CE', 'White marble · Vatican Museums, Rome', 'Augustus of Prima Porta — Roman imperial portraiture merging realism and civic power.', 'https://www.khanacademy.org/humanities/ancient-art-civilizations/roman/early-empire/a/augustus-of-primaporta', { names: ['Augustus of Prima Porta', 'Augustus_of_Prima_Porta'], commons: 'Statue-Augustus.jpg', pos: '50% 4%' }),
  monaLisa: S('mona-lisa-2a', 'Mona Lisa', 'Leonardo da Vinci', 'c. 1503–1506 (Renaissance, 14th–16th c.)', 'Oil on poplar panel · Musée du Louvre, Paris', 'Mona Lisa by Leonardo da Vinci — Renaissance Humanism, sfumato & naturalism.', 'https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana', { names: ['Mona Lisa by Da Vinci', 'Mona_Lisa_Da_Vinci'], commons: 'Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg', pos: '50% 6%' }),
  callingMatthew: S('calling-matthew-2a', 'The Calling of Saint Matthew', 'Caravaggio', 'c. 1599–1600 (Baroque, 1600–1700)', 'Oil on canvas · San Luigi dei Francesi, Rome', 'The Calling of Saint Matthew by Caravaggio — Baroque chiaroscuro, movement & intense emotion.', 'https://smarthistory.org/caravaggio-calling-of-st-matthew/', { names: ['The Calling of Saint Matthew Caravaggio', 'The_Calling_of_Saint_Matthew_Caravaggio'], commons: 'The_Calling_of_Saint_Matthew-Caravaggo_(1599-1600).jpg' }),

  // ---- Part 2B (Milliscent Claire D. Blanqueza) ----
  impressionSunrise: S('impression-sunrise-2b', 'Impression, Sunrise (Impression, soleil levant)', 'Claude Monet', '1872', 'Oil on canvas · Musée Marmottan Monet, Paris', 'Impression, Sunrise (1872) by Claude Monet — rapid visible brushstrokes capturing fleeting harbor light.', 'https://www.marmottan.fr/en/collections/claude-monet/', { names: ['Part2_Slide4_Impression_Sunrise_Monet'], commons: 'Claude_Monet,_Impression,_soleil_levant.jpg' }),
  grandeJatte: S('grande-jatte-2b', 'A Sunday on La Grande Jatte — 1884', 'Georges Seurat', '1884–1886', 'Oil on canvas · The Art Institute of Chicago', 'A Sunday on La Grande Jatte (1884–1886) by Georges Seurat — Neo-Impressionist divisionism & optical color mixing.', 'https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884', { names: ['Part2_Slide4_Grande_Jatte_Seurat'], commons: 'A_Sunday_on_La_Grande_Jatte,_Georges_Seurat,_1884.jpg' }),
  compositionVII: S('composition-vii-2b', 'Composition VII', 'Wassily Kandinsky', '1913', 'Oil on canvas · State Tretyakov Gallery, Moscow', 'Composition VII (1913) by Wassily Kandinsky — non-objective abstraction using color & rhythm as visual music.', 'https://www.khanacademy.org/humanities/art-history/art-history-1907-1960-age-of-global-conflict/expressionism/v/wassily-kandinsky--composition-vii--1913', { names: ['Part2_Slide4_Composition_VII_Kandinsky'], commons: 'Vassily_Kandinsky,_1913_-_Composition_7.jpg' }),
  fountain: S('fountain-2b', 'Fountain', 'Marcel Duchamp', '1917', 'Readymade porcelain urinal (photo by Alfred Stieglitz)', 'Fountain (1917) by Marcel Duchamp — Dadaist readymade shifting art from retinal beauty to conceptual inquiry.', 'https://www.tate.org.uk/art/artworks/duchamp-fountain-t07573', { names: ['Part2_Slide4_Fountain_Duchamp'], commons: 'Duchamp_Fountaine.jpg' }),
  thirdOfMay: S('third-of-may-2b', 'The Third of May 1808', 'Francisco de Goya', '1814', 'Oil on canvas · Museo Nacional del Prado, Madrid', 'The Third of May 1808 (1814) by Francisco Goya — unvarnished depiction of Napoleonic wartime executions.', 'https://www.museodelprado.es/en/the-collection/art-work/the-3rd-of-may-1808-in-madrid-or-the-executions/5e177409-2993-4240-97fb-847a02c6496c', { names: ['Part2_Slide5_Third_of_May_Goya'], commons: 'El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg' }),
  libertyLeading: S('liberty-leading-2b', 'Liberty Leading the People', 'Eugène Delacroix', '1830', 'Oil on canvas · Musée du Louvre, Paris', 'Liberty Leading the People (1830) by Eugène Delacroix — Romantic celebration of the July Revolution.', 'https://collections.louvre.fr/en/ark:/53355/cl010065872', { names: ['Part2_Slide6_Liberty_Leading_the_People_Delacroix'], commons: 'Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple.jpg' }),
  gleaners: S('the-gleaners-2b', 'The Gleaners (Des glaneuses)', 'Jean-François Millet', '1857', 'Oil on canvas · Musée d’Orsay, Paris', 'The Gleaners (1857) by Jean-François Millet — Realist elevation of rural working-class labor.', 'https://www.musee-orsay.fr/fr/oeuvres/des-glaneuses-342', { names: ['Part2_Slide6_The_Gleaners_Millet'], commons: 'Jean-François_Millet_-_Gleaners_-_Google_Art_Project_2.jpg' }),
};

const C2 = {
  smarthistoryLascaux: 'Smarthistory. (n.d.). Hall of Bulls, Lascaux [Art history essay]. https://smarthistory.org/hall-of-bulls-lascaux/',
  metAmarna: 'The Metropolitan Museum of Art. (n.d.). Egyptian art in the Amarna Period [Heilbrunn Timeline of Art History]. https://www.metmuseum.org/toah/hd/amar/hd_amar.htm',
  smarthistoryDoryphoros: 'Becker, J. A. (2015, August 8). Polykleitos, Doryphoros (Spear-Bearer). Smarthistory. https://smarthistory.org/polykleitos-doryphoros-spear-bearer/',
  khanAugustus: 'Becker, J. A. (2015, August 8). Augustus of Primaporta. Khan Academy. https://www.khanacademy.org/humanities/ancient-art-civilizations/roman/early-empire/a/augustus-of-primaporta',
  louvreMonaLisa: 'Musée du Louvre. (n.d.). Mona Lisa (Portrait of Lisa Gherardini, wife of Francesco del Giocondo). https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana',
  smarthistoryCalling: 'Smarthistory. (n.d.). Caravaggio, Calling of St. Matthew. https://smarthistory.org/caravaggio-calling-of-st-matthew/',
  ngaEducational: 'National Gallery of Art. (n.d.). Collection and educational resources on Renaissance and Baroque art. https://www.nga.gov/',
  marmottanMonet: 'Musée Marmottan Monet. (n.d.). Claude Monet: Impression, Sunrise (1872). https://www.marmottan.fr/en/collections/claude-monet/',
  articGrandeJatte: 'The Art Institute of Chicago. (n.d.). Georges Seurat: A Sunday on La Grande Jatte — 1884. https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884',
  khanKandinsky: 'Smarthistory. (2013). Vasily Kandinsky, Composition VII, 1913. Khan Academy. https://www.khanacademy.org/humanities/art-history/art-history-1907-1960-age-of-global-conflict/expressionism/v/wassily-kandinsky--composition-vii--1913',
  tateFountain: 'Tate. (n.d.). Marcel Duchamp: Fountain (1917, replica 1964). https://www.tate.org.uk/art/artworks/duchamp-fountain-t07573',
  pradoThirdOfMay: 'Museo Nacional del Prado. (n.d.). Francisco de Goya: The 3rd of May 1808 in Madrid, or "The Executions". https://www.museodelprado.es/en/the-collection/art-work/the-3rd-of-may-1808-in-madrid-or-the-executions/5e177409-2993-4240-97fb-847a02c6496c',
  louvreLiberty: 'Musée du Louvre. (n.d.). Eugène Delacroix: Liberty Leading the People (28 July 1830). https://collections.louvre.fr/en/ark:/53355/cl010065872',
  orsayGleaners: 'Musée d’Orsay. (n.d.). Jean-François Millet: Des glaneuses (The Gleaners). https://www.musee-orsay.fr/fr/oeuvres/des-glaneuses-342',
};

const P3 = {
  fanKuan: S('fan-kuan', 'Travelers Among Mountains and Streams', 'Fan Kuan', 'Northern Song Dynasty, ca. 1000 CE', 'Hanging scroll, ink and light colors on silk', 'Travelers Among Mountains and Streams — Fan Kuan, Northern Song Dynasty, ca. 1000 CE. Hanging scroll, ink and light colors on silk.', 'https://artsandculture.google.com/asset/WAHwkSr8lMK0uA', { names: ['Part3_Slide1_FanKuan_TravelersMountainsStreams', 'Part3_Slide3_FanKuan'], commons: 'Fan_Kuan_-_Travelers_Among_Mountains_and_Streams_-_Google_Art_Project.jpg' }),
  greatWave: S('great-wave-p3', 'Under the Wave off Kanagawa (The Great Wave)', 'Katsushika Hokusai', 'Edo period, ca. 1830–32', 'Woodblock print, ink and color on paper', 'Under the Wave off Kanagawa (The Great Wave) — Katsushika Hokusai, Edo period, ca. 1830–32. Woodblock print, ink and color on paper.', 'https://www.metmuseum.org/art/collection/search/39799', { names: ['Part3_Slide1_Hokusai_GreatWave', 'Part3_Slide3_GreatWave'], commons: 'Tsunami_by_hokusai_19th_century.jpg' }),
  nataraja: S('nataraja', 'Shiva as Lord of the Dance (Shiva Nataraja)', 'Chola artisans', 'Chola period, ca. late 11th century CE', 'Copper alloy (bronze) · Tamil Nadu, South India', 'Shiva as Lord of the Dance (Shiva Nataraja) — Chola period, Tamil Nadu, South India, ca. late 11th century CE. Copper alloy (bronze).', 'https://www.metmuseum.org/art/collection/search/39328', { names: ['Part3_Slide2_Nataraja_Chola'], commons: 'Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg' }),

  // ---- Slide 4 (Weaving & Textile Arts) ----
  tnalak: S('tnalak', 'T’nalak', 'T’boli community', 'Living tradition', 'Abaca ikat · Lake Sebu, South Cotabato', 'T’nalak weaver at Lake Sebu, South Cotabato.', 'https://commons.wikimedia.org/wiki/File:T%27nalak_weaver_at_Lake_Sebu,_South_Cotabato.jpg', {
    names: ['Part3_Slide4_Tboli_TnalakWeaver_LakeSebu'], commons: 'T\'nalak_weaver_at_Lake_Sebu,_South_Cotabato.jpg',
    notes: [
      { label: 'Featured', text: 'Made from abaca fibers by T’boli women. Its patterns are inspired by dreams and nature.' },
      { label: 'Cultural Context', text: 'T’nalak is a traditional cloth made by T’boli women in Lake Sebu, South Cotabato. It is woven from abaca fibers using the ikat technique. The designs are believed to be inspired by dreams.' },
      { label: 'Significance', text: 'T’nalak represents the T’boli people’s beliefs, traditions, and connection to nature. It is also used in important ceremonies and cultural celebrations.' },
    ] }),
  inabel: S('inabel', 'Inabel', 'Ilocano community', 'Living tradition', 'Cotton, traditional loom · Ilocos Region', 'Candon Inabel cotton loom weaving.', 'https://commons.wikimedia.org/wiki/File:Candon_Inabel_cotton_loom_weavingA.jpg', {
    names: ['Part3_Slide4_Ilocano_InabelWeaving'], commons: 'Candon_Inabel_cotton_loom_weavingA.jpg',
    notes: [
      { label: 'Featured', text: 'Woven from cotton using traditional looms. Its patterns show Ilocano culture and daily life.' },
      { label: 'Cultural Context', text: 'Inabel is a traditional textile made by Ilocano weavers in the Ilocos Region. It is woven using cotton threads and traditional wooden looms. Its designs include stripes and geometric patterns.' },
      { label: 'Significance', text: 'Inabel reflects Ilocano creativity and everyday life. It is commonly used for blankets, clothing, and household items, while preserving traditional weaving skills.' },
    ] }),
  yakan: S('yakan', 'Yakan Weaving', 'Yakan community', 'Living tradition', 'Backstrap loom textile · Basilan', 'Yakan weavers.', 'https://commons.wikimedia.org/wiki/File:Yakan_Weavers.jpg', {
    names: ['Part3_Slide4_Yakan_WeavingBasilan'], commons: 'Yakan_Weavers.jpg',
    notes: [
      { label: 'Featured', text: 'Made using colorful threads and traditional looms. Its patterns represent their culture and identity.' },
      { label: 'Cultural Context', text: 'Yakan weaving is a traditional craft of the Yakan people of Basilan. It is usually made by women using colorful threads and backstrap looms. The patterns are inspired by nature and their surroundings.' },
      { label: 'Significance', text: 'Its colorful geometric designs represent Yakan identity, culture, and traditions. Weaving is also an important skill passed down through generations.' },
    ] }),
  inaul: S('inaul', 'Inaul', 'Maguindanaon community', 'Living tradition', 'Handwoven cotton & threads · Maguindanao', 'Traditional Maguindanao Inaul weaving.', 'https://anthillfabrics.com/collections/inaul', {
    names: ['Part3_Slide4_Maguindanaon_InaulFabric'],
    notes: [
      { label: 'Featured', text: 'A handwoven textile made from cotton and other threads. Its colorful designs represent Maguindanaon traditions.' },
      { label: 'Cultural Context', text: 'Inaul is a traditional handwoven fabric of the Maguindanaon people. It is made using different threads and traditional looms, often used to create the malong, a long piece of cloth worn around the body.' },
      { label: 'Significance', text: 'Its colorful designs represent Maguindanaon identity, traditions, and cultural pride. It is worn during special occasions and cultural celebrations.' },
    ] }),
  pisSyabit: S('pis-syabit', 'Pis Syabit', 'Tausug community', 'Living tradition', 'Woven cloth · Sulu', 'Traditional Pis Syabit weaving.', 'https://www.exptravelph.com/post/charmed-by-barmm', {
    names: ['Part3_Slide4_Tausug_PisSyabit'],
    notes: [
      { label: 'Featured', text: 'A colorful cloth traditionally woven in Sulu. Its geometric patterns show Tausug culture and creativity.' },
      { label: 'Cultural Context', text: 'Pis Syabit is a traditional square-shaped cloth made by Tausug weavers in Sulu. It is woven using colorful threads and detailed geometric patterns. It is traditionally worn as a head covering.' },
      { label: 'Significance', text: 'Its intricate designs show the creativity and weaving skills of the Tausug people. It also represents their cultural identity and traditional craftsmanship.' },
    ] }),
  dagmay: S('dagmay', 'Dagmay', 'Mandaya community', 'Living tradition', 'Abaca ikat · Mindanao', 'Dagmay (Mandaya abaca textile).', 'https://philippinestudies.uk/mapping/items/show/35162', {
    names: ['Part3_Slide4_Mandaya_DagmayTextile'],
    notes: [
      { label: 'Featured', text: 'Made from abaca fibers using the ikat technique. Its designs reflect Mandaya beliefs and traditions.' },
      { label: 'Cultural Context', text: 'Dagmay is a traditional textile made by the Mandaya people of Mindanao. It is woven from abaca fibers using the ikat technique, where threads are tied and dyed before weaving.' },
      { label: 'Significance', text: 'Its patterns reflect Mandaya beliefs, traditions, and connection to their ancestors. It is an important part of their cultural identity and heritage.' },
    ] }),

  // ---- Slide 5 (Pottery, Carving & Metalwork) ----
  manunggul: S('manunggul', 'Manunggul Jar', 'Early Filipinos · Palawan', 'c. 890–710 BC', 'Clay burial jar · Manunggul Cave, Palawan', 'Manunggul Jar displayed at the Philippine National Museum of Anthropology.', 'https://commons.wikimedia.org/wiki/File:Manunggul_Jar_displayed_at_Philippine_National_Museum_of_Anthropology.jpg', {
    names: ['Part3_Slide5_ManunggulJar_Palawan'], commons: 'Manunggul_Jar_displayed_at_Philippine_National_Museum_of_Anthropology.jpg',
    notes: [
      { label: 'Featured', text: 'The Manunggul Jar is an ancient burial jar made of clay, discovered in Manunggul Cave, Palawan. Its lid features two human figures riding a boat.' },
      { label: 'Cultural Context', text: 'It was used by early Filipinos as a secondary burial vessel for the remains of the dead. It dates back to around 890–710 BC.' },
    ] }),
  bulul: S('bulul', 'Bulul Carving', 'Ifugao community · Northern Luzon', 'Traditional', 'Carved wood', 'Bulul (rice deity figure).', 'https://www.metmuseum.org/art/collection/search/626371', {
    names: ['Part3_Slide5_BululCarving_Ifugao'],
    notes: [
      { label: 'Featured', text: 'Bulul is a wooden human-like figure carved by the Ifugao people of Northern Luzon. It is commonly displayed in pairs of male and female figures.' },
      { label: 'Cultural Context', text: 'It is traditionally placed inside rice granaries and is involved in rituals related to rice farming and harvesting. The figures are carved from wood and consecrated through traditional ceremonies.' },
      { label: 'Significance', text: 'Bulul is believed to protect stored rice and bring a successful harvest. It also represents the Ifugao people’s respect for their ancestors and spiritual beliefs.' },
    ] }),
  okir: S('okir-sarimanok', 'Okir / Sarimanok', 'Maranao community · Lanao del Sur', 'Traditional', 'Wood carving & decorative art', 'Sarimanok (Maranao carving).', 'https://betterbarmm.com/crafts', {
    names: ['Part3_Slide5_Okir_Sarimanok_Maranao'],
    notes: [
      { label: 'Featured', text: 'Okir is a traditional decorative art featuring flowing patterns of plants, leaves, and geometric shapes. Sarimanok is a famous Maranao bird figure, usually shown holding a fish in its beak.' },
      { label: 'Cultural Context', text: 'These art forms are traditionally created by Maranao artisans in Lanao del Sur. Okir designs are used in wood carvings, houses, furniture, and other decorative objects.' },
      { label: 'Significance', text: 'Okir represents Maranao creativity and cultural identity, while the Sarimanok is associated with good fortune and is an important symbol of Maranao art and tradition.' },
    ] }),
  linglingo: S('lingling-o', 'Lingling-o', 'Cordillera community', 'Ancient', 'C-shaped ornament (jade, gold, stone)', 'Lingling-o, Museo Kordilyera.', 'https://museokordilyera.upb.edu.ph/museum-collections/lingling-o/', {
    names: ['Part3_Slide5_LinglingO_TraditionalPendant'],
    notes: [
      { label: 'Featured', text: 'Lingling-o is an ancient C-shaped ornament commonly made from jade, gold, stone, or other materials. It was traditionally worn as a necklace or pendant.' },
      { label: 'Cultural Context', text: 'It was used by early communities in the Cordillera region, including the Ifugao, Kalinga, and Bontoc peoples. It was worn by both men and women as personal jewelry.' },
      { label: 'Significance', text: 'Lingling-o is associated with fertility and protection. It also reflects the craftsmanship, beliefs, and social traditions of early Filipino communities.' },
    ] }),

  // ---- Slide 6 (Asian Influences on Philippine Art) ----
  chinesePorcelain: S('chinese-porcelain', 'Chinese Porcelain', 'Chinese traders & early Filipino communities', 'Early Maritime Trade', 'Imported cobalt blue-and-white ceramics', 'Chinese Blue and White Wares (Pandanan), National Museum of the Philippines.', 'https://www.nationalmuseum.gov.ph/2021/10/31/chinese-blue-and-white-wares-pandanan/', {
    names: ['Part3_Slide6_ChinesePorcelain', 'Part3_Slide6__Chinese porcelain'],
    notes: [
      { label: 'Chinese Influence', text: 'Chinese traders brought porcelain, ceramics, and other goods to the Philippines through early maritime trade. These items were exchanged for local products and became valuable household objects and signs of wealth. Chinese ceramic designs also influenced some local pottery styles.' },
      { label: 'Example', text: 'Imported ceramics used in Filipino homes and valued for their detailed designs.' },
    ] }),
  goldenTara: S('golden-tara', 'Golden Tara', 'Early Philippine–Hindu-Buddhist Tradition', 'Pre-colonial (c. 9th–13th c.)', 'Solid gold figurine · Agusan', 'Golden Tara of Agusan, Cultural Center of the Philippines.', 'https://epa.culturalcenter.gov.ph/3/82/2191/', {
    names: ['Part3_Slide6_GoldenTara', 'Part3_Slide6_Golden Tara'],
    notes: [
      { label: 'Indian Influence', text: 'Indian culture influenced Philippine art through Hindu-Buddhist beliefs, religious symbols, and literature. These influences reached the Philippines partly through trade and cultural connections with Indonesia and other Southeast Asian communities. Indian-inspired figures and stories became part of early Filipino culture.' },
      { label: 'Example', text: 'A gold figure showing Hindu-Buddhist artistic influences in early Philippine art.' },
    ] }),
  lagunaCopperplate: S('laguna-copperplate', 'Laguna Copperplate Inscription', 'Early Maritime Southeast Asia', '900 CE', 'Inscribed copper plate · Laguna', 'Laguna Copperplate Inscription, National Museum of the Philippines.', 'https://www.nationalmuseum.gov.ph/2022/09/20/the-9th-to-10th-century-archaeological-evidence-of-maritime-relations-between-the-philippines-and-the-islands-of-southeast-asia/', {
    names: ['Part3_Slide6_LagunaCopperplateInscription', 'Part3_Slide6_Laguna Copperplate Inscription'],
    notes: [
      { label: 'Southeast Asian Influence', text: 'Countries such as Indonesia, Malaysia, Thailand, and Vietnam influenced Philippine art through trade and cultural exchange. Their decorative patterns, artistic techniques, and writing traditions helped shape local crafts and cultural practices. These connections also influenced Philippine languages and traditional stories.' },
      { label: 'Example', text: 'An ancient document showing connections with Southeast Asian languages and writing systems.' },
    ] }),
  maharadiaLawana: S('maharadia-lawana', 'Maharadia Lawana', 'Maranao literary tradition', 'Folk Epic Tradition', 'Lanao prose epic adapted from the Ramayana', 'Maharadia Lawana: Maranao adaptation of the Ramayana tradition.', 'https://books.google.com/books/about/Maharadia_Lawana.html?id=8u7rAAAAMAAJ', {
    names: ['Part3_Slide6_MaharadiaLawana', 'Part3_Slide6_Maharadia Lawana'],
    notes: [
      { label: 'Example', text: 'A Maranao epic influenced by India\'s Ramayana, adapted into local storytelling.' },
      { label: 'Cultural Exchange', text: 'Philippine art was influenced by Asian countries through trade and cultural exchange. China, India, and Southeast Asia introduced new designs, materials, beliefs, and stories that Filipinos adapted into their own culture.' },
    ] }),
};

const C3 = {
  fanKuan: 'Fan, K. (ca. 1000). Travelers among mountains and streams [Hanging scroll, ink and light colors on silk]. National Palace Museum, Taipei, Taiwan. https://artsandculture.google.com/asset/WAHwkSr8lMK0uA',
  greatWave: 'Hokusai, K. (ca. 1830–32). Under the wave off Kanagawa (Kanagawa oki nami ura), or The Great Wave, from the series Thirty-six views of Mount Fuji [Woodblock print]. The Metropolitan Museum of Art, New York, NY, United States. https://www.metmuseum.org/art/collection/search/39799',
  lumen: 'Lumen Learning. (n.d.). Neo-Confucianism and Fan Kuan’s Travelers by Streams and Mountains. https://courses.lumenlearning.com/suny-purchase-artappreciation/?p=408',
  nataraja: 'The Metropolitan Museum of Art. (n.d.). Shiva as Lord of Dance (Nataraja) [Copper alloy]. https://www.metmuseum.org/art/collection/search/39328',
  khalid: 'Khalid, F. (2015, August 9). Shiva as Lord of the Dance (Nataraja). Smarthistory. https://smarthistory.org/shiva-as-lord-of-the-dance-nataraja/',
  tnalak: 'I Travel Philippines. (2014). T\'nalak weaver at Lake Sebu, South Cotabato [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:T%27nalak_weaver_at_Lake_Sebu,_South_Cotabato.jpg',
  inabel: 'Valenzuela400. (2024). Candon Inabel cotton loom weaving [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Candon_Inabel_cotton_loom_weavingA.jpg',
  yakan: 'Rauxilian. (2025). Yakan weavers [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Yakan_Weavers.jpg',
  inaul: 'ANTHILL Fabrics. (n.d.). Traditional Maguindanao Inaul weaving [Photograph]. ANTHILL Fabrics. https://anthillfabrics.com/collections/inaul',
  pisSyabit: 'Experience Travel PH. (n.d.). Traditional Pis Siyabit weaving [Photograph]. Experience Travel PH. https://www.exptravelph.com/post/charmed-by-barmm',
  dagmay: 'Mapping Philippine Material Culture. (n.d.). Dagmay (Mandaya abaca textile) [Photograph]. Mapping Philippine Material Culture. https://philippinestudies.uk/mapping/items/show/35162',
  manunggul: 'Nueva, J. S. (2019). Manunggul Jar displayed at Philippine National Museum of Anthropology [Photograph]. Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Manunggul_Jar_displayed_at_Philippine_National_Museum_of_Anthropology.jpg',
  bulul: 'The Metropolitan Museum of Art. (n.d.). Bulul (male rice deity figure) [Photograph]. The Metropolitan Museum of Art. https://www.metmuseum.org/art/collection/search/626371',
  sarimanok: 'BetterBARMM. (n.d.). Sarimanok (Maranao carving) [Photograph]. Living Crafts of the Bangsamoro. https://betterbarmm.com/crafts',
  linglingo: 'Museo Kordilyera. (n.d.). Lingling-o [Photograph]. Museo Kordilyera, University of the Philippines Baguio. https://museokordilyera.upb.edu.ph/museum-collections/lingling-o/',
  chinesePorcelain: 'National Museum of the Philippines. (2021). Chinese Blue and White Wares (Pandanan). https://www.nationalmuseum.gov.ph/2021/10/31/chinese-blue-and-white-wares-pandanan/',
  goldenTara: 'Cultural Center of the Philippines. (n.d.). Golden Tara of Agusan. CCP Encyclopedia of Philippine Art. https://epa.culturalcenter.gov.ph/3/82/2191/',
  maritimeRelations: 'National Museum of the Philippines. (2022). The 9th to 10th Century Archaeological Evidence of Maritime Relations Between the Philippines and the Islands of Southeast Asia. https://www.nationalmuseum.gov.ph/2022/09/20/the-9th-to-10th-century-archaeological-evidence-of-maritime-relations-between-the-philippines-and-the-islands-of-southeast-asia/',
  maharadiaLawana: 'Francisco, J. R. (1969). Maharadia Lawana: A Lanao Prose Version of the Ramayana, a Celebrated Hindu Poem. Philippine Folklore Society. https://books.google.com/books/about/Maharadia_Lawana.html?id=8u7rAAAAMAAJ',
};

const P4 = {
  abacaSinamay: S('abaca-sinamay-4a', 'Abaca and Sinamay Weaving', 'Bikolano weavers', 'Living tradition', 'Abaca fibers & sinamay · Bicol', 'Abaca fibers woven into sinamay for bags, decorations, and local crafts.', 'https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-cultural-communities-and-traditional-arts-sccta/central-cultural-communities/the-bicolanos/', { names: ['Part4_Slide1_Abaca_Sinamay_Weaving'] }),
  tiwiPottery: S('tiwi-pottery-4a', 'Tiwi Pottery (Tiwi, Albay)', 'Tiwi artisans · Tiwi, Albay', 'Living tradition', 'Local clay & ceramics · Tiwi, Albay', 'Local artisans use clay in Tiwi, Albay to create pots, jars, and decorative items.', 'https://systems.bicol-u.edu.ph/journal/assets/journal_pdf/3%20Ayo%2027_36.pdf', { names: ['Part4_Slide1_Tiwi_Pottery'] }),
  ibalongEpic: S('ibalong-epic-4a', 'Ibalong Epic', 'Bikolano folk tradition', 'Pre-colonial / Folk Epic', 'Oral epic · Heroes Baltog, Handyong & Bantong', 'Ibalong Epic — famous Bikolano folk story of heroes Baltog, Handyong, and Bantong.', 'https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/literary-arts/bikol-literature-in-the-philippines/', { names: ['Part4_Slide2_Ibalong_Epic'] }),
  bikolLiterature: S('bikolano-literature-4a', 'Rawitdawit & Bikolano Literature', 'Bikolano poets & writers', 'Traditional & living', 'Bikolano poetry & literary arts', 'Rawitdawit — traditional Bikolano poetry expressing personal feelings, experiences, and social ideas.', 'https://library.cspc.edu.ph/cgi-bin/koha/opac-detail.pl?', { names: ['Part4_Slide2_Bikolano_Literature'] }),
  penafrancia: S('penafrancia-4a', 'Peñafrancia Fluvial Procession', 'Devotees of Our Lady of Peñafrancia (Ina)', 'Every September · Traditional', 'Naga River pagoda procession · Naga City, Camarines Sur', 'Peñafrancia Fluvial Procession — carrying the image of "Ina" on a decorated pagoda along the Naga River.', 'https://epa.culturalcenter.gov.ph/3/82/2249/', { names: ['Part4_Slide3_Penafrancia_Fluvial_Procession'] }),
  // ---- Part 4B (Milliscent Claire D. Blanqueza) ----
  daragaChurch: S('daraga-church-4b', 'Our Lady of the Gate Parish Church (Daraga Church)', 'Bikolano artisans & Franciscan builders', '1773', 'Volcanic stone Churrigueresque Baroque church · Daraga, Albay', 'Daraga Church (1773) — volcanic-stone Churrigueresque Baroque architecture & National Cultural Treasure.', 'https://www.nationalmuseum.gov.ph/our-museums/bicol/', { names: ['Part4_Slide4_Daraga_Church'], commons: 'Facade_and_bell_tower_of_Daraga_Church.jpg' }),
  spoliarium4b: S('spoliarium-4b', 'Spoliarium', 'Juan Luna', '1884', 'Oil on canvas · National Museum of Fine Arts, Manila', 'Spoliarium (1884) by Juan Luna — Gold Medal at Madrid & allegory of colonial oppression.', 'https://nationalmuseum.gov.ph/nmfa-spoliarium-hall/', { names: ['Part4_Slide4_Spoliarium_Juan_Luna'], commons: 'Juan_Luna_Spoliarium.jpg' }),
  abacaLivelihood: S('bicol-abaca-livelihood-4b', 'Bicol Abaca & Indigenous Craft Livelihood', 'Bikolano weavers & artisans', 'Living tradition', 'Abaca fiber, sinamay & woven crafts · Catanduanes, Albay & Sorsogon', 'Bikolano abaca & woven handicraft livelihoods supporting regional identity and artisan households.', 'https://www.philfida.da.gov.ph/', { names: ['Part4_Slide5_Bicol_Abaca_Livelihood'], commons: 'Catanduanes cultural crafts October 11 2026 MSME indigenous heritage 05.jpg' }),
  pantominaDance: S('pantomina-dance-4b', 'Pantomina (Sinalampati — Bikolano Wedding & Courtship Dance)', 'Bikolano community performers', 'Traditional & living', 'Folk courtship dance · Sorsogon, Albay & Camarines Sur', 'Pantomina — traditional Bikolano courtship dance of doves fostering communal bonds and joy.', 'https://commons.wikimedia.org/wiki/File:Pantomina,_Bikol_wedding_dance,_Mar_2025.jpg', { names: ['Part4_Slide5_Pantomina_Bicol_Dance'], commons: 'Pantomina, Bikol wedding dance, Mar 2025.jpg' }),
  cagsawaRuins: S('cagsawa-ruins-4b', 'Cagsawa Ruins with Mayon Volcano', 'Bikolano builders & Franciscan friars', '1724 (erupted 1814)', 'Protected volcanic-stone belfry · Daraga, Albay', 'Cagsawa Ruins (Daraga, Albay) — National Cultural Treasure safeguarded under Republic Act No. 10066.', 'https://lawphil.net/statutes/repacts/ra2010/ra_10066_2010.html', { names: ['Part4_Slide6_Cagsawa_Ruins_Albay'], commons: 'Cagsawa_Ruins_with_Mayon_in_the_background.jpg' }),
  heritageCraftsPreservation: S('heritage-preservation-4b', 'Safeguarding Bikolano Traditional Crafts & Schools of Living Traditions', 'Bikolano master artisans & youth', 'Contemporary preservation', 'Cultural mapping, artisan mentorship & education · Bicol Region', 'Intergenerational craft transmission, cultural mapping & Schools of Living Traditions in Bicol.', 'https://ich.unesco.org/en/forms/the-school-of-living-traditions-slt-01739', { names: ['Part4_Slide6_Heritage_Preservation_Crafts'], commons: 'Catanduanes cultural crafts October 11 2026 MSME indigenous heritage 04.jpg' }),
};

const C4 = {
  bicolanos: 'National Commission for Culture and the Arts. (n.d.). The Bicolanos. https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-cultural-communities-and-traditional-arts-sccta/central-cultural-communities/the-bicolanos/',
  tiwiAyo: 'Bicol University. (2020). Ayo: Culture and heritage of Tiwi, Albay, through the lenses of cultural mapping. https://systems.bicol-u.edu.ph/journal/assets/journal_pdf/3%20Ayo%2027_36.pdf',
  bikolLiterature: 'Realubit, M. L. F. (n.d.). Bikol literature in the Philippines. National Commission for Culture and the Arts. https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/literary-arts/bikol-literature-in-the-philippines/',
  espinas: 'Espinas, M. B. (1996). Ibalong: The Bikol folk epic-fragment. UST Publishing House.',
  penafranciaCcp: 'Santos, D. C. S. (2020). Our Lady of Peñafrancia / Nuestra Señora de Peñafrancia / Ina. Cultural Center of the Philippines Encyclopedia of Philippine Art. https://epa.culturalcenter.gov.ph/3/82/2249/',
  nagaTourism: 'Naga City Investment and Tourism Promotions Office. (n.d.). A sea of faith: The Peñafrancia festivities in Naga City. https://tourism.naga.gov.ph/a-sea-of-faith-the-penafrancia-festivities-in-naga-city/',
  nmfaSpoliarium: 'National Museum of the Philippines. (n.d.). NMFA Spoliarium Hall: Juan Luna’s Spoliarium (1884). https://nationalmuseum.gov.ph/nmfa-spoliarium-hall/',
  nmpBicol: 'National Museum of the Philippines. (n.d.). National Museum of the Philippines — Bicol (Daraga Church & Cagsawa Ruins heritage). https://www.nationalmuseum.gov.ph/our-museums/bicol/',
  nhcpMarkers: 'National Historical Commission of the Philippines. (2008). Historical markers and built heritage conservation. https://nhcp.gov.ph/',
  philfida: 'Philippine Fiber Industry Development Authority. (n.d.). Abaca fiber industry & Bicol heritage crafts. https://www.philfida.da.gov.ph/',
  ra10066: 'Republic of the Philippines. (2010). Republic Act No. 10066: National Cultural Heritage Act of 2009. Lawphil Project. https://lawphil.net/statutes/repacts/ra2010/ra_10066_2010.html',
  unescoSlt: 'UNESCO. (2021). The School of Living Traditions (SLT) — Register of Good Safeguarding Practices. https://ich.unesco.org/en/forms/the-school-of-living-traditions-slt-01739',
};

const P5 = {
  // ---- Part 5A (Jannsen G. Datoon) ----
  makiUsisa: S('maki-usisa', 'Maki-Usisa, Makibaka, Makilahok', 'Gerilya', '2014', 'Acrylic Paint · Street Art / Mural', 'Maki-Usisa, Makibaka, Makilahok (2014) by Gerilya. Acrylic mural.', 'https://artsandculture.google.com/asset/maki-usisa-makibaka-makilahok/3wFCoYXmY04qSg', { names: ['Maki-Usisa, Makibaka, Makilahok EBD2', 'Part5_Slide2_StreetArt_Gerilya'] }),
  balete: S('balete-leeroy', 'Balete', 'Leeroy New', '2022', 'Installation Art · Bamboo & recycled materials', 'Balete (2022) by Leeroy New — large installation inspired by the roots of a Balete tree.', 'https://www.biennaleofsydney.art/participants/leeroy-new/', {
    names: ['Part5_Slide2_Balete_LeeroyNew'],
    notes: [
      { label: '1. Installation Art', text: 'Artworks arranged in a specific space to create an experience for viewers.' },
      { label: 'Example', text: 'Balete (2022) by Leeroy New.' },
      { label: 'Analysis', text: 'It uses recycled materials to create a large structure inspired by the roots of a Balete tree.' },
    ] }),
  aliensOfManila: S('aliens-of-manila', 'Aliens of Manila', 'Leeroy New', 'Contemporary', 'Performance Art · Wearable sculptures & costumes', 'Aliens of Manila by Leeroy New — wearable sculptures, costumes, and performances.', 'https://www.biennaleofsydney.art/participants/leeroy-new/', {
    names: ['Part5_Slide2_AliensOfManila_LeeroyNew'],
    notes: [
      { label: '2. Performance Art', text: 'Art expressed through live actions, movements, and interaction with an audience.' },
      { label: 'Example', text: 'Aliens of Manila by Leeroy New.' },
      { label: 'Analysis', text: 'It combines wearable sculptures, costumes, and performances to explore identity and everyday life.' },
    ] }),
  ourIslands: S('our-islands-atienza', 'Our Islands', 'Martha Atienza', 'Contemporary', 'Digital / New Media Art · Video installation', 'Our Islands by Martha Atienza — video artwork presenting environmental and social issues.', 'https://www.scu.edu/desaisset/exhibitions/atienza/', {
    names: ['Part5_Slide2_OurIslands_MarthaAtienza'],
    notes: [
      { label: '3. Digital / New Media Art', text: 'Art that uses technology, video, digital images, and other electronic media.' },
      { label: 'Example', text: 'Our Islands by Martha Atienza.' },
      { label: 'Analysis', text: 'It uses video to present environmental and social issues affecting island communities.' },
    ] }),
  cajipeEndaya: S('mixed-media-cajipe', 'Mixed-Media Works', 'Imelda Cajipe-Endaya', 'Contemporary', 'Mixed Media Art · Textiles, found objects & collage', 'Mixed-media works by Imelda Cajipe-Endaya combining textiles and found objects.', 'https://www.artfairphilippines.com/afp2026/projects2.php?id=1', {
    names: ['Part5_Slide2_MixedMedia_ImeldaCajipeEndaya'],
    notes: [
      { label: '4. Mixed Media Art', text: 'Art that combines different materials and artistic techniques in one artwork.' },
      { label: 'Example', text: 'Mixed-media works by Imelda Cajipe-Endaya.' },
      { label: 'Analysis', text: 'She combines textiles, found objects, and other materials to express women’s experiences and Filipino identity.' },
    ] }),
  streetArtGerilya: S('street-art-gerilya', 'Maki-Usisa, Makibaka, Makilahok', 'Gerilya', '2014', 'Street Art / Murals · Acrylic on public wall', 'Maki-Usisa, Makibaka, Makilahok (2014) by Gerilya — street mural.', 'https://artsandculture.google.com/story/gerilya-filipino-street-art/MQVhBVB_LBkA8A', {
    names: ['Part5_Slide2_StreetArt_Gerilya', 'Maki-Usisa, Makibaka, Makilahok EBD2'],
    notes: [
      { label: '5. Street Art / Murals', text: 'Art created on public walls and other visible spaces to communicate ideas and messages.' },
      { label: 'Example', text: 'Maki-Usisa, Makibaka, Makilahok (2014) by Gerilya.' },
      { label: 'Analysis', text: 'It uses public spaces to promote social awareness and encourage people to participate in society.' },
    ] }),
  mishandleWithCare: S('mishandle-with-care', 'Mishandle with Care', 'Demetrio dela Cruz', '2020', 'Appropriation · Reinterpreted Filipino paintings', 'Mishandle with Care (2020) by Demetrio dela Cruz.', 'https://www.demetrioart.com/portfolios/2020-mishandle-with-care/', { names: ['Part5_Slide3_MishandleWithCare_DemetrioDelaCruz'], tags: ['Appropriation'] }),
  miguelAssemblage: S('miguel-aquilizan-assemblage', 'Assemblage Artworks', 'Miguel Aquilizan', 'Contemporary', 'Improvisation · Discarded & ordinary objects', 'Miguel Aquilizan’s assemblage artworks using discarded and ordinary objects.', 'https://www.miguelaquilizan.com/about', { names: ['Part5_Slide3_MiguelAquilizan_Assemblage'], tags: ['Improvisation'] }),

  // ---- Part 5B (Jhov Joshua E. Galvan) ----
  arkipelago: S('arkipelago', 'Arkipelago', 'Mark Justiniani', '2019', 'Mixed media installation (mirrors, glass, metal frames, LED lights, found objects)', 'Arkipelago — Mark Justiniani, 2019. Mixed media installation.', 'https://lifestyle.inquirer.net/339984/at-58th-venice-biennale-philippine-arkipelago-rises/', { names: ['arkipelago'] }),
  mebuyan: S('mebuyans-colony', 'Mebuyan’s Colony', 'Leeroy New', '2022', 'Mixed media installation (bamboo, recycled plastic, cable ties)', 'Mebuyan’s Colony — Leeroy New, 2022. Mixed media installation.', 'https://www.tatlerasia.com/lifestyle/arts/leeroy-new-mebuyan-colony-and-mebuyan-vessel', { names: ['mebuyanscolony'] }),
  lupang: S('lupang-ninuno', 'Lupang Ninuno (Mural advocating for Lumad rights)', 'Archie Oclos', '2018', 'Mural', 'Lupang Ninuno — Archie Oclos, 2018. Mural advocating for Lumad rights.', 'https://archieoclos.com/passion-projects-slides/#ninuno', { names: ['lupangninuno'] }),
};

const C5 = {
  nccaContext: 'National Commission for Culture and the Arts. (n.d.). In focus: Philippine arts in context. https://ncca.gov.ph/about-culture-and-arts/in-focus/philippine-arts-in-context/',
  nccaFlux: 'National Commission for Culture and the Arts. (n.d.). Crossbred and emigre: Visual art in a flux. https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/visual-arts/crossbred-and-emigre-visual-art-in-a-flux/',
  gerilyaStory: 'Filipino Street Art Project. (n.d.). Gerilya. Google Arts & Culture. https://artsandculture.google.com/story/gerilya-filipino-street-art/MQVhBVB_LBkA8A',
  makiUsisaAsset: 'Google Arts & Culture. (n.d.). Maki-Usisa, Makibaka, Makilahok – Gerilya. https://artsandculture.google.com/asset/maki-usisa-makibaka-makilahok/3wFCoYXmY04qSg',
  leeroyNew: 'Biennale of Sydney. (2022). Leeroy New. https://www.biennaleofsydney.art/participants/leeroy-new/',
  ourIslands: 'de Saisset Museum. (2025). Martha Atienza: Our Islands. Santa Clara University. https://www.scu.edu/desaisset/exhibitions/atienza/',
  cajipeEndaya: 'Art Fair Philippines. (2026). Imelda Cajipe Endaya: A Votary’s Art. https://www.artfairphilippines.com/afp2026/projects2.php?id=1',
  mishandleWithCare: 'Demetrio dela Cruz. (2020). Mishandle with Care. https://www.demetrioart.com/portfolios/2020-mishandle-with-care/',
  miguelAquilizan: 'Miguel Aquilizan. (n.d.). About. https://www.miguelaquilizan.com/about',
  arkipelago: 'Baga-Reyes, V. (2019, July 8). At 58th Venice Biennale, Philippine \'Arkipelago\' rises. Philippine Daily Inquirer. https://lifestyle.inquirer.net/339984/at-58th-venice-biennale-philippine-arkipelago-rises/',
  mebuyan: 'Sorilla IV, F. (2023, April 27). Leeroy New on his monumental works, Mebuyan\'s Colony and Mebuyan\'s Vessel. Tatler Asia. https://www.tatlerasia.com/lifestyle/arts/leeroy-new-mebuyan-colony-and-mebuyan-vessel',
  lupang: 'Oclos, A. (2018). Passion Projects: Lupang Ninuno. Archie Oclos. https://archieoclos.com/passion-projects-slides/#ninuno',
};

/* ---------------------------------------------------------------------
 * 5. THE 33 CORE PAGES + BACK MATTER PAGES
 * ------------------------------------------------------------------- */
type Draft = Omit<PortfolioSlide, 'partTitle'>;

const CORE_DRAFTS: Draft[] = [
  // ======================= FRONT MATTER =======================
  {
    pageNumber: 1, partNumber: 0, slideLayout: 'cover',
    title: 'A Journey Through Art',
    subtitle: 'From Western Art to Philippine and Bikolano Cultural Heritage',
    assignedMember: by('L'),
    conciseExplanation: ['A digital art portfolio and interactive exhibition presented by Group 2 in partial fulfilment of the requirements in Art Appreciation.'],
    criticalAnalysis: { heading: 'Exhibition Premise', content: 'Five curatorial wings trace how human beings have made meaning through images, objects and performances — from the marble ideals of Athens to the abaca looms and river processions of Bicol.' },
    artworks: [ART.schoolAthens],
    citations: [R.wikimedia],
  },
  {
    pageNumber: 2, partNumber: 0, slideLayout: 'toc',
    title: 'Table of Contents',
    subtitle: 'Choose a curatorial wing to begin your visit',
    assignedMember: by('L'),
    conciseExplanation: ['Every wing is clickable. Core pages 1–33 satisfy the 20–40 page requirement; References & Roles are Back Matter and excluded from the count.'],
    criticalAnalysis: { heading: 'How to Read This Exhibition', content: 'Each plate pairs an original explanation with a highlighted Curator’s Critical Analysis and full APA citations.' },
    artworks: [],
    citations: [],
  },
  {
    pageNumber: 3, partNumber: 0, slideLayout: 'intro',
    title: 'Curatorial Statement',
    subtitle: 'Portfolio Introduction & Thesis',
    assignedMember: by('L'),
    conciseExplanation: [
      'Art is never made in a vacuum. Every brushstroke, woven thread and carved figure carries the beliefs, struggles and hopes of the people who made it. This portfolio follows that thread across time and geography — beginning with the foundational vocabulary of art, moving through the Western canon, crossing into Asia and the Philippine archipelago, and arriving home in Bicol before opening onto the contemporary present.',
      'Our thesis is simple but demanding: artistic expression evolves through dialogue. Western humanism, Asian spirituality, indigenous Filipino craft and Bikolano devotion are not separate stories but conversations shaped by trade, faith, colonisation, resistance and innovation. To appreciate art is to listen to those conversations critically.',
    ],
    criticalAnalysis: {
      heading: 'Why a Journey, Not a Hierarchy',
      content: 'Traditional surveys placed European painting at the summit and treated Asian or indigenous work as “craft.” We deliberately reject that ladder. A T’nalak cloth and a Renaissance fresco are both sophisticated visual systems; each must be read on its own cultural terms.',
      culturalHistoricalContext: 'This approach follows Filipino critics such as Alice Guillermo, who argued that meaning in Philippine art emerges from its social and historical ground.',
    },
    artworks: [ART.spoliarium],
    citations: [R.guillermo, R.gombrich, R.berger],
  },

  // ======================= PART 1 =======================
  {
    pageNumber: 4, partNumber: 1, slideLayout: 'single-masterpiece',
    title: 'What Is Art? Understanding Its Meaning and Nature',
    subtitle: 'Definition & Nature of Art',
    assignedMember: by('1A'),
    conciseExplanation: [
      'Art is a way of expression, allowing people to share their opinions, emotions, experiences and thoughts. Art takes many different forms including; painting, sculpture, music literature, dancing, architecture and many more. However art is not just creating something beautiful, it is also a way of conveying messages and sharing thoughts about life.',
    ],
    criticalAnalysis: {
      heading: 'Application: The Starry Night',
      content: 'The painting "The Starry Night" by Van Gogh portrays the idea that art can be used not only to reflect reality. Although there are swirling night skies and villages, the artist used the power of imagination and applied certain forms, colors and techniques which means that art can transform simple moments into something amazing and meaningful. This proves that the point of an artist is not to reflect reality, but provide their own interpretations.',
    },
    artworks: [P1.starryNight],
    citations: [C1.starryNight],
  },
  {
    pageNumber: 5, partNumber: 1, slideLayout: 'design-breakdown',
    title: 'Understanding the Four Core Assumptions of Art',
    subtitle: 'Core Assumptions of Art',
    assignedMember: by('1A'),
    conciseExplanation: [
      'Art is Universal - Art is found in different societies and time periods. People from different backgrounds and cultures use art to express their feelings, thoughts and experiences.',
      'Art is Cultural - Art is the representation of traditions, beliefs, values and identity of the culture it was created in.',
      'Art is not Nature - Although nature can be a source of inspiration, Art is man made, creative and intentional. The artists transform their ideas and observations into a piece of art.',
      'Art involves Experience - Art goes beyond the act of producing an artwork; it also means experiencing its creation process, perception, interpretation, and appreciating it.',
    ],
    criticalAnalysis: {
      heading: 'Application: The Starry Night',
      content: 'Van Gogh’s The Starry Night represents this assumption as it shows the night sky. This is something that can be enjoyed by many people in different cultures and times. This shows how art is universal. The painting shows how the artist has put their personal experiences, imagination and artistic views into this piece of art. Although there is a night sky in nature Van Gogh used his observations and expressed them by using his creativity. When people look at this painting they may feel different emotions and interpret the painting differently.',
    },
    artworks: [{ ...P1.starryNight, calloutTags: ['Art is Universal', 'Art is Cultural', 'Art is not Nature', 'Art involves Experience'] }],
    citations: [C1.starryNight],
  },
  {
    pageNumber: 6, partNumber: 1, slideLayout: 'single-masterpiece',
    title: 'The Functions and Philosophies of Art: Beyond Beauty',
    subtitle: 'Functions & Philosophies of Art',
    assignedMember: by('1A'),
    conciseExplanation: [
      'Art has different functions for people and communities and it can be classified into the following: Personal Function - It enables the artists to express their feelings, beliefs, values, imaginations and experiences. Social Function - Art can show social issues, make people aware of their surroundings and think about the society itself. Physical Function - Art is not solely created for viewing but it also have its practical purpose.',
      'Art can be also be viewed through various philosophies: Art as Representation - This philosophy looks at art as an imitation or depiction of objects, events and even people from the real world. Art as Expression - It looks at art as a way of communicating feelings, thoughts and experiences of the artist. Art as Form - Art is appreciated for its beauty and aesthetics alone.',
    ],
    criticalAnalysis: {
      heading: 'Application: Guernica',
      content: 'The image of Picasso\'s Guernica shows how art can be used for social and political purposes. The painting shows how horrible war can be. It was inspired by the bombing of the town Gernika in Spain during the Spanish Civil War. It shows how terrified, painful and helpless innocent civilians felt. The painting uses twisted human and animal figures along with all black, white and grey colours to create an emotive piece of work. This proves that art can be used as a powerful form of protest and tool to make people think about the consequences of violence and the importance of peace.',
    },
    artworks: [P1.guernica],
    citations: [C1.guernica],
  },
  {
    pageNumber: 7, partNumber: 1, slideLayout: 'comparative-split',
    title: 'Subject vs. Content: Understanding What We See and What It Means',
    subtitle: 'Subject vs. Content in an Artwork',
    assignedMember: by('1B'),
    conciseExplanation: [
      'Subject refers to the main person, object, event, or scene represented in an artwork. It answers the question, "What is being shown?" Content refers to the deeper meaning, message, emotion, or idea that the artwork communicates. It answers the question, "What does the artwork mean?"',
      'American Gothic — Literal Subject: A farmer holding a pitchfork stands beside a woman in front of a farmhouse. Deeper Content/Meaning: Represents traditional American rural life, family values, and cultural identity. The painting also reflects the seriousness and traditional lifestyle associated with rural communities.',
      'Nighthawks — Literal Subject: Four people are gathered inside a brightly lit diner during the night. Deeper Content/Meaning: Communicates loneliness, isolation, and emotional distance among people living in a busy city.',
    ],
    criticalAnalysis: {
      heading: 'Comparative Analysis',
      content: 'Both artworks show ordinary people in everyday settings, but their deeper meanings are different. American Gothic presents rural American life and traditional values, while Nighthawks explores loneliness and isolation in modern city life. Their subjects show what is happening in the paintings, but their content allows viewers to understand the cultural and emotional messages behind them. This demonstrates that an artwork can communicate ideas that go beyond its visible appearance.',
    },
    artworks: [
      { ...P1.americanGothic, calloutTags: ['Subject: farmer, woman & farmhouse', 'Content: rural values & identity'] },
      { ...P1.nighthawks, calloutTags: ['Subject: four people in a diner', 'Content: loneliness & isolation'] },
    ],
    citations: [C1.americanGothic, C1.nighthawks],
  },
  {
    pageNumber: 8, partNumber: 1, slideLayout: 'design-breakdown',
    title: 'The Elements of Design: The Building Blocks of Art',
    subtitle: 'Elements of Design (With Visual Application)',
    assignedMember: by('1B'),
    conciseExplanation: [
      'Line: A mark that guides the viewer\'s eyes and creates direction, movement, or emotion. Shape: An enclosed area formed by lines, such as circles, squares, and irregular forms. Color: Adds mood, emotion, and visual interest through different hues and combinations. Value: Refers to how light or dark a color or tone appears. It helps create depth and contrast. Space: Refers to the area around, between, and within objects. It creates a sense of distance and depth. Texture: Describes how a surface looks or feels, such as rough, smooth, soft, or hard.',
      'Analysis of the Elements — Line: The curved and flowing lines of the waves create movement, making the water appear powerful and unpredictable. Color: Different shades of blue contrast with the lighter sky, emphasizing the size and strength of the waves. Space: Mount Fuji appears small in the background while the enormous wave dominates the foreground. This creates depth and highlights the power of nature.',
    ],
    criticalAnalysis: {
      heading: 'Critical Analysis',
      content: 'Hokusai\'s use of these elements makes the artwork more than a simple picture of the ocean. The enormous wave compared to the small boats and distant mountains reminds viewers of how vulnerable humans can be against nature. The composition encourages people to appreciate both the beauty and danger of the natural world.',
    },
    artworks: [{ ...P1.greatWave, calloutTags: ['Line — curved, flowing waves', 'Color — shades of blue vs. light sky', 'Space — small Fuji, huge wave'] }],
    citations: [C1.greatWave],
  },
  {
    pageNumber: 9, partNumber: 1, slideLayout: 'design-breakdown',
    title: 'The Principles of Design: Creating Meaning Through Composition',
    subtitle: 'Principles of Design (With Visual Application)',
    assignedMember: by('1B'),
    conciseExplanation: [
      'Balance: The arrangement of visual elements to create stability in an artwork. Contrast: The use of differences in colors, shapes, sizes, or values to make elements stand out. Emphasis: Directs the viewer\'s attention to the most important part of an artwork. Movement: Guides the viewer\'s eyes throughout the artwork through lines, shapes, and arrangements. Rhythm: Uses repeated elements to create a sense of visual flow and pattern. Unity: Combines all the elements to create a complete and harmonious composition.',
      'Analysis of the Principles — Balance: The bed, chairs, and other furniture are arranged throughout the room to create a sense of visual balance. Contrast: The combination of blue walls, yellow furniture, and reddish floor creates noticeable color differences. Emphasis: The large bed attracts attention because of its size and central placement. Movement: The angled floorboards and furniture edges guide the viewer\'s eyes around the room. Rhythm: The repeated shapes of the chairs, pictures, and furniture create visual patterns. Unity: The colors and arrangement of objects work together to create a connected and recognizable bedroom scene.',
    ],
    criticalAnalysis: {
      heading: 'Critical Analysis',
      content: 'Van Gogh uses the principles of design to turn an ordinary bedroom into an expressive artwork. The arrangement of furniture and combination of colors create a sense of order and harmony, while the unusual perspective makes the room visually interesting. These principles help communicate the artist\'s personal experience of his living space and show how composition can influence the mood and interpretation of an artwork.',
    },
    artworks: [{ ...P1.bedroom, calloutTags: ['Balance', 'Contrast', 'Emphasis', 'Movement', 'Rhythm', 'Unity'] }],
    citations: [C1.bedroom],
  },

  // ======================= PART 2 =======================
  {
    pageNumber: 10, partNumber: 2, slideLayout: 'timeline-context',
    title: 'Overview of Major Western Art Periods & Movements',
    subtitle: 'Prehistoric · Ancient Egypt · Ancient Greece · Renaissance · Baroque',
    assignedMember: by('2A'),
    conciseExplanation: [
      'Cave Art / Prehistoric Art (c. 40,000 BCE and later) — Earliest human visual expression using natural pigments (ochre, charcoal) to depict animals, humans, handprints, and symbols tied to survival and ritual.',
      'Ancient Egyptian Art (c. 3100–30 BCE) — Art centered on religion, pharaohs, and the afterlife through hierarchical scale, symbolism, symmetry, and composite views designed to preserve royal authority.',
      'Ancient Greek Art (c. 900–31 BCE) — Evolved sculpture and architectural orders (Doric, Ionic, Corinthian) celebrating idealized naturalism, proportion, harmony, contrapposto, and civic humanism.',
      'Renaissance (c. 14th–16th century) — Cultural “rebirth” reviving Greek and Roman ideals across Europe, driven by Humanism, linear perspective, anatomical accuracy, naturalism, and proportion.',
      'Baroque (c. 1600–1700) — Dramatic, emotionally charged 17th-century style using high drama, movement, intense emotion, and strong light-and-dark contrasts (chiaroscuro) to engage viewers.',
    ],
    criticalAnalysis: {
      heading: 'Evolution Across Western Epochs',
      content: 'Western art transforms alongside human priorities: from prehistoric survival rituals and Egypt’s sacred permanence to Greece’s human-centered ideal, the Renaissance’s scientific rebirth, and Baroque emotional persuasion.',
    },
    artworks: [P2.lascaux, P2.nefertiti, P2.doryphoros, P2.monaLisa, P2.callingMatthew],
    citations: [C2.smarthistoryLascaux, C2.metAmarna, R.janson, C2.louvreMonaLisa, C2.ngaEducational],
  },
  {
    pageNumber: 11, partNumber: 2, slideLayout: 'timeline-context',
    title: 'Characteristics & Historical Context of Selected Movements',
    subtitle: 'Why Styles Shifted Across Western Art History',
    assignedMember: by('2A'),
    conciseExplanation: [
      'Cave Art / Prehistoric to Ancient Egypt — As nomadic hunter-gatherers transitioned into settled civilizations, art shifted from natural-pigment cave markings for ritual to rigid symmetry, composite views, and monuments serving organized religion and state power.',
      'Ancient Egypt to Ancient Greece — Unlike Egypt’s focus on unchanging permanence and divine rulers, emerging Greek city-states valued civic life, philosophy, and human potential, shifting art toward idealized naturalism, proportion, and earthly beauty.',
      'Greece to Rome & the Renaissance — As Rome adapted Greek traditions for realistic portraiture and imperial propaganda, the Renaissance later revived classical Humanism alongside linear perspective and anatomical observation.',
      'Renaissance to Baroque — Moving beyond calm, balanced Renaissance harmony, 17th-century Baroque prioritized theatrical motion, heightened emotion, and stark light-and-shadow contrasts to persuade viewers deeply.',
      'Baroque Toward Rococo — As heavy religious and royal drama gave way to 18th-century aristocratic court culture, art lightened in tone toward playful elegance, pastel hues, and ornamental leisure.',
    ],
    criticalAnalysis: {
      heading: 'Why Styles Shift Between Periods',
      content: 'Each stylistic transition answers deeper shifts in worldview — nomadic survival, divine monarchy, civic philosophy, humanist inquiry, and religious or aristocratic spectacle continually reshape artistic purpose.',
    },
    artworks: [P2.lascaux, P2.nefertiti, P2.doryphoros, P2.monaLisa, P2.callingMatthew],
    citations: [C2.smarthistoryLascaux, C2.metAmarna, R.janson, C2.ngaEducational],
  },
  {
    pageNumber: 12, partNumber: 2, slideLayout: 'heritage-spotlight',
    title: 'Notable Western Artists & Masterworks (Classical to Baroque)',
    subtitle: 'Ancient Greece · Ancient Rome · Renaissance · Baroque',
    assignedMember: by('2A'),
    conciseExplanation: [
      'Ancient Greek Art (Classical) — Polykleitos, Doryphoros (Spear Bearer) (c. 450–440 BCE): Bronze-original marble copy exemplifying Classical Greek ideals of human proportion, symmetry, and harmony. Pioneering contrapposto creates a lifelike balance between tension and relaxation.',
      'Ancient Roman Art — Unknown Roman Artist, Augustus of Prima Porta (c. 20 BCE / 1st century CE): Marble statue portraying Emperor Augustus as commander and divine ruler, blending Greek idealized anatomy with realistic Roman portraiture and imperial breastplate propaganda.',
      'Renaissance — Leonardo da Vinci, Mona Lisa (c. 1503–1506): Oil portrait on poplar panel celebrated for psychological depth, anatomical precision, and sfumato (subtle shading without harsh outlines), epitomizing Renaissance Humanism.',
      'Baroque — Caravaggio, The Calling of Saint Matthew (c. 1599–1600): Depicts Christ summoning Matthew from a dimly lit tavern using intense chiaroscuro and gritty naturalism to generate immediate theatrical emotion.',
    ],
    criticalAnalysis: {
      heading: 'From Ideal Proportion to Theatrical Realism',
      content: 'Comparing these four touchstones traces how Western masters reinvented the human figure — from Polykleitos’s mathematical canon and Roman civic authority to Leonardo’s subtle psychological interiority and Caravaggio’s dramatic spotlight.',
    },
    artworks: [P2.doryphoros, P2.augustus, P2.monaLisa, P2.callingMatthew],
    citations: [R.janson, C2.smarthistoryDoryphoros, C2.khanAugustus, C2.louvreMonaLisa, C2.smarthistoryCalling],
  },
  {
    pageNumber: 13, partNumber: 2, slideLayout: 'heritage-spotlight',
    title: 'Notable Western Artists & Masterworks (Impressionism to Modern)',
    subtitle: 'Monet · Seurat · Kandinsky · Duchamp',
    assignedMember: by('2B'),
    conciseExplanation: [
      'Claude Monet, Impression, Sunrise (1872) — Rejected smooth academic polish and studio lighting for rapid, unblended brushstrokes painted en plein air to capture fleeting morning light over Le Havre harbor.',
      'Georges Seurat, A Sunday on La Grande Jatte (1884–1886) — Replaced spontaneous brushwork with Neo-Impressionist divisionism, placing tiny dots of pure pigment side by side so the viewer’s eye blends colors optically.',
      'Wassily Kandinsky, Composition VII (1913) — Broke entirely with recognizable figures and illusionistic perspective, composing swirling color fields and lines like visual music to evoke inner spiritual states.',
      'Marcel Duchamp, Fountain (1917) — Submitted a signed, factory-made porcelain urinal as a Dada readymade, challenging centuries of craft orthodoxy by shifting art from manual execution to conceptual choice.',
    ],
    criticalAnalysis: {
      heading: 'How Modernists Broke Traditional Rules',
      content: 'Across forty-five years, these four artists systematically dismantled academic convention — discarding blended finish, traditional perspective, representational subject matter, and even handcrafted fabrication to redefine what art could be.',
      culturalHistoricalContext: 'Independent exhibitions like the Salon des Refusés and anti-war Dadaism rebelled against conservative academies during rapid industrial change.',
    },
    artworks: [P2.impressionSunrise, P2.grandeJatte, P2.compositionVII, P2.fountain],
    citations: [C2.marmottanMonet, C2.articGrandeJatte, C2.khanKandinsky, C2.tateFountain, R.gombrich],
  },
  {
    pageNumber: 14, partNumber: 2, slideLayout: 'comparative-split',
    title: 'Critical Analysis I: History, Religion & Politics in Western Art',
    subtitle: 'Counter-Reformation Church Patronage vs. Revolutionary Politics',
    assignedMember: by('2B'),
    conciseExplanation: [
      'Church Patronage & Caravaggio’s Calling of Saint Matthew (1599–1600) — After the Council of Trent urged the Catholic Church to inspire devotion through clear, emotional imagery, Baroque patrons commissioned dramatic religious scenes. Caravaggio’s stark chiaroscuro places sacred conversion inside a gritty contemporary tavern.',
      'War, Politics & Goya’s The Third of May 1808 (1814) — Following Napoleon’s occupation of Spain, Francisco Goya overturned heroic battle conventions by depicting faceless French firing squads executing terrified Madrid civilians in raw, unidealized proximity.',
    ],
    criticalAnalysis: {
      heading: 'How Patrons & Conflict Dictated Style and Purpose',
      content: 'From Counter-Reformation chapels to anti-imperialist memorials, religious doctrine and political upheaval governed subject matter and technique alike — pushing artists to invent theatrical lighting and unflinching realism capable of persuading or stirring entire publics.',
      culturalHistoricalContext: 'Patronage contracts (Baxandall, 1988) and social struggles (Hauser, 1999) turned style into an active instrument of persuasion and resistance.',
    },
    artworks: [P2.callingMatthew, P2.thirdOfMay],
    citations: [C2.smarthistoryCalling, C2.pradoThirdOfMay, R.baxandall, R.hauser],
  },
  {
    pageNumber: 15, partNumber: 2, slideLayout: 'comparative-split',
    title: 'Critical Analysis II: Society, Enlightenment & Industrialization',
    subtitle: 'Democratic Struggles, Class Consciousness & New Audiences',
    assignedMember: by('2B'),
    conciseExplanation: [
      'Enlightenment & Delacroix’s Liberty Leading the People (1830) — Shaped by Enlightenment ideals of popular sovereignty and the 1830 July Revolution, Eugène Delacroix painted workers, students, and bourgeois citizens fighting beside Liberty for a newly expanded public Salon audience.',
      'Industrialization, Class & Millet’s The Gleaners (1857) — As urban industrialization widened class divides, Realism refused idealized escape. Jean-François Millet dignified three peasant women harvesting leftover grain stalks, confronting wealthy Paris exhibition-goers with rural poverty.',
    ],
    criticalAnalysis: {
      heading: 'Transforming Artistic Ideas Beyond Elite Courts',
      content: 'Enlightenment philosophy, public museums, photography, and industrial class shifts moved art out of exclusive palaces into modern public life — inspiring Romantic empathy and Realist social critique.',
      culturalHistoricalContext: 'Public Salons, print circulation (Benjamin, 2008), and changing institutional access (Nochlin, 1971) redefined who art represented and addressed.',
    },
    artworks: [P2.libertyLeading, P2.gleaners],
    citations: [C2.louvreLiberty, C2.orsayGleaners, R.hauser, R.benjamin, R.nochlin],
  },

  // ======================= PART 3 =======================
  {
    pageNumber: 16, partNumber: 3, slideLayout: 'comparative-split',
    title: 'Chinese and Japanese Art: Nature, Spirituality, and Simplicity',
    subtitle: 'Characteristics of Chinese and Japanese Art',
    assignedMember: by('3A'),
    conciseExplanation: [
      'Chinese Art — Strong connection with nature, especially mountains, rivers, and landscapes. Influenced by Daoism, which emphasizes harmony and balance with nature. Buddhist beliefs also influenced religious paintings and sculptures. Common techniques include ink wash painting, calligraphy, and detailed brushwork.',
      'Japanese Art — Ukiyo-e features everyday life, landscapes, actors, and beautiful scenery through woodblock prints. Zen Buddhism influenced simplicity, meditation, and appreciation of the present moment. Wabi-sabi appreciates natural imperfections, simplicity, and the beauty of aging. Nature is a common subject, often presented through clean lines and balanced compositions.',
      'Representative Artworks — Travelers Among Mountains and Streams, Fan Kuan, Northern Song Dynasty, ca. 1000 CE (early 11th century). Hanging scroll, ink and light colors on silk. Under the Wave off Kanagawa (The Great Wave), Katsushika Hokusai, Edo period, ca. 1830–32. Woodblock print, ink and color on paper.',
    ],
    criticalAnalysis: { heading: '', content: '' },
    artworks: [P3.fanKuan, P3.greatWave],
    citations: [C3.fanKuan, C3.greatWave, C3.lumen],
  },
  {
    pageNumber: 17, partNumber: 3, slideLayout: 'single-masterpiece',
    title: 'Indian Art: Devotion, Symbolism, and Sacred Form',
    subtitle: 'Characteristics of Indian Art',
    assignedMember: by('3A'),
    conciseExplanation: [
      'Much traditional Indian art serves religion, helping devotees connect with the divine through temples, sculptures, and paintings. Iconography works like a visual language: gods are recognized by their poses, number of arms, and the objects they hold. Mudras (hand gestures) carry meanings such as protection, teaching, or blessing. Temples are sacred spaces, decorated with carvings that tell stories from myths and epics. Art often expresses ideas about the cycle of creation, destruction, and renewal.',
      'Representative Artwork — Shiva as Lord of the Dance (Shiva Nataraja), Chola period, Tamil Nadu, South India, ca. late 11th century CE. Copper alloy (bronze).',
    ],
    criticalAnalysis: {
      heading: 'Reading the Nataraja',
      content: 'Shiva dances inside a ring of flames that represents the universe’s endless cycle of creation and destruction. His raised palm shows the abhaya mudra, meaning “do not fear.” One foot rests on a small figure symbolizing ignorance, and his flying hair shows the energy of the dance. Bronzes like this were made to be carried in temple processions, so they were part of living worship.',
    },
    artworks: [P3.nataraja],
    citations: [C3.nataraja, C3.khalid],
  },
  {
    pageNumber: 18, partNumber: 3, slideLayout: 'comparative-split',
    title: 'Two Views of Nature: Fan Kuan’s Mountains vs. Hokusai’s Wave',
    subtitle: 'Comparative Analysis of Selected Asian Artworks',
    assignedMember: by('3A'),
    conciseExplanation: [
      'Medium — Fan Kuan: hand-painted ink on silk, mounted as a hanging scroll. Hokusai: woodblock print made by a team of artist, carver, and printer.',
      'Visual Style — Fan Kuan: muted ink tones, tall vertical format, textured brushwork, a calm and monumental mood. Hokusai: bold blues, strong outlines, a sweeping diagonal curve, a dramatic and dynamic mood.',
      'Role of Nature — Fan Kuan: a vast, permanent mountain makes people look tiny. Hokusai: a powerful wave threatens the boats, with Mount Fuji small in the distance.',
      'Cultural and Historical Significance — Fan Kuan: a landmark of monumental Chinese landscape painting, tied to Daoist and Neo-Confucian ideas of cosmic order. Hokusai: a popular Edo-period ukiyo-e print made for a wide audience, now one of the most recognized images in world art.',
    ],
    criticalAnalysis: {
      heading: 'Conclusion',
      content: 'Both works show humans as small beside nature, but they feel very different. Fan Kuan’s scene is still and eternal, while Hokusai’s captures a single dramatic moment.',
    },
    artworks: [
      { ...P3.fanKuan, calloutTags: ['A · Fan Kuan, China, ca. 1000 CE'] },
      { ...P3.greatWave, calloutTags: ['B · Hokusai, Japan, ca. 1830–32'] },
    ],
    citations: [C3.fanKuan, C3.greatWave, C3.lumen],
  },
  {
    pageNumber: 19, partNumber: 3, slideLayout: 'craft-catalog',
    title: 'Philippine Indigenous Art & Traditional Crafts',
    subtitle: 'Weaving & Textile Arts',
    assignedMember: by('3B'),
    conciseExplanation: ['Philippine Indigenous Art & Traditional Indigenous Weaving and Textile crafts.'],
    criticalAnalysis: { heading: '', content: '' },
    artworks: [P3.tnalak, P3.inabel, P3.yakan, P3.inaul, P3.pisSyabit, P3.dagmay],
    citations: [C3.tnalak, C3.inabel, C3.yakan, C3.inaul, C3.pisSyabit, C3.dagmay],
  },
  {
    pageNumber: 20, partNumber: 3, slideLayout: 'craft-catalog',
    title: 'Philippine Indigenous Art & Traditional Crafts',
    subtitle: 'Pottery, Carving & Metalwork',
    assignedMember: by('3B'),
    conciseExplanation: ['Philippine Indigenous Art & Traditional Crafts — Manunggul Jar, Bulul carving, Okir/Sarimanok and Lingling-o.'],
    criticalAnalysis: { heading: '', content: '' },
    artworks: [P3.manunggul, P3.bulul, P3.okir, P3.linglingo],
    citations: [C3.manunggul, C3.bulul, C3.sarimanok, C3.linglingo],
  },
  {
    pageNumber: 21, partNumber: 3, slideLayout: 'craft-catalog',
    title: 'Asian Influences on Philippine Art',
    subtitle: 'Chinese · Indian · Southeast Asian Exchanges',
    assignedMember: by('3B'),
    conciseExplanation: [
      'Philippine art was influenced by Asian countries through trade and cultural exchange. China, India, and Southeast Asia introduced new designs, materials, beliefs, and stories that Filipinos adapted into their own culture.',
    ],
    criticalAnalysis: { heading: '', content: '' },
    artworks: [P3.chinesePorcelain, P3.goldenTara, P3.lagunaCopperplate, P3.maharadiaLawana],
    citations: [C3.chinesePorcelain, C3.goldenTara, C3.maritimeRelations, C3.maharadiaLawana],
  },

  // ======================= PART 4 =======================
  {
    pageNumber: 22, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'The Creativity and Craftsmanship of the Bikolano People',
    subtitle: 'Philippine & Bikolano Visual and Applied Arts',
    assignedMember: by('4A'),
    conciseExplanation: [
      '1. Abaca and Sinamay Weaving — Abaca is one of the important natural resources of Bicol. Its fibers are used to create sinamay, a woven material used for bags, decorations, and other products. This craft shows the creativity and skills of local weavers.',
      '2. Tiwi Pottery (Tiwi, Albay) — Tiwi, Albay is known for its pottery and ceramic products. Local artisans use clay to create pots, jars, and decorative items. This traditional craft shows how Bicolanos use natural resources to create useful and beautiful products.',
    ],
    criticalAnalysis: {
      heading: 'Artistic Features and Importance',
      content: 'Bikolano crafts show the creativity and skills of local people. Sinamay weaving uses natural abaca fibers to create useful and beautiful products. Meanwhile, Tiwi pottery uses local clay to make different ceramic items. Some designs show the influence of Mayon Volcano. These crafts represent the culture, resources, and artistic skills of the Bicolanos.',
    },
    artworks: [P4.abacaSinamay, P4.tiwiPottery],
    citations: [C4.bicolanos, C4.tiwiAyo],
  },
  {
    pageNumber: 23, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Stories and Rhythms of Bicol: Literature and Performing Arts',
    subtitle: 'Philippine & Bikolano Literary and Performing Arts',
    assignedMember: by('4A'),
    conciseExplanation: [
      '1. Ibalong Epic — A famous Bikolano folk story about heroes such as Baltog, Handyong, and Bantong. It tells stories of bravery, adventures, and the early people of Bicol.',
      '2. Rawitdawit — A traditional Bikolano form of poetry that expresses personal feelings, experiences, and opinions about society.',
    ],
    criticalAnalysis: {
      heading: 'Concise Description & Literary Elements',
      content: 'Bikolano literature and performances help preserve the stories, beliefs, and experiences of our ancestors. The Ibalong Epic shares stories of brave heroes and their adventures. Rawitdawit uses poems to express emotions and ideas about life and society. These literary works show the creativity, imagination, and identity of the Bikolano people.',
    },
    artworks: [P4.ibalongEpic, P4.bikolLiterature],
    citations: [C4.bikolLiterature, C4.espinas],
  },
  {
    pageNumber: 24, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Peñafrancia Festival: A Symbol of Bikolano Faith and Unity',
    subtitle: 'Featured Tradition — Peñafrancia Fluvial Procession (Naga City, Camarines Sur)',
    assignedMember: by('4A'),
    conciseExplanation: [
      'The Peñafrancia Fluvial Procession is one of the most important religious traditions in Bicol. It is held every September in Naga City to honor Our Lady of Peñafrancia, also known as "Ina." During the procession, her image is carried on a decorated floating platform called a pagoda along the Naga River.',
    ],
    criticalAnalysis: {
      heading: 'Profile & Artistic Contribution',
      content: 'This tradition shows the strong faith, cooperation, and unity of the Bikolano people. It also showcases local creativity through the decorations, religious music, and cultural activities. It brings families, communities, and visitors together to celebrate Bicolano heritage.',
    },
    artworks: [P4.penafrancia],
    citations: [C4.penafranciaCcp, C4.nagaTourism],
  },
  {
    pageNumber: 25, partNumber: 4, slideLayout: 'comparative-split',
    title: 'Stone, Fire, and Faith: Historical & Cultural Significance',
    subtitle: 'Pre-Colonial Roots, Colonial Synthesis & Nationalist Awakening',
    assignedMember: by('4B'),
    conciseExplanation: [
      'Daraga Church (1773) — Erected atop Santa Maria Hill in Albay by Bikolano artisans under Franciscan supervision, its intricately carved volcanic-tuff façade endured the 1814 Mayon eruption that buried Cagsawa and World War II bombardments — standing as a testament to syncretic faith and local resilience.',
      'Spoliarium (1884) by Juan Luna — Winning gold in Madrid’s Exposición Nacional de Bellas Artes, Luna turned classical European academic scale into an indictment of colonial oppression, awakening nationalist pride among José Rizal and the Propaganda Movement.',
    ],
    criticalAnalysis: {
      heading: 'Adapting Borrowed Forms for Filipino Resilience',
      content: 'Alongside pre-colonial traditions like the Ibalong epic and indigenous clay pottery, Daraga Church and Spoliarium prove that Filipino and Bikolano creators transformed imported Baroque and academic idioms into monuments of regional endurance and cultural self-assertion.',
      culturalHistoricalContext: 'Portions of Daraga Church are protected as a National Cultural Treasure, while Spoliarium anchors the National Museum of Fine Arts in Manila.',
    },
    artworks: [P4.daragaChurch, P4.spoliarium4b],
    citations: [C4.nmpBicol, C4.nmfaSpoliarium, C4.nhcpMarkers, R.flores, R.guillermo],
  },
  {
    pageNumber: 26, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Weaving Livelihood and Pride: Social Significance in Bikolano Art',
    subtitle: 'Community Identity, Rural Economy & Social Cohesion',
    assignedMember: by('4B'),
    conciseExplanation: [
      'Living Livelihoods — Abaca farming, sinamay hand-weaving across Catanduanes, Albay, and Sorsogon, and Tiwi’s traditional ceramics sustain thousands of rural families while transforming volcanic soils and forest fibers into celebrated regional craftsmanship.',
      'Shared Rituals & Social Cohesion — Communal traditions like Pantomina (the courtship dance of doves performed at weddings and Sorsogon’s Kasanggayahan Festival) and Naga’s Peñafrancia festivities unite households, diaspora, and neighbors in mutual celebration.',
    ],
    criticalAnalysis: {
      heading: 'Economic Justice and Authentic Regional Identity',
      content: 'Bikolano heritage is inseparable from daily work and kinship: family looms fund education while festival dances reaffirm shared memory. Meaningful cultural appreciation ensures fair livelihoods and creative credit flow directly to the artisans keeping these arts alive.',
      culturalHistoricalContext: 'The Bicol Region remains a premier Philippine abaca producer supported by PhilFIDA and local artisan cooperatives.',
    },
    artworks: [P4.abacaLivelihood, P4.pantominaDance],
    citations: [C4.bicolanos, C4.philfida, C4.tiwiAyo, R.realubit],
  },
  {
    pageNumber: 27, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Safeguarding Our Living Heritage for Future Generations',
    subtitle: 'Documentation, Education, Policy & Community-Led Promotion',
    assignedMember: by('4B'),
    conciseExplanation: [
      'Policy, Landmarks & Digital Archiving — Republic Act No. 10066 protects historic sites such as Cagsawa Ruins and Daraga Church under the Philippine Registry of Cultural Property, while municipal cultural mapping and open digital archives document endangered designs, rawitdawit poetry, and oral histories.',
      'Education & Schools of Living Traditions — Through the NCCA’s Schools of Living Traditions and local curriculum integration, master weavers and potters mentor Bicolano youth directly so heritage remains dignified, adaptable, and economically viable.',
    ],
    criticalAnalysis: {
      heading: 'Keeping Heritage Alive Beyond Glass Cases',
      content: 'Safeguarding works when young Bikolanos view local crafts as living sources of creativity rather than museum relics. Pairing RA 10066 legal protection with fair-trade ethical consumption, digital storytelling, and responsible cultural tourism preserves both artifacts and artisans.',
      culturalHistoricalContext: 'In 2021, UNESCO inscribed the Philippines’ Schools of Living Traditions program on its Register of Good Safeguarding Practices.',
    },
    artworks: [P4.cagsawaRuins, P4.heritageCraftsPreservation],
    citations: [C4.ra10066, C4.unescoSlt, C4.nmpBicol, R.ncca, R.unesco],
  },

  // ======================= PART 5 =======================
  {
    pageNumber: 28, partNumber: 5, slideLayout: 'single-masterpiece',
    title: 'What Defines Contemporary Philippine Art?',
    subtitle: 'Contemporary Philippine Art — Art, Culture, and Modern Society',
    assignedMember: by('5A'),
    conciseExplanation: [
      'Contemporary Philippine Art refers to artworks created by Filipino artists in the present era. It reflects Filipino culture, identity, experiences, and the issues happening in society.',
      'Characteristics — Expresses Filipino culture, identity, and traditions; reflects social, political, and environmental issues; uses different materials, techniques, and technologies; encourages creativity, experimentation, and new ideas; and combines traditional influences with modern artistic practices.',
      'Shift from Traditional and Modern Art — Traditional Art: Focuses on cultural heritage, customs, and traditional techniques. Modern Art: Introduces new styles, experimentation, and different ways of presenting art. Contemporary Art: Explores various forms and materials while responding to present-day society.',
    ],
    criticalAnalysis: {
      heading: 'Featured Artwork: Maki-Usisa, Makibaka, Makilahok (2014) — Gerilya',
      content: 'This mural presents Filipino students and important social events. It encourages people to ask questions, participate in society, and become aware of social issues. It shows how art can communicate meaningful messages.',
      culturalHistoricalContext: 'Medium: Acrylic Paint · Art Form: Street Art / Mural (catalogued as a 2014 acrylic mural by Gerilya).',
    },
    artworks: [P5.makiUsisa],
    citations: [C5.nccaContext, C5.nccaFlux, C5.gerilyaStory, C5.makiUsisaAsset],
  },
  {
    pageNumber: 29, partNumber: 5, slideLayout: 'craft-catalog',
    title: 'Different Forms of Contemporary Art',
    subtitle: 'Installation · Performance · Digital/New Media · Mixed Media · Street Art',
    assignedMember: by('5A'),
    conciseExplanation: [
      'Contemporary art has different forms that allow artists to express their creativity using various materials, techniques, and technologies. These different forms show that contemporary art is not limited to paintings and sculptures. Artists can use many creative ways to express their ideas and connect with people.',
    ],
    criticalAnalysis: { heading: '', content: '' },
    artworks: [P5.balete, P5.aliensOfManila, P5.ourIslands, P5.cajipeEndaya, P5.streetArtGerilya],
    citations: [C5.leeroyNew, C5.ourIslands, C5.cajipeEndaya, C5.gerilyaStory, C5.makiUsisaAsset],
  },
  {
    pageNumber: 30, partNumber: 5, slideLayout: 'comparative-split',
    title: 'Appropriation and Improvisation in Art',
    subtitle: 'Reimagining imagery & spontaneous creation',
    assignedMember: by('5A'),
    conciseExplanation: [
      'Contemporary artists use different techniques to create new meanings and express their creativity.',
      'A. Appropriation — Appropriation is the process of borrowing or using existing images, artworks, or ideas and changing their context to create a new meaning. Example: Mishandle with Care (2020) by Demetrio dela Cruz. The artist reinterprets famous paintings by Filipino artists such as Juan Luna, BenCab, and Carlos “Botong” Francisco. He adds new details to the original images, giving them a different presentation and meaning.',
      'B. Improvisation — Improvisation is the process of creating or adapting art spontaneously using available materials, unexpected ideas, or different techniques. Example: Miguel Aquilizan’s assemblage artworks. Miguel Aquilizan uses discarded and ordinary objects to create new artistic forms. His creative process is guided by experimentation and imagination, showing that even simple materials can become meaningful artworks.',
    ],
    criticalAnalysis: {
      heading: 'Conclusion',
      content: 'Appropriation and improvisation show how artists can develop new ideas by reusing existing images, exploring materials, and experimenting with different creative techniques.',
    },
    artworks: [P5.mishandleWithCare, P5.miguelAssemblage],
    citations: [C5.mishandleWithCare, C5.miguelAquilizan],
  },
  {
    pageNumber: 31, partNumber: 5, slideLayout: 'design-breakdown',
    title: 'Space and Illusion in Arkipelago',
    subtitle: 'Elements & Principles of Design in Contemporary Art (Critique 1)',
    assignedMember: by('5B'),
    conciseExplanation: [
      'Selected Contemporary Artwork — Arkipelago, Mark Justiniani, 2019, Mixed media installation (mirrors, glass, metal frames, LED lights, found objects).',
      'Justiniani uses the element of space and the principle of repetition to create a staggering optical illusion. By placing facing mirrors beneath glass floors, he visually extends shallow spaces into bottomless, infinite abysses filled with illuminated, everyday Filipino objects.',
    ],
    criticalAnalysis: {
      heading: 'Formal Analysis',
      content: 'This endless repetition of forms reinforces a heavy psychological and conceptual impact and creates this nauseating feeling as you look at it, making the viewer reflect on what is real and illusion.',
    },
    artworks: [{ ...P5.arkipelago, calloutTags: ['Space', 'Repetition', 'Illusion', 'Mirrors & LED lights'] }],
    citations: [C5.arkipelago],
  },
  {
    pageNumber: 32, partNumber: 5, slideLayout: 'design-breakdown',
    title: 'Space and Scale in Mebuyan’s Colony',
    subtitle: 'Elements & Principles of Design in Contemporary Art (Critique 2)',
    assignedMember: by('5B'),
    conciseExplanation: [
      'Selected Contemporary Artwork — Mebuyan\'s Colony, Leeroy New, 2022, Mixed media installation (bamboo, recycled plastic, cable ties).',
      'Leeroy New manipulates scale and space by constructing massive, biomorphic pods that viewers can physically enter. He creates a striking visual contrast in texture by weaving together organic, natural bamboo with synthetic, discarded plastic materials.',
    ],
    criticalAnalysis: {
      heading: 'Formal Analysis',
      content: 'The unusual textures and scale of the artwork make the audience have to interact with it to fully experience it, bringing attention to the connection between Philippine mythology and modern environmental decay.',
    },
    artworks: [{ ...P5.mebuyan, calloutTags: ['Space', 'Scale', 'Texture contrast', 'Bamboo & recycled plastic'] }],
    citations: [C5.mebuyan],
  },
  {
    pageNumber: 33, partNumber: 5, slideLayout: 'single-masterpiece',
    title: 'Street Art as the Voice of the Marginalized',
    subtitle: 'Art as Social Commentary & Catalyst for Change',
    assignedMember: by('5B'),
    conciseExplanation: [
      'Featured Artwork — Lupang Ninuno (Mural advocating for Lumad rights), Archie Oclos, 2018.',
    ],
    criticalAnalysis: {
      heading: 'Critical Analysis',
      content: 'Modern art in the Philippines often takes to the streets in order to address current social and political issues. By bringing art into public spaces, artists are making their work accessible to everyone and are drawing attention to issues such as human rights abuse, fighting for indigenous communities and environmental destruction. This form of visual activism bypasses censorship, provokes public discourse, and serves as a powerful catalyst for awareness and resistance.',
    },
    artworks: [P5.lupang],
    citations: [C5.lupang],
  },

];

// ======================= BACK MATTER (auto-paginated) =======================
const REFS_PER_PAGE = 18;
const ALL_REFERENCES = Array.from(
  new Set([...CORE_DRAFTS.flatMap((s) => s.citations), R.wikimedia, R.nochlin]),
).sort((a, b) => a.localeCompare(b));

const refChunks: { items: string[]; startIndex: number; showCredits: boolean }[] = [];
for (let i = 0; i < ALL_REFERENCES.length; i += REFS_PER_PAGE) {
  refChunks.push({ items: ALL_REFERENCES.slice(i, i + REFS_PER_PAGE), startIndex: i, showCredits: false });
}
if (refChunks.length === 0) {
  refChunks.push({ items: [], startIndex: 0, showCredits: true });
} else if (refChunks[refChunks.length - 1].items.length <= 12) {
  refChunks[refChunks.length - 1].showCredits = true;
} else {
  refChunks.push({ items: [], startIndex: ALL_REFERENCES.length, showCredits: true });
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const refSlides: Draft[] = refChunks.map((chunk, idx) => {
  const totalRefPages = refChunks.length;
  const labelNum = ROMAN[idx] ?? String(idx + 1);
  return {
    pageNumber: `REF-${idx + 1}`,
    partNumber: 6,
    slideLayout: 'references',
    title: chunk.showCredits
      ? chunk.items.length === 0
        ? 'Image Credits'
        : 'References & Image Credits'
      : `Master References (${labelNum})`,
    subtitle: `Master Reference List (APA 7th) — Page ${idx + 1} of ${totalRefPages}`,
    assignedMember: by('L'),
    conciseExplanation: [],
    criticalAnalysis: { heading: 'Note', content: 'Back Matter — excluded from the 20–40 page count.' },
    artworks: [],
    citations: idx === 0 ? [R.wikimedia, R.nochlin] : [],
    refSlice: {
      items: chunk.items,
      startIndex: chunk.startIndex,
      showCredits: chunk.showCredits,
      pageIndex: idx,
      totalRefPages,
    },
  };
});

const disclosureId = `REF-${refSlides.length + 1}`;
PARTS[6].range = `REF-1–${disclosureId} · ROLES`;
GROUP_MEMBERS[0].pages = `1–3, REF-1–${disclosureId}, ROLES`;

const DRAFTS: Draft[] = [
  ...CORE_DRAFTS,
  ...refSlides,
  {
    pageNumber: disclosureId, partNumber: 6, slideLayout: 'disclosure',
    title: 'Originality & AI Use Disclosure',
    subtitle: 'Academic integrity statement and rubric compliance checklist',
    assignedMember: by('L'),
    conciseExplanation: [
      'All explanations and critical analyses in this portfolio represent the original work and interpretation of Group 2. Sources of facts, images and ideas are cited in APA 7th format on each slide and in the master reference list.',
      'AI tools were used only to assist in building the website layout and code, and for grammar suggestions. All content was reviewed, verified and revised by group members, who take full responsibility for its accuracy. No AI-generated images are presented as artworks.',
    ],
    criticalAnalysis: { heading: 'Statement of Responsibility', content: 'Each member verified the sources for their assigned pages.' },
    artworks: [],
    citations: [],
  },
  {
    pageNumber: 'ROLES', partNumber: 6, slideLayout: 'roles',
    title: 'Group 2 Roles & Contributions',
    subtitle: 'Eleven members · five pairs · one exhibition',
    assignedMember: by('L'),
    conciseExplanation: [],
    criticalAnalysis: { heading: 'Contributions Matrix', content: 'Every member authored specific pages listed below.' },
    artworks: [],
    citations: [],
  },
];

/** Final slides with partTitle + auto local image paths (/images/Part{P}_Slide{N}[_k].jpg). */
export const SLIDES: PortfolioSlide[] = DRAFTS.map((d) => ({
  ...d,
  partTitle: partTitle(d.partNumber),
  artworks: d.artworks.map((a, i) => ({
    ...a,
    localImagePath: a.localImagePath ?? `/images/Part${d.partNumber}_Slide${d.pageNumber}${i > 0 ? `_${i + 1}` : ''}.jpg`,
  })),
}));

export const CORE_PAGE_COUNT = SLIDES.filter((s) => typeof s.pageNumber === 'number').length;
export const BACK_MATTER_COUNT = SLIDES.length - CORE_PAGE_COUNT;

/** De-duplicated, alphabetised master reference list. */
export function compileReferences(): string[] {
  return Array.from(new Set(SLIDES.flatMap((s) => s.citations))).sort((a, b) => a.localeCompare(b));
}

/** De-duplicated image credit list. */
export function compileImageCredits(): Artwork[] {
  const seen = new Map<string, Artwork>();
  SLIDES.forEach((s) => s.artworks.forEach((a) => !seen.has(a.id) && seen.set(a.id, a)));
  return Array.from(seen.values());
}

export const RUBRIC_CHECKLIST: string[] = [
  `Page count: ${CORE_PAGE_COUNT} core pages (20–40 required; references excluded)`,
  'All five required parts with original explanations',
  'Curator’s Critical Analysis highlighted on every content page',
  'Cultural & historical context integrated throughout',
  'Images with captions, artist, date and source',
  'APA 7th citations per slide + master reference list',
  'Member roles & specific contributions documented',
  'Originality & AI-use disclosure included',
  'Organised, visually consistent, exported as PDF',
];
