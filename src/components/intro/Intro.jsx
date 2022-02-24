import "./intro.scss";
import Modal from "../modal/Modal";
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import {KeyboardArrowDown} from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpedd:60,
      strings: ['React', 'nodeJs', 'Symfony', 'Wordpress' ],
     });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="img/Sylvain_Campos.png" alt="moi" />
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
          <h2>Salut tout le monde, moi c'est</h2>
          <h1>Sylvain Campos</h1>
          <h6>Développeur Web <br /><span ref={textRef}></span></h6>
          <Modal className="cv"/>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown fontSize="large" id="linkPortfolio"/>
        </a>
      </div>
    </div>
  )
}
