# Project images

Drop the homepage card images here using these exact filenames:

| Card                                   | Filename                  |
| -------------------------------------- | ------------------------- |
| Playthical                             | `playthical.png`          |
| Antagonist                             | `antagonist.png`          |
| Yoga With Lali                         | `yoga-with-lali.png`      |
| Animal Profiles — Impact of a Donation | `animal-profiles.png`     |
| Pocket Sanctuary                       | `pocket-sanctuary.png`    |
| Cozy Haunted House                     | `cozy-haunted-house.png`  |

As soon as a file with the matching name is in this folder, that card picks it
up automatically — no code changes needed.

If you'd rather use a different name or format (e.g. `.jpg`), just update the
matching `thumbnail` path in `lib/projects.ts`.

## Case-study screenshots (per project)

Each project has its own subfolder here for the screenshots shown at the top of
its case-study page. Drop your images in using these names:

- `1.png` — the large hero image at the top of the page
- `2.png` — first of the two smaller images below it
- `3.png` — second smaller image

So, for example:

```
public/projects/playthical/1.png
public/projects/playthical/2.png
public/projects/playthical/3.png
```

The subfolders are: `playthical/`, `antagonist/`, `yoga-with-lali/`,
`animal-profiles/`, `pocket-sanctuary/`, `cozy-haunted-house/`.

Notes:
- **Only have 2 images for a project?** Just add `1.png` and `2.png`, then delete
  the `"/projects/<slug>/3.png"` line from that project's `gallery` array in
  `lib/projects.ts`.
- **Want more than 3?** Add `4.png`, `5.png`, … and add matching lines to the
  `gallery` array.
- Prefer `.jpg`? Use it — just match the extension in the `gallery` paths.
