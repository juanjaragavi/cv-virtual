import React from 'react'

function Seccion({ children, style }) {
    return (
        <div className="una-columna-interna borde-redondeado" style={style}>
            {children}
        </div>
    )
}
export default Seccion;
