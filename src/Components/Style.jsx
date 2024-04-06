import styled from "styled-components"

export const Nav = styled.nav`

`

export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
list-style: none; 
text-transform: uppercase;
height: 20vh;



a{
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
}
`

export const Perfil = styled.img`
width: 20ww;
height: 40vh;
border-radius: 50%;

`

export const ContainerPerfil = styled.main`
display: flex;
justify-content: space-evenly;
align-intems: center;
padding-top: 3rem;
`

//Estilização do Sobre

export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-intems: center;
`

export const SectionDoSobre = styled.section`
border: solid yellow;
height: 75vh;
width: 30vw;
text-align: center;

`

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
export const DivCard = styled.div`
border: solid white;
width: 20vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 20vh;
h2 {color: pink;}
h3 {color: violet;}
`

export const DivCard2 = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 70vh;
div{display: flex;
align-items: center; }
h2 {color: pink;}
h3 {color: violet;}
`