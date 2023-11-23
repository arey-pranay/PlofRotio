import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import "./Form.css";
import { useState } from "react";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 pt-[15vh] max-w-screen-2xl mx-auto
  flex flex-col items-start ${
    mobileTop ? "justify-start md:justify-center pt-16" : "justify-center"
  }
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
    <div className="flex md:pl-4 flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
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
      <Section mobileTop>
        <h1 className="text-2xl sm:text-5xl text-white font-extrabold leading-snug">
          <span className="text-3xl pb-10">Presenting to you✨</span>
          <br />
          <span className="bg-white text-purple-900 px-1 italic">
            Pranay Parikh
          </span>
        </h1>
        <motion.p
          className="text-sm sm:text-lg text-gray-50 mt-8 max-w-md"
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
          This is how he is mostly found, sitting on his desk
          {/* <br /> */} either learning how to make amazing websites
          {/* <br /> */} or actually making one.{" "}
        </motion.p>
        <div className="flex gap-1 sm:gap-2">
          {" "}
          <motion.button
            className={`bg-pink-500 hover:bg-pink-900 transition-colors ease-in-out text-white sm:py-4 px-4 sm:px-8 
    rounded-lg font-bold text-xs sm:text-lg mt-8`}
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
            <a
              href="https://www.linkedin.com/in/pranay-parikh-530331218/"
              target="_blank"
            >
              Say Hi !
            </a>
          </motion.button>
          <motion.button
            className={`border-2 hover:border-pink-300  text-pink-500 transition-colors ease-in-out border-white bg-pink-50 hover:bg-transparent hover:text-pink-200  py-4 px-8 
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
            <a href="pranayResume.pdf" download target="_blank">
              {" "}
              Download Resume
            </a>
          </motion.button>
        </div>

        <motion.p
          className="text-sm text-gray-50 mt-6 sm:mt-12 "
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
            delay: 1,
          }}
        >
          <div className="max-w-md">
            <i>
              Beware ! He might get very excited and passionate if your project
              seems very interesting and start working on it right away. You
              might want to <strong>scroll down to know more</strong>{" "}
            </i>
          </div>
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
          <div className=" mt-52 md:mt-9 space-y-1.5 text-purple-50">
            {" "}
            <h2 className="text-4xl mb-10 text-white  font-bold">Frontend</h2>
            {skills.map((skill, index) => (
              <div className="w-[80vw] sm:w-64" key={index}>
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
            <h2 className="text-4xl text-white font-bold md:mt-10">Backend</h2>
            <div className=" mt-10 space-y-1">
              {languages.map((lng, index) => (
                <div className="w-full sm:w-64" key={index}>
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
      <div className="max-w-2xl">
        {" "}
        <h1 className="hidden sm:block mt-16 font-medium text-sm text-white">
          Other skills include:{" "}
          <i>
            Proficient in Data Structures and Algorithm, Comfortable and
            Experienced in Object-oriented and as well as Functional
            Programming. Prior experience in open-source projects. <br /> Also
            won the best research paper award on IoT + ML at ICACECS-23 and now
            working on another one about Teaching Methods for Recursion in
            collaboration with VIT and McMaster University.
          </i>
        </h1>
      </div>
    </Section>
  );
};
const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex h-screen items-end justify-center text-center  w-full text-white sm:w-1/2  sm:items-start  sm:justify-center">
        <div className="flex items-center">
          <button
            className="hover:text-gray-500 h-full text-5xl sm:text-3xl hover:scale-75 transition-all "
            onClick={previousProject}
          >
            ⏮
          </button>
          <h2 className="text-5xl sm:text-5xl font-bold mx-[5vw]">
            Highlights
          </h2>
          <button
            className="hover:text-gray-500 h-full text-5xl sm:text-3xl hover:scale-75 transition-all"
            onClick={nextProject}
          >
            ⏭
          </button>
        </div>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [question, setQuestion] = useState("Liked the website ?");
  const [noBtnStyle, setNoBtnStyle] = useState({});

  const handleYesClick = () => {
    setQuestion("That's so nice of you :)");
  };
  const handleNoClick = () => {
    setQuestion("Oh that's sad :(");
  };

  const handleNoMouseOver = () => {
    const wrapperRect = document
      .querySelector(".wrapper")
      .getBoundingClientRect();
    const noBtnRect = document.querySelector(".no-btn").getBoundingClientRect();
    const i =
      Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j =
      Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    setNoBtnStyle({ left: `${i}px`, top: `${j}px` });
    console.log(wrapperRect);
    console.log("i = " + i + " j = " + j);
  };
  const handleNoTouch = () => {
    const wrapperRect = document
      .querySelector(".wrapper")
      .getBoundingClientRect();
    const i = Math.floor(Math.random() * 300) + 1;
    const j = Math.floor(Math.random() * 400) + 1;
    console.log(wrapperRect);
    console.log("i = " + i + " j = " + j);

    setNoBtnStyle({ left: `${i}px`, top: `${j}px` });
  };
  return (
    <Section>
      {/* <h2 className="text-5xl text-white font-bold">Contact me</h2> */}
      {/* <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
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
      </div> */}
      <section className="hidden sm:block" id="section-wrapper max-w-screen">
        <div className="box-wrapper md:ml-4">
          <div className="info-wrap p-2 md:p-10">
            <div className="wrapper max-w-xs md:w-full">
              {/* <i className="fa-solid fa-circle-question"></i> */}
              <div className="YesOrNo">
                <h2 className="question">{question}</h2>
                <div className="btn-group">
                  <button className="yes-btn" onClick={handleYesClick}>
                    Yes
                  </button>
                  <button
                    className="no-btn"
                    onMouseOver={handleNoMouseOver}
                    style={noBtnStyle}
                    onClick={handleNoClick}
                  >
                    No
                  </button>
                </div>
              </div>

              <div class="icons grid-cols-2 mt-5 ml-0 pl-12 md:pl-0 md:ml-10 md:mt-12">
                <a
                  href="https://elmlang.slack.com/team/U04NSSXCUPR"
                  class="fb"
                  target="_blank"
                >
                  <i class="fab fa-slack"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pranay-parikh-530331218/"
                  class="twitter"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/arey_pranay"
                  class="insta"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.github.com/arey-pranay"
                  class="git"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="form-wrap">
            <form action="#" method="POST">
              {/* <h2 className="form-title">Let's get in touch !</h2> */}
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    className="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input type="email" className="email" placeholder="Mail" />
                </div>
                <div className="form-group">
                  <input type="number" className="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Write your message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <input
                // type="submit"
                defaultValue="Send !!"
                className="bg-pink-600 submit-button hover:bg-purple-900"
              />
            </form>
          </div>
        </div>
      </section>
      <div className="block sm:hidden wrapper h-full mt-12 sm:pt-24 text-center max-w-xs md:w-full ">
        {/* <i className="fa-solid fa-circle-question"></i> */}
        <div className="YesOrNo mb-12 sm:mb-24">
          <h2 className="question">{question}</h2>
          <div className="btn-group">
            <button className="yes-btn" onClick={handleYesClick}>
              Yes
            </button>
            <button
              className="no-btn"
              style={noBtnStyle}
              onTouchStart={handleNoTouch}
            >
              No
            </button>
          </div>
        </div>
        <div class="icons flex-col  pl-12">
          <a
            href="https://elmlang.slack.com/team/U04NSSXCUPR"
            class="fb"
            target="_blank"
          >
            <i class="fab fa-slack">&nbsp; &nbsp;Pranay</i>
          </a>
          <a
            href="https://www.linkedin.com/in/pranay-parikh-530331218/"
            class="twitter"
            target="_blank"
          >
            <i class="fab fa-linkedin">&nbsp; &nbsp;Pranay Parikh</i>
          </a>
          <a
            href="https://www.instagram.com/arey_pranay"
            class="insta"
            target="_blank"
          >
            <i class="fab fa-instagram">&nbsp; &nbsp;arey_pranay</i>
          </a>
          <a
            href="https://www.github.com/arey-pranay"
            class="git"
            target="_blank"
          >
            <i class="fab fa-github">&nbsp; &nbsp;arey-pranay</i>
          </a>
        </div>
      </div>
    </Section>
  );
};
