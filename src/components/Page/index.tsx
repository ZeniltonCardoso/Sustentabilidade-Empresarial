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
              'title': 'Tipos de Selos Verdes', 
              'description': 'Tipo I: Fornecidos por instituições terceiras, este selo é regulamentado pela NBR ISSO 14024 a qual estabelece critérios para avaliar ' +  
              'e demonstrar a sua conformidade sendo a norma que estabelece os procedimentos de certificação do rótulo ambiental. Tipo II: Esses selos são de autoria ' + 
              'do próprio fabricante do produto e são usados para divulgar os benefícios ambientais que o produto entrega, sendo regulamentado pela NBR ISO 14021 ' + 
              'que estabelece critérios e métodos de avaliação para sustentar as declarações informadas nos selos. Tipo III: Este selo necessita a ACV (Avaliação do' + 
              'ciclo de vida) como requisito para os selo, sendo assim um programa voluntário como intuito de fornecer dados baseados em critérios estabelecidos por ' + 
              'terceiros.' 
            },
            { 
              'title': 'Empresas sustentáveis em Brusque', 
              'description': 'O setor textil têm, por padrão, hábitos de consumo exagerado e desnecessário. O termo fast fashion diz respeito exatamente '+
              'a essa questão, praticamente a cada seis meses todo o cenário muda e toneladas de roupas são descartadas por deixarem de ser tendência. Algumas '+
              'empresas do ramo se preocupam com o problema ambiental gerado pela produção excessiva dos tecidos usados nas vestimentas e fazem uso de '+
              'alternativas mais sustentáveis. Em Brusque, empresas como a GS One e a Beach & Country, já oferecem alguns produtos totalmente verdes, que fazem uso de material ' +
              'reciclado na sua composição. ' 
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
