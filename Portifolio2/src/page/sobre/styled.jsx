import styled from "styled-components";

export const Main = styled.main`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
background-color: #d5ebff;
border: solid 1px #d5ebff;
height: 100vh;
display: flex;
`

export const Sobre = styled.div`
padding: 10vh;
width: 70%;
left: 5%;
display: flex;
align-items: center;
flex-direction: column;
position: relative; /* Permite o uso de posicionamento absoluto */
h2{
    padding: 10px;
    color: #5595cee2;
}
`

export const Habilidades = styled.div`
display: flex;
align-items: center;
position: absolute; 
  top: 50%; 
  left: 54%; 
  transform: translateX(-50%); 
  padding: 15vh; 
  img{
    width: 20vh;
    height: auto;
  }
`