import styled from "styled-components";

export const Main = styled.main`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
background-color: #d5ebff;
border: solid 1px #d5ebff;
height: 100vh;
display: flex;

@media (max-width: 500px){
    flex-direction: column;
}
`
export const Tudo= styled.div`
display: flex;
flex-direction: column;
position: relative;
`

export const Title= styled.div`

position: absolute; 
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 15vh;
  color: #5595cee2;
/*display: flex;
padding: 21px;*/
`
export const Sobre = styled.div`
text-decoration: none;
padding: 25vh;
width: 70%;
display: flex;
align-items: center;
img{
    display: flex;
    width: 25vw;
    margin: 25px;
}
`