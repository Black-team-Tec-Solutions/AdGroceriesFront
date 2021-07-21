import React from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar';
import frutas from '../../assets/image/frutas.jpeg'
import oficina from '../../assets/image/oficina.jpeg'

                //react.router-dom por defecto
const Home = ({history,location,match}) => (

  
  
    <div classNameName="home-container">
         <NavBar>
       
       </NavBar>
       <header class="masthead text-white text-center">
       <div className="container d-flex align-items-center flex-column cont-test">
                
                <img className="masthead-avatar mb-5" src={logo} height="500px" width="500px" alt="..." />
                

            </div> 
            </header>

            <section class="page-section text-white mb-0" id="about">
            <div class="container">
               
                <h2 class="page-section-heading text-center text-uppercase"><a id="#about">Acerca de AdGroceries</a></h2>
               
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <div class="row">
                    <div class=" ms-auto"><p class="lead">Nos encanta la salud y bienestar de las personas, a favor de ello esta aplicacion
                    sera tu asistente y administrador personal de alimentos, funciona 
            como un storage virtual donde podras tener una mejor organizacion y 
            planificacion de tu stock de alimentos</p></div>

            <img className="assistant w-25 h-25" src={oficina}  alt="..." />
                    
                   </div>

                   <div className="row">
                    <div className=" ms-auto"><p class="lead">El valor que te brinda nuestra app es mayor libertad con tu tiempo
            liberate de una tarea menos y deja la administracion de tu despensa a cargo de AdGroceries</p></div>

            <img className="fruits h-50 w-50" src={frutas}  alt="..." />
                    
                   </div>
            </div>
        </section>

        <section class="page-section" id="contact">
            <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"><a id="#contact">Contact Me</a></h2>
            <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                        <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>


                        </form>

                 </div>
                 </div>       
            </div>
            </section>

         
        {/*<div classNameName="img-background">
        <img src={logo} width="50%" />
        <h3>Es tu asistente y administrador personal de alimentos que funciona 
            como un storage virtual donde podras tener una mejor organizacion y 
            planificacion de tu stock de alimentos</h3>
        
        
        

</div>*/}
       {/* <div classNameName="title-section">
            <img src={logo} width="50%" />
            
            <h3>
            El mejor valor que te brinda nuestra app es mayor libertad con tu tiempo
            liberate de una tarea amena y deja la administracion de tu despensa a cargo de AdGroceries
        </h3>
                <Link to="/login" >Login</Link> |<Link to="/signup" > Signup</Link>
</div>*/}
    </div>

)


export default Home;