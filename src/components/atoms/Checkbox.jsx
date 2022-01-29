/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { BORDER_COLOR } from 'constants/color';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function Checkbox({
  state, func, checkedList,
}) {
  const handleCheck = () => {
    func(state);
  };

  const isChecked = checkedList.some((checkedItem) => checkedItem.id === state.id);

  return (
    <Wrapper>
      <CheckIcon onClick={handleCheck}>
        {isChecked ? <MdCheckBox className="checkedIcon" /> : <MdCheckBoxOutlineBlank className="unCheckedIcon" />}
      </CheckIcon>
    </Wrapper>
  );
}

Checkbox.propTypes = {
  state: PropTypes.object,
  func: PropTypes.func,
  checkedList: PropTypes.arrayOf(PropTypes.array),
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckIcon = styled.div`
  cursor: pointer;

  .checkedIcon {
    color: purple;
    font-size: 2rem;
  }

  .unCheckedIcon {
    color: ${BORDER_COLOR};
    font-size: 2rem;
  }
`;

export default Checkbox;
