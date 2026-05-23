# Screenshot → App: Cloning Vercel's Homepage with Claude Code

> Watch the build: [I Used Claude to Clone Vercel's Homepage (YouTube)](https://youtu.be/FYRtIiUpt0w)

This repo is the source code from the AyyazTech tutorial where Claude Code cloned [vercel.com](https://vercel.com) using only screenshots as input — no manual HTML/CSS written. A single prompt produced the entire landing page (header, hero, feature sections, FAQ tabs, footer + mobile responsive layout with animated menu).

[![Video thumbnail](https://img.youtube.com/vi/FYRtIiUpt0w/maxresdefault.jpg)](https://youtu.be/FYRtIiUpt0w)

📺 **Watch the full 5-minute tutorial:** https://youtu.be/FYRtIiUpt0w
🔔 **Subscribe to AyyazTech for more AI coding workflows:** https://www.youtube.com/@AyyazTech
🌐 **More tutorials at:** https://ayyaztech.com

---

## What's in this repo

| Path | What it is |
|---|---|
| `index.html` | The cloned Vercel landing page (Claude-generated) |
| `styles.css` | All CSS (Claude-generated) |
| `main.ts` | Frontend entry (Claude-generated) |
| `server.ts` | Bun dev server |
| `screenshots/` | The 11 source screenshots Claude received as input |
| `CLAUDE.md` | Claude Code's project conventions file (Bun-first project) |

## The prompt that built it

```
Clone this site as a static page. Use bun not npm because bun is very fast.
Check all screenshots in this folder. Please make sure that this is pixel perfect
clone and fully responsive.
```

That's it. Claude reviewed all 11 screenshots one-by-one, created a task plan, and built the clone autonomously.

## Run the clone locally

Prerequisites: [Bun](https://bun.sh) installed.

```bash
git clone https://github.com/AyyazTech/screenshot-to-clone-vercel-demo.git
cd screenshot-to-clone-vercel-demo
bun install
bun run dev
```

Open the URL Bun prints in your browser.

## The "bonus beat" — Claude fixes its own mobile bug

The first build had a horizontal scroll issue on mobile + a broken hamburger menu. I screenshotted the bug, pasted it back to Claude in the same session, and it fixed both — including adding a smooth animation to the menu transition. That moment is in the video at [3:23](https://youtu.be/FYRtIiUpt0w?t=203).

## How to recreate this on your own

1. Pick a landing page you want to clone (something visually interesting).
2. Take overlapping screenshots covering the entire page.
3. Drop them all in an empty folder.
4. Open Claude Code in that folder.
5. Use the prompt above (or similar). Don't over-specify.
6. Let Claude work. Review the result.
7. Paste a screenshot of any bug back to Claude in the same session to iterate.

## ⚠️ Disclaimer

This is **educational content**. The clone is a static page for tutorial purposes — not a production Vercel imitation. Vercel® is a trademark of Vercel Inc. and is referenced here only for educational commentary on AI coding capability.

## Related tutorials

- **The prequel — Sketch to App** (paper drawing → working todo app): https://youtu.be/QmZ64W4qzGo
- **CLAUDE.md Tutorial** (make Claude Code 10× smarter): https://youtu.be/D5UUTFOKdSI
- **3 Claude Code Skills Every Developer Should Install**: https://youtu.be/GDll232uoIg

## License

Code in this repo (Claude-generated HTML/CSS/TS) is released under MIT for educational reuse.
