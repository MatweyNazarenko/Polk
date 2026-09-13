import { hypotheses } from "../data";
import { Reveal, SectionLabel, LineReveal, Divider } from "./ui";


export default function Mystery() {
  return (
    <section id="mystery" className="section parchment-bg">
      <div className="container">
        <Divider tone="dark" />
        <div className="split split--mystery">
          {/* липкая левая колонна */}
          <div className="sticky-col">
            <SectionLabel index="§ 01" title="Авторство" />
            <h2 className="section-title">
              <LineReveal>Имя</LineReveal>
              <LineReveal delay={120}>
                <em className="em-rubric">не сохранилось</em>
              </LineReveal>
            </h2>
            <Reveal delay={200}>
              <p className="lead">
                Автор «Слова» не оставил подписи, не оставил имени, рода, города. Всё, что мы о нём знаем, —
                это то, что он сам сказал о себе в тексте.
              </p>
            </Reveal>

            <Reveal delay={420}>
              <figure className="plate plate--small frame">
                <div className="plate-media plate-media--quill">
                  <img
                    src="images/quill.jpg"
                    alt="Перо, чернильница и палимпсест с выцветшими кириллическими строками"
                    className="plate-img kenburns"
                    loading="lazy"
                  />
                  <div className="plate-veil" />
                </div>
                <figcaption className="plate-caption">
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* правая колонна — гипотезы */}
          <div className="stack">
            {hypotheses.map((h, i) => (
              <Reveal key={h.num} delay={i * 90}>
                <article className="hyp-card">
                  <div className="hyp-head">
                    <span className="hyp-num">{h.num}</span>
                    <div>
                      <h3 className="hyp-title">{h.title}</h3>
                      <p className="hyp-text">{h.text}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={120}>
              <aside className="verdict ink-bg">
                <span aria-hidden className="verdict-mark">
                  Ѣ
                </span>
                <p className="verdict-eyebrow">Вердикт</p>
                <p className="verdict-title">
                  Каждая гипотеза правдоподобна <em className="em-gold">и недоказанна</em>.
                </p>
                <p className="verdict-text">
                  Поэтому об авторе мы узнаём не по биографиям, а по тексту: по тому немногому, что он
                  сказал о себе сам, — и по тому, как говорит обо всём остальном.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
