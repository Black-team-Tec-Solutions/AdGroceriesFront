import React, {Component} from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button'
import {Link} from 'react-router-dom'


export default class Auth extends Component{
    state={
        user:{
            //email:''
            //password:''
        }
    }
    handleChange = (e) => {
        let {user} = this.state
        const {name, value} = e.target
        //Para editar el state this.setState({})
        //Opción A :
        // this.setState({  user:{...user,[name]:value}   })
         //Opción B :
         user[name] = value
         this.setState({ user })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Lo que hay ene l user", this.state.user)
    }

    render(){
        const {user} = this.state
        const {handleChange,handleSubmit} = this
        const {match,} = this.props


        return(
            <section className="auth-container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <img src={logo} width='20%'/>

                        {match.path === "/signup" && 
                        
                        <TextInput
                            name="name"
                            textLabel='Nombre'
                            placeholder='Juan Perres'
                            handleChange={handleChange}
                        />}

                        <TextInput
                        name="email"
                        textLabel='Correo Electornico'
                        placeholder='perro@gay.com'
                        handleChange={handleChange}
                        
                        />
                       

                        <TextInput
                            name="password"
                            textLabel='Contrasena'
                            type='password'
                            placeholder='.........'
                            handleChange={handleChange}
                        />

                    {match.path === "/signup" && 
                        
                        <TextInput
                            name="confirmaPAss"
                            textLabel='Confirma la contra'
                            placeholder='.........'
                            handleChange={handleChange}
                        />}
                        <Button
                        text='Entrar'
                        />
                        
                        
                        
                    </form>
                    <span> {`${
                        match.path !== '/signup' ? "Aun no" : 'Ya'
                    } tienes cuenta? |`}
                        <Link to={match.path !== "/signup" ? "/signup" :"/login" }>Dale aqui</Link>
                    </span>
                </div>
            </section>
        )
    }
}