import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import Table from './Table';

const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: 'flex';

  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TitleBox = styled.div`
  padding: 20px;
  border-radius: 7px;
  background-color: blue;
  filter: drop-shadow(30px 10px 4px #4444dd);
  filter: drop-shadow(30px 10px 4px #4444dd);
  margin-bottom: 50px;
`;

const Header = styled.header``;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vh;
  padding: 60px 80px;
`;

const H2 = styled.h2`
  margin: 0;
`;

const App = () => {
  return (
    <div className="App">
      <Header>
        <Body>
          <ContentBox>
            <TitleBox>
              <H2> refactionjsfe </H2>
            </TitleBox>
            <Table />
          </ContentBox>
        </Body>
      </Header>
    </div>
  );
};

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
