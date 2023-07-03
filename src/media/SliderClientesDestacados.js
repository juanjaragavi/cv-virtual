import AWSUrl from "../media/AWSUrl";
import FotoBorde from "../media/FotoBorde";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
        {
            id: 1,
            title: "TituloClienteDestacado1.title",
            description:
            "DescripcionClienteDestacado1.title",
            date: "FechaClienteDestacado1.title",
            img: "logo-coca-cola-femsa-destacados.webp",
            imgDark: "logo-coca-cola-femsa-destacados-dark.webp",
        },
        {
            id: 2,
            title: "TituloClienteDestacado2.title",
            description:
            "DescripcionClienteDestacado2.title",
            date: "FechaClienteDestacado2.title",
            img: "logo-g4s-destacados.webp",
            imgDark: "logo-g4s-destacados-dark.webp",
        },
        {
            id: 3,
            title: "TituloClienteDestacado3.title",
            description:
            "DescripcionClienteDestacado3.title",
            date: "FechaClienteDestacado3.title",
            img: "logo-subway-destacados.webp",
            imgDark: "logo-subway-destacados-dark.webp",
        },
        {
            id: 4,
            title: "TituloClienteDestacado4.title",
            description:
            "DescripcionClienteDestacado4.title",
            date: "FechaClienteDestacado4.title",
            img: "logo-herdez-destacados.webp",
            imgDark: "logo-herdez-destacados-dark.webp",
        },
        {
            id: 5,
            title: "TituloClienteDestacado5.title",
            description:
            "DescripcionClienteDestacado5.title",
            date: "FechaClienteDestacado5.title",
            img: "logo-el-corte-ingles-destacados.webp",
            imgDark: "logo-herdez-destacados-dark.webp",
        },
    ];
    
    const Slider = () => {
    const { t } = useTranslation("common");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIndex((index + 1) % items.length);
        }, 7000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="slider-container">
        <AnimatePresence>
            {items
            .filter((_, i) => i === index)
            .map((item) => (
                <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="item"
                >
                <FotoBorde
                    className="invisible dark:visible h-0 dark:h-24"
                    src={AWSUrl.URL + item.img}
                    title={t("AltFotoInternas.title", { framework: "React" })}
                    alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <FotoBorde
                    className="dark:invisible visible h-24 dark:h-0"
                    src={AWSUrl.URL + item.imgDark}
                    title={t("AltFotoInternas.title", { framework: "React" })}
                    alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                    <h3 className="spartan titulo-3">
                        {t(item.title, { framework: "React" })}
                    </h3>
                    <h4 className="spartan mt-1 text-center text-sm sm:text-lg leading-4 md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-light">
                        {t(item.description, { framework: "React" })}
                    </h4>
                    <h4 className="spartan mt-2 text-center text-sm font-normal">
                        {t(item.date, { framework: "React" })}
                    </h4>
                </motion.div>
            ))}
        </AnimatePresence>
        </div>
    );
};

export default Slider;