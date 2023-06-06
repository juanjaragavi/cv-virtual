import FotoBorde from "../media/FotoBorde";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Coca-Cola FEMSA",
        description:
        "Diseño de campaña de marketing digital y creación de perfiles sociales para las marcas Subway y Pizza 1969.",
        date: "Bogotá, Colombia. Junio / Noviembre de 2012",
        img: "https://juanjaramillo.s3.amazonaws.com/assets/logo-coca-cola-femsa-destacados.png",
    },
    {
        id: 2,
        title: "G4S Colombia S.A.",
        description:
        "Diseño de UI y UX, desarrollo de frontend y administración mensual de sitio web informativo de sistemas de seguridad para el hogar, para Colombia.",
        date: "Bogotá, Colombia. Marzo de 2010 / Noviembre de 2011",
        img: "https://juanjaramillo.s3.amazonaws.com/assets/logo-g4s-destacados.png",
    },
    {
        id: 3,
        title: "Subway",
        description:
        "Creación de la página de fans (fanpage) oficial de Subway Colombia. Community Management y seguimiento. Se logró llegar a los primeros 3.000 likes.",
        date: "Bogotá, Colombia. Junio / Noviembre de 2012",
        img: "https://juanjaramillo.s3.amazonaws.com/assets/logo-subway-destacados.png",
    },
    {
        id: 4,
        title: "Grupo Herdez",
        description:
        "Consultoría digital de 360 grados para la Herdez Food Services, una de las divisiones de este corporativo mexicano. Desarrollo de app y webapp de el área de Food Services de Grupo Herdez",
        date: "Ciudad de México, México. Enero / Noviembre de 2019",
        img: "https://juanjaramillo.s3.amazonaws.com/assets/logo-herdez-destacados.png",
    },
    {
        id: 5,
        title: "El Corte Inglés",
        description:
        "Project Manager de el equipo digital a cargo de el desarrollo de la sección navideña de app de oficial de El Corte Inglés. Mantenimiento y entrega de analíticas mensuales de la sección.",
        date: "Madrid, España. Agosto / Octubre de 2017 y 2018",
        img: "https://juanjaramillo.s3.amazonaws.com/assets/logo-el-corte-ingles-destacados.png",
    },
    // Add more items here
    ];
    const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIndex((index + 1) % items.length);
        }, 7000);
        return () => clearTimeout(timer);
    }, [index]);

    const { t } = useTranslation("common");

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
                    className="transiciones max-h-24"
                    src={item.img}
                    title={t("AltFotoInternas.title", { framework: "React" })}
                    alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h3 className="spartan titulo-3">{item.title}</h3>
                <h4 className="spartan text-center text-[1.2rem] mt-1 font-light">
                    {item.description}
                </h4>
                <h4 className="spartan text-center text-sm mt-2 font-normal">{item.date}</h4>
                </motion.div>
            ))}
        </AnimatePresence>
        </div>
    );
};

export default Slider;
