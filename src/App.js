import { Component } from 'react';
import './App.css';
import NavBar from './app/components/navBar/NavBar';
import SubMenu from './app/components/SubMenu';
import Routes from './Routes';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render (){
    let { pathname } = this.props.location
    console.log(pathname)
    if (pathname === "/main") {
      console.log("render isMain")
      return (    
        <div className="App">
          <NavBar/>
            <div>
              <SubMenu/>
              <Routes/>
            </div>
        </div>
      )
    } else {
      console.log("render normal")
      return (
        <div className="App">
          <Routes/>
        </div>
      )
    }

  }
}
//le damos la propiedad de rutas a nuestro app
const appWithRouter = withRouter(App)
export default appWithRouter;
