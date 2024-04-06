import React from "react"
import Perfil from "./imagensportifolio/Perfil.jpg"
import * as S from "./Style.jsx"

function Inicio (){
return(
    
    <S.ContainerPerfil>
    <S.Perfil src={Perfil} alt="" />
    <h2>Olá, eu sou a Roberta Liliane!</h2>
    </S.ContainerPerfil>
)

}

export default Inicio