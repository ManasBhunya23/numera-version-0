/* ==========================================================
   numerologyEngine.js
   Deterministic Number Intelligence engine.

   This module is the "knowledge base" — every score, label,
   and narrative sentence the product shows is derived from
   fixed tables and pure functions below. No network call,
   no AI dependency. Given the same number, it always returns
   the same report.
========================================================== */

/* ----------------------------------------------------------
   1. CONJUNCTION PAIR TABLE (PD)
   Each adjacent digit pair (positions 0-1, 1-2 ... 8-9 of a
   10-digit number) maps to a planetary conjunction with a
   fixed label, meaning and base score (0-100).
---------------------------------------------------------- */
export const PAIR_DATA = {
  "11":{l:"Sun × Sun",m:"Double authority — strong but rigid leadership energy.",s:72},
  "12":{l:"Sun × Moon",m:"Public mood swings, emotional leadership.",s:58},
  "13":{l:"Sun × Jupiter",m:"Name, fame, and guru-level recognition.",s:88},
  "14":{l:"Sun × Rahu",m:"Obstacles emerging from positions of authority.",s:28},
  "15":{l:"Sun × Mercury",m:"Effortless money flow through communication.",s:86},
  "16":{l:"Sun × Venus",m:"Creative spark but financially unstable.",s:42},
  "17":{l:"Sun × Ketu",m:"Government and corporate Rajyog — institutional power.",s:91},
  "18":{l:"Sun × Saturn",m:"Hard work rewarded, but only after long delay.",s:55},
  "19":{l:"Sun × Mars",m:"Prince of Heaven — natural royalty and command.",s:94},
  "21":{l:"Moon × Sun",m:"Wisdom meeting authority — measured leadership.",s:82},
  "22":{l:"Moon × Moon",m:"Isolation and loner energy, double sensitivity.",s:32},
  "23":{l:"Moon × Jupiter",m:"Royal Star of the Lion — natural charisma.",s:89},
  "24":{l:"Moon × Rahu",m:"Emotional confusion, indecision under pressure.",s:34},
  "25":{l:"Moon × Mercury",m:"Healer and occult intelligence — sharp intuition.",s:74},
  "26":{l:"Moon × Venus",m:"Emotional richness, strong aesthetic sense.",s:70},
  "27":{l:"Moon × Ketu",m:"Up-down energy pattern, restless cycles.",s:38},
  "28":{l:"Moon × Saturn",m:"Struggle and financial seepage — slow leaks.",s:22},
  "29":{l:"Moon × Mars",m:"Honest, self-earned wealth through discipline.",s:85},
  "31":{l:"Jupiter × Sun",m:"Spiritual authority — recognised at the top of field.",s:87},
  "32":{l:"Jupiter × Moon",m:"Emotionally wise, trusted counsel.",s:75},
  "33":{l:"Jupiter × Jupiter",m:"Guru blessings — triple wisdom power.",s:86},
  "34":{l:"Jupiter × Rahu",m:"Knowledge blocked by sudden disruption.",s:36},
  "35":{l:"Jupiter × Mercury",m:"Teaching and writing gifts, articulate wisdom.",s:78},
  "36":{l:"Jupiter × Venus",m:"Abundance through grace and generosity.",s:80},
  "37":{l:"Jupiter × Ketu",m:"Unstoppable rise to the very top.",s:93},
  "38":{l:"Jupiter × Saturn",m:"Property, real estate, and consultancy power.",s:79},
  "39":{l:"Jupiter × Mars",m:"Bold expansion, confident decision-making.",s:81},
  "41":{l:"Rahu × Sun",m:"Bad luck multiplying around authority figures.",s:18},
  "42":{l:"Rahu × Moon",m:"Negativity and mental distress patterns.",s:25},
  "43":{l:"Rahu × Jupiter",m:"Wisdom destabilised by sudden ambition.",s:30},
  "44":{l:"Rahu × Rahu",m:"Double obstruction — a recurring struggle loop.",s:8},
  "45":{l:"Rahu × Mercury",m:"Deceptive communication risk, scattered focus.",s:33},
  "46":{l:"Rahu × Venus",m:"Bandhan dosh — relationships that feel like chains.",s:15},
  "47":{l:"Rahu × Ketu",m:"Axis instability between extremes.",s:30},
  "48":{l:"Rahu × Saturn",m:"Deep, systemic problems that resist quick fixes.",s:10},
  "49":{l:"Rahu × Mars",m:"Strong but obstinate drive, prone to conflict.",s:60},
  "51":{l:"Mercury × Sun",m:"Money flows effortlessly toward visibility.",s:88},
  "52":{l:"Mercury × Moon",m:"Intuitive communicator, emotionally persuasive.",s:69},
  "53":{l:"Mercury × Jupiter",m:"Financial struggle pattern despite good ideas.",s:35},
  "54":{l:"Mercury × Rahu",m:"Sharp but erratic thinking, prone to shortcuts.",s:40},
  "55":{l:"Mercury × Mercury",m:"Exceptionally clever in communication.",s:72},
  "56":{l:"Mercury × Venus",m:"Rich-people energy — comfort and refined taste.",s:80},
  "57":{l:"Mercury × Ketu",m:"Pitch mastery — oratory gold.",s:91},
  "58":{l:"Mercury × Saturn",m:"Difficulty collecting what is owed to you.",s:30},
  "59":{l:"Mercury × Mars",m:"Financial mastery — thinks and talks in scale.",s:88},
  "61":{l:"Venus × Sun",m:"Magnetic public presence, admired style.",s:77},
  "62":{l:"Venus × Moon",m:"Deep emotional artistry, romantic sensitivity.",s:73},
  "63":{l:"Venus × Jupiter",m:"Creative expression with broad appeal.",s:68},
  "64":{l:"Venus × Rahu",m:"Attraction mixed with instability in relationships.",s:32},
  "65":{l:"Venus × Mercury",m:"Luxury combined with sharp communication.",s:76},
  "66":{l:"Venus × Venus",m:"Luxury, comfort, and relationship-centred energy.",s:74},
  "67":{l:"Venus × Ketu",m:"Arts and spiritual beauty, refined detachment.",s:72},
  "68":{l:"Venus × Saturn",m:"Medical or hospital-adjacent energy.",s:45},
  "69":{l:"Venus × Mars",m:"Passionate creativity, bold romantic energy.",s:71},
  "71":{l:"Ketu × Sun",m:"Authority and government power.",s:86},
  "72":{l:"Ketu × Moon",m:"Spiritual intuition, quiet inner knowing.",s:70},
  "73":{l:"Ketu × Jupiter",m:"Unstoppable field domination.",s:93},
  "74":{l:"Ketu × Rahu",m:"Restriction chains — a Bandhan pattern.",s:12},
  "75":{l:"Ketu × Mercury",m:"Communication mastery, persuasive clarity.",s:84},
  "76":{l:"Ketu × Venus",m:"Detached creativity, artistic independence.",s:66},
  "77":{l:"Ketu × Ketu",m:"Social networking confidence, wide circle.",s:77},
  "78":{l:"Ketu × Saturn",m:"Spiritual healer authority, deep discipline.",s:88},
  "79":{l:"Ketu × Mars",m:"Independence and a strong success drive.",s:82},
  "81":{l:"Saturn × Sun",m:"Authority disputes — friction with seniors.",s:28},
  "82":{l:"Saturn × Moon",m:"Heaviness, partnerships under strain.",s:15},
  "83":{l:"Saturn × Jupiter",m:"Property and business authority, built slowly.",s:79},
  "84":{l:"Saturn × Rahu",m:"Incurable systemic problems — deep blocks.",s:8},
  "85":{l:"Saturn × Mercury",m:"Difficulty collecting your own money.",s:22},
  "86":{l:"Saturn × Venus",m:"Delayed pleasures, disciplined relationships.",s:48},
  "87":{l:"Saturn × Ketu",m:"Occult power and healing authority.",s:80},
  "88":{l:"Saturn × Saturn",m:"A life full of recurring struggle — a loop.",s:5},
  "89":{l:"Saturn × Mars",m:"Grinding effort that eventually yields results.",s:50},
  "91":{l:"Mars × Sun",m:"Warrior royalty — unstoppable in action.",s:92},
  "92":{l:"Mars × Moon",m:"Honest, respected, self-earned wealth.",s:84},
  "93":{l:"Mars × Jupiter",m:"Expansion through wisdom and bold bets.",s:80},
  "94":{l:"Mars × Rahu",m:"Aggressive ambition, prone to overreach.",s:38},
  "95":{l:"Mars × Mercury",m:"Technical, scale-oriented thinking — a gold pattern.",s:92},
  "96":{l:"Mars × Venus",m:"Creative event mastery, bold execution.",s:75},
  "97":{l:"Mars × Ketu",m:"Independence and a strong drive to succeed.",s:84},
  "98":{l:"Mars × Saturn",m:"Disciplined aggression, slow-built strength.",s:52},
  "99":{l:"Mars × Mars",m:"High energy, passionate, relentless drive.",s:82},
  "00":{l:"Void × Void",m:"Energy drain — an empty frequency point.",s:20},
  "01":{l:"Void × Sun",m:"Authority diluted by an empty preceding digit.",s:40},
  "02":{l:"Void × Moon",m:"Emotional energy with a leak nearby.",s:38},
  "03":{l:"Void × Jupiter",m:"Wisdom present but under-supported.",s:45},
  "04":{l:"Void × Rahu",m:"Instability compounding near an empty digit.",s:22},
  "05":{l:"Void × Mercury",m:"Communication gifted but inconsistently expressed.",s:42},
  "06":{l:"Void × Venus",m:"Charm present but lightly grounded.",s:40},
  "07":{l:"Void × Ketu",m:"Detachment paired with an energy gap.",s:35},
  "08":{l:"Void × Saturn",m:"Discipline strained by an empty frequency.",s:24},
  "09":{l:"Void × Mars",m:"Drive present but inconsistently fuelled.",s:48},
  "10":{l:"Sun × Void",m:"Visibility undercut by a nearby energy gap.",s:38},
  "20":{l:"Moon × Void",m:"Sensitivity without enough grounding.",s:36},
  "30":{l:"Jupiter × Void",m:"Wisdom present but thinly supported.",s:44},
  "40":{l:"Rahu × Void",m:"Disruption compounding near an empty digit.",s:20},
  "50":{l:"Mercury × Void",m:"Sharp mind, inconsistent follow-through.",s:41},
  "60":{l:"Venus × Void",m:"Charisma present but lightly anchored.",s:39},
  "70":{l:"Ketu × Void",m:"Detachment near an energy gap.",s:36},
  "80":{l:"Saturn × Void",m:"Discipline present but unevenly applied.",s:25},
};

