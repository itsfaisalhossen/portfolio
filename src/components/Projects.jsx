import { use, useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = ({ fetchPromise }) => {
  const btns = ["All", "Frontend", "FullStack"];
  const [toggleStatus, settoggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data] = useState(initialData);

  const filteredData =
    toggleStatus == "All"
      ? data
      : data.filter((element) => element.projectType == toggleStatus);

  return (
    <section id="projects">
      <Container>
        <SectionTitle
          heading="Featured Projects"
          subHeading="A showcase of my professional work and personal projects"
        />

        {/* Featured Projects  */}
        <div className="md:ml-10">
          <div className="mr-72 mt10 ">
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-2.5  back-drop-b rounded-xl p-2.5">
              {btns.map((btn, idx) => {
                return (
                  <button
                    key={idx}
                    className={`rounded-lg hover:bg-black text-[15px] hover:text-white transition-all duration-500 py-2 px-1.5 dark:bg-white/20 dark:text-white text-black cursor-pointer ${
                      toggleStatus == btn && "!bg-white back-drop-b !text-black"
                    }`}
                    onClick={() => settoggleStatus(btn)}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Display Project cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb20">
            {filteredData.map((sProject, idx) => (
              <ProjectCard key={idx} sProject={sProject} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
