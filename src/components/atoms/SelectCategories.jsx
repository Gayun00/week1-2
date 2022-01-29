/* eslint-disable react/no-array-index-key */
// eslint-disable-line no-unused-vars
import Checkbox from 'components/atoms/Checkbox';
import SelectedCategory from 'components/atoms/SelectedCategory';
import { BORDER_COLOR } from 'constants/color';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SelectCategories({ handleBasicInfo, title }) {
  const [categories, setCategories] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  useEffect(() => {
    handleBasicInfo(title, checkedList);
  }, [checkedList]);

  const handleCheckList = (cate) => {
    const isChecked = checkedList.some((checkedItem) => checkedItem.id === cate.id);
    if (isChecked) {
      const filteredCheckedList = checkedList.filter((checkedItem) => checkedItem.id !== cate.id);
      setCheckedList(filteredCheckedList);
    } else {
      setCheckedList([...checkedList, cate]);
    }
  };

  return (
    <Wrapper>
      <CateContainer>
        <ul>
          {categories.map((category, index) => (
            <CateItem key={index}>
              <Checkbox
                state={category}
                checkedList={checkedList}
                func={() => handleCheckList(category)}
              />
              <CateTitle>{category.name}</CateTitle>
            </CateItem>
          ))}

        </ul>
      </CateContainer>
      <SelectedCateContainer>
        <ul>
          {categories.map((category) => (
            checkedList.some((checkedItem) => checkedItem.id === category.id)
              ? (
                <SelectedCategory
                  state={category}
                  categoryName={category.name}
                  func={() => handleCheckList(category)}
                />
              )
              : ('')
          ))}
        </ul>
      </SelectedCateContainer>
    </Wrapper>
  );
}

SelectCategories.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 20rem;
`;

const CateContainer = styled.div`
  flex: 5;
  padding: ${({ theme }) => theme.padding.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border.borderRadius};;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background-color: grey;
    border-radius: ${({ theme }) => theme.border.borderRadius};
  }
`;

const CateItem = styled.li`
  display: flex;
`;

const CateTitle = styled.p`
  margin-left: ${({ theme }) => theme.padding.small};
`;

const SelectedCateContainer = styled.div`
  flex: 5;
  padding: ${({ theme }) => theme.padding.medium};
  margin-left: ${({ theme }) => theme.padding.small};
  border: 1px solid ${BORDER_COLOR};
  border-radius: ${({ theme }) => theme.border.borderRadius};
  overflow-y: scroll;

    &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    width:3px;
    background-color: grey;
    border-radius: ${({ theme }) => theme.border.borderRadius};
  }
`;

export default SelectCategories;
