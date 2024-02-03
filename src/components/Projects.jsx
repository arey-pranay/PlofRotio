import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
const isMobile = window.innerWidth < 768;

export const projects = [
  {
    title: "Crazy 3D experiences",
    url: "http://arey-pranay.github.io/Elm-3D/",
    image: " projects/P1.jpg",
    description:
      "Made using elm while working with McMaster University in my 2nd year. At that time, unlike React, Javascript, etc. there was no support and big community for elm and specifically for what I was trying to achieve. Usually had to read the documentation and personally find and reach out to people for any doubts. Big thanks to Andrey, Ian, Chris, Professor Anand and Professor Jagalingam for all the help and support.",
  },
  {
    title: "Cool Landing Pages",
    url: "https://pranay-firework.vercel.app/",
    image: " projects/P2.jpg",
    description:
      "Before becoming a fullstack developer, I spent a year or so just playing CSS/JS, until I realized that all these pseudoclasses, grids and animations is super cool but can never be memorized, I will always have to look up to something for recalling how I made it. But in the journey I made some pretty cool landing pages for products",
  },
  {
    title: "Functional Web-Apps",
    url: "https://pranay-firework.vercel.app/",
    image: " projects/P3.jpg",
    description:
      "After escaping the static webpage domain, I learnt React and loved it. The division into components, the JSX things, everything was blowing my mind. Then I learnt the entire MERN stack. And finally learnt about APIs, middlewares, headers, and all. I love using new APIs and creating SPAs in my free time. And finally I learnt about Firebase. It's sooooo dope.",
  },
  {
    title: "Informative Blogs",
    url: "https://www.linkedin.com/in/pranay-parikh-530331218/",
    image: " projects/P4.png",
    description:
      "Trying to stay active on LinkedIn for quite a while, and I thought blogs would be a way to do it. Plus I loooove teaching. Whatever I know, I wanna share to those who don't, so that there are more people who understand what developers do, and can help each other out and become part of a bigger community. It's a new venture and I've mentioned the topics that I'll be blogging about. New blogs are out every sunday.",
  },
  {
    title: "Open-Source Contributions",
    url: "https://github.com/arey-pranay",
    image: " projects/P5.jpg",
    description:
      "There is no better way to test your knowledge than to apply it in real world. Open source contributions helped me stay up-to-date with industry standards, taught me how to code collaboratively, needs and benefits of writing clean code, code refactoring, adding comments, best practices and whatnot. It is a really good way to help amazing projects and meet even more more amazing developers",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 1 : 0.2);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group
      {...props}
      position-x={isMobile ? 1.8 : -3}
      position-y={isMobile ? -5.2 : -6}
      // style={{ cursor: "pointer" }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <mesh
        position-z={-0.004}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[5, 9]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[4.6, 3.4, 2]}
        url={project.image}
        toneMapped={false}
        position-y={2.7}
      />
      <Text
        maxWidth={3.6}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.42}
        position={[-1.7, 0.65, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={3.6}
        anchorX="left"
        anchorY="top"
        fontSize={0.25}
        position={[-1.8, -0.5, 0]}
        fontStyle="italic"
        // font="./Courier Prime.ttf"
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 2}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 10, -3]}
          animate={{
            x: (index - currentProject) * 4.5 - 2,
            y: currentProject === index ? 3 : -7,
            z: currentProject === index ? 1 : -8.5,
            rotateX: currentProject === index ? 0 : -Math.PI / 2,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
