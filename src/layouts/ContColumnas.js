import React from 'react'

function ContColumnas({ children, style }) {
    return (
        <div className="contenedor-columnas" style={style}>
            {children}
        </div>
    )
}
export default ContColumnas;
