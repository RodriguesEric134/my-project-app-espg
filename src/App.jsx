// import React from "react"
import Cabecalho from "../components/Cabecalho"
import Footer from "../components/Footer"
import Section from "../components/Section"
import reactLogo from "./assets/react.svg"
export default function App() {
  let reactLogoAlt = "React Logo";

  //Lista de redes sociais

  let listaLinks =[<li>Github</li>, <li>X</li>, <li>Reddit</li> ];
  return (
    <>
      <div className="container">
        <Cabecalho/>
        {/* <img src={reactLogo} alt={reactLogoAlt} /> */}
        <Section reactLogoProps= {reactLogo} reactLogoAltProps={reactLogoAlt}/>
        <Footer listaProps={listaLinks}/>
        
      </div>
    </>
  ) 
}
