import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/news" component={News} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
