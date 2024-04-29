import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"
import css from "../../assets/css.png"
import html from "../../assets/html.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"

export default function Sobre() {
  return (
 <S.Main>
      <Header/>
      <S.Sobre>
        <img src="https://a91mcico4j0e.avataruol.com.br/avatar.jpg" alt="" />
        <h2>Sobre Mim</h2>
        <p>Olá! Me chamo Kayque, tenho 17 anos e estou começando minha jornada na carreira de front-end. Desde pequeno, sempre fui muito curioso. Um dia, como um bom gamer, decidi investigar como os jogos funcionavam e foi assim que tive meu primeiro contato com a programação. Desde então, me apaixonei e decidi que essa seria a minha vocação e o que gostaria de fazer pelo resto da minha vida.</p>
      </S.Sobre>
      <S.Habilidades>
      <img src={css} alt="" />
      <img src={html} alt="" />
      <img src={js} alt="" />
      <img src={react} alt="" />
      </S.Habilidades>
    </S.Main>
  )
}
