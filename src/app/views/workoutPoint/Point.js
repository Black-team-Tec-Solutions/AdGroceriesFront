import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {signupPoint, loginPoint} from '../../services/auth-ws'


export default class Point extends Component{
        state={
            workout:{
                name: '',
                exercises:'',
                typeexcercise:'',
    
            }
        }
    handleChange = (e) => {
        let{workout} = this.state
        const {name, value} = e.target
        user[name] = value
         this.setState({ user })
    }
    handleSubmit = (e) => {
        const {match,history} = this.props
        const {user} = this.state
        e.preventDefault()
        match.path === "/workout" ? workoutPoint(user)
        .then(
            res => {
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
            this.props.history.push('/workout')
        })
        .catch(error => (error)): loginPoint (user)
    .then(
        res => {
            
            localStorage.setItem( "user",JSON.stringify(res.data.result) )
            switch (res.data.result){
                case 0:
                    this.props.history.push('/onboarding');
                break;
                case 1:
                    this.props.history.push('/workout');
                break;
                case 2:
                    this.props.history.push('/workout/routine');
                break;
            }
    })
        .catch(error => (error))

}}
        
    