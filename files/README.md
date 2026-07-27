# Your Video Editor Portfolio

A dark, animated portfolio site with a video-timeline theme — no Framer, no
paid tools, deploys free on Vercel.

## Editing the site (no coding knowledge needed)

| Want to change... | Edit this |
|---|---|
| Your DM link | `script.js` → `CONFIG.dmLink` at the very top |
| Your name, headline, bio text | `index.html` — it's plain readable text |
| Your profile photo | Put a file named `profile.jpg` in the `assets` folder |
| Colors / fonts | `styles.css` → the `:root { ... }` block at the top |
| Add a video | Copy one `<!-- VIDEO CARD START -->` ... `<!-- VIDEO CARD END -->` block in `index.html`, paste it below the others in the same section, then change the `data-yt="..."` ID (2 spots) and the title text |
| Remove a video | Delete its whole `<!-- VIDEO CARD START -->` ... `<!-- VIDEO CARD END -->` block |

To find a YouTube video ID: in a link like
`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`.
Thumbnails pull automatically from YouTube — you never need to upload a
video thumbnail yourself.

## Deploying to Vercel (free, ~5 minutes)

**Option A — no GitHub account needed (fastest):**
1. Go to [vercel.com](https://vercel.com) and sign up free.
2. Click **Add New → Project → Deploy** and choose **"Upload"** /
   drag-and-drop this whole folder onto the page.
3. Click Deploy. You'll get a live `yourproject.vercel.app` link instantly.

**Option B — with GitHub (better for ongoing edits):**
1. Create a free GitHub account and a new repository.
2. Upload these files to that repository (GitHub's website lets you drag
   files in directly — no command line needed).
3. Go to [vercel.com](https://vercel.com), sign up, click **Add New →
   Project**, and import that GitHub repo.
4. Click Deploy. Every time you edit a file on GitHub and save, Vercel
   automatically re-publishes the live site within seconds.

Option B is worth the extra step once you're editing regularly — you can
even edit text files directly in GitHub's browser editor from your phone.

## About "drag-and-drop from the backend"

A true drag-and-drop admin panel (add a video by dragging a file, with no
file editing at all) needs a database to store that data — which either
costs money or adds real setup complexity. For a free, zero-maintenance
site, editing the clearly-marked blocks in `index.html` directly is the
simplest reliable option, and each edit takes under a minute once you've
done it once. If you outgrow this later, a free-tier headless CMS (like
Sanity) is the natural next step — happy to help you wire that up when
you're ready.
