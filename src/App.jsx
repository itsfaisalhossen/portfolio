import { Suspense, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Services from "./components/Services";
import Footer from "./components/Footer";
import { Oval } from "react-loader-spinner";

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
      lerp: 0.08, // smoothness
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
    <div className="bg-primary dark:bg-primary-dark min-h-screen">
      <div className="space-y-32">
        <Navbar />
        <main id="profile" className="pt-44 md:pt-56 space-y-32">
          <Profile />
          <Skills />
          <Suspense
            fallback={
              <div className="flex items-center justify-center mt-12">
                <Oval height={60} width={60} color="#000000" />
              </div>
            }
          >
            <Projects fetchPromise={fetchPromise} />
          </Suspense>
          {/* <Services /> */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
