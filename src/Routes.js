import React from 'react'
import { Switch, Route } from 'react-router-dom'
//vistas que mostrare
import {Home} from './app/views'
import Auth from './app/views/auth/Auth'


//es tonto por que solo recibe parametros
const Routes =()=>( //el arrowfunction tiene implicito el return
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/signup" component={Auth}/>
            <Route exact path="/onboarding" component={()=><h1>Mensaje de bienvenida</h1>}/>
            <Route exact path="/onboarding/firstStep" component={()=><h1>Cuantos días? Cuantas Comidas?</h1>}/>
            <Route exact path="/onboarding/secondStep" component={()=><h1>Detalle de comidas</h1>}/>
            <Route exact path="/main" component={()=><h1>pagina principal</h1>}/>
    </Switch>
)


export default Routes