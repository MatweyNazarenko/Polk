import { navLinks } from "../data";
import { Ornament } from "./ui";

export default function Footer() {
  return (
    <footer className="site-footer ink-bg">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <Ornament className="brand-ornament" />
              <span className="brand-name footer-brand-name">Автор в «Слове»</span>
            </a>
            <p className="footer-desc">
              Учебный проект об образе автора «Слова о полку Игореве».
            </p>
          </div>
          <nav aria-label="Разделы сайта">
            <p className="footer-heading">Разделы</p>
            <ul className="footer-links">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="footer-link ink-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="footer-heading">Примечание</p>
            <p className="footer-note-text">
              Цитаты приведены из текста "Слово о пълку Игореве, Игоря сына Святъславля, внука Ольгова" с сайта <a href="https://azbyka.ru/otechnik/Istorija_Tserkvi/slovo-o-polku-igoreve/#1" target="_blank">azbyka.ru</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
