import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <SectionTitle
          heading={"What I Do"}
          subHeading={
            "Building dynamic, fullstack web solutions with modern MERN technologies."
          }
        />
        <div className="grid grid-cols-12 gap-5 md:gap-6 py10">
          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-7 p-3 md:p-4.5  rounded-xl back-drop-b">
            <div className="">
              <img
                className="rounded-lg bg-black/30 p-2  back-drop-b"
                width="65"
                src="https://img.icons8.com/liquid-glass/96/web.png"
                alt="web"
              />
            </div>
            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              Custom Website Development
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              Build modern, responsive websites tailored to your brand.
              user-friendly websites using layout, color, typography, and
              responsive design to ensure seamless user experience across
              devices.
            </p>
          </div>

          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-5 p-3 md:p-4.5 rounded-xl back-drop-b">
            <img
              className="rounded-lg bg-black/30 p-2 dark:bgblack  back-drop-b"
              width="65"
              src="https://img.icons8.com/liquid-glass/96/code.png"
              alt="code"
            />

            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              Frontend Development
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              {/* Frontend development focuses on building the visual and
              interactive parts of websites using HTML, CSS, TailwindCSS,
              JavaScript, reactJS, nextJS to create responsive, user-friendly,
              and engaging digital experiences. */}
              I create responsive, interactive, and visually appealing frontends
              using modern frameworks for fast, smooth user experiences.
            </p>
          </div>

          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-4 p-3 md:p-4 rounded-xl back-drop-b">
            <div className="">
              <img
                className="rounded-lg bg-black/30 p-2  back-drop-b"
                width="65"
                src="https://img.icons8.com/liquid-glass/96/stack.png"
                alt="stack"
              />
            </div>
            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              Backend Development
              {/* Backend Services */}
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              Backend Services power dynamic web apps using Node.js, Express,
              and MongoDB, enabling secure APIs, real-time data handling,
              authentication, and smooth integration with React frontends.
            </p>
          </div>

          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-4 p-3 md:p-4 rounded-xl back-drop-b">
            <div>
              <img
                className="rounded-lg bg-black/30 p-2  back-drop-b"
                width="65"
                src="https://img.icons8.com/liquid-glass/96/api-settings.png"
                alt="api-settings"
              />
            </div>
            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              API Development
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              API services enable seamless data exchange between clients and
              servers, providing secure, scalable endpoints for authentication,
              CRUD operations, integrations, and efficient application
              communication.
            </p>
          </div>

          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-4 p-3 md:p-4 rounded-xl back-drop-b">
            <div className="">
              <img
                className="rounded-lg bg-black/30 p-2  back-drop-b"
                width="65"
                src="https://img.icons8.com/liquid-glass/96/bursts.png"
                alt="bursts"
              />
            </div>
            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              Full-Stack Services
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              Fullstack MERN services deliver end-to-end web solutions using
              MongoDB, Express, React, and Node.js, ensuring responsive
              interfaces, secure APIs, real-time updates, and scalable
              application performance.
            </p>
          </div>

          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-5 p-3 md:p-4.5  rounded-xl back-drop-b">
            <img
              className="rounded-lg bg-black/30 p-2 dark:bgblack  back-drop-b"
              width="65"
              src="https://img.icons8.com/liquid-glass/96/Profitability.png"
              alt="Profitability"
            />
            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              E-Commerce Development
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              I develop scalable e-commerce websites with secure payments,
              product management, user accounts, and seamless shopping
              experiences.
            </p>
          </div>

          <div className="col-span-12 hover:shadow-md hover:scale-105 transition-all duration-300 duration500 md:col-span-7 p-3 md:p-4.5 rounded-xl back-drop-b">
            <img
              className="rounded-lg bg-black/30 p-2 dark:bgblack  back-drop-b"
              width="65"
              src="https://img.icons8.com/liquid-glass/96/web-analystics.png"
              alt="web-analystics"
            />

            <h3 className="my-3 font-normal text-lg md:text-xl dark:text-white/90">
              Custom Dashboard Development
            </h3>
            <p className="text-sm font-normal dark:text-white/80">
              {/* Build admin panels or analytics dashboards. */}I build modern,
              responsive admin panels and analytics dashboards with real-time
              data, charts, and secure management tools.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Services;
