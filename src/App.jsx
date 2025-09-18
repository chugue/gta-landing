import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Jason from "./sections/Jason";
import Lucia from "./sections/Lucia";
import Navbar from "./sections/Navbar";
import SecondVideo from "./sections/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />
    </main>
  );
};

export default App;