export const TOXIC = new Set(["44","48","82","84","88","41","74","16","28","85","46","22","42","00","04","40","64","94"]);
export const GOLD  = new Set(["19","91","37","73","17","71","57","95","51","15","29","92","13","31","78","87","33","23","59","75"]);

/* ----------------------------------------------------------
   2. ROOT NUMBER → PLANET + ARCHETYPE TABLE
---------------------------------------------------------- */
export const ROOT_PLANETS = {
  1: "Sun",     2: "Moon",    3: "Jupiter", 4: "Rahu",  5: "Mercury",
  6: "Venus",   7: "Ketu",    8: "Saturn",  9: "Mars",
};

export const ARCHETYPES = {
  1: { name: "The Sovereign",      icon: "👑", trait: "Natural commander — others follow instinctively.", desc: "Born to lead, decisive under pressure, drawn to visibility." },
  2: { name: "The Strategist",     icon: "♟",  trait: "Master of quiet influence.",                       desc: "Wins through patience and intelligence rather than force." },
  3: { name: "The Visionary",      icon: "🔭", trait: "Sees what others miss.",                            desc: "Generates ideas that tend to become movements." },
  4: { name: "The Builder",        icon: "⚙️", trait: "Turns vision into structure.",                      desc: "Relentless execution; needs stability to do its best work." },
  5: { name: "The Magnet",         icon: "⚡", trait: "Attracts opportunity easily.",                      desc: "Adaptable and quick — but can scatter focus if unchecked." },
  6: { name: "The Nurturer",       icon: "🌿", trait: "Creates harmony around itself.",                    desc: "Builds long-term value through relationships and trust." },
  7: { name: "The Mystic",         icon: "∞",  trait: "Operates on a quieter frequency.",                  desc: "Analytical, private, drawn to depth over breadth." },
  8: { name: "The Titan",          icon: "🏔", trait: "An unstoppable force, for better or worse.",        desc: "Either peak success or peak struggle — rarely the middle." },
  9: { name: "The Warrior",        icon: "⚔️", trait: "Conquers through direct action.",                   desc: "Mars energy: results-driven, decisive, occasionally blunt." },
};

