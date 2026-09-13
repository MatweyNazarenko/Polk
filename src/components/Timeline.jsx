import { eras } from "../data";
import { Reveal, SectionLabel, LineReveal, Divider } from "./ui";

export default function Timeline() {
  return (
    <section id="chronicle" className="section chronicle">
      {/* фоновая степь */}
      <div className="chronicle-bg" aria-hidden>
        <img src="images/steppe.jpg" alt="" loading="lazy" />
      </div>
      <div className="chronicle-veil" aria-hidden />

      <div className="container" style={{ position: "relative" }}>
        <Divider tone="dark" />
        <div className="chronicle-head">
          <div>
            <SectionLabel index="§ 05" title="Летопись" />
            <h2 className="section-title">
              <LineReveal>Когда родилось</LineReveal>
              <LineReveal delay={120}>
                <em className="em-rubric">"Слово"</em>
              </LineReveal>
            </h2>
          </div>
        </div>

        <ol className="timeline">
          {eras.map((e, i) => (
            <li key={e.year} className="tl-item">
              <span aria-hidden className="tl-marker" />
              <Reveal delay={Math.min(i * 60, 240)}>
                <div className="tl-row">
                  <span className="tl-year">{e.year}</span>
                  <div>
                    <h3 className="tl-title">{e.title}</h3>
                    <p className="tl-text">{e.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
