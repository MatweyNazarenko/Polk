import { useEffect, useRef, useState } from "react";

/* ---------- появление элемента во вьюпорте ---------- */

export function useInView(threshold = 0.18, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

/* ---------- wrapper «появление» ---------- */

export function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView();
  const style = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <div ref={ref} style={style} className={`rv ${inView ? "rv-in" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

/* ---------- line-mask reveal для строк заголовков ---------- */

export function LineReveal({ children, delay = 0 }) {
  const { ref, inView } = useInView();
  return (
    <span ref={ref} className={`lm ${inView ? "lm-in" : ""}`}>
      <span style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</span>
    </span>
  );
}

/* ---------- эффект «расшифровки» строки ---------- */

const POOL = "АВДЕЖИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯѢѦѲ";

export function Scramble({ text, start, className }) {
  const [out, setOut] = useState(text);
  const done = useRef(false);

  useEffect(() => {
    if (!start || done.current) return;
    done.current = true;
    let frame = 0;
    const total = text.length;
    const id = window.setInterval(() => {
      frame += 1;
      const fixed = Math.floor(frame / 2);
      if (fixed >= total) {
        setOut(text);
        window.clearInterval(id);
        return;
      }
      let s = "";
      for (let i = 0; i < total; i += 1) {
        const c = text[i];
        if (c === " " || c === "·" || i < fixed) s += c;
        else s += POOL[Math.floor(Math.random() * POOL.length)];
      }
      setOut(s);
    }, 26);
    return () => window.clearInterval(id);
  }, [start, text]);

  return <span className={className}>{out}</span>;
}

/* ---------- подпись раздела с номером ---------- */

export function SectionLabel({ index, title, tone = "dark" }) {
  const { ref, inView } = useInView(0.4);
  return (
    <div ref={ref} className={`section-label ${tone === "light" ? "section-label--light" : ""}`.trim()}>
      <span className="label-index">{index}</span>
      <span className="label-line" />
      <span className="label-title">
        <Scramble text={title} start={inView} />
      </span>
    </div>
  );
}

/* ---------- узор-розетка-разделитель ---------- */

export function Ornament({ className = "ornament" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <rect x="15" y="15" width="18" height="18" transform="rotate(45 24 24)" />
      <rect x="19" y="19" width="10" height="10" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="2.4" fill="currentColor" stroke="none" />
      <path d="M24 4v9M24 35v9M4 24h9M35 24h9" />
      <circle cx="24" cy="4" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="24" cy="44" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="4" cy="24" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="44" cy="24" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Divider({ tone = "dark" }) {
  return (
    <div className={`divider ${tone === "light" ? "divider--light" : ""}`.trim()}>
      <span className="divider-rule" />
      <Ornament className="ornament" />
      <span className="divider-rule" />
    </div>
  );
}

/* ---------- угловые завитки рамки ---------- */

export function FrameCorners({ light = false }) {
  const corner = (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M2 26V6a4 4 0 0 1 4-4h20" />
      <path d="M9 26V12a3 3 0 0 1 3-3h14" opacity="0.55" />
      <circle cx="5" cy="5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
  const cls = light ? "frame-corner frame-corner--light" : "frame-corner";
  return (
    <>
      <span className={`${cls} frame-corner--tl`}>{corner}</span>
      <span className={`${cls} frame-corner--tr`}>{corner}</span>
      <span className={`${cls} frame-corner--br`}>{corner}</span>
      <span className={`${cls} frame-corner--bl`}>{corner}</span>
    </>
  );
}

/* ---------- SVG-иконки «четырёх лиц» ---------- */

export function FacetIcon({ kind }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (kind === "lyre") {
    return (
      <svg viewBox="0 0 48 48" {...common} aria-hidden>
        <path d="M12 6c-4 8-2 16 4 21 3 2.6 5 5 5 8h6c0-3 2-5.4 5-8 6-5 8-13 4-21" />
        <path d="M12 6c1 4 2.6 5.8 5 6M36 6c-1 4-2.6 5.8-5 6" />
        <path d="M18 14v15M24 13v18M30 14v15" opacity="0.8" />
        <path d="M19 35h10M16 42h16M24 35v7" />
      </svg>
    );
  }
  if (kind === "quill") {
    return (
      <svg viewBox="0 0 48 48" {...common} aria-hidden>
        <path d="M41 5c-9 1-17 7-21 16-2.2 5-3.4 10-3.5 15.5L3 42" />
        <path d="M41 5c-1 9-5 17-13 21.5-4.2 2.4-8.7 3.6-13.5 3.5" />
        <path d="M16 26l9-9" opacity="0.8" />
        <path d="M27 41c4-1 8-1 14 0" opacity="0.6" />
      </svg>
    );
  }
  if (kind === "flame") {
    return (
      <svg viewBox="0 0 48 48" {...common} aria-hidden>
        <path d="M24 4c2 7-6 10-6 17 0 3 1.4 5.4 3.4 7" />
        <path d="M24 4c8 6 13 12 13 21 0 8-5.8 14-13 14S11 33 11 25c0-4 1.4-7.6 4-10.6C17 20 20 21 21 17c.8-3.2 1.6-8 3-13z" />
        <path d="M18 36c1.6 2.4 3.8 4 6 4s4.4-1.6 6-4" opacity="0.7" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" {...common} aria-hidden>
      <path d="M10 8h28v18c0 10-6 16-14 20-8-4-14-10-14-20V8z" />
      <path d="M16 14h16M16 20h16" opacity="0.7" />
      <path d="M24 26l2 4-2 4-2-4 2-4z" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  );
}
