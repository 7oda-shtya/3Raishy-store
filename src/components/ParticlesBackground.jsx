import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // التأكد من تحميل المحرك مرة واحدة فقط عند بداية تشغيل الموقع
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // إعدادات شكل النجوم وحركتها
  const options = {
    background: {
      color: { value: "transparent" }, // سيبها شفافة عشان تتحكم في اللون بـ Tailwind
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }, // النجوم تبعد عن الماوس
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      number: {
        density: { enable: true, area: 800 },
        value: 150, // عدد النجوم
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 1, sync: false }, // تأثير اللمعان (Twinkle)
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.5, // سرعة الحركة
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="fixed inset-0 z-[-1]"
      />
    );
  }

  return null;
};

export default ParticlesBackground;