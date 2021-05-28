import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Antônio Cesar Fachini</a>
          </li>
          <li>
            <a href="#">Filipi Hermínio Nunes</a>
          </li>
          <li>
            <a href="#">Matheus Francisco Frutuoso</a>
          </li>
          <li>
            <a href="#">Zenilton Cordeiro Cardoso 👾</a>
          </li>

        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
