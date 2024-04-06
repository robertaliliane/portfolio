import React from "react"
import * as S from "./Style.jsx"
import Vnw from "./imagensportifolio/vnw.png"
import Css from "./imagensportifolio/css.png"
import Js from "./imagensportifolio/js.png"
import Html from "./imagensportifolio/html.png"


function Sobre (){
return(
       <S.MainSobre>
    <S.SectionDoSobre>
    <h2>ESTUDOS</h2>
    <S.Card>
    <S.DivCard>
<h2>Desenvolvimento front-end</h2>
<h3>AGO/2023 - MAIO/2024</h3>
<img src={Vnw} alt="Logo vnw" />
</S.DivCard>

</S.Card>

    </S.SectionDoSobre>

    <S.SectionDoSobre>
    <h2>HABILIDADES</h2>

    <S.Card>
    <S.DivCard2>
        <div>
    <img src={Css} alt="Imagem CSS" />
    <h3>CSS</h3>
    </div>

<div>
    <img src={Js} alt="Imagem JS" />
    <h3>Java Script</h3>
    </div>

    <div>
    <img src={Html} alt="Imagem HTML" />
    <h3>HTML</h3>
    </div>
    
</S.DivCard2>

</S.Card>

    </S.SectionDoSobre>

    <S.SectionDoSobre>
    <h2>PROFISSIONAL</h2>
    <S.Card>
    <S.DivCard>
<h2>.</h2>
<h3>.</h3>

</S.DivCard>

</S.Card>

    </S.SectionDoSobre>

    
    </S.MainSobre> 
)

}

export default Sobre