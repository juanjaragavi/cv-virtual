import { MantineProvider, Switch, Group } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { SunLow, Moon } from "tabler-icons-react";
import QRCode from "react-qr-code";
import { useState } from "react";

function ThemeSwitcher(props) {
  const { className } = props;
  const changeDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const toggleLightbox = () => {
    setLightboxVisible(!lightboxVisible);
  };
  const qrVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <MantineProvider
      theme={{
        colors: {
          "bright-pink": [
            "#F0BBDD",
            "#ED9BCF",
            "#EC7CC3",
            "#ED5DB8",
            "#F13EAF",
            "#F71FA7",
            "#FF00A1",
            "#E00890",
            "#C50E82",
            "#AD1374",
          ],
        },
      }}
    >
      <Group position="center">
        <button
          onClick={toggleLightbox}
          className="h-10 w-10 rounded-full border-2 border-pink-500 bg-white p-0"
        >
          <svg
            className="m-1.5 fill-none stroke-pink-500 stroke-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="8" height="8" />
            <path d="M6 6h.01" />
            <rect x="14" y="2" width="8" height="8" />
            <path d="M18 6h.01" />
            <rect x="2" y="14" width="8" height="8" />
            <path d="M6 18h.01" />
            <path d="M14 14h.01" />
            <path d="M18 18h.01" />
            <path d="M18 22h4v-4" />
            <path d="M14 18v4" />
            <path d="M22 14h-4" />
          </svg>
        </button>
        <Switch
          onChange={changeDarkMode}
          className={className}
          size="xl"
          color="bright-pink"
          onLabel={<SunLow size={28} />}
          offLabel={<Moon size={26} color="rgb(236, 72, 153)" />}
        />
      </Group>
      <AnimatePresence>
        {lightboxVisible && (
          <motion.div
            className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center"
            variants={qrVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="rounded-3xl absolute left-0 top-0 h-full w-full bg-black opacity-60"></div>
            <div className="my-[11%] relative rounded bg-white p-4 shadow">
              <QRCode value="https://qrco.de/be4hQ1" size={150} />
              <button
                onClick={toggleLightbox}
                className="absolute right-0 top-0 -mr-5 -mt-5 rounded-full bg-pink-500 p-1 px-3 text-xl text-white"
              >
                X
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MantineProvider>
  );
}
export default ThemeSwitcher;