/* ----------------------------------------------------------
   3. DIMENSION MAPS (which pairs feed which sub-score)
---------------------------------------------------------- */
export const DIMENSIONS = {
  wealth:        { label: "Wealth",        pairs: ["19","91","29","92","15","51","57","95","38","83","56","59"] },
  leadership:    { label: "Leadership",    pairs: ["19","91","17","71","37","73","31","13","97","99","77"] },
  relationship:  { label: "Relationship",  pairs: ["29","92","66","56","25","72","63","93","78","87","69","62"] },
  communication: { label: "Communication", pairs: ["55","57","75","95","59","51","15","23","31","77","35"] },
  opportunity:   { label: "Opportunity",   pairs: ["37","73","91","19","95","57","17","71","23","13","39"] },
  stability:     { label: "Stability",     pairs: ["33","17","71","51","15","83","38","29","92","66","98"] },
};

function dimensionFor(pair) {
  for (const key in DIMENSIONS) {
    if (DIMENSIONS[key].pairs.includes(pair)) return { key, ...DIMENSIONS[key] };
  }
  return { key: "general", label: "General", pairs: [] };
}

/* ----------------------------------------------------------
   4. GOAL META — drives goal-specific recommendations
---------------------------------------------------------- */
export const GOAL_META = {
  wealth:   { label: "Wealth & Money",   short: "Wealth",   icon: "💰", key: "wealth",       bestPairs: ["19","91","15","51","57","95","29","92","59"], avoidPairs: ["28","85","58","22","42"] },
  business: { label: "Business Success", short: "Business", icon: "🏢", key: "leadership",   bestPairs: ["37","73","17","71","91","19","95","57","31"], avoidPairs: ["44","48","41","84","88"] },
  career:   { label: "Career Growth",    short: "Career",   icon: "🚀", key: "opportunity",  bestPairs: ["19","91","37","73","57","95","13","31","77"], avoidPairs: ["82","85","58","28","22"] },
  love:     { label: "Relationships",    short: "Love",     icon: "❤️", key: "relationship", bestPairs: ["29","92","66","56","25","78","87","63","93"], avoidPairs: ["82","42","27","16","28"] },
  general:  { label: "General Success",  short: "Success",  icon: "🎯", key: "opportunity",  bestPairs: ["19","91","37","73","17","71","57","95","29"], avoidPairs: ["44","48","82","84","88"] },
};

