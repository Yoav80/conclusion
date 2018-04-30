import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './App.actions'; //Import your actions
import './App.style.css';
import Header from './components/Header.component';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {hide:false};
  }
  
  componentDidMount() {
    this.props.getData();
  }

  renderList() {
    return this.props.data.map((item, index) => {
      return (
        <div className="article" key={index}>
          <h4>{item.name}</h4>
          <p>Gender: {item.gender} - Nat: {item.nat}</p>
        </div>
      );
    })
  }

  hideHandler(hide) {
      this.setState({
        hide
      })
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="container text-center default-padding">
          Loading...
        </div>
      );
    }

    if (this.state.hide) {
      return (
        <div className="container text-center default-padding">
          {/* a button to mount the header component to check the restoration of the state */}        
          <button className="btn btn-primary" onClick={this.hideHandler.bind(this, false)}>show content</button>        
        </div>
      );
    }

    return (
      <div className="App">
        <div className="container text-center default-padding">
          {/* a button to dismount the header component to check the restoration of the state */}
          <button className="btn btn-primary" onClick={this.hideHandler.bind(this, true)}>hide content</button>
        </div>

        <Header/>
        
        {/* Main / Searchresults  */}
        <main className="main default-padding">
          <div className="container">
            {/* Map over articles  */}
            {this.renderList()}
            {/* Map over articles  */}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const data = getData(state);
  
  return {
    loading: state.AppReducer.loading,
    data: state.AppReducer.dataToDisplay
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
