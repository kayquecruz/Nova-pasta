import React from 'react'
import Header from '../../components/Header'
import mequi from "../../assets/mequi.jpg"
import * as S from "./styled"

export default function Projetos() {
  return (
 <S.Main>
      <Header/>
      <S.Tudo>
      <S.Title>
        <h1>meus projetos</h1>
      </S.Title>
      <S.Sobre>
      <a href="https://github.com/kayquecruz/Mequi2" target="_blank">Projeto que replica uma pagina do McDonald's <img src={mequi} alt="" /> </a>
      <a href="https://github.com/kayquecruz/Mequi2" target="_blank">Projeto que replica uma pagina do McDonald's <img src={mequi} alt="" /> </a>
      </S.Sobre>
      </S.Tudo>
    </S.Main>
  )
}