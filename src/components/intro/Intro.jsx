import React, { useEffect,useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
       showCursor: false,
       backDelay: 1500,
       backSpeed: 60,
       showCursor: true,
       strings: ['Developer', 'Enthusiast' ,'Explorer' ] ,
      });
  },[]);

  return (
    <div className='intro' id='intro'>
        <div className="left">
          <div className="imgContainer">
            <img src='assets/Deepak1.png' alt='' />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Deepak Choudhary</h1>
              <h3>
                A Front-end <span ref={textRef}></span>
              </h3>
          </div>
          <a href="#testimonials">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}

export default Intro
