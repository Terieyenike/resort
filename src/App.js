import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { Error } from './pages/Error';

// navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rooms' component={Rooms} />
        <Route path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