/* ----------------------------------------------------------
   5. SEEDED RANDOM — deterministic "randomness"
   Same number always produces the same sub-score variance,
   so results are reproducible (no AI dependency, no flicker
   on re-render).
---------------------------------------------------------- */
function seededRand(str, salt = 0) {
  let h = salt;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return ((h >>> 0) % 1000) / 1000;
}

/* ----------------------------------------------------------
   6. CORE ENGINE — digits in, full report out
---------------------------------------------------------- */
export function runEngine(number) {
  const d = number.split("").map(Number);

  // Root number via digit-sum reduction
  let s = d.reduce((a, b) => a + b, 0);
  while (s > 9) s = String(s).split("").reduce((a, b) => a + parseInt(b, 10), 0);
  const root = s;
  const rootPlanet = ROOT_PLANETS[root] || "Mercury";

  // Conjunction pairs across all adjacent digits
  const pairs = [];
  for (let i = 0; i < d.length - 1; i++) {
    const a = d[i] ?? 0;
    const b = d[i + 1] ?? 0;
    const p = `${a}${b}`;
    const pd = PAIR_DATA[p] || { l: `Pair ${p}`, m: "Neutral frequency, no strong lean either way.", s: 52 };
    pairs.push({ pair: p, ...pd, toxic: TOXIC.has(p), gold: GOLD.has(p) });
  }

  const goldCount  = pairs.filter(p => p.gold).length;
  const toxicCount = pairs.filter(p => p.toxic).length;
  const zeros      = d.filter(x => x === 0).length;

  const triples = [];
  for (let x = 1; x <= 9; x++) {
    if (d.filter(v => v === x).length >= 3) triples.push(x);
  }

  const rootBonus = { 1: 12, 9: 10, 3: 8, 5: 7, 7: 5, 2: 2, 6: 1, 8: -5, 4: -8 };

  let base = 52 + (goldCount * 8) - (toxicCount * 12) - (zeros * 5) - (triples.length * 8);
  if (pairs[0]?.toxic) base -= 10;
  if (pairs[0]?.gold)  base += 8;
  base += rootBonus[root] || 0;

  const overall = Math.max(38, Math.min(96, Math.round(base)));
  const bestScore = Math.min(97, overall + 9 + Math.floor(goldCount * 1.2));

  const sub = (targetPairs, salt) => {
    const matched = pairs.filter(p => targetPairs.includes(p.pair)).length;
    const rand = seededRand(number, salt);
    let b = 46 + matched * 9 - toxicCount * 5 + (rootBonus[root] || 0) * 0.5;
    return Math.max(38, Math.min(95, Math.round(b + (rand * 8 - 4))));
  };

  const percentile   = Math.round(overall * 0.72 + seededRand(number, 77) * 8);
  const suppression  = Math.round((100 - overall) * 0.28 + toxicCount * 3);
  const numAge       = Math.round(80 - overall * 0.45 + toxicCount * 4 - goldCount * 2);

  return {
    number, root, rootPlanet,
    archetype: ARCHETYPES[root] || ARCHETYPES[5],
    pairs, goldCount, toxicCount, zeros, triples,
    overall, bestScore, percentile, suppression, numAge,
    wealth:        sub(DIMENSIONS.wealth.pairs, 1),
    leadership:    sub(DIMENSIONS.leadership.pairs, 2),
    relationship:  sub(DIMENSIONS.relationship.pairs, 3),
    communication: sub(DIMENSIONS.communication.pairs, 4),
    opportunity:   sub(DIMENSIONS.opportunity.pairs, 5),
    stability:     sub(DIMENSIONS.stability.pairs, 6),
    openPair:  pairs[0] ?? null,
    closePair: pairs[pairs.length - 1] ?? null,
  };
}

