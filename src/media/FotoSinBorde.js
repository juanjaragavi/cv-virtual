import React from "react";

function FotoSinBorde({ style, src, title, alt }) {
    return (
        <img
        className="img-sin-borde-internas"
        style={style}
        src={src}
        title={title}
        alt={alt}
        />
    );
}
export default FotoSinBorde;
