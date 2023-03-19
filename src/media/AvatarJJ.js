import React from "react";
import { useTranslation } from "react-i18next";

function AvatarJJ() {
    const { t } = useTranslation("common");
    return (
        <span class="inline-flex items-baseline">
            <img
                src='https://juanjaramillo.s3.amazonaws.com/assets/avatar.jpg'
                alt={t("AltAvatarJJ.title", { framework: "React" })}
                title={t("AltAvatarJJ.title", { framework: "React" })}
                class="self-center w-5 h-5 rounded-full mx-1 mb-0.5"
            />{" "}
            <span className="spartan-bold text-pink-800 dark:text-pink-500">Juan Jaramillo</span>
        </span>
    );
}
export default AvatarJJ;
