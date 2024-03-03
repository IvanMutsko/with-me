import Hero from "./ui/hero/hero";
import About from "./ui/about/about";
import Start from "./ui/start/start";
import Memories from "./ui/memories/memories";
import Faq from "./ui/faq/faq";
import Download from "./ui/download/download";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Start />
      <Memories />
      <Faq />
      <Download />
    </main>
  );
}
