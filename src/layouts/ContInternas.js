import React from 'react'

function ContInternas({ children, style }) {
    return (
        <section className="contenedor-internas borde-redondeado fondo-translucido" style={style}>
            {children}
        </section>
    )
}
export default ContInternas;
