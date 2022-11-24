import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: #93c113;
  background: -webkit-linear-gradient(121deg, #93c113 0%, #f09a3a 100%);
  background: linear-gradient(121deg, #93c113 0%, #f09a3a 100%); */
  background: conic-gradient(
    from 124.37deg at 0% 98.58%,
    #2ed29f 0deg,
    #1feb9d 45deg,
    #23f899 90deg,
    #18d1b6 135deg,
    #14faaa 169.71deg,
    #10fbba 192.7deg,
    #1efcc9 223.25deg,
    #00d0cf 236.06deg,
    #24df9f 330.83deg,
    #2ed29f 360deg
  );

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
    background: rgba(255, 255, 255, 0.35);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.125);
    border-radius: 1rem;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0px 10px 55px -3px rgba(255, 255, 255, 0.4);
    transition: 0.3s;
  }
`
