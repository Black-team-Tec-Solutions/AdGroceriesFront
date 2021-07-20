import "./firstStep.css"
import image from '../../assets/image/corazón-saludable-producto.png'

const FirstStep = ()=>(

    <div className="container d-flex align-items-center flex-column cont-test">
                
                <img className="masthead-avatar mb-5" src={image} height="300px" width="300px" alt="..." />
                <div className="sect1">
                <p className="masthead-heading text-uppercase mb-0">¿Cuantos dias realizaras tu dieta?<input className="box" border-radius="5px" type="number" min="0" max="7"/></p>
                </div>
                <p className="masthead-heading text-uppercase mb-0">¿Cuantas comidas al dia vas a consumir?<input className="box" type="number" min="0" max="9"/></p>
                
               
                <button type="button" class="btn btn-secondary btn-lg">Siguiente</button>
               
                
            </div> 


           

   

)

export default FirstStep;