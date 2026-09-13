import { facets } from "../data";
import { Reveal, SectionLabel, LineReveal, Divider, FacetIcon, useInView } from "./ui";

function Interlude() {
  const { ref, inView } = useInView(0.2);
  return (
    <div ref={ref} className="interlude">
      <img
        src="images/battle.jpg"
        alt="Темперная живопись: русские всадники на закатной степи"
        className="interlude-img kenburns"
        loading="lazy"
      />
      <div className="interlude-veil" />
      <div className="interlude-inner">
        <div className="interlude-content">
          <p className={`interlude-quote ${inView ? "in" : ""}`.trim()}>
            «Не речите, братие, не речите, но разумейте, что погубило полк…»
          </p>
          <p className={`interlude-caption ${inView ? "in" : ""}`.trim()}>
            Из «Слова о полку Игореве» · морализующая вставка автора
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Facets() {
  return (
    <section id="facets" className="section facets">
      <div className="container">
        <Divider tone="dark" />
        <div className="facets-head">
          <div>
            <SectionLabel index="§ 03" title="Четыре лица" />
            <h2 className="section-title">
              <LineReveal>Один автор —</LineReveal>
              <LineReveal delay={120}>
                <em className="em-rubric">четыре лица</em>
              </LineReveal>
            </h2>
          </div>
          <Reveal delay={200}>
            <p className="facets-note">
              Автор «Слова» не бывает одним и тем же: он поёт, сводит летописи, укоряет князей и молится за
              землю. Образ автора - это четыре функции, которые он чередует внутри одного сказания.
            </p>
          </Reveal>
        </div>

        <div className="facets-grid">
          {facets.map((f, i) => (
            <Reveal key={f.num} delay={i * 90}>
              <article className="facet-card">
                <span aria-hidden className="facet-num">
                  {f.num}
                </span>
                <div className="facet-icon">
                  <FacetIcon kind={f.icon} />
                </div>
                <h3 className="facet-title">{f.title}</h3>
                <p className="facet-text">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* <Interlude /> */}
    </section>
  );
}
