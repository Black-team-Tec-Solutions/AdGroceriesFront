import React from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom'

                //react.router-dom por defecto
const Home = ({history,location,match}) => (

    <div className="home-container">
        <div className="img-background">

        </div>
        <div className="title-section">
            <img src={logo} width="30%" />
            <h1 className="h1 title-text">DISCOVER THE PROJECTS OF OUR STUDENTS</h1>
            <span>Are you an Ironhacker? 
                <Link to="/login" >Login</Link> |<Link to="/signup" > Signup</Link></span>
        </div>
    </div>

)


export default Home;