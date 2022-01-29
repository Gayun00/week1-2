/* eslint-disable no-console */
import SettingFrame from 'components/atoms/SettingFrame';
import Term from 'components/molecules/Term';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isSavedState, registerFormState } from 'utils/globalState';

function SalesDisplayTerm() {
  const [displayTerm, setDisplayTerm] = useState('제한 없음');
  const [salesTerm, setSalesTerm] = useState('제한 없음');

  const isSaved = useRecoilValue(isSavedState);
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);

  const saveData = (key, value) => {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  };

  useEffect(() => {
    saveData('노출 및 판매기간 설정', {
      노출기한: displayTerm,
      판매기한: salesTerm,
    });
    console.log('노출 및 판매기간 설정', {
      노출기한: displayTerm,
      판매기한: salesTerm,
    });
  }, [isSaved]);

  return (
    <Wrap>
      <SettingFrame title="노출 및 판매기간 설정">
        <Term name="노출" select={displayTerm} setSelect={setDisplayTerm} />
        <Term name="판매" select={salesTerm} setSelect={setSalesTerm} />
      </SettingFrame>
    </Wrap>
  );
}

export default SalesDisplayTerm;

const Wrap = styled.div`
  margin: 50px;
`;
