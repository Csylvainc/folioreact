import "./works.scss"
import React, { useState } from "react";
import {KeyboardArrowLeft} from "@material-ui/icons";
import {KeyboardArrowRight} from "@material-ui/icons";


export default function Works() {
  const [currentSlider,setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Front-end",
      p1: "Mais quel est le rapport avec la mer ?",
      p2: "Les BALISES bien sur ! ",
      p3: "Et oui, pour bien naviguer il faut que la route soit bien balisée. Un code propre commence par un HTML et un CSS bien organisé et qui respect les normes W3C.",
      img: "img/balise.jpg",
      imgalt: "balise"
    },
    {
      id: "2",
      title: "Front-end",
      p1: "Mes techno préférées :",
      p2: "Naviguer c'est bien, mais si on peut le faire confortablement c'est mieux !! ",
      p3: "Il en manque une 'jQuery', sa date un peu mais j'adore ",
      img: "img/front.png",
      imgalt: "front end"
    },
    {
      id: "3",
      title: "Back-end",
      p1: "PHP et NodeJs",
      p2: "l'historique et l'outsider",
      p3: "Après mettre formé sur le PHP et Symfony, j'entame ma formation NodeJs",
      img: "img/backend.jpg",
      imgalt: "php et nodejs"
    },
    {
      id: "4",
      title: "Back-end",
      p1: "Base de données",
      p2: "MySQL et PostgreSQL",
      img: "img/mypost.svg",
      imgalt: "MySQL et PostgreSQL"
    },
    {
      id: "5",
      title: "Outils",
      p1: "GitLab, Docker",
      p2: "Versioning, branches, conteneur ...",
      p3: "Je suis loin d'être un pro mais je m'en sors de mieux en mieux !",
      img: "img/gitdock.png",
      imgalt: "MySQL et PostgreSQL"
    }
  ];

  const handleClick = (way)=>{
    way ==="left"
      ? setCurrentSlide(currentSlider > 0 ? currentSlider - 1 : 2) 
      : setCurrentSlide(currentSlider < data.length - 1 ?currentSlider + 1 : 0)
  };
  return (
    <div className="works" id="works">
      <div className="title">
      <h6>Mes Skills</h6>
      </div>
        <div className="slider" style={{ transform:`translateX(-${currentSlider *100}vw)`}}>
          {data.map(d=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h6>{d.title}</h6>
                  <p>{d.p1}</p>
                  <p>{d.p2}</p>
                  <p>{d.p3}</p>
                </div>
              </div>
              <div className="right">
                  <img src={d.img} alt={d.imgalt} />
              </div>
            </div>
          </div> ))}
        </div>
        
       <KeyboardArrowLeft id="arrowLeft" onClick={()=>handleClick("left")}/>
       <KeyboardArrowRight id="arrowRight" onClick={()=>handleClick()}/>
    </div>
  )
}
