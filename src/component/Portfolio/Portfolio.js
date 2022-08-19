/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./Portfolio.css"


const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {/* {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })} */}

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im1.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Responsive site</span>

              </div>
              <div className='title'>
                  <h2>website using html,css,js and Bootstrap</h2>
                <a href='https://github.com/Abdelrahman-khaled22/Foodsite.git' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im5.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Website using React js</span>

              </div>
              <div className='title'>
                  <h2>My website was made by React Js and styled-component</h2>
                  <a href='https://github.com/Abdelrahman-khaled22/firstSite-reactjs.git' className='eye'> 
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im3.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Front-end Site </span>

              </div>
              <div className='title'>
                  <h2>My website was made by Html,css,Bootstrap</h2>
                  <a href='https://github.com/Abdelrahman-khaled22/profile2.git' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im2.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Front-end Site</span>
 
              </div>
              <div className='title'> 
                  <h2>My website was made by Html,css,Bootstrapt</h2>
                  <a href='https://abdelrahman-khaled22.github.io/Mobilesite/' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im4.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Front-end Site</span>
  
              </div>
              <div className='title'>
                  <h2>My website was made by Html,css,Bootstrapt</h2>
                  <a href='https://github.com/Abdelrahman-khaled22/Profile1.git' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im6.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>My Portfolio</span>

              </div>
              <div className='title'>
                  <h2>My website was made by React Js and styled-componen</h2>
                  <a href='' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio