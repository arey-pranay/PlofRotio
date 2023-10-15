/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\public\models\NormalGLB.glb 
*/
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function Avatar(props) {
  const { animation } = props;
  const { headControl, cursorFollow, wireframe } = useControls({
    headControl: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("models/NormalGLB.glb");
  const { animations: typingAnimation } = useFBX("animations/ReadyTyping.fbx");
  const { animations: standingAnimation } = useFBX("animations/ReadyFlair.fbx");

  // const { animations: standingAnimation } = useFBX("animations/ReadyJump.fbx");
  const { animations: fallingAnimation } = useFBX(
    "animations/ReadyFalling.fbx"
  );
  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";

  const { actions } = useAnimations(
    [typingAnimation[0], fallingAnimation[0], standingAnimation[0]],
    group
  );

  useFrame((state) => {
    if (headControl) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine1").lookAt(target);
    }
  });
  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2} rotation-z={-Math.PI / 1.25}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="avaturn_body"
          geometry={nodes.avaturn_body.geometry}
          material={materials.avaturn_body_material}
          skeleton={nodes.avaturn_body.skeleton}
        />
        <skinnedMesh
          name="avaturn_glasses_0"
          geometry={nodes.avaturn_glasses_0.geometry}
          material={materials.avaturn_glasses_0_material}
          skeleton={nodes.avaturn_glasses_0.skeleton}
        />
        <skinnedMesh
          name="avaturn_glasses_1"
          geometry={nodes.avaturn_glasses_1.geometry}
          material={materials.avaturn_glasses_1_material}
          skeleton={nodes.avaturn_glasses_1.skeleton}
        />
        <skinnedMesh
          name="avaturn_hair_0"
          geometry={nodes.avaturn_hair_0.geometry}
          material={materials.avaturn_hair_0_material}
          skeleton={nodes.avaturn_hair_0.skeleton}
        />
        <skinnedMesh
          name="avaturn_hair_1"
          geometry={nodes.avaturn_hair_1.geometry}
          material={materials.avaturn_hair_1_material}
          skeleton={nodes.avaturn_hair_1.skeleton}
        />
        <skinnedMesh
          name="avaturn_shoes_0"
          geometry={nodes.avaturn_shoes_0.geometry}
          material={materials.avaturn_shoes_0_material}
          skeleton={nodes.avaturn_shoes_0.skeleton}
        />
        <skinnedMesh
          name="avaturn_look_0"
          geometry={nodes.avaturn_look_0.geometry}
          material={materials.avaturn_look_0_material}
          skeleton={nodes.avaturn_look_0.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/NormalGLB.glb");
