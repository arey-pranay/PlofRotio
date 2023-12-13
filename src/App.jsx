import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState, useRef } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [menuButton, setMenuButton] = useState(false);
  // const [alertShown, setAlertShown] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  setTimeout(() => {
    setMenuButton(true);
  }, 5000);
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert(
  //       "Form and Highlights are still under construction\nThanks a lot for visiting..!"
  //     );
  //   }, 6000);
  // }, []);
  const alertShown = useRef(false);

  useEffect(() => {
    if (!alertShown.current && !isLoading) {
      alertShown.current = true;
      setTimeout(() => {
        alert(
          "Form and Highlights aren't fully functional rn.\nThis website is kinda new.."
        );
      }, 5000); // Adjust the delay as needed
    }
  }, [isLoading]);
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <MotionConfig
          transition={{
            ...framerMotionConfig,
          }}
        >
          <Canvas shadows camera={{ position: [0, 15, 30], fov: 22 }}>
            {/* <color attach="background" args={["#e6e7ff"]} /> */}
            <ScrollControls pages={4} damping={0.05}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Experience section={section} menuOpened={menuOpened} />
              </Scroll>
              <Scroll html>
                <Interface />
              </Scroll>
            </ScrollControls>
          </Canvas>
          {menuButton ? (
            <Menu
              section={section}
              onSectionChange={setSection}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
            />
          ) : (
            <></>
          )}
          <Cursor />
        </MotionConfig>
      )}{" "}
      <Leva hidden />
    </>
  );
}

export default App;
