import { Suspense, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Oval } from "react-loader-spinner";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";

// Fetch projects
const fetchProjects = async () => {
  const result = await fetch("./projects.json");
  return result.json();
};

const App = () => {
  const fetchPromise = fetchProjects();

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-primary dark:bg-primary-dark min-h-screen relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-80px] left-[-150px] w-[520px] h-[500px] bg-purple-600/25 rounded-full transition-all duration-1000 blur-[120px] animate-none"></div>
        <div className="max-sm:hidden absolute bottom-[100px] -right-40 w-[480px] h-[480px] bg-pink-800/15 rounded-full transition-all duration-1000 blur-[100px] animate-none"></div>
        <div className="absolute top-[40%] left-[30%] w-[560px] h-[560px] bg-blue-500/20 rounded-full transition-all duration-1000 blur-[150px] animate-none"></div>
      </div>

      <Navbar />
      <BackToTopButton />

      <main id="profile" className="md:space-y-32 space-y-12">
        <Profile />
        <Skills />
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-12">
              <Oval height={60} width={60} color="#0d0117" />
            </div>
          }
        >
          <Projects fetchPromise={fetchPromise} />
        </Suspense>
        <Contact />
      </main>
    </div>
  );
};

export default App;
