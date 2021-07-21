import React from  'react'
import "./workout.css"
import image from '../../assets/image/corazon.png'

const Workout = ()=>(

    <div className="container d-flex align-items-center flex-column cont-test">
                
                <img className="masthead-avatar mb-5" src={image} height="300px" width="300px" alt="..." />
                <div className="sect1">
                <p className="masthead-heading text-uppercase mb-0">¿Cuantos dias de la semana realizaras ejercicio?<input className="box" border-radius="5px" type="number" min="0" max="7"/></p>
                </div>
                
                
               
                <button type="button" class="btn btn-secondary btn-lg">Siguiente</button>
               
                
            </div> 


           

   

)

export default Workout;