import React from  'react'
import "./cards.css"
import image from '../../assets/image/jump.png'




const HitCardio = ()=>(
   

    <section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Entrenamientos para Cardio HIT</h2>
                {/* <p>Estos seran tus entrenamientos basicos para mantenerte saludable y en forma,
                    obtendras mayor condicion, fuerza y tecnica al realizar tus entrenos
                </p>
                <h2>pequena guia</h2>
                <h3>tren superior</h3>
                <p>pectorales, brazos, hombres y abdominales.</p>
                <h3>tren inferior</h3>
                <p>cuadriceps, gluteos, isquiotibiales  .</p> */}


                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={image} alt="..." />
                        </div>
                        <button type="button" class="btn btn-secondary btn-lg"><a class="text-decoration-none text-white" href="https://www.youtube.com/watch?v=HYTJsw0y7Ck&ab_channel=SilvyAraujo">Cardio Inteso para cuerpo completo</a></button>
                        <button type="button" class="btn btn-secondary btn-lg"><a class="text-decoration-none text-white" href="/workout/routine">Regresar</a></button>
                        
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </section>
   
    

    
    
                
               
               
            

)


export default HitCardio;
