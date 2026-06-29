# Project images

Drop your project screenshots in this folder. Each project's `image` field in
`src/lib/projects.ts` references a file name here.

Current expected files:

- `PosturePalScreenshot.png` — PosturePal
- `ProjectTwoScreenshot.png` — Project Two
- `ProjectThreeScreenshot.png` — Project Three

To add a new project: add an entry to `src/lib/projects.ts` (set its `image`
to the file name you drop here) and the detail page at `/projects/<slug>` is
generated automatically.
