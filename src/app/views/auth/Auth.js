import React, {Component} from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button'
import {Link} from 'react-router-dom'
import {signupPoint, loginPoint} from '../../services/auth-ws'


export default class Auth extends Component{
    state={
        user:{
            nombre: '',
            email:'',
            password:'',
            confirmPassword:''

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
        signupPoint(this.state.user)
        .then(
            res => {
                
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
            this.props.history.push('/signup')
        })
    .catch(error => (error))
        console.log("user data", this.state.user)
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
                            name="nombre"
                            textLabel='Nombre'
                            placeholder='Juan Perez'
                            handleChange={handleChange}
                        />}

                        <TextInput
                        name="email"
                        textLabel='Correo Electornico'
                        placeholder='luis@gmail.com'
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
                            name="confirmPassword"
                            textLabel='Confirma la contrasena'
                            type='password'
                            placeholder='.........'
                            handleChange={handleChange}
                        />}
                        <Button
                        text='Registrate'
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