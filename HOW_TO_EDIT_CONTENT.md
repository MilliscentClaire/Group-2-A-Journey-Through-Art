# ✏️ How to Edit Content — Group 2 Art Portfolio

All text, names, images and references live in **one file**:
`src/data/slidesData.ts`. You never need to touch the components.

---

## 1. Run the site
```bash
npm install
npm run dev        # open the localhost URL shown
```

## 2. Update member names (once — updates every slide)
In `src/data/slidesData.ts`, find `GROUP_MEMBERS` and replace `'Member 1A'`, `'Member 1B'`, … with real names.
You can also edit each member's `role`, `pages` and `contributions` (used on the ROLES page and in the CSV matrix).

Course info (section, instructor, school, term) is in `COURSE` at the top.

## 3. Add images from the `AA - IMAGES` Google Drive folder
1. Download the images.
2. Put them in **`/public/images/`** (create the folder if needed).
3. Rename each file to match the slide it belongs to:

| Pattern | Example |
|---|---|
| First image on a slide | `Part{P}_Slide{N}.jpg` → `Part1_Slide4.jpg` |
| 2nd / 3rd / 4th image | `Part{P}_Slide{N}_2.jpg` → `Part3_Slide19_2.jpg` |

Front Matter = `Part0`, Back Matter = `Part6`.
**Tip:** the exact expected filename is shown on the museum placeholder, and in each slide's *Citation Drawer* (`local: /images/...`).

**Load order:** local file → Wikimedia URL → elegant "Image forthcoming" placeholder. So a local file always wins.

Want a different filename or `.png`? Set it explicitly on the artwork:
```ts
artworks: [{ ...ART.tiwi, localImagePath: '/images/tiwi-pottery.png' }]
```

## 4. Edit a slide's text
Each page is an object inside `DRAFTS`. Search for `pageNumber: 22` (for example) and edit:
- `title`, `subtitle`
- `conciseExplanation` — array of paragraphs (keep ~60–90 words each so it fits the 16:9 page)
- `criticalAnalysis` — `heading`, `content`, optional `culturalHistoricalContext`
- `citations` — APA strings (reuse the shared `R.*` references or paste new ones)
- `artworks` — reuse items from `ART` or add a new one:
```ts
A('my-id', 'Wikimedia_File_Name.jpg', 'Title', 'Artist', 'Year', 'Medium · Location', 'Caption', ['optional', 'tags'])
// no online image? use L(...) with a source URL and add the local file
```

Available `slideLayout`s: `single-masterpiece`, `comparative-split` (2 images), `design-breakdown` (uses `calloutTags`), `timeline-context` (3–4 images), `heritage-spotlight` (1–3 images, terracotta theme).

The master reference list (REF-1) and image credits are **compiled automatically** from every slide.

## 5. Generate & publish the PDF
1. Click **Export All Pages** in the top bar → **🖨️ Export All 36 Pages to PDF**.
2. In Chrome: Destination **Save as PDF**, Margins **None**, ✔ **Background graphics**.
3. Wait until all images have loaded before printing.
4. Save as `public/Group2_Art_Appreciation_Portfolio.pdf`.
5. The **PDF Archive** tab will now embed it and enable the download button.

## 6. Check for errors before submitting
```bash
npm run typecheck   # zero TypeScript errors expected
npm run build       # production build in /dist
```
