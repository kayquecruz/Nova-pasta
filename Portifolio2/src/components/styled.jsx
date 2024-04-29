import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`

export const Header = styled.header`
border: solid 1px #000000;
background-color:#5c768de3;
width: 17vw;
display: flex;
align-items: center;
flex-direction: column;
@media(max-width: 700px) {
      width: 20vw;
   }
    @media(max-width: 500px) {
      width: 100%;
      height: 31vw; 
    flex-direction: row; 
   }
   
`

export const BoxLogo = styled.div `
padding: 5px;
width: 100%;
height: 35vh;
display: flex;
align-items: center;
flex-direction: column;
img{
  width: 12vw;
}
@media(max-width: 500px) {
      width: 20vw;
      height: 32.5vw;
   }
   @media(max-width: 481px) {
      display: none;
   }
`
export const Title = styled.h2`
width: 100%;
text-align: center;
color: white;
`

export const Text = styled.a`
width: 100%;
text-align: center;
color: #ffffff;
`

export const Menu = styled.nav`
  border: 2px solid #d5ebff;
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 a{
    list-style: none; 
    width: 100%;
  }
  @media (max-width: 440px) {
    width: 150%;
    height: 32vw;
  }
`
export const Lista = styled.a`
width: 100%;
height: 11.6vh;
display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px #d5ebff;
border-top:${props => props.linha};
a{
  color: white;
}
 @media(max-width: 500px) {
      height: 8vh;
   }
   @media(max-width: 400px) {
    height: 6vh;
    border: none;
    text-align: center;
    }
`

export const BoxRedes = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  img{
    width: 6vh;
  }
 @media(max-width: 500px) {
      width: 100%;
      flex-direction: row;
      height: 9vh;
   }
   @media(max-width: 400px) {
      display: none;
   }
`;