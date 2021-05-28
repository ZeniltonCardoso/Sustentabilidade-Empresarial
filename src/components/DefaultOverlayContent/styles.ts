import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Heading = styled.div`
  margin-top: 10.5vh;

  width: 100%;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
    color: #000000;
  }
  > h2 {
    margin-top: 10vh;
    font-weight: bold;
    margin-left: 60px;
    margin-right: 60px;
    text-align: justify;
    border: black;
    line-height: 1.5;
    font-size: 25px;
    color: #1C1C1C;
  }
`
