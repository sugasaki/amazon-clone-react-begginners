import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./Header"
import Home from "./Home"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/checkout'>
            <h1>Checkout</h1>
          </Route>
          <Route path='/login'>
            <h1>Login page</h1>
          </Route>
          { /* this is the default route */ }
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


{/* We Need React-ROUTER */}

{/* localhost.com/  */}
{/* localhost.com/checkout */}
{/* localhost.com/login */}


export default App;
