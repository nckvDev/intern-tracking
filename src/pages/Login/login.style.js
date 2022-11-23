import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #93c113;
  background: -webkit-linear-gradient(121deg, #93c113 0%, #f09a3a 100%);
  background: linear-gradient(121deg, #93c113 0%, #f09a3a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  min-width: 16rem;
  min-height: auto;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.125);
  border-radius: 1rem;

  display: grid;
  gap: 0.8rem;
  place-items: center;

  button {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;
    cursor: pointer;
  }
`
