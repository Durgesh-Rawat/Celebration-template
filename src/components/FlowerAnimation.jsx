import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function FlowerAnimation() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 20 },
          shape: { type: "image", image: { src: "/flower.png", width: 32, height: 32 } },
          size: { value: 20 },
          move: { speed: 2, direction: "bottom", outModes: { default: "out" } }
        }
      }}
    />
  );
}
