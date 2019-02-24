import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CodeBlock = styled.pre`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-size: 12px;
`;

const H2 = styled.h2`
  text-align: center;
`;

export function Table({...props}) {
  return (
    <div>
      <H2>
        Table
      </H2>
      <CodeBlock>
        {`
            {
              {name: 'Jim', age: 30, gender: 'male', _id: 'b3Fshn8F976TZCTg'},
              {name: 'Jane', age: 55, gender: 'female', _id: 'k3nEqkqlKmWZNejC'},
              {name: 'Bob', age: 20, gender: 'male', _id: 'oqnu2ZnPTebp04bG'},
              {name: 'Sally', age: 24, gender: 'female', _id: 'tKmv8RC6GlUnYcV3'})
            }
          `}
      </CodeBlock>
    </div>
  );
}

Table.defaultProps = {};

Table.propTypes = {};

export default Table;
