import React from "react";

function FotoInternas({ style, src, title, alt }) {
    return (
        <img
        className="img-con-borde-internas transiciones"
        style={style}
        src={src}
        title={title}
        alt={alt}
        />
    );
}
export default FotoInternas;
