import React from "react"
import Perfil from "./imagensportifolio/Perfil.jpg"
import * as S from "./Style.jsx"

function Sobre (){
return(
    
    <S.ContainerSobre>
    <S.Perfil src={Perfil} alt="" />
    <h2>Olá, eu sou a Roberta Liliane</h2>
    </S.ContainerSobre>
)

}

export default Sobre