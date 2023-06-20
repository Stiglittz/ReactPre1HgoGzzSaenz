import React from 'react'
import Container from 'react-bootstrap/esm/Container'

export const ItemListContainer = ({ gretting }) => {
  return (
    <Container className='mt-4'>
        <h1>{gretting}</h1>
    </Container>
    )
}
