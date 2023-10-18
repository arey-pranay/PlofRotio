import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex pl-4 flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
      {" "}
      {/* <div className="hidden  opacity-25 lg:block absolute top-96 mt-12 left-96 ml-80 text-xs skew-x-[45deg] -skew-y-[14deg]">
        If, due to excess coding, <br />
        he falls down from his chair, <br />
        please hit <b>Ctrl + R</b>
      </div> */}
      <Section>
        <h1 className="text-5xl text-white font-extrabold leading-snug">
          <span className="text-3xl pb-10">Presenting to you✨</span>
          <br />
          <span className="bg-white text-purple-900 px-1 italic">
            Pranay Parikh
          </span>
        </h1>
        <motion.p
          className="text-lg text-gray-50 mt-8 "
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          This is how he is mostly found, sitting on his desk
          <br />
          either learning how to make amazing websites
          <br /> or actually making one.{" "}
        </motion.p>
        <div className="flex gap-2">
          {" "}
          <motion.button
            className={`bg-pink-500 text-white py-4 px-8 
    rounded-lg font-bold text-lg mt-8`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            Say Hi !
          </motion.button>
          <motion.button
            className={`border-2 border-pink-300 text-pink-200 py-4 px-8 
    rounded-lg font-bold text-lg mt-8`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            Download Resume
          </motion.button>
        </div>

        <motion.p
          className="text-sm text-gray-50 mt-12 "
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <i>
            Beware ! He might get very excited and passionate if your project
            seems very interesting
            <br /> and start working on it right away. You might want to{" "}
            <strong>scroll down to know more</strong>{" "}
          </i>
        </motion.p>
      </Section>
    </>
  );
};

const skills = [
  {
    title: "HTML/CSS/Javascript",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Tailwind/Framer-Motion",
    level: 90,
  },
  {
    title: "ThreeJS/Blender",
    level: 60,
  },
  {
    title: "Next.js + Typescript",
    level: 60,
  },
];
const languages = [
  {
    title: "Node.js",
    level: 85,
  },
  {
    title: "Express.js",
    level: 90,
  },
  {
    title: "Firebase",
    level: 80,
  },
  {
    title: "MongoDB",
    level: 70,
  },
  {
    title: "APIS Handling",
    level: 90,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <div className="flex gap-20 flex-col md:flex-row md:gap-12">
          <div className=" mt-10 space-y-1.5 text-purple-50">
            {" "}
            <h2 className="text-4xl mb-10 text-white  font-bold">Frontend</h2>
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold "
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-pink-400 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-4xl text-white font-bold mt-10">Backend</h2>
            <div className=" mt-10 space-y-1">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-purple-50"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-green-300 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <h1 className="mt-16 font-medium text-sm text-white">
        Other skills include:{" "}
        <i>
          Proficient in Data Structures and Algorithm, Comfortable and
          Experienced <br /> in Object-oriented and as well ass Functional
          Programming. Prior experience in open-source projects <br /> and
          published international scientific research papers on IoT + ML and
          Teaching Methods for Recursion .
        </i>
      </h1>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl text-white font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label for="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            for="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-16 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-6 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
