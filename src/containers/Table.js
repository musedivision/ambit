import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import R from 'ramda';

import {getPeopleAction} from '../reducers/people';

const CodeBlock = styled.pre`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-size: 12px;
`;

const H2 = styled.h2`
  text-align: center;
`;

function Table(props) {
  console.log('getPeople: ', props.getPeople);
  return (
    <div>
      <H2>Table</H2>
      <CodeBlock>
        {` ${JSON.stringify(props.people, null, 2)} `}
      </CodeBlock>
    </div>
  );
}

Table.defaultProps = {};

Table.propTypes = {};

const mapStateToProps = state => ({
  people: state.people.people,
});

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
      console.log('this.props: ', this.props);
      this.props.getPeople('/everyone');
    },
  }),
)(Table);
