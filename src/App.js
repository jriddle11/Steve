import Navbar from './Navbar';
import Home from './Home';
import Santa from './Santa';
import Trump from './Trump';
import Elon from './Elon';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  document.title = "Merry Christmas Steve";
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/santa">
            <Santa />
          </Route>
          <Route exact path="/trump">
            <Trump />
          </Route>
          <Route exact path="/elon">
            <Elon />
          </Route>
        </Switch>
        <Navbar />
      </div>
    </div>
    </Router>
  );
}
export default App;








