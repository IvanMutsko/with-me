import About from "./ui/homeAbout/homeAbout";
import DownloadApp from "./ui/downloadApp/downloadApp";
import Hero from "./ui/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <DownloadApp />
    </main>
  );
}
