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
            <a href="#">Zenilton Cordeiro Cardoso 👾</a>
          </li>
          <li>
            <a href="#">Filipe</a>
          </li>
          <li>
            <a href="#">Antonio</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
