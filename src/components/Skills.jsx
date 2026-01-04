import {
  bCoreTech,
  buildTools,
  coreTechnologies,
  frontendFrameworks,
  stateManagement,
  // testing,
  uIlibraries,
} from "../assets/data";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <SectionTitle
          heading="Skills & Technologies"
          subHeading="A comprehensive toolkit for building modern web applications"
        />
        <div className="md:ml-10">
          <div className="flex flex-col mt6 gap-4">
            <div className="flex-1">
              <h2 className="tech-title">Frontend Tech</h2>
              <div className="p-2.5 md:p-3 rounded-xl  back-drop-b">
                <div>
                  <h4 className="skil-cardTitle">Core Technologies</h4>
                  <div className="flex flex-wrap gap-3 items-center">
                    {coreTechnologies.map((tech, idx) => (
                      <SkillCard tech={tech} key={idx} />
                    ))}
                  </div>
                </div>
                <div className="my-3">
                  <h4 className="skil-cardTitle">Frontend Frameworks</h4>
                  <div className="flex flex-wrap gap-3 items-center">
                    {frontendFrameworks.map((tech, idx) => (
                      <SkillCard tech={tech} key={idx} />
                    ))}
                  </div>
                </div>
                <div className="my-3">
                  <h4 className="skil-cardTitle">State Management</h4>
                  <div className="flex flex-wrap gap-3 items-center">
                    {stateManagement.map((tech, idx) => (
                      <SkillCard tech={tech} key={idx} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="skil-cardTitle">UI Libraries</h4>
                  <div className="flex flex-wrap gap-3 items-center">
                    {uIlibraries.map((tech, idx) => (
                      <SkillCard tech={tech} key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="tech-title">Backend Tech</h2>
              <div className="card-content back-drop-b">
                <div>
                  <h4 className="skil-cardTitle">Core Technologies</h4>
                  <div className="flex flex-wrap gap-3 items-center">
                    {bCoreTech.map((tech, idx) => (
                      <SkillCard tech={tech} key={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-[18px] dark:text-white/90">
              Build Tools
            </h4>
            <div className="card-content mt-3 back-drop-b ">
              <div className="flex flex-wrap gap-3 items-center">
                {buildTools.map((tech, idx) => (
                  <SkillCard tech={tech} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Skills;
