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
  { id: '1A', name: 'Member 1A', role: 'Researcher-Writer', pair: 'Pair 1', pages: '4–6', sections: 'Part 1: Understanding Art', contributions: 'Definition & nature of art, assumptions of art, functions & philosophies; sourced exemplar artworks.' },
  { id: '1B', name: 'Member 1B', role: 'Visual Analyst', pair: 'Pair 1', pages: '7–9', sections: 'Part 1: Understanding Art', contributions: 'Subject vs. content breakdown; elements & principles of design callouts and visual annotations.' },
  { id: '2A', name: 'Member 2A', role: 'Art Historian-Writer', pair: 'Pair 2', pages: '10–12', sections: 'Part 2: Western Art Traditions', contributions: 'Periods overview, characteristics & contexts timeline, Classical–Baroque masters.' },
  { id: '2B', name: 'Member 2B', role: 'Critical Analyst', pair: 'Pair 2', pages: '13–15', sections: 'Part 2: Western Art Traditions', contributions: 'Impressionism–Modern masters; critical analyses on patronage, religion, society & Enlightenment.' },
  { id: '3A', name: 'Member 3A', role: 'Asian Art Researcher', pair: 'Pair 3', pages: '16–18', sections: 'Part 3: Asian & Philippine Art', contributions: 'Chinese, Japanese & Indian art characteristics; comparative Asian analysis.' },
  { id: '3B', name: 'Member 3B', role: 'Philippine Crafts Researcher', pair: 'Pair 3', pages: '19–21', sections: 'Part 3: Asian & Philippine Art', contributions: 'Indigenous textiles, pottery, carving & metalwork; Asian trade influences.' },
  { id: '4A', name: 'Member 4A', role: 'Bikolano Heritage Researcher', pair: 'Pair 4', pages: '22–24', sections: 'Part 4: Philippine & Bikolano Heritage', contributions: 'Bikol visual/applied, literary & performing arts; artisans, landmarks & Peñafrancia spotlight.' },
  { id: '4B', name: 'Member 4B', role: 'Cultural Significance Analyst', pair: 'Pair 4', pages: '25–27', sections: 'Part 4: Philippine & Bikolano Heritage', contributions: 'Historical, social & livelihood significance; heritage preservation strategies.' },
  { id: '5A', name: 'Member 5A', role: 'Contemporary Art Researcher', pair: 'Pair 5', pages: '28–30', sections: 'Part 5: Contemporary Art & Innovation', contributions: 'Contemporary Philippine art overview, diverse forms, appropriation & improvisation.' },
  { id: '5B', name: 'Member 5B', role: 'Formal Critic', pair: 'Pair 5', pages: '31–33', sections: 'Part 5: Contemporary Art & Innovation', contributions: 'Formal critiques (design, space, scale, mixed media) and art as social commentary.' },
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
    title: 'Defining Art & Its Nature',
    subtitle: 'What makes something “art”?',
    assignedMember: by('1A'),
    conciseExplanation: [
      'The word art comes from the Latin ars, meaning skill or craft. Today it describes the deliberate arrangement of materials, sounds, movements or ideas to produce something that appeals to the senses, emotions and intellect. Art is a human activity — it requires intention, imagination and a maker who shapes raw experience into form.',
      'Its nature is both expressive and communicative. A painting such as the Mona Lisa is pigment on wood, yet it transmits a mood, a worldview and a technical achievement across five centuries. Art therefore exists in the meeting between object, creator and viewer.',
    ],
    criticalAnalysis: {
      heading: 'Art Lives in the Encounter',
      content: 'Leonardo’s sfumato does not depict a smile so much as invite us to complete one. The ambiguity is the art: meaning is co-produced each time a viewer looks, which is why the painting still feels alive.',
      culturalHistoricalContext: 'Renaissance humanism elevated the painter from artisan to intellectual — a shift that shaped modern definitions of “Art.”',
    },
    artworks: [ART.monaLisa],
    citations: [R.caslib, R.gombrich, R.dewey],
  },
  {
    pageNumber: 5, partNumber: 1, slideLayout: 'design-breakdown',
    title: 'Core Assumptions of Art',
    subtitle: 'Universal · Cultural · Not Nature · Involves Experience',
    assignedMember: by('1A'),
    conciseExplanation: [
      'Art is universal: every known society, from Palawan’s Tabon cave dwellers to Renaissance Florence, has made art. Art is cultural: it reflects the values and symbols of the community that creates it. Art is not nature: it is a human transformation of nature, an interpretation rather than a copy.',
      'Finally, art involves experience. It is not merely an object but an event of perception — Dewey called it “an experience” that is complete, felt and meaningful. Hokusai’s Great Wave illustrates all four: a Japanese print, globally beloved, that stylises nature into an unforgettable experience.',
    ],
    criticalAnalysis: {
      heading: 'The Wave Is Not the Sea',
      content: 'Hokusai’s claw-like foam could never be photographed; it is a designed wave. By exaggerating nature he makes us feel its power — proof that art’s truth lies in interpretation, not imitation.',
      culturalHistoricalContext: 'Prussian blue, newly imported from Europe, gave the print its intense colour — a sign of cultural exchange within “universal” art.',
    },
    artworks: [{ ...ART.greatWave, calloutTags: ['Universal appeal', 'Japanese culture', 'Nature transformed', 'Felt experience'] }],
    citations: [R.caslib, R.dewey, R.mason],
  },
  {
    pageNumber: 6, partNumber: 1, slideLayout: 'comparative-split',
    title: 'Functions & Philosophies of Art',
    subtitle: 'Personal · Social · Physical — Imitationalism · Formalism · Emotionalism',
    assignedMember: by('1A'),
    conciseExplanation: [
      'Art serves personal functions (self-expression, therapy, devotion), social functions (protest, celebration, identity) and physical functions (architecture, furniture, textiles that are used). One work often serves all three.',
      'Philosophies tell us how to judge it. Imitationalism values faithful representation; Formalism (Clive Bell’s “significant form”) values line, colour and composition; Emotionalism (Tolstoy) values the transmission of feeling. Vermeer satisfies the imitationalist; Kandinsky rewards the formalist and emotionalist.',
    ],
    criticalAnalysis: {
      heading: 'One Lens Is Never Enough',
      content: 'Judged by imitation alone, Composition VII “fails.” Judged by form and feeling, it is a symphony. Comparing the two works shows that critical appreciation requires switching lenses rather than applying a single rule.',
      culturalHistoricalContext: 'Kandinsky wrote Concerning the Spiritual in Art (1911) as photography was making literal imitation less necessary for painters.',
    },
    artworks: [ART.pearl, ART.kandinsky],
    citations: [R.bell, R.tolstoy, R.caslib],
  },
  {
    pageNumber: 7, partNumber: 1, slideLayout: 'comparative-split',
    title: 'Subject vs. Content',
    subtitle: 'What we see versus what it means',
    assignedMember: by('1B'),
    conciseExplanation: [
      'The subject is the literal “what” of an artwork — the person, object, scene or idea depicted. The content is the deeper meaning: the message, emotion or idea the artist communicates through that subject.',
      'Millet’s Gleaners has a simple subject: three peasant women picking leftover grain. Its content is social — the dignity and hardship of the rural poor in a changing France. Goya’s Third of May shows a firing squad, but its content is a universal indictment of state violence.',
    ],
    criticalAnalysis: {
      heading: 'Reading Beyond the Literal',
      content: 'Both painters monumentalise ordinary people, but in opposite keys: Millet through quiet bending bodies, Goya through a blazing lantern and outstretched arms. Identical “subjects of the common people” yield distinct content — endurance versus martyrdom.',
      culturalHistoricalContext: 'Parisian critics of 1857 feared The Gleaners as socialist propaganda — evidence that content, not subject, provokes society.',
    },
    artworks: [
      { ...ART.gleaners, calloutTags: ['Subject: peasant women gleaning', 'Content: dignity of labour'] },
      { ...ART.thirdMay, calloutTags: ['Subject: execution', 'Content: inhumanity of war'] },
    ],
    citations: [R.caslib, R.janson, R.hauser],
  },
  {
    pageNumber: 8, partNumber: 1, slideLayout: 'design-breakdown',
    title: 'Elements of Design in Action',
    subtitle: 'Line · Shape · Color · Value · Form · Texture · Space',
    assignedMember: by('1B'),
    conciseExplanation: [
      'The elements are the visual building blocks of art. In The Starry Night, curving lines spiral across the sky; shapes of stars and moon become radiating discs; complementary blue and yellow color vibrate; value contrasts make the village glow; the cypress gives form; thick impasto creates texture; and overlapping planes build space.',
      'Recognising elements lets a viewer describe an artwork objectively before interpreting it — the first step of formal analysis.',
    ],
    criticalAnalysis: {
      heading: 'Elements as Emotion',
      content: 'Van Gogh’s elements are not neutral: the restless line and tactile texture externalise his psychological state. Formal description and emotional reading are therefore inseparable in Post-Impressionism.',
      culturalHistoricalContext: 'Painted from memory at the Saint-Rémy asylum window, 1889.',
    },
    artworks: [{ ...ART.starryNight, calloutTags: ['Line — spirals', 'Shape — orbs', 'Color — blue/yellow', 'Value — glowing lights', 'Form — cypress', 'Texture — impasto', 'Space — overlap'] }],
    citations: [R.arnheim, R.caslib, R.ortiz],
  },
  {
    pageNumber: 9, partNumber: 1, slideLayout: 'design-breakdown',
    title: 'Principles of Design in Action',
    subtitle: 'Balance · Contrast · Emphasis · Movement · Pattern · Rhythm · Unity',
    assignedMember: by('1B'),
    conciseExplanation: [
      'Principles describe how elements are organised. Seurat’s Grande Jatte balances figures across the riverbank; light and shadow create contrast; the woman with the parasol provides emphasis; the eye moves diagonally along the shore; repeated parasols and hats form pattern and rhythm; and the pointillist technique unifies everything.',
      'Principles explain why a composition feels calm, chaotic or harmonious.',
    ],
    criticalAnalysis: {
      heading: 'Order as Social Commentary',
      content: 'The rigid, almost mechanical rhythm of Seurat’s figures can be read as a quiet critique of modern leisure — Parisians frozen in fashionable poses, together yet isolated.',
      culturalHistoricalContext: 'Seurat applied Chevreul’s scientific colour theory, merging art and 19th-century science.',
    },
    artworks: [{ ...ART.grandeJatte, calloutTags: ['Balance', 'Contrast', 'Emphasis', 'Movement', 'Pattern', 'Rhythm', 'Unity'] }],
    citations: [R.arnheim, R.caslib, R.gardner],
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
    title: 'Chinese & Japanese Art',
    subtitle: 'Scroll painting · Daoist harmony · Ukiyo-e · Wabi-sabi',
    assignedMember: by('3A'),
    conciseExplanation: [
      'Chinese landscape painting (shanshui) expresses Daoist harmony between humanity and nature; brushwork is valued as an extension of the scholar’s character. Fan Kuan’s towering mountain reduces travellers to tiny figures.',
      'Japanese art absorbed Chinese models but developed distinct aesthetics: ukiyo-e prints of the “floating world” and wabi-sabi, the beauty of imperfection and transience seen in Zen gardens and tea ceramics.',
    ],
    criticalAnalysis: {
      heading: 'Emptiness as Content',
      content: 'Unlike Western perspective that fills space, East Asian art activates empty space — mist, silk, raked gravel — as a site of contemplation. Absence becomes meaningful.',
      culturalHistoricalContext: 'Zen Buddhism, the tea ceremony and Daoist philosophy shaped this aesthetic.',
    },
    artworks: [ART.fanKuan, ART.ryoanji],
    citations: [R.sullivan, R.mason, R.okakura],
  },
  {
    pageNumber: 17, partNumber: 3, slideLayout: 'single-masterpiece',
    title: 'Characteristics of Indian Art',
    subtitle: 'Spiritual iconography · Hindu & Buddhist symbolism',
    assignedMember: by('3A'),
    conciseExplanation: [
      'Indian art is deeply religious. Hindu, Buddhist and Jain traditions developed precise iconographic codes — mudras (hand gestures), asanas (postures) and attributes — so devotees could recognise deities instantly. Sculpture and temple architecture are conceived as sacred diagrams of the cosmos.',
      'The Chola bronze Nataraja shows Shiva dancing within a ring of fire, trampling the dwarf of ignorance while his hands hold the drum of creation and the flame of destruction.',
    ],
    criticalAnalysis: {
      heading: 'An Image to Be Worshipped',
      content: 'In a museum we view Nataraja as sculpture; in a temple it is a living presence that is bathed, dressed and carried in procession. Context transforms the object’s meaning from aesthetic to sacred.',
      culturalHistoricalContext: 'Chola-dynasty lost-wax casting (10th–11th c.) in Tamil Nadu reached unrivalled refinement.',
    },
    artworks: [ART.nataraja],
    citations: [R.craven, R.gardner],
  },
  {
    pageNumber: 18, partNumber: 3, slideLayout: 'timeline-context',
    title: 'Comparative Asian Analysis',
    subtitle: 'Selected Asian artworks & their cultural significance',
    assignedMember: by('3A'),
    conciseExplanation: [
      'Placing works side by side reveals shared Asian values — the sacred, cyclical time and harmony with nature — expressed through distinct forms: a Chinese handscroll read as a journey, a Javanese stupa ascended as a mandala, a Mughal tomb as paradise, and a Japanese print sold to urban commoners.',
    ],
    criticalAnalysis: {
      heading: 'Journey as a Shared Structure',
      content: 'Scroll, stupa and garden all require the viewer to move through time. Asian art often privileges process and passage over a single fixed viewpoint.',
    },
    artworks: [ART.qingming, ART.borobudur, ART.tajMahal, ART.greatWave],
    citations: [R.sullivan, R.craven, R.mason],
  },
  {
    pageNumber: 19, partNumber: 3, slideLayout: 'heritage-spotlight',
    title: 'Philippine Indigenous Art I',
    subtitle: 'Textile & Weaving Traditions — T’nalak, Inabel, Yakan',
    assignedMember: by('3B'),
    conciseExplanation: [
      'Weaving is among the archipelago’s most sophisticated art forms. The T’boli of Lake Sebu tie-dye abaca into T’nalak whose patterns arrive in dreams. Ilocano Inabel features protective binakol whirlwinds, while Yakan weavers of Basilan produce intensely coloured geometric cloth.',
      'These textiles mark life passages — birth, marriage and death — and encode identity.',
    ],
    criticalAnalysis: {
      heading: 'Beyond “Craft”',
      content: 'Calling these textiles “crafts” underestimates their complexity. They are knowledge systems combining botany, mathematics, spirituality and memory, worthy of the same critical attention as painting.',
      culturalHistoricalContext: 'Lang Dulay (T’nalak) and Magdalena Gamayo (Inabel) are GAMABA National Living Treasures.',
    },
    artworks: [ART.tnalak, ART.inabel, ART.yakan],
    citations: [R.ccp, R.gamaba, R.ncca],
  },
  {
    pageNumber: 20, partNumber: 3, slideLayout: 'heritage-spotlight',
    title: 'Philippine Indigenous Art II',
    subtitle: 'Pottery, Carving & Metalwork — Manunggul Jar, Bulul, Okir',
    assignedMember: by('3B'),
    conciseExplanation: [
      'The Manunggul Jar from Palawan’s Tabon Caves shows two souls rowing to the afterlife, evidence of complex beliefs nearly 3,000 years ago. Ifugao bulul carvings guard rice granaries, and Maranao okir fills houses and brassware with flowing fern and serpent motifs.',
    ],
    criticalAnalysis: {
      heading: 'Function and Faith Fused',
      content: 'Each object is simultaneously useful and sacred: a burial jar, a granary guardian, a royal house. Pre-colonial Filipino art did not separate the aesthetic from the everyday.',
      culturalHistoricalContext: 'Okir’s curvilinear style reflects Islamic aversion to figurative images, channelling creativity into ornament.',
    },
    artworks: [ART.manunggul, ART.bulul, ART.okir],
    citations: [R.fox, R.ccp, R.guillermo],
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
    title: 'Formal Critique I',
    subtitle: 'Elements & Principles in Contemporary Masterworks',
    assignedMember: by('5B'),
    conciseExplanation: [
      'BenCab’s Sabel uses fluid, calligraphic line and a muted sepia palette; the wrapped figure creates strong shape against empty space. Emphasis falls on the hidden face, producing tension, while repeated drapery folds create rhythm.',
      'Formal analysis shows how a contemporary artist still relies on classical design principles.',
    ],
    criticalAnalysis: {
      heading: 'Form Carries the Message',
      content: 'The veiling drapery, an element of form, becomes the content: invisibility of the urban poor. Formal choices are political choices.',
      culturalHistoricalContext: 'BenCab was named National Artist for Visual Arts in 2006.',
    },
    artworks: [ART.bencab],
    citations: [R.guillermo, R.arnheim, R.caslib],
  },
  {
    pageNumber: 32, partNumber: 5, slideLayout: 'comparative-split',
    title: 'Formal Critique II',
    subtitle: 'Space, Scale & Mixed Media Innovation',
    assignedMember: by('5B'),
    conciseExplanation: [
      'Pacita Abad’s trapunto works stitch, pad and paint canvas with beads and mirrors, creating tactile relief. The Aquilizans use massive scale — thousands of small objects — so viewers physically walk into the work.',
      'Space and scale shift the viewer from observer to participant.',
    ],
    criticalAnalysis: {
      heading: 'The Body of the Viewer',
      content: 'Mixed media and immersive scale engage touch, movement and memory. These works argue that appreciation is embodied, not only visual.',
      culturalHistoricalContext: 'Abad’s 55-metre painted Singapore footbridge (2004) extended her practice into public space.',
    },
    artworks: [ART.pacita, ART.aquilizan],
    citations: [R.smith, R.bourriaud, R.bishop],
  },
  {
    pageNumber: 33, partNumber: 5, slideLayout: 'single-masterpiece',
    title: 'Art as Social Commentary',
    subtitle: 'Addressing social issues & societal change',
    assignedMember: by('5B'),
    conciseExplanation: [
      'From Goya to Filipino social realists of the martial law era, artists have exposed injustice. Today muralists, digital artists and community collectives address poverty, climate change, indigenous rights and disinformation.',
      'Art can raise awareness, build solidarity and imagine alternatives — completing our journey from foundations to the present.',
    ],
    criticalAnalysis: {
      heading: 'Art That Acts',
      content: 'Social commentary art measures success not by beauty alone but by its power to move people to reflection and action. It reminds us that appreciation carries responsibility.',
      culturalHistoricalContext: 'Kaisahan (1976) pioneered Philippine social realism during martial law.',
    },
    artworks: [ART.streetArt],
    citations: [R.guillermo, R.bishop, R.berger],
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
