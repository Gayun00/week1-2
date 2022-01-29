/* eslint-disable react/jsx-closing-bracket-location */
import { SettingFrame } from 'components/atoms';
import OptSet from 'components/molecules/OptSet';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import isSavedState, { registerFormState } from 'utils/globalState';
import useProductState from 'utils/hooks/productState';

function ProductOption() {
  const { optSets, Clickhandler, handleChange } = useProductState();
  const isSaved = useRecoilValue(isSavedState);
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);
  const saveData = (key, value) => {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  };

  useEffect(() => {
    saveData('productOption', optSets);
  }, [isSaved]);

  return (
    <SettingFrame
      title="상품옵션"
      isBackground
      isButton
      onClick={Clickhandler}
      onChange={handleChange}>
      {optSets.length > 0 ? (
        optSets.map((optSet) => <OptSet key={optSet.id} optSet={optSet} />)
      ) : (
        <EmptyOptSets>
          <span>옵션세트를 추가하여 옵션을 구성해 주세요.</span>
        </EmptyOptSets>
      )}
    </SettingFrame>
  );
}

const EmptyOptSets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export default ProductOption;
