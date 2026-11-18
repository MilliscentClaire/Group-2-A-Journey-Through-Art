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
  pdfPath: '/Group2_Art_Appreciation_Portfolio.pdf',
};

/** ✏️ Replace "Member 1A" etc. with real names — every slide updates automatically. */
export const GROUP_MEMBERS: GroupMember[] = [
  { id: 'L', name: 'Milliscent Claire D. Blanqueza', role: 'Group Leader · Lead Curator & Editor', pair: 'Leader', pages: '1–3, REF-1, REF-2, ROLES', sections: 'Front Matter & Back Matter', contributions: 'Cover, TOC, curatorial introduction; overall editing, layout direction, reference compilation, AI disclosure & final PDF export.' },
  { id: '1A', name: 'Hazel Calalo', role: 'Content Researcher & Analyst (Part 1A)', pair: 'Pair 1', pages: '4–6', sections: 'Part 1: Understanding Art (Items 1 & 2)', contributions: 'Researched and wrote original explanations defining art, its nature, and core assumptions; discussed and analyzed the functions and philosophies of art with cited visual examples and references.' },
  { id: '1B', name: 'Althea Boletic', role: 'Content Researcher & Analyst (Part 1B)', pair: 'Pair 1', pages: '7–9', sections: 'Part 1: Understanding Art (Items 3 & 4)', contributions: 'Authored comparative analysis explaining the difference between subject and content using specific artworks; presented and analyzed the elements and principles of design with illustrated artwork examples and proper citations.' },
  { id: '2A', name: 'Member 2A', role: 'Art Historian-Writer', pair: 'Pair 2', pages: '10–12', sections: 'Part 2: Western Art Traditions', contributions: 'Periods overview, characteristics & contexts timeline, Classical–Baroque masters.' },
  { id: '2B', name: 'Member 2B', role: 'Critical Analyst', pair: 'Pair 2', pages: '13–15', sections: 'Part 2: Western Art Traditions', contributions: 'Impressionism–Modern masters; critical analyses on patronage, religion, society & Enlightenment.' },
  { id: '3A', name: 'Sean Rey O. Dizon', role: 'Content Researcher & Analyst (Part 3A)', pair: 'Pair 3', pages: '16–18', sections: 'Part 3: Asian & Philippine Art (Items 1 & 2)', contributions: 'Explained the distinct characteristics of Chinese, Japanese and Indian art traditions; conducted a comparative analysis of selected Asian artworks focusing on their cultural and historical significance, including citations.' },
  { id: '3B', name: 'Brian Rene R. De los Santos', role: 'Content Researcher & Analyst (Part 3B)', pair: 'Pair 3', pages: '19–21', sections: 'Part 3: Asian & Philippine Art (Items 3 & 4)', contributions: 'Presented and analyzed examples of Philippine indigenous art and traditional crafts; explained how Asian cultures and traditions influenced Philippine artistic practices using concrete visual examples and credible sources.' },
  { id: '4A', name: 'Member 4A', role: 'Bikolano Heritage Researcher', pair: 'Pair 4', pages: '22–24', sections: 'Part 4: Philippine & Bikolano Heritage', contributions: 'Bikol visual/applied, literary & performing arts; artisans, landmarks & Peñafrancia spotlight.' },
  { id: '4B', name: 'Member 4B', role: 'Cultural Significance Analyst', pair: 'Pair 4', pages: '25–27', sections: 'Part 4: Philippine & Bikolano Heritage', contributions: 'Historical, social & livelihood significance; heritage preservation strategies.' },
  { id: '5A', name: 'Member 5A', role: 'Contemporary Art Researcher', pair: 'Pair 5', pages: '28–30', sections: 'Part 5: Contemporary Art & Innovation', contributions: 'Contemporary Philippine art overview, diverse forms, appropriation & improvisation.' },
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

const ART = {
  monaLisa: A('mona-lisa', 'Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg', 'Mona Lisa', 'Leonardo da Vinci', 'c. 1503–1519', 'Oil on poplar panel · Louvre, Paris', 'Sfumato modelling dissolves contour into atmosphere, making the sitter seem alive.'),
  starryNight: A('starry-night', 'Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', 'The Starry Night', 'Vincent van Gogh', '1889', 'Oil on canvas · MoMA, New York', 'Swirling impasto turns a night sky into a record of inner turbulence.'),
  greatWave: A('great-wave', 'Tsunami_by_hokusai_19th_century.jpg', 'The Great Wave off Kanagawa', 'Katsushika Hokusai', 'c. 1831', 'Woodblock print (ukiyo-e) · Japan', 'A clawing wave dwarfs boatmen while Mount Fuji sits small and still.'),
  schoolAthens: A('school-athens', '"The_School_of_Athens"_by_Raffaello_Sanzio_da_Urbino.jpg', 'The School of Athens', 'Raphael', '1509–1511', 'Fresco · Apostolic Palace, Vatican', 'One-point perspective converges on Plato and Aristotle — Renaissance humanism made visible.'),
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
  spoliarium: A('spoliarium', 'Juan_Luna_Spoliarium.jpg', 'Spoliarium', 'Juan Luna', '1884', 'Oil on canvas · National Museum of Fine Arts, Manila', 'Gold medal at Madrid (1884); read by ilustrados as an allegory of colonial oppression.'),
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
 * 4b. SUBMITTED CONTENT — PART 1 & PART 3 (from src/documents/*.docx)
 *     Local images are picked up automatically from /src/images/PART X/
 *     (matched by file name, any extension). Drop a missing file in with
 *     the name shown on its placeholder and it will appear.
 * ------------------------------------------------------------------- */
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

interface SubmittedOpts { names: string[]; commons?: string; tags?: string[]; notes?: { label: string; text: string }[] }
function S(id: string, title: string, artist: string, yearOrPeriod: string, mediumOrOrigin: string, caption: string, sourceUrl: string, o: SubmittedOpts): Artwork {
  return { id, title, artist, yearOrPeriod, mediumOrOrigin, imageUrl: o.commons ? wm(o.commons) : '', localImagePath: localImg(...o.names), caption, sourceUrl, calloutTags: o.tags, notes: o.notes };
}

const P1 = {
  starryNight: S('starry-night', 'The Starry Night', 'Vincent van Gogh', '1889', 'Oil on canvas', 'The Starry Night — Vincent van Gogh, 1889. Oil on canvas.', 'https://www.moma.org/collection/works/79802', { names: ['The Starry Night'], commons: 'Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' }),
  guernica: S('guernica', 'Guernica', 'Pablo Picasso', '1937', 'Oil on canvas', 'Guernica — Pablo Picasso, 1937. Oil on canvas.', 'https://www.museoreinasofia.es/en/collections/artwork/guernica-0', { names: ['Guernica'] }),
  americanGothic: S('american-gothic', 'American Gothic', 'Grant Wood', '1930', 'Oil on beaverboard', 'American Gothic — Grant Wood, 1930. Oil on beaverboard.', 'https://commons.wikimedia.org/wiki/File%3AArt_Institute_of_Chicago-0955.jpg', { names: ['Part1_Slide4_AmericanGothic', 'American Gothic'], commons: 'Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg' }),
  nighthawks: S('nighthawks', 'Nighthawks', 'Edward Hopper', '1942', 'Oil on canvas', 'Nighthawks — Edward Hopper, 1942. Oil on canvas.', 'https://blog.artsper.com/en/a-closer-look/artwork-analysis-nighthawks-by-edward-hopper/', { names: ['Part1_Slide4_Nighthawks', 'Nighthawks'], commons: 'Nighthawks_by_Edward_Hopper_1942.jpg' }),
  greatWave: S('great-wave', 'The Great Wave off Kanagawa', 'Katsushika Hokusai', '1830–1832', 'Woodblock print, ink and color on paper', 'Under the Wave off Kanagawa — Katsushika Hokusai, 1830–1832. Woodblock print, ink and color on paper.', 'https://www.metmuseum.org/art/collection/search/45434', { names: ['Part1_Slide5_GreatWave', 'Part3_Slide1_Hokusai_GreatWave'], commons: 'Tsunami_by_hokusai_19th_century.jpg' }),
  bedroom: S('the-bedroom', 'The Bedroom', 'Vincent van Gogh', '1889', 'Oil on canvas', 'The Bedroom — Vincent van Gogh, 1889. Oil on canvas.', 'https://www.artic.edu/artworks/28560/the-bedroom', { names: ['Part1_Slide6_TheBedroom', 'The Bedroom'], commons: 'Vincent_van_Gogh_-_The_Bedroom_-_Google_Art_Project.jpg' }),
};

const C1 = {
  starryNight: 'The Museum of Modern Art. (n.d.). Vincent van Gogh. The Starry Night. Saint Rémy, June 1889. https://www.moma.org/collection/works/79802',
  guernica: 'Museo Nacional Centro de Arte Reina Sofía. (n.d.). Guernica. https://www.museoreinasofia.es/en/collections/artwork/guernica-0',
  americanGothic: 'Whitney Museum of American Art. (n.d.). Grant Wood: American Gothic and other fables. https://commons.wikimedia.org/wiki/File%3AArt_Institute_of_Chicago-0955.jpg',
  nighthawks: 'The Art Institute of Chicago. (n.d.). Nighthawks. https://blog.artsper.com/en/a-closer-look/artwork-analysis-nighthawks-by-edward-hopper/',
  greatWave: 'The Metropolitan Museum of Art. (n.d.). Under the wave off Kanagawa (Kanagawa oki nami ura), also known as The Great Wave. https://www.metmuseum.org/art/collection/search/45434',
  bedroom: 'The Art Institute of Chicago. (n.d.). The bedroom. https://www.artic.edu/artworks/28560/the-bedroom',
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
};

const P5 = {
  arkipelago: S('arkipelago', 'Arkipelago', 'Mark Justiniani', '2019', 'Mixed media installation (mirrors, glass, metal frames, LED lights, found objects)', 'Arkipelago — Mark Justiniani, 2019. Mixed media installation.', 'https://lifestyle.inquirer.net/339984/at-58th-venice-biennale-philippine-arkipelago-rises/', { names: ['arkipelago'] }),
  mebuyan: S('mebuyans-colony', 'Mebuyan’s Colony', 'Leeroy New', '2022', 'Mixed media installation (bamboo, recycled plastic, cable ties)', 'Mebuyan’s Colony — Leeroy New, 2022. Mixed media installation.', 'https://www.tatlerasia.com/lifestyle/arts/leeroy-new-mebuyan-colony-and-mebuyan-vessel', { names: ['mebuyanscolony'] }),
  lupang: S('lupang-ninuno', 'Lupang Ninuno (Mural advocating for Lumad rights)', 'Archie Oclos', '2018', 'Mural', 'Lupang Ninuno — Archie Oclos, 2018. Mural advocating for Lumad rights.', 'https://archieoclos.com/passion-projects-slides/#ninuno', { names: ['lupangninuno'] }),
};

const C5 = {
  arkipelago: 'Baga-Reyes, V. (2019, July 8). At 58th Venice Biennale, Philippine \'Arkipelago\' rises. Philippine Daily Inquirer. https://lifestyle.inquirer.net/339984/at-58th-venice-biennale-philippine-arkipelago-rises/',
  mebuyan: 'Sorilla IV, F. (2023, April 27). Leeroy New on his monumental works, Mebuyan\'s Colony and Mebuyan\'s Vessel. Tatler Asia. https://www.tatlerasia.com/lifestyle/arts/leeroy-new-mebuyan-colony-and-mebuyan-vessel',
  lupang: 'Oclos, A. (2018). Passion Projects: Lupang Ninuno. Archie Oclos. https://archieoclos.com/passion-projects-slides/#ninuno',
};

/* ---------------------------------------------------------------------
 * 5. THE 33 CORE PAGES + 3 BACK MATTER PAGES
 * ------------------------------------------------------------------- */
type Draft = Omit<PortfolioSlide, 'partTitle'>;

const DRAFTS: Draft[] = [
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
    title: 'Major Western Art Periods',
    subtitle: 'Classical Greece & Rome · Medieval · Renaissance',
    assignedMember: by('2A'),
    conciseExplanation: [
      'Classical Greece and Rome pursued ideal proportion, harmony and the perfected human body. The Medieval period redirected art toward the sacred: illuminated manuscripts and cathedrals served Christian devotion over realism. The Renaissance (c. 1400–1600) revived classical learning, inventing linear perspective and placing the human at the centre.',
    ],
    criticalAnalysis: {
      heading: 'A Cycle of Ideals',
      content: 'The Renaissance did not simply “progress” beyond the Middle Ages; it consciously re-adopted Greek values. Western art history is better read as recurring conversations with antiquity than as a straight line.',
    },
    artworks: [ART.parthenon, ART.kells, ART.schoolAthens, ART.david],
    citations: [R.janson, R.gardner, R.gombrich],
  },
  {
    pageNumber: 11, partNumber: 2, slideLayout: 'timeline-context',
    title: 'Characteristics & Historical Contexts',
    subtitle: 'Baroque · Romanticism · Realism · Impressionism · Modernism',
    assignedMember: by('2A'),
    conciseExplanation: [
      'Baroque art used dramatic light and motion to stir faith. Romanticism exalted emotion, nature and revolution. Realism rejected idealisation to depict ordinary life. Impressionism captured fleeting light outdoors, aided by portable paint tubes. Modernism broke with representation altogether, questioning what art could be.',
    ],
    criticalAnalysis: {
      heading: 'Style Follows Society',
      content: 'Each style answers its moment: Counter-Reformation zeal, revolutionary upheaval, industrial labour, urban leisure and modern alienation. Characteristics are symptoms of history.',
    },
    artworks: [ART.calling, ART.wanderer, ART.impression, ART.kandinsky],
    citations: [R.janson, R.hauser, R.gardner],
  },
  {
    pageNumber: 12, partNumber: 2, slideLayout: 'comparative-split',
    title: 'Western Masters I',
    subtitle: 'Classical to Baroque Masterworks',
    assignedMember: by('2A'),
    conciseExplanation: [
      'Michelangelo’s Creation of Adam distils Renaissance humanism into a single gesture: God reaches toward a perfected human body. A century later Rembrandt’s Night Watch breaks the static group portrait with spotlighting, diagonals and bustling motion.',
      'Together they show the shift from Renaissance harmony and clarity to Baroque drama, theatricality and depth.',
    ],
    criticalAnalysis: {
      heading: 'From Ideal to Theatre',
      content: 'Michelangelo invites contemplation of divine order; Rembrandt invites participation in a moment of action. The viewer’s role changes from witness of eternity to spectator of drama.',
      culturalHistoricalContext: 'Papal patronage in Rome versus mercantile civic patronage in the Protestant Dutch Republic.',
    },
    artworks: [ART.creationAdam, ART.nightWatch],
    citations: [R.gombrich, R.janson, R.baxandall],
  },
  {
    pageNumber: 13, partNumber: 2, slideLayout: 'comparative-split',
    title: 'Western Masters II',
    subtitle: 'Impressionism to the Modern Avant-Garde',
    assignedMember: by('2B'),
    conciseExplanation: [
      'Monet’s Impression, Sunrise prioritised perception over finish, earning the movement its once-mocking name. Half a century later Duchamp submitted a factory-made urinal, Fountain, to an exhibition — shifting art from the hand to the mind.',
      'Between them, Western art moved from painting light to questioning the institution of art itself.',
    ],
    criticalAnalysis: {
      heading: 'The Avant-Garde as Provocation',
      content: 'Both works were rejected or ridiculed at first. Their eventual canonisation shows that the avant-garde advances by testing the limits of acceptance — a pattern repeated in contemporary art.',
      culturalHistoricalContext: 'Industrialisation, photography and World War I destabilised older ideas of craft and beauty.',
    },
    artworks: [ART.impression, ART.fountain],
    citations: [R.gombrich, R.smith, R.benjamin],
  },
  {
    pageNumber: 14, partNumber: 2, slideLayout: 'single-masterpiece',
    title: 'Critical Analysis I',
    subtitle: 'How History, Patronage & Religion Shaped Western Art',
    assignedMember: by('2B'),
    conciseExplanation: [
      'For most of Western history artists worked on commission. The Church, monarchs and wealthy families such as the Medici dictated subjects, materials and even the quantity of costly ultramarine. Baxandall showed that contracts treated paintings as negotiated deposits of social relationships.',
      'After the Council of Trent (1545–1563), the Catholic Church demanded art that was clear, emotional and persuasive. Caravaggio’s Calling of Saint Matthew answers with a shaft of light falling on a tax collector — salvation staged in a tavern.',
    ],
    criticalAnalysis: {
      heading: 'Patronage Is Authorship',
      content: 'We celebrate individual genius, yet patrons co-authored masterpieces. Recognising this exposes art as an instrument of power: of the Church to persuade, and of elites to display status and piety.',
      culturalHistoricalContext: 'The Counter-Reformation used Baroque art as a visual response to Protestant iconoclasm.',
    },
    artworks: [ART.calling],
    citations: [R.baxandall, R.hauser, R.janson],
  },
  {
    pageNumber: 15, partNumber: 2, slideLayout: 'comparative-split',
    title: 'Critical Analysis II',
    subtitle: 'Society, Enlightenment & Cultural Shifts',
    assignedMember: by('2B'),
    conciseExplanation: [
      'The Enlightenment championed reason, liberty and the rights of the individual; the French Revolution turned those ideas into political struggle. Delacroix’s Liberty Leading the People made the citizen, not the king, the hero of history painting.',
      'Romantic painters like Friedrich turned inward, placing a solitary figure before the sublime — an image of the modern self.',
    ],
    criticalAnalysis: {
      heading: 'The Public and the Private Self',
      content: 'Delacroix paints collective revolution; Friedrich paints private contemplation. Both are products of the same Enlightenment shift that dethroned inherited authority and elevated individual experience.',
      culturalHistoricalContext: 'The rise of public Salons and museums (the Louvre opened in 1793) created a new middle-class audience.',
    },
    artworks: [ART.liberty, ART.wanderer],
    citations: [R.hauser, R.gardner, R.nochlin],
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
    pageNumber: 21, partNumber: 3, slideLayout: 'comparative-split',
    title: 'Asian Influences on Philippine Art',
    subtitle: 'Trade, faith and exchange across the archipelago',
    assignedMember: by('3B'),
    conciseExplanation: [
      'Long before Spain, the islands were part of maritime networks linking China, India, Borneo and the Malay world. Chinese porcelain appears in burial sites; Indic scripts shaped baybayin and the Laguna Copperplate; Islamic art arrived in Mindanao and Sulu.',
      'These influences were localised: Chinese motifs were absorbed into Filipino ceramics and Hindu-Buddhist ideas into golden ornaments like the Agusan Tara.',
    ],
    criticalAnalysis: {
      heading: 'Localisation, Not Imitation',
      content: 'Filipino artisans adapted foreign forms to local meanings. Hybridity is a strength of Philippine art, not a sign of derivativeness.',
      culturalHistoricalContext: 'The Laguna Copperplate Inscription (900 CE) proves early ties to Java and the Indic world.',
    },
    artworks: [ART.borobudur, ART.okir],
    citations: [R.guillermo, R.ccp, R.craven],
  },

  // ======================= PART 4 =======================
  {
    pageNumber: 22, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Bikolano Visual & Applied Arts',
    subtitle: 'Abaca & Sinamay · Tiwi Ceramics · Colonial Churches',
    assignedMember: by('4A'),
    conciseExplanation: [
      'Bicol is the abaca capital of the country. Albay, Catanduanes and Sorsogon artisans strip and weave abaca into sinamay, hats and bags. In Tiwi, potters shape red clay into palayok and decorative ware. Colonial stone churches such as Daraga’s Baroque façade show local adaptation of Spanish forms using volcanic stone.',
    ],
    criticalAnalysis: {
      heading: 'Material as Identity',
      content: 'Volcanic stone, abaca and clay are gifts of the Bicol landscape — the same Mayon that threatens also supplies the materials. Bikolano art is literally built from its environment.',
      culturalHistoricalContext: 'Daraga Church was declared a National Cultural Treasure in 2007.',
    },
    artworks: [ART.daraga, ART.abaca, ART.tiwi],
    citations: [R.realubit, R.philfida, R.ncca],
  },
  {
    pageNumber: 23, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Bikolano Literary & Performing Arts',
    subtitle: 'Ibalong Epic · Rawitdawit · Tigsik · Pantomina',
    assignedMember: by('4A'),
    conciseExplanation: [
      'The Ibalong epic narrates heroes Baltog, Handyong and Bantong who cleared the land of monsters. Rawitdawit (poetry) and tigsik (witty extemporaneous verse) show Bikolano verbal artistry, while the Pantomina mimics courting doves in festive dance.',
    ],
    criticalAnalysis: {
      heading: 'Epic as Civic Memory',
      content: 'Today’s Ibalong Festival turns a fragmentary epic into a shared identity performance. Tradition is not frozen; communities reinterpret it to meet present needs.',
      culturalHistoricalContext: 'The surviving Ibalong text comes from Fr. José Castaño’s 1895 Spanish account.',
    },
    artworks: [ART.ibalong, ART.pantomina],
    citations: [R.castano, R.realubit, R.ccp],
  },
  {
    pageNumber: 24, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Bikolano Artists, Landmarks & Peñafrancia',
    subtitle: 'Artisans, sacred landmarks & devotional heritage',
    assignedMember: by('4A'),
    conciseExplanation: [
      'Bicol’s heritage lives in its artisans — weavers, potters, carvers of the Peñafrancia image’s carriages — and its landmarks: Cagsawa Ruins beneath Mayon, Daraga Church, and Naga’s Basilica. Every September, the Peñafrancia Fiesta draws millions as voyadores carry Ina through the streets and along the Bicol River.',
    ],
    criticalAnalysis: {
      heading: 'Devotion as Total Artwork',
      content: 'The Peñafrancia Fiesta combines sculpture, music, costume, decoration and choreographed movement — a Gesamtkunstwerk created by the community rather than a single artist.',
      culturalHistoricalContext: 'Devotion to Our Lady of Peñafrancia in Naga dates to 1710.',
    },
    artworks: [ART.cagsawa, ART.penafrancia],
    citations: [R.realubit, R.ncca, R.unesco],
  },
  {
    pageNumber: 25, partNumber: 4, slideLayout: 'comparative-split',
    title: 'Historical & Cultural Significance',
    subtitle: 'Reading selected Bikolano and Philippine works',
    assignedMember: by('4B'),
    conciseExplanation: [
      'Juan Luna’s Spoliarium won gold in Madrid in 1884, proving Filipino excellence to Spain and inspiring the Propaganda Movement. Daraga Church records the meeting of Franciscan design and Bikolano labour and stone.',
      'Both works carry layered histories of colonisation, faith and national awakening.',
    ],
    criticalAnalysis: {
      heading: 'Colonial Forms, Filipino Meanings',
      content: 'Luna mastered the academic style of the coloniser and used it to assert equality; Bikolano builders turned a European church plan into a local landmark. Mastery of borrowed forms became a tool of self-assertion.',
      culturalHistoricalContext: 'Rizal’s 1884 toast to Luna and Hidalgo became a nationalist manifesto.',
    },
    artworks: [ART.spoliarium, ART.daraga],
    citations: [R.flores, R.guillermo, R.ncca],
  },
  {
    pageNumber: 26, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Social Significance & Livelihood in Bicol',
    subtitle: 'Regional identity and community economy',
    assignedMember: by('4B'),
    conciseExplanation: [
      'Heritage arts sustain families. Abaca farming and handicraft employ thousands of Bikolanos, and pottery towns depend on clay traditions. Festivals like Ibalong, Magayon and Peñafrancia bring tourism that supports local businesses.',
      'Through these arts, Bikolanos assert a regional identity within the nation.',
    ],
    criticalAnalysis: {
      heading: 'Who Benefits from Heritage?',
      content: 'Tourism can commodify tradition while artisans remain underpaid. A critical appreciation asks whether income reaches the weavers and potters who keep the arts alive.',
      culturalHistoricalContext: 'The Philippines supplies most of the world’s abaca, with Bicol a leading producer.',
    },
    artworks: [ART.abaca, ART.tiwi, ART.ibalong],
    citations: [R.philfida, R.realubit, R.ncca],
  },
  {
    pageNumber: 27, partNumber: 4, slideLayout: 'heritage-spotlight',
    title: 'Preserving Heritage for the Future',
    subtitle: 'Policies, schools, documentation and youth',
    assignedMember: by('4B'),
    conciseExplanation: [
      'Republic Act 10066 protects National Cultural Treasures, and UNESCO’s 2003 Convention safeguards intangible traditions. Schools of Living Traditions pass skills from masters to youth, while digital archives, museums and social media document Bikolano practices.',
      'Students play a role: learning, documenting and promoting local arts — as this portfolio attempts.',
    ],
    criticalAnalysis: {
      heading: 'Living, Not Museum-Bound',
      content: 'Preservation succeeds when traditions remain useful and meaningful to communities. Innovation — new abaca designs, modern festival choreography — can keep heritage alive.',
      culturalHistoricalContext: 'The NCCA was created through Republic Act 7356 (1992).',
    },
    artworks: [ART.cagsawa, ART.tnalak],
    citations: [R.ra10066, R.unesco, R.ncca],
  },

  // ======================= PART 5 =======================
  {
    pageNumber: 28, partNumber: 5, slideLayout: 'timeline-context',
    title: 'Contemporary Philippine Art',
    subtitle: 'Overview & Evolution',
    assignedMember: by('5A'),
    conciseExplanation: [
      'From Amorsolo’s luminous pastorals to the modernists led by Victorio Edades, Philippine art moved toward new forms. Social realists confronted martial law, and today artists such as BenCab, the Aquilizans and Pacita Abad engage global audiences while rooted in Filipino experience.',
    ],
    criticalAnalysis: {
      heading: 'Global Yet Local',
      content: 'Contemporary Filipino artists navigate the global art market while addressing migration, identity and inequality — local experiences that resonate worldwide.',
    },
    artworks: [ART.spoliarium, ART.bencab, ART.pacita, ART.aquilizan],
    citations: [R.guillermo, R.smith, R.flores],
  },
  {
    pageNumber: 29, partNumber: 5, slideLayout: 'comparative-split',
    title: 'Diverse Forms of Contemporary Art',
    subtitle: 'Installation · Performance · Digital/New Media · Street Art',
    assignedMember: by('5A'),
    conciseExplanation: [
      'Installation art transforms whole spaces; performance makes the artist’s body and time the medium; digital and new media use code, screens and interactivity; street art reclaims public walls for communities.',
      'Filipino artists such as David Medalla pioneered kinetic art, while muralists bring art to the streets.',
    ],
    criticalAnalysis: {
      heading: 'Expanding the Frame',
      content: 'These forms reject the framed object, prioritising experience, participation and site. They democratise art — but also challenge how it is collected and preserved.',
      culturalHistoricalContext: 'Medalla’s Cloud Canyons (1963) is held by Tate, London.',
    },
    artworks: [ART.medalla, ART.streetArt],
    citations: [R.bishop, R.paul, R.smith],
  },
  {
    pageNumber: 30, partNumber: 5, slideLayout: 'comparative-split',
    title: 'Appropriation & Improvisation',
    subtitle: 'Borrowing, remixing and making do',
    assignedMember: by('5A'),
    conciseExplanation: [
      'Appropriation borrows existing images or objects and recontextualises them. Duchamp’s readymade opened the door; Filipino artists such as Santiago Bose appropriated folk Catholic imagery to critique power.',
      'Improvisation — the Filipino diskarte — uses found and recycled materials creatively, as in the Aquilizans’ community installations.',
    ],
    criticalAnalysis: {
      heading: 'Who Owns an Image?',
      content: 'Appropriation raises questions of originality and copyright, but it also lets marginalised artists talk back to dominant imagery. Context determines whether borrowing is critique or theft.',
      culturalHistoricalContext: 'Benjamin argued mechanical reproduction erodes the “aura” of the original.',
    },
    artworks: [ART.fountain, ART.santos],
    citations: [R.benjamin, R.smith, R.guillermo],
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

  // ======================= BACK MATTER =======================
  {
    pageNumber: 'REF-1', partNumber: 6, slideLayout: 'references',
    title: 'References & Image Credits',
    subtitle: 'Master Reference List (APA 7th) — compiled automatically from all slides',
    assignedMember: by('L'),
    conciseExplanation: [],
    criticalAnalysis: { heading: 'Note', content: 'Back Matter — excluded from the 20–40 page count.' },
    artworks: [],
    citations: [R.wikimedia, R.nochlin],
  },
  {
    pageNumber: 'REF-2', partNumber: 6, slideLayout: 'disclosure',
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
