import ImageUpload from 'components/atoms/ImageUpload';
import SettingFrame from 'components/atoms/SettingFrame';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import isSavedState, { registerFormState } from 'utils/globalState';

function RecommendedImage() {
  const [imgFiles, setImgFiles] = useState([]);
  const [registerForm, setRegisterForm] = useRecoilState(registerFormState);

  const saveData = (key, value) => {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  };

  useEffect(() => {
    saveData('recommendedImages', imgFiles);
    console.log('recommendedImages', imgFiles);
  }, [isSavedState]);

  return (
    <Wrap>
      <SettingFrame title="구매자 추천 이미지">
        <ImageUpload imgFiles={imgFiles} setImgFiles={setImgFiles} />
      </SettingFrame>
    </Wrap>
  );
}

export default RecommendedImage;

const Wrap = styled.div`
  margin:50px;
`;
