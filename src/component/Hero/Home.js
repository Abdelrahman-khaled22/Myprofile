import React from "react"
import "./Home.css";
import hero from "../pic/hero.png"

import { useTypewriter } from 'react-simple-typewriter'

const Home = () => {
  const {text} = useTypewriter({
    words: [' Front-end Developer.'],
    loop: {},
    onLoopDone: () => console.log(`loop completed `),
  })
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I`m <span>Abdelrahman Khaled</span>
            </h1>
            <h2>
             
              <span>{text}</span>
         
            </h2>

            <p> I am working as Web developer React js , develop Responcive sites with javascript and Bootstrap.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                 <a className='btn_shadow' href="https://www.linkedin.com/in/abdelrahman-khaled-4746181a2/">
                   <i class='fab fa-linkedin-in'></i>
                  </a> 
                  <a className='btn_shadow' href="https://github.com/Abdelrahman-khaled22">
                   <i class='fab fa-github'></i>
                  </a>
                  <a className='btn_shadow' href="https://www.facebook.com/profile.php?id=100004171877920">
                  <i class='fab fa-facebook'></i>
                  </a>
                  <a className='btn_shadow' href="https://twitter.com/home">
                    <i class='fab fa-twitter'></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home