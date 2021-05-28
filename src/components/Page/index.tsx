import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {
              'title': 'Conceito de sustentabilidade', 
              'description': 'Sustentabilidade é um conceito originado do consumo excessivo dos seres humanos dos recursos naturais. Diz respeito a necessidade de se ter praticas de produção, consumo e descarte que estejam de acordo com o que o que o planeta consegue produzir. Mais que isso, diz repeito a consciência humana de utilizar os recursos diponíveis para manter a humanidade hoje, tendo em mente as necessidades das próximas gerações.' 
            },
            { 
              'title': 'Sustentabilidade empresarial', 
              'description': 'No âmbito empresarial, a sustentabilidade está dividida principalmente em três bases. Social, no que se refere a qualidade de vida dos colaboradores, da sociedade e de todos os indivíduos que se relacionam com a empresa; Ambiental, que trata sobre as boas praticas com o meio ambiente, como: descarte adequado de residuos, redução de consumo, melhor aproveitamento da matéria prima, melhoria e manutenção do processo fabril, entre outros; Econômico, relacionado a gestão financeira da empresa, investimento em projetos ligados a causa ambiental, pesquisa científica e etc.'
            },
            { 
              'title': 'Selo verde', 
              'description': 'Empresas que se dedicam a causa sustentável podem, inclusive, se tornarem mais lucrativas, uma vez que reduzem os gastos e atraem investimentos. Mas como saber quais empresas realmente estão seguindo as boas praticas e quais estão apenas fazendo marketing? Para isso existem as certificações, como o selo verde.'+
              'O selo verde é um programa de rotulagem ambiental, uma garantia de que o produto em questão possuí um menor impacto ambiental em relação a outros produtos do mesmo segmento disponíveis no mercado. Visa promover a competitividade de mercado e as boas praticas ambientais.'+
              'O selo tipo I é regulamentado pela NBR ISO 14024, aquele onde uma empresa busca uma terceira entidade para certificar que os seus métodos e de produção e os seus produtos são feitos de maneira sustentável. Outro tipo de selo verde é o tipo II normalizado pela NBR ISO 14021, que pode ser uma autodeclaração da empresa, como a de gastar pouca energia ou praticar a reciclagem dos seus produtos.' +
              ''
            },
            { 
              'title': 'A educação ambiental nas escolas', 
              'description': 'teste4' 
            },
            { 
              'title': 'Atividades sobre educação ambiental', 
              'description': 'teste5' 
            },
            { 
              'title': 'Coleta Seletiva', 
              'description': 'teste6' 
            },
            { 
              'title': 'Importância da Coleta Seletiva', 
              'description': 'teste7' 
            }
          ].map(modelName => (
            <ModelSection
              key={modelName.title}
              className="colored"
              modelName={modelName.title}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName.title}
                  description= {modelName.description}
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
