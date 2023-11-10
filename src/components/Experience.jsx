import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const isMobile = window.innerWidth < 768;
  const responsiveRation = viewport.width / 12;
  const [section, setSection] = useState(0);
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    const curSection = Math.floor(data.scroll.current * data.pages);
    if (curSection !== section) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  console.log(section);
  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[isMobile ? 0 : 2.8, -12, isMobile ? 10 : 4.8]}
        scale={[
          isMobile ? 0.4 : 0.9,
          isMobile ? 0.4 : 0.9,
          isMobile ? 0.4 : 0.9,
        ]}
        rotation-y={-Math.PI / 3}
        animate={{
          y: section === 0 ? 0.35 : -1,
        }}
      >
        <Office section={section} />
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={"" + section}
        transition={{
          duration: 1,
        }}
        variants={{
          0: {
            z: 5.5,
            y: 0.6,
            x: 3.6,
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
            rotateX: Math.PI / 50,
            rotateZ: -Math.PI / 2.2,
            rotateY: -Math.PI / 1.1,
          },
          1: {
            z: 20,
            y: -viewport.height / 2.4,
            x: 2.8,
            rotateX: 2.5,
            rotateZ: 2,
            rotateY: 8.1,
          },
          2: {
            z: 20,
            y: -viewport.height * 1.38,
            x: 2.8,
            rotateX: 2.5,
            rotateZ: 2,
            rotateY: 8.1,
          },
          // 3: {
          //   z: 20,
          //   y: -viewport.height * 2.35,
          //   x: 2.8,
          //   rotateX: 2.5,
          //   rotateZ: 2,
          //   rotateY: 8.1,
          // },
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[-1.2, -4, -4]} scale={[2, 2, 2]}>
            {section === 0 && <sphereGeometry />}
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={8.5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh
            scale={[2, 2, 2]}
            position={isMobile ? [0, 1, -3] : [-2, -2, -5]}
          >
            {section === 1 && <boxGeometry />}
            <MeshWobbleMaterial
              opacity={0.2}
              transparent
              factor={2}
              speed={2}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh
            scale={isMobile ? [1, 1, 1] : [3, 4, 2]}
            position={isMobile ? [-3, 1, -3] : [0.2, 10, -0.5]}
          >
            {section === 1 && <sphereGeometry />}
            <MeshDistortMaterial
              opacity={0.5}
              transparent
              distort={1}
              speed={2}
              color="white"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[2, 2, 2]} position={[-3, -1, 7]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"red"}
            />
          </mesh>
        </Float>
        <group
          scale={isMobile ? [0.9, 0.8, 0.8] : [2, 2, 2]}
          position={
            isMobile && section == 0
              ? [0.55, 4.9, -4.1]
              : isMobile && section == 1
              ? [0, 0, 0]
              : isMobile
              ? [3, 3, -3.8]
              : undefined
          }
        >
          <Avatar
            animation={
              section === 0 ? "Typing" : section === 2 ? "Agree" : "Standing"
            }
          />
        </group>
      </motion.group>
      <Projects />
    </>
  );
};
