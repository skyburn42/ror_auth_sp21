import {Switch, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Register from './components/auth/Register';
const App = () => (

  <>
  <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;
