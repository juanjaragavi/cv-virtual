import React from "react";

function FotoInternas({ style, src, title, alt, className }) {
    return (
        <img
        className={className}
        style={style}
        src={src}
        title={title}
        alt={alt}
        />
    );
}
export default FotoInternas;
