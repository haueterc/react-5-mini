import React, { Component } from "react";
// destructure if method not exported by default
import {increment, decrement} from './ducks/counter';
import {connect} from 'react-redux';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ this.props.currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ true }
              onClick={ () => null }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ true }
              onClick={ () => null }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}
// mapping global redux store 'state' to props
// an object
// this function can be called anything only created once
function mapStateToProps(state) {
  return {
    // have a bug just return state here
    currentValue: state.currentValue
  }
}

// to connect react App to redux
// export the default connect method from react-redux package
// the first function returns a second function which is envoked
// pattern called decoration which means giving extra functionality
// key and value the same in ES6 {increment: increment} can be {increment}
export default connect(mapStateToProps,{increment,decrement})(App);
