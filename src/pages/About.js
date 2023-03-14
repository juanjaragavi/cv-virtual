import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AvatarJJ from "../media/AvatarJJ";

function About() {
  const { t } = useTranslation("common");
  return (
    <section className="contenedor-internas mt-20 sm:mt-0 fondo-translucido w-[80%]">
      <div className="order-first  bmy-2 sm:basis-1/2 px-5 py-3 text-leftorde-redondeado">
        <p className="flow-root parrafo">
          Pellentesque habitant morbi tristique <AvatarJJ /> senectus et netus
          et malesuada{" "}
          <a href="/" className="link-con-flecha">
            fames ac turpis egestas.
          </a>{" "}
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Donec eu libero sit amet quam <a href="/">mi vitae</a>{" "}
          est. Mauris placerat eleifend leo.
        </p>
      </div>
      <div className="order-last my-2 sm:basis-1/2 px-5 py-3 text-justify borde-redondeado">
        <p className="parrafo">
          Pellentesque habitant morbi tristique <AvatarJJ /> senectus et netus
          et malesuada{" "}
          <a href="/" className="link-con-flecha">
            fames ac turpis egestas.
          </a>{" "}
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Donec eu libero sit amet quam <a href="/">mi vitae</a>{" "}
          est. Mauris placerat eleifend leo.
        </p>
        <p className="parrafo">
          Pellentesque habitant morbi tristique <AvatarJJ /> senectus et netus
          et malesuada{" "}
          <a href="/" className="link-con-flecha">
            fames ac turpis egestas.
          </a>{" "}
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Donec eu libero sit amet quam <a href="/">mi vitae</a>{" "}
          est. Mauris placerat eleifend leo.
        </p>
      </div>
      <div className=""></div>
    </section>
  );
}

export default About;