/* ----------------------------------------------------------
   7. NARRATIVE LAYER — deterministic "AI-sounding" copy
   This replaces the system-prompt + API call from the
   original prototype. Every sentence below is template
   text filled from the engine's own numbers, so the same
   input always yields the same narrative, with no network
   round-trip required.
---------------------------------------------------------- */
export function getDiagnosticBrief(report, goal = "general") {
  const goalMeta = GOAL_META[goal] || GOAL_META.general;
  const op = report.openPair;
  const lean = op?.toxic
    ? `creates a primary frequency block limiting your ${goalMeta.short.toLowerCase()} outcomes`
    : op?.gold
      ? `carries strong forward momentum for your ${goalMeta.short.toLowerCase()} goals`
      : `sits in neutral territory for your ${goalMeta.short.toLowerCase()} goals`;

  return {
    brief: `Your ${op?.pair ?? "opening"} opening pair ${lean} — ${report.goldCount} gold versus ${report.toxicCount} toxic conjunctions across the full number.`,
    hiddenOpp: `Your number suppresses an estimated ${report.suppression}% of ${goalMeta.short.toLowerCase()} potential — fully recoverable through targeted optimization.`,
    topStrength: op?.gold ? op.m : report.archetype.trait,
    fomoStat: `Only an estimated ${Math.round(14 + report.goldCount * 2)}% of analyzed profiles show this exact conjunction pattern.`,
    urgency: "Number optimization compounds over time — the earlier a pattern is corrected, the longer it has to work in your favour.",
  };
}

