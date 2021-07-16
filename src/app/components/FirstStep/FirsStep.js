
import image from '../../assets/image/corazón-saludable-producto.png'

const FirstStep = ()=>(

    <div className="container d-flex align-items-center flex-column cont-test">
                
                <img className="masthead-avatar mb-5" src={image} height="300px" width="300px" alt="..." />
                
                <p className="masthead-heading text-uppercase mb-0">Cuantos dias realizaras tu dieta?<input className="box" type="number" min="0" max="7"/></p>
                <p className="masthead-heading text-uppercase mb-0">Cuantas comidas al dia vas a consumir?<input className="box" type="number" min="0" max="9"/></p>
               
                
               
                
            </div> 
           

)

export default FirstStep;