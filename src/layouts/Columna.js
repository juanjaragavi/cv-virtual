import React from 'react'

function Columna({ children, style }) {
  return (
    <div className="columna borde-redondeado" style={style}>
        {children}
    </div>
  )
}
export default Columna;
