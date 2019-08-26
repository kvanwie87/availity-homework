import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return <div>home text here</div>;
}
function About() {
  return <div>about text here</div>;
}
function StepZero() {
  return (
    <div>
      <div>StepZero Text</div>
      <Link to="/registration/one/">Next</Link>
    </div>
  );
}
function StepOne() {
  return (
    <div>
      <div>StepOne Text</div>
      <Link to="/registration/">Previous</Link>
      <Link to="/registration/two/">Next</Link>
    </div>
  );
}
function StepTwo() {
  return (
    <div>
      <div>StepTwo Text</div>
      <Link to="/registration/one/">Previous</Link>
      <Link to="/registration/three/">Next</Link>
    </div>
  );
}
function StepThree() {
  return (
    <div>
      <div>StepThree Text</div>
      <Link to="/registration/two/">Previous</Link>
    </div>
  );
}
function Registration() {
  return (
    <div>
      <Route path="/registration/" exact component={StepZero} />
      <Route path="/registration/one/" exact component={StepOne} />
      <Route path="/registration/two/" exact component={StepTwo} />
      <Route path="/registration/three/" exact component={StepThree} />
    </div>
  );
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/registration/">Registration</Link>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/registration/" component={Registration} />
      </Router>
    );
  }
}

export default Nav;
