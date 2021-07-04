import './App.css';
import Navbar from './components/navBar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';
import BlogDetails from './Pages/BlogDetails';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/qc-world" component={Home} />
          <Route path="/blogs/:id" component={BlogDetails} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
