import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Routine, TrenSuperior } from './app/components'
import HitCardio from './app/components/cards/HitCardio'
import TrenInferior from './app/components/cards/TrenInferior'
import FirstStep from './app/components/FirstStep/FirsStep'
import UserWorkout from './app/components/userWorkout/UserWorkout'
import Welcome from './app/components/Welcome/Welcome'
import Workout from './app/components/workOut/Workout'
//vistas que mostrare
import {Home} from './app/views'
import Auth from './app/views/auth/Auth'


//es tonto por que solo recibe parametros
const Routes =()=>( //el arrowfunction tiene implicito el return
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/signup" component={Auth}/>
            <Route exact path="/onboarding" component={Welcome}/>
            <Route exact path="/onboarding/firstStep" component={FirstStep}/>
            <Route exact path="/onboarding/secondStep" component={()=><h1>Detalle de comidas</h1>}/>
            <Route exact path="/main" component={()=><h1>pagina principal</h1>}/>
            <Route exact path="/workout" component={Workout}/>
            <Route exact path="/workout/routine" component={Routine}/>
            <Route exact path="/workout/superior" component={TrenSuperior}/>
            <Route exact path="/workout/inferior" component={TrenInferior}/>
            <Route exact path="/workout/cardio" component={HitCardio}/>
            <Route exact path="/user" component={UserWorkout}/>

    </Switch>
)


export default Routes