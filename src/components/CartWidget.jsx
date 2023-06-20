import React from 'react'
import carrito from "../assets/carrito.png"

const styles = {
  span: {
    color: "white",
    paddingLeft: 10,
  }
}

export const CartWidget = () => {
  return (
    <>
        <img src={carrito} alt='carro-de-compras' />
        <span style={styles.span} >0</span>
    </>
  )
}
