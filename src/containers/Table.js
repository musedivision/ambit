import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import * as R from 'ramda';
import ReactDataGrid from 'react-data-grid';

import {getPeopleAction} from '../reducers/people';
import Toolbar from './Toolbar';

const H2 = styled.h2`
  text-align: center;
  color: white;
`;

const Container = styled.div`
  font-size: 16px;
  width: 100%;
  color: black;
`;

const cols = array =>
  R.keys(array[0]).map(key => ({key: key, name: key.toUpperCase()}));

function Table(props) {
  return (
    <Container>
      <H2>People</H2>
      <Toolbar />
      <ReactDataGrid
        columns={cols(props.people)}
        rowGetter={i => props.people[i]}
        rowsCount={10}
        minHeight={200}
      />
    </Container>
  );
}

Table.defaultProps = {
  people: [],
  filter: 'everyone',
};

Table.propTypes = {
  //people: PropTypes.Array,
  //active_filter: PropTypes.String,
  //getPeople: Function,
};

const mapStateToProps = state => 
{
  return ({
    people: state.people.people,
    filter: state.people.filter,
  })
}

const mapDispatchToProps = dispatch => ({
  getPeople: filter => dispatch(getPeopleAction(filter)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentWillMount() {
      this.props.getPeople(this.props.filter);
    },
  }),
)(Table);
