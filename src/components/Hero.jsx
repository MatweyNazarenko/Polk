import { LineReveal, Reveal, Scramble, useInView, FrameCorners } from "./ui";

const meta = [
  { k: "Имя", v: "не сохранилось" },
  { k: "Годы", v: "конец 1185 — 1187" },
];

export default function Hero() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="top" className="hero parchment-bg">
      <div className="container hero-grid">
        {/* левая колонна — лист рукописи */}
        <div ref={ref} className="hero-main">
          <div className="hero-eyebrow">
            <span className={`eyebrow-line ${inView ? "in" : ""}`} />
            <p className="eyebrow-text">
              <Scramble start={inView} text="Древнерусская литература · XII век" />
            </p>
          </div>

          {/* начало Слова — с буквицей */}
          <div className="manuscript frame">
            <FrameCorners />
            <p className="opening-quote">
              <span className="dropcap">Н</span>
              е прилично ли будет нам, братия,
              Начать древним складом
              Печальную повесть о битвах Игоря,
              <span className="accent">Игоря Святославича!</span>
            </p>
          </div>

          {/* заголовок */}
          <h1 className="hero-title">
            <LineReveal delay={100}>Автор, который</LineReveal>
            <LineReveal delay={240}>
              <em className="em-rubric">неизвестен</em>
            </LineReveal>
          </h1>

          <Reveal delay={420}>
            <p className="hero-lede">
              «Слово о полку Игореве» не называет своего автора - и это молчание стало одной из главных загадок
              русской литературы.
            </p>
          </Reveal>

          <Reveal delay={560}>
            <ul className="meta-list">
              {meta.map((m) => (
                <li key={m.k} className="meta-item">
                  <span className="meta-key">{m.k}</span>
                  <span className="meta-value">{m.v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* правая колонна — «фото» рукописного листа */}
        <div className="hero-plate-col">
          <Reveal delay={250} className="hero-plate-wrap">
            <figure className="plate frame">
              <div className="plate-media plate-media--manuscript">
                <img
                  src="images/manuscript.jpg"
                  alt="Старинная рукописная страница с текстом на древнерусском языке"
                  className="plate-img kenburns"
                  loading="eager"
                />
                <div className="plate-veil" />
              </div>
              <figcaption className="plate-caption">
                <span className="plate-caption-text">Лист · 1934 год</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
