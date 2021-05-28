import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Heading = styled.div`
  margin-top: 16.5vh;

  width: 100%;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #393c41;
  }
  > h2 {
    margin-top: 10vh;
    font-weight: normal;
    margin-left: 50px;
    margin-right: 50px;
    text-align: justify;
    line-height: 20px;
    font-size: 20px;

    color: #5c5e62;
  }
`
