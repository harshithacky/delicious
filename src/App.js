import Home from './Home';
import {Route, Switch} from 'react-router-dom';
import Footer from './Footer'
import Famous from './Famous';
const App = () => {
  return(
    <>
      <Switch>
        <Route exact path="/famous" component={Famous}/>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;