export function getRecommendations(report, goal = "general") {
  const meta = GOAL_META[goal] || GOAL_META.general;
  const goodPairs  = report.pairs.filter(p => meta.bestPairs.includes(p.pair));
  const badPairs   = report.pairs.filter(p => meta.avoidPairs.includes(p.pair));
  const goldPairs  = report.pairs.filter(p => p.gold);
  const toxicPairs = report.pairs.filter(p => p.toxic);
  const goalScore  = report[meta.key] || report.overall;

  const bestStartDigits = [...new Set(meta.bestPairs.map(p => p[0]))].slice(0, 3);
  const bestEndDigits   = [...new Set(meta.bestPairs.map(p => p[1]))].slice(0, 3);

  return { meta, goodPairs, badPairs, goldPairs, toxicPairs, goalScore, bestStartDigits, bestEndDigits };
}

// "Why Am I Stuck" — explains the current→potential gap using real pair data
export function getStuckAnalysis(report) {
  const current = report.overall, potential = report.bestScore;
  const gap = Math.max(0, potential - current);
  const toxicSorted = [...report.pairs].filter(p => p.toxic).sort((a, b) => a.s - b.s);
  const limiter = toxicSorted[0] || [...report.pairs].sort((a, b) => a.s - b.s)[0];
  const dim = dimensionFor(limiter.pair);

  return {
    current, potential, gap, limiter,
    dimensionLabel: dim.label,
    impact: `May reduce ${dim.label.toLowerCase()} effectiveness and create missed opportunities in that area.`,
    status: gap <= 2 ? "Optimized" : "Actionable",
  };
}

// Priority action plan whose impacts sum to the current→potential gap
export function getOptimizationPlan(report, reco) {
  const gap = Math.max(1, report.bestScore - report.overall);
  const items = [];

  const worstToxic = [...report.pairs].filter(p => p.toxic).sort((a, b) => a.s - b.s)[0];
  if (worstToxic) items.push({ title: `Reduce exposure to ${worstToxic.pair}-pattern situations`, detail: worstToxic.m });

  const bestGold = [...report.pairs].filter(p => p.gold).sort((a, b) => b.s - a.s)[0];
  if (bestGold) items.push({ title: `Lean into your ${bestGold.pair} pattern strength`, detail: bestGold.m });

  if (reco?.bestEndDigits?.length) {
    items.push({
      title: `Favor ending digits ${reco.bestEndDigits.join(", ")} in new numbers or IDs`,
      detail: "Useful when choosing secondary numbers, usernames, or reference codes.",
    });
  }

  items.push({
    title: `Apply ${reco?.meta?.short || "general"}-specific pair guidance`,
    detail: "Use the recommended pair patterns for your selected goal.",
  });

  const weights = [0.4, 0.3, 0.2, 0.1].slice(0, items.length);
  const wSum = weights.reduce((a, b) => a + b, 0) || 1;
  let allocated = 0;

  const withImpact = items.map((it, i) => {
    const isLast = i === items.length - 1;
    const impact = isLast ? Math.max(1, gap - allocated) : Math.max(1, Math.round(gap * (weights[i] / wSum)));
    allocated += impact;
    return { ...it, impact };
  });

  return { items: withImpact, totalGain: withImpact.reduce((a, b) => a + b.impact, 0) };
}

// Recommended replacement-number structures built from real gold pairs
export function buildNumberStructures(reco) {
  const cands = (reco.meta.bestPairs || [])
    .filter(p => GOLD.has(p))
    .map(p => ({ pair: p, ...PAIR_DATA[p] }))
    .sort((a, b) => b.s - a.s);

  const structures = [];
  for (let i = 0; i + 1 < cands.length && structures.length < 3; i += 2) {
    structures.push({ code: cands[i].pair + cands[i + 1].pair, a: cands[i], b: cands[i + 1] });
  }
  return structures;
}

/* ----------------------------------------------------------
   8. FULL REPORT ASSEMBLY — the single entry point a screen
   needs to call. Bundles every section above into one object,
   no AI, no network, fully synchronous.
---------------------------------------------------------- */
export function generateFullReport(number, goal = "general") {
  const report  = runEngine(number);
  const brief   = getDiagnosticBrief(report, goal);
  const reco    = getRecommendations(report, goal);
  const stuck   = getStuckAnalysis(report);
  const plan    = getOptimizationPlan(report, reco);
  const structs = buildNumberStructures(reco);

  return { report, brief, reco, stuck, plan, structures: structs };
}