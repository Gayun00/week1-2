import ImageUpload from 'components/atoms/ImageUpload';
import SettingFrame from 'components/atoms/SettingFrame';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import isSavedState, { registerFormState } from 'utils/globalState';

function IntroImage() {
  const [imgFiles, setImgFiles] = useState([]);
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);

  const saveData = (key, value) => {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  };

  useEffect(() => {
    saveData('introImages', imgFiles);
    console.log('introImages:', imgFiles);
  }, [isSavedState]);

  return (
    <Wrap>
      <SettingFrame title="상품 소개 이미지">
        <ImageUpload imgFiles={imgFiles} setImgFiles={setImgFiles} />
      </SettingFrame>
    </Wrap>
  );
}

export default IntroImage;

const Wrap = styled.div`
  margin:50px;
`;
