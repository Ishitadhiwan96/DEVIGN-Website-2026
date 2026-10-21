# DEVIGN @ GBPIET - Website

Dark "Obsidian Blueprint" site (Tailwind CDN + vanilla JS). Same design as the Stitch export, split so each teammate owns their own files and nobody gets merge conflicts.

## Who owns what

| Teammate | Sections | Files |
|---|---|---|
| **Priyanshu** | Navbar, Footer | `src/priyanshu/navbar.html`, `footer.html`, `priyanshu.css/js` (mobile menu) |
| **Ishita** | Home (hero), About Devign (+ vision) | `src/ishita/home.html`, `about.html`, `ishita.css/js` |
| **Sania** | Teams (Why Join), Contact Us | `src/sania/team.html`, `contact.html`, `sania.css/js` |
| **Ridhi** | What We Do, Projects (events + fest deployments), Gallery | `src/ridhi/what-we-do.html`, `projects.html`, `gallery.html`, `modals.html`, `ridhi.css/js` (filters, lightbox, countdown) |
| Shared | Head, background, cursor, tilt, antigravity | `src/shared/*` (change only after telling the team) |

## Run

```bash
node build.js      # stitches all partials into index.html
npx serve .        # or just open index.html
```
Rule: edit only your own folder, run `node build.js`, commit `index.html` too (GitHub Pages serves it).

## Antigravity effect (`src/shared/antigravity.*`)
- Small glowing twinkling stars + rotating 4-point sparkles float upward in zero-g and flee the cursor
- Random shooting stars streak across the screen
- Click = shockwave ring + burst of stars
- Cards/gallery tiles levitate, rise in with blur on scroll, and drift away from the cursor
- Scrolling kicks the stars
- Bottom-left terminal chip `$ gravity --set 0` toggles gravity (stars fall and bounce)
- Disabled automatically for `prefers-reduced-motion`

## Push to GitHub
```bash
git init && git add . && git commit -m "feat: devign website (split by teammate)"
git branch -M main
git remote add origin https://github.com/<org>/<repo>.git
git push -u origin main
# each teammate: git checkout -b feat/<name>  ->  work in own folder  ->  PR
```
