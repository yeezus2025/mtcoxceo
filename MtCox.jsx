import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MtCox() {
  const crowRef = useRef(null);
  const [meme, setMeme] = useState("Click below to generate your daily cock meme!");
  const [flash, setFlash] = useState(false);
  const [accessory, setAccessory] = useState(null);

  const playCrow = () => {
    if (crowRef.current) {
      crowRef.current.play();
    }
  };

  const memes = [
    "Your bags aren’t down, they’re just marinating.",
    "Sir Cox III only crows when green candles form.",
    "Buy high, sell never.",
    "Liquidity is just meme energy condensed into lines.",
    "Cockposting is free alpha.",
    "WAGCOX: We’re All Gonna Cockpost.",
    "Charts go up, feathers go higher.",
    "Bear markets fear the rooster’s dawn.",
  ];

  const accessories = [
    "👑 Crown",
    "🕶 Shades",
    "💼 Tie & Briefcase",
    "🥽 VR Goggles",
    "🎩 Top Hat",
    "💎 Diamond Chain",
    "🍗 Chicken Leg (don’t ask)",
    "🔥 Laser Eyes (1% chance)",
    "🚀 Rocket Wings (1% chance)",
    "🌌 Cosmic Aura (ultra rare)",
  ];

  const generateMeme = () => {
    const random = memes[Math.floor(Math.random() * memes.length)];
    let randomAccessory;
    const roll = Math.random();
    if (roll < 0.01) {
      randomAccessory = "🔥 Laser Eyes (LEGENDARY)";
    } else if (roll < 0.02) {
      randomAccessory = "🚀 Rocket Wings (LEGENDARY)";
    } else if (roll < 0.025) {
      randomAccessory = "🌌 Cosmic Aura (ULTRA LEGENDARY)";
    } else {
      randomAccessory = accessories[Math.floor(Math.random() * 7)];
    }
    setMeme(random);
    setAccessory(randomAccessory);
    playCrow();
    setFlash(true);
    setTimeout(() => setFlash(false), 500);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-gray-900"
      animate={flash ? { backgroundColor: ["#fde68a", "#f87171", "#fef3c7"] } : {}}
      transition={{ duration: 0.5 }}
    >
      <audio ref={crowRef} src="https://www.soundjay.com/animal/rooster-crowing-01.mp3" preload="auto" />
      <header className="py-10 text-center">
        <motion.img
          src="/mnt/data/rooster2.png"
          alt="Mt. Cox Logo"
          className="mx-auto w-64 mb-6 drop-shadow-xl cursor-pointer"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          onClick={playCrow}
          onMouseEnter={playCrow}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-orange-800"
        >
          Mt. Cox Exchange
        </motion.h1>
        <p className="mt-3 text-xl font-light italic text-gray-700">
          "Because nothing says financial security like a rooster in a suit."
        </p>
      </header>
      {/* Sections omitted for brevity, same as earlier */}
    </motion.div>
  );
}
