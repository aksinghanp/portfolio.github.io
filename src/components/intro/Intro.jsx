import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

   useEffect(() => {
    init(textRef.current, {
      backDelay: 2000,
      backSpeed:40,
      strings: ["Web Developer","Coder"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/about.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey!, I'm</h2>
          <h1>Amit !!</h1>
          <h3>
           <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
