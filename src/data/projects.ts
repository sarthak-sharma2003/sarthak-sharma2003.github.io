// ─────────────────────────────────────────────────────────────
// THE SHELF — add a project by adding an entry here. That's it.
//
// status:
//   "live"     → deployed & actively updating (pulsing green)
//   "shipped"  → done and delivered (blue)
//   "building" → in progress right now (amber)
//   "next"     → reserved shelf space (ghost card)
//
// repo: GitHub repo name (just the name, not the URL) — used to
// pull live last-push + language stats from the GitHub API.
// ─────────────────────────────────────────────────────────────

export type ProjectStatus = 'live' | 'shipped' | 'building' | 'next';

export interface Project {
  title: string;
  status: ProjectStatus;
  year: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'HitApply',
    status: 'live',
    year: '2026',
    description:
      'Job applications handled from inside the AI assistant you already use. HitApply finds roles that fit your experience, tailors your résumé and cover letter to each one, and fills in the application form. You review and approve before anything is sent. Works with Claude, ChatGPT and other assistants. In limited beta.',
    tags: ['MCP', 'Browser Extension', 'AI Agents'],
    demo: 'https://hitapply.app/',
  },
  {
    title: "Xabi's Long-Xo",
    status: 'live',
    year: '2026',
    description:
      'Model-driven Fantasy Premier League squad optimizer: gradient-boosted point projections, a Dixon-Coles team-strength model, and a MILP solver picking transfers, captain, and chip timing against real budget and squad-rule constraints. Backtested across two full historical seasons after catching and excising a leaked feature that had inflated results past the real-world scoring record. Fully static frontend, rebuilt and redeployed nightly by GitHub Actions — zero paid infrastructure.',
    tags: ['Python', 'LightGBM', 'MILP', 'DuckDB', 'React', 'GitHub Actions'],
    repo: 'fpl-ai-scout',
    demo: 'https://sarthak-sharma2003.github.io/fpl-ai-scout/',
  },
  {
    title: 'Find a Climate Shelter',
    status: 'live',
    year: '2026',
    description:
      'Shelter finder for Strathcona County, Alberta: which public buildings are open right now for cold, heat, wildfire smoke or a power outage, the closest one, and the way there. Live Environment Canada conditions pick the need on their own. It keeps working with no signal, with the list, a saved county map and the last route all stored on the phone. An MCP server lets AI assistants answer from the same list, and a coverage page puts numbers on the gaps: about 7 in 10 rural residents live more than a 10-minute drive from a shelter with confirmed hours. A student prototype built for a University of Alberta community-partner course, not an official county tool.',
    tags: ['JavaScript', 'Leaflet', 'PWA', 'MCP', 'Cloudflare Workers', 'GitHub Actions'],
    repo: 'climate-shelters',
    demo: 'https://sarthak-sharma2003.github.io/climate-shelters/',
  },
  {
    title: 'World Cup 2026 Multi-Source Scraper',
    status: 'live',
    year: '2026',
    description:
      'Full structured coverage of all 48 teams and 104 matches, scraped from three independent sources with cross-source consistency checks — zero malformed rows delivered. Rate-limited, retry-safe, robots.txt-compliant, and refreshing itself on a GitHub Actions cron while the tournament runs.',
    tags: ['Python', 'BeautifulSoup', 'SQLite', 'GitHub Actions', 'Streamlit'],
    repo: 'world-cup-2026-scraper-predictions',
    demo: 'https://world-cup-2026-scraper-predictions.streamlit.app/',
  },
  {
    title: 'UCL Scout',
    status: 'live',
    year: '2026',
    description:
      'UEFA Champions League Fantasy predictor and multi-matchday transfer/chip planner, backtested leak-safe against two real seasons with the edge transferring exactly from tuning to holdout. Decomposed points into UEFA\'s own observed components rather than chasing unavailable xG data, and found the model\'s advantage sits entirely in the knockout rounds — it stays humble against the crowd through the league phase on purpose.',
    tags: ['Python', 'MILP', 'Backtesting', 'React', 'GitHub Actions'],
    repo: 'ucl-scout',
    demo: 'https://sarthak-sharma2003.github.io/ucl-scout/',
  },
  {
    title: 'Derivative Trade Reconciliation Dashboard',
    status: 'shipped',
    year: '2025',
    description:
      'Operations tooling for reconciling derivative trade data across systems — surfacing breaks and inconsistencies before they reach reporting, instead of after.',
    tags: ['Python', 'Pandas', 'Data Reconciliation'],
    repo: 'Derivative-Trade-Operations-Reconciliation-Dashboard',
  },
  {
    title: 'Loan Risk & Financial Analysis ETL',
    status: 'shipped',
    year: '2023',
    description:
      'Automated ETL pipeline pulling loan data from CSVs and live REST endpoints into SQLite, deployed through GitHub Actions CI/CD with unit tests standing guard over data integrity.',
    tags: ['Python', 'Pandas', 'SQLite', 'REST APIs', 'CI/CD'],
    repo: 'Loan-Risk-and-Financial-Analysis-ETL-System',
  },
  {
    title: 'Reserved shelf space',
    status: 'next',
    year: 'soon',
    description:
      'The next build lands here. This site is designed as a shelf — always one empty slot, on purpose.',
    tags: [],
  },
];
