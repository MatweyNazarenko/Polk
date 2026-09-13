import { Reveal, SectionLabel, LineReveal } from "./ui";

const circles = [
  { to: "Братие", who: "Люди, которым ведётся сказание", when: "в начале" },
  { to: "Русские князья", who: "Князья, которых призывают объединится", when: "в «златом слове»" },
  { to: "Руская земля", who: "Земля Русская, за которую молятся", when: "в молитве" },
];

export default function Audience() {
  return (
    <section id="audience" className="section audience parchment-bg">
      <div className="container audience-grid">
        {/* изображение залов */}
        <Reveal className="audience-plate-col">
          <figure className="plate audience-plate frame">
            <div className="plate-media plate-media--bard">
              <img
                src="images/bard.jpg"
                alt="Темперная живопись: певец со свирелью у огня в княжеском зале, слушатели в доспехах"
                className="plate-img kenburns"
                loading="lazy"
              />
              <div className="plate-veil" />
            </div>
            <figcaption className="plate-caption">
              <span className="plate-caption-text">Рассказ · слушатели</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* текст */}
        <div className="audience-body">
          <SectionLabel index="§ 04" title="Аудитория" />
          <h2 className="section-title">
            <LineReveal>Автор и</LineReveal>
            <LineReveal delay={120}>
              <em className="em-rubric">слушатели</em>
            </LineReveal>
          </h2>
          <Reveal delay={220}>
            <p className="audience-lede">
                «Слово» написано для живого произнесения. Его автор находится в непрерывном диалоге с теми, к кому обращается: в начале - к слушателям, в «Златом слове» - к русским князьям, а в лирических отступлениях - к самой Русской земле
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="circles-block">
              <p className="chips-label" style={{ color: "var(--rubric)" }}>
                Три круга обращения
              </p>
              <ol>
                {circles.map((c, i) => (
                  <li key={c.to} className="circle">
                    <span className="circle-num">{i + 1}</span>
                    <span className="circle-name">{c.to}</span>
                    <span className="circle-who">{c.who}</span>
                    <span className="circle-when">{c.when}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* <Reveal delay={440}>
            <blockquote className="pull">
              <p className="pull-text">
                «Умнее героев — <span className="pull-accent">не потому что старше,</span> а потому что знает
                исход.»
              </p>
              <footer className="pull-footer">условие авторитета сказителя</footer>
            </blockquote>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}
