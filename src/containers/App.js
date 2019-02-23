import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {Table} from './Table';

const Body = styled.div`
  display: 'flex'; 
  flexDirection: 'column'; 
  padding: '50px';
  background-color: blue;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => {
  return (
    <div className="App">
      <Header>
        <Body>
          <h2> refactionjsfe </h2>
          <Table />
        </Body>
      </Header>
    </div>
  );
}

const mapStateToProps = state => ({
  dots: state.pixels,
});

//const mapDispatchToProps = dispatch => ({
//update: pixels => dispatch(updatePixels(pixels))
//})

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(App);
