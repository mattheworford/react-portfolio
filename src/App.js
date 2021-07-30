import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Preloader />
        <div id="home"></div>
        <Header />
        <PageRouter />
        <Footer />
      </div>
    );
  }
}

const Preloader = () => (
  <div className="loading">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
);

const HomePage = () => <Home></Home>;
const AboutPage = () => <About></About>;
const ExperiencePage = () => <Experience></Experience>;
const ProjectsPage = () => <Projects></Projects>;
const ContactPage = () => <Contact></Contact>;

const PageRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/about" component={AboutPage}></Route>
      <Route exact path="/experience" component={ExperiencePage}></Route>
      <Route exact path="/projects" component={ProjectsPage}></Route>
      <Route exact path="/contact" component={ContactPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
