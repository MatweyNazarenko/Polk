import { epithets } from "../data";

export default function Ribbon() {
  const row = (key) => (
    <div key={key} className="ribbon-row" aria-hidden={key === "b"}>
      {epithets.map((e) => (
        <span key={`${key}-${e}`} className="ribbon-item">
          <span>{e}</span>
          <span className="ribbon-star">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="ribbon">
      <div className="ribbon-track marquee">
        {row("a")}
        {row("b")}
      </div>
      <span className="ribbon-fade ribbon-fade--left" />
      <span className="ribbon-fade ribbon-fade--right" />
    </div>
  );
}
