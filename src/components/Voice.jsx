import { voiceBlocks } from "../data";
import { Reveal, SectionLabel, LineReveal } from "./ui";

const pronouns = ["мы", "нам", "дручичь", "братие", "отроки", "а нам"];
const roman = ["I", "II", "III", "IV", "V"];

export default function Voice() {
  return (
    <section id="voice" className="section voice ink-bg">
      {/* водяной знак */}
      <span aria-hidden className="voice-watermark">
        Ѯ
      </span>

      <div className="container">
        <div className="split split--voice">
          {/* липкая колонна */}
          <div className="sticky-col">
            <SectionLabel index="§ 02" title="" tone="light" />
            <h2 className="section-title section-title--light">
              <LineReveal>Кто говорит</LineReveal>
              <LineReveal delay={120}>
                <em className="em-gold">«Слово»?</em>
              </LineReveal>
            </h2>
            <Reveal delay={200}>
              <p className="lead lead--light">
                Автор прямо говорит о себе лишь в нескольких местах. Но в каждом из них он определяет своё
                место в событии — а этим местом оказывается всё «Слово». Пять таких вставок.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="chips-block">
                <p className="chips-label">Словарь автора — из самого текста</p>
                <ul className="pronouns">
                  {pronouns.map((w) => (
                    <li key={w} className="pronoun">
                      «{w}»
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* колонна вставок */}
          <div className="voice-rail">
            {voiceBlocks.map((b, i) => (
              <Reveal key={b.tag} delay={i * 70}>
                <article className="voice-item">
                  <span aria-hidden className="voice-dot pulse-dot" />
                  <p className="voice-item-label">
                    Вставка {roman[i]} · {b.tag}
                  </p>
                  <blockquote className="voice-quote">«{b.old}»</blockquote>
                  <p className="voice-text">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
