import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={"L"} color={TETROMINOS["0"].color}></StyledCell>
    // <div>cell</div>
)

export default Cell;