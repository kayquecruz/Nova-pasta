import Header from '../../components/Header'
import * as S from "./styled"


export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Sobre>
      <img src="https://a91mcico4j0e.avataruol.com.br/avatar.jpg" alt="" />
        <h2>Olá sou o Kayque</h2>
        <h3> e sou um dev front-end</h3>
        <p>A tecnologia move o mundo, e os programadores movem a tecnologia.</p>
      </S.Sobre>
    </S.Main>
  )
}
