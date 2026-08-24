"use client";

import { useEffect, useMemo, useState } from "react";

type ReadingItem = { id: string; title: string; category: "Book" | "Essay"; summary: string; meta: string; note: string };
const ITEMS: ReadingItem[] = [
  { id: "ddia", title: "Designing Data-Intensive Applications", category: "Book", summary: "Systems fundamentals.", meta: "In progress / 24%", note: "A shelf marker for the chapters that make systems feel less mysterious: boundaries, data, and the cost of a convenient default." },
  { id: "working", title: "The Work of Art in the Age of Mechanical Reproduction", category: "Essay", summary: "Copies, aura, and attention.", meta: "Queued / 12 pages", note: "A short return to the question of what changes when a thing can travel farther than the room that made it." },
  { id: "shape", title: "Shape Up", category: "Book", summary: "Appetite before task lists.", meta: "Finished / notes open", note: "A useful reminder that a plan is a boundary around a bet, not a longer list of instructions." },
  { id: "small", title: "Small Is Beautiful", category: "Essay", summary: "Scale as a design decision.", meta: "Queued / 8 pages", note: "A compact prompt for asking whether the next layer creates leverage or merely creates somewhere else to look." },
];
const CATEGORIES = ["All", "Book", "Essay"] as const;

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [selectedId, setSelectedId] = useState("ddia");
  const visible = useMemo(() => ITEMS.filter((item) => (category === "All" || item.category === category) && `${item.title} ${item.summary} ${item.category}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const selected = ITEMS.find((item) => item.id === selectedId) ?? ITEMS[0];

  useEffect(() => { if (visible.length && !visible.some((item) => item.id === selectedId)) setSelectedId(visible[0].id); }, [selectedId, visible]);

  return (
    <main className="reading-shell">
      <div className="reading-frame">
        <header className="reading-topbar"><a href="https://bookchaowalit.com" className="reading-mark" aria-label="Bookchaowalit home"><span>READ</span> / SHELF</a><span>OPEN QUEUE / LOCAL LIST</span><span>{ITEMS.length} PIECES INDEXED</span></header>
        <section className="reading-intro"><div><h1>Keep a place<br /><em>for the next page.</em></h1><p>A small reading shelf for books and essays that are still becoming useful. Find the item, then give it the room to say one thing.</p></div><div className="reading-stamp" aria-hidden="true"><span>OPEN</span><b>{String(visible.length).padStart(2, "0")}</b><span>ON SHELF</span></div></section>

        <section className="reading-desk" aria-label="Reading list">
          <aside className="shelf-index"><div className="desk-head"><span>SHELF INDEX</span><span>{visible.length} FOUND</span></div><label className="reading-search"><span aria-hidden="true">/</span><span className="sr-only">Search reading list</span><input placeholder="Search the shelf" value={query} onChange={(event) => setQuery(event.target.value)} /></label><div className="category-tabs">{CATEGORIES.map((item) => <button type="button" key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div><div className="shelf-list">{visible.length ? visible.map((item, index) => <button type="button" key={item.id} className={selected.id === item.id ? "shelf-row selected" : "shelf-row"} onClick={() => setSelectedId(item.id)} aria-pressed={selected.id === item.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.category} / {item.meta}</small></button>) : <p className="empty-shelf">No page matches this search.</p>}</div></aside>
          <article className="reading-sheet"><div className="desk-head"><span>OPEN PAGE / {selected.category.toUpperCase()}</span><span>{selected.meta.toUpperCase()}</span></div><div className="sheet-content"><span className="page-mark">{String(ITEMS.indexOf(selected) + 1).padStart(2, "0")}</span><h2>{selected.title}</h2><p className="sheet-summary">{selected.summary}</p><div className="sheet-note"><span className="field-label">MARGIN NOTE</span><p>{selected.note}</p></div><div className="sheet-foot"><span>AUTHORED SAMPLE LIST</span><span>NO IMPORT / NO SYNC</span></div></div></article>
        </section>
        <footer className="reading-footer"><span>BOOK / DEV TOOLS</span><span>SEARCH · SORT · OPEN</span></footer>
      </div>
    </main>
  );
}
