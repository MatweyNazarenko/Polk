import { useState } from "react";
import { passages } from "../data";
import { Reveal, SectionLabel, LineReveal, Divider } from "./ui";

export default function Passages() {
  const [open, setOpen] = useState(0);

  return (
    <section id="passages" className="section parchment-bg">
      <div className="container">
        <Divider tone="dark" />
        <div className="passages-head">
          <div>
            <SectionLabel index="§ 02" title="Разбор строк" />
            <h2 className="section-title">
              <LineReveal>Пять вставок</LineReveal>
            </h2>
          </div>
          <Reveal delay={200}>
            <p className="head-note">
              Каждая строка — кликабельна. Раскройте, чтобы увидеть разбор.
            </p>
          </Reveal>
        </div>

        <div className="accordion">
          {passages.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={p.id} delay={i * 60}>
                <div className="acc-item">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className={`acc-btn ${isOpen ? "is-open" : ""}`.trim()}
                  >
                    <span className="acc-num">{p.id}</span>
                    <span>
                      <span className="acc-tag">{p.tag}</span>
                      <span className="acc-quote">«{p.old}»</span>
                    </span>
                    <span className="acc-icon" aria-hidden>
                      <svg viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.4">
                        <path d="M8 2v12M2 8h12" fill="none" />
                      </svg>
                    </span>
                  </button>

                  <div className={`acc-panel ${isOpen ? "is-open" : ""}`.trim()}>
                    <div className="acc-panel-inner">
                      <div className="acc-body">
                        <p className="acc-analysis">{p.analysis}</p>
                        {p.note ? <p className="acc-note">
                          <span className="acc-note-line" />
                          прим. · {p.note}
                        </p> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
