import React from "react";
import AvatarJJ from "../media/AvatarJJ";

function TextoEjemplo({ style }) {
    return (
        <p
            className="parrafo"
            style={style}
        >
            Pellentesque habitant morbi tristique <AvatarJJ /> senectus et netus et
            malesuada{" "}
            <a href="/" className="link-con-flecha">
            fames ac turpis egestas.
            </a>{" "}
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
            ante. Donec eu libero sit amet quam <a href="/">mi vitae</a> est. Mauris
            placerat eleifend leo.
        </p>
    );
}

export default TextoEjemplo;
