import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Office } from "./Office";

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

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
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <ambientLight intensity={1} />
      <motion.group
        position={[2.8, -12, 4.8]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0.35 : -1,
        }}
      >
        <Office section={section} />
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        scale={[0.9, 0.9, 0.9]}
        animate={{
          z: section === 1 ? 20 : 4.4,
          y: section === 1 ? -viewport.height / 5 : 1.4,
          x: section === 1 ? 1.8 : 4,
        }}
        rotation-y={section === 1 ? Math.PI / 2 : 0}
      >
        {/* <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 2 : 6,
          y: section === 1 ? -viewport.height / 4 : 2,
          x: section === 1 ? 0 : 3,
        }}
      > */}
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[4.2, -2.6, -5]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.3}
              transparent
              distort={0.4}
              speed={8.5}
              color={"black"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[2, 2, 2]} position={[-3, -1, -11]}>
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
        <group scale={[2, 2, 2]} position-y={-1.5}>
          <Avatar animation={section === 0 ? "Typing" : "Standing"} />
        </group>
      </motion.group>
    </>
  );
};
