import { quotes } from "../data";
import { Reveal, SectionLabel, LineReveal, Ornament } from "./ui";

export default function Legacy() {
  const big = quotes.find((q) => q.big);
  const rest = quotes.filter((q) => !q.big);

  return (
    <section id="legacy" className="section legacy ink-bg">
      <span aria-hidden className="legacy-watermark">
        Г
      </span>

      <div className="container" style={{ position: "relative" }}>
        <SectionLabel index="§ 06" title="Наследие" tone="light" />
        <h2 className="section-title section-title--light">
          <LineReveal>Как автора</LineReveal>
          <LineReveal delay={120}>
            <em className="em-gold">услышали</em>
          </LineReveal>
        </h2>

        {big && (
          <Reveal delay={200}>
            <figure className="quote-big frame-light">
              <span aria-hidden className="quote-mark">
                «
              </span>
              <blockquote>
                <p className="quote-big-text">{big.text}</p>
                <figcaption className="quote-fig">
                  <span className="quote-author--big">{big.author}</span>
                  <span className="quote-date">{big.date}</span>
                </figcaption>
              </blockquote>
            </figure>
          </Reveal>
        )}

        <div className="quote-grid">
          {rest.map((q, i) => (
            <Reveal key={q.author} delay={i * 110}>
              <article className="quote-card">
                <p className="quote-kind">{q.kind}</p>
                <p className="quote-text">{q.text}</p>
                <footer className="quote-foot">
                  <span className="quote-author">{q.author}</span>
                  <span className="quote-date quote-date--sm">{q.date}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
