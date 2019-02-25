import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {changeFilterAction} from '../reducers/people';

const filters = ['everyone', 'male', 'female', 'over30', 'under30'];
const getButtons = props =>
  filters.map((filter, i) => {
    return (
      <Button
        onClick={() => {
          props.setFilter(filter);
        }}
        color={props.active_filter === filter ? 'primary' : 'secondary'}
        key={i}>
        {filter}
      </Button>
    );
  });

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const Toolbar = props => <Container>{getButtons(props)}</Container>;

Toolbar.defaultProps = {};

Toolbar.propTypes = {};

const mapStateToProps = state => ({
  active_filter: state.people.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(changeFilterAction(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toolbar);
