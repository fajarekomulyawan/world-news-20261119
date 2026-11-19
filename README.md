# world-news-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/fajarekomulyawan/world-news-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/fajarekomulyawan/world-news-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

**The World in One Day — Thursday, 19 November 2026.** A full newspaper
front page in a single 1024×1024 picture — **47 stories, 5 continents, all
from Thursday**, with a "day in numbers" strip under the masthead (3 nuclear
powers at one table · $1.65bn of GTA VI pre-launch sales · the ICJ's 9-6
genocide vote · 95% odds of a December Fed hike · gold at $3,729 · 15 inches
of Florida rain). Thirteen illustrated stories lead the page:

1. **Trump, Xi and Putin hold first-ever three-way summit** — Shenzhen:
   UN reform, more oil supply and nuclear-risk talks; the declaration names
   neither Ukraine nor Iran.
2. **World Court: Myanmar committed genocide against the Rohingya** — 9-6
   at The Hague; about 10,000 killed in 2017; The Gambia brought the case.
3. **Hawkish Fed minutes hit markets; gold steadies near $3,729** — Waller
   floats 50bp in December; the dollar at a 19-month high; Bitcoin ~$63,000.
4. **Ukraine hits the Crimea Bridge for a third time in four days** — the
   rail section this time, days after the road span fell.
5. **Iran says two supertankers ablaze after hitting mines in Hormuz** —
   an IRGC claim, not confirmed by Washington.
6. **GTA VI launches after a 13-year wait and breaks records** — 17.1m
   pre-orders worth $1.65bn; a Metacritic 99.
7. **Anthropic makes its Nasdaq debut, priced at $83 a share.**
8. **India evacuates thousands ahead of Cyclone Akvan** — Odisha coast.
9. **Zelensky takes Ukraine's case to a 'coalition of the willing'** —
   Berlin, with Trump's envoys Kushner and Witkoff.
10. **Storms flood South Florida and soak California** — 15+ inches of
    rain in Broward County in 24 hours.
11. **Australia loses 43,500 jobs; jobless hits a five-year high** — 4.9%.
12. **Allies press Washington to hold off on new Iran strikes.**
13. **Turkish court sentences İmamoğlu and eight others** — the CHP case.

A dotted world map ("Where it happened") pins the thirteen stories, and an
"Also on Thursday" index adds 34 more of the day's stories in one line
each — the Odesa and Saratov strikes, the Houthi missile at Riyadh, the
day's market closes, GTA VI prices and 'sick day' estimates, and more.
Claims by officials are reported as claims.

`main.ts` (Node 22, standard library only) copies the committed
`entry.png` to `/output/entry.png` and verifies the copied bytes: PNG/JPEG
magic, the 1 MiB cap, and the 1024×1024 cap. Deterministic — the same
bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cxst033q&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
