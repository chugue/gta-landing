import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Final from "./sections/Final";
import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Jason from "./sections/Jason";
import Lucia from "./sections/Lucia";
import Navbar from "./sections/Navbar";
import PostCard from "./sections/PostCard";
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

      <PostCard />
      <Final />
    </main>
  );
};

export default App;
