import Nav, { ProgressBar } from "./components/Nav";
import Hero from "./components/Hero";
import Ribbon from "./components/Ribbon";
import Mystery from "./components/Mystery";
import Voice from "./components/Voice";
import Passages from "./components/Passages";
import Facets from "./components/Facets";
import Audience from "./components/Audience";
import Timeline from "./components/Timeline";
import Legacy from "./components/Legacy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div className="grain" aria-hidden />
      <ProgressBar />
      <Nav />
      <main>
        <Hero />
        <Ribbon />
        <Mystery />
        {/* <Voice /> */}
        <Passages />
        <Facets />
        <Audience />
        <Timeline />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
}
