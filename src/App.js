/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import isSavedState, { registerFormState } from 'utils/globalState';
import Button from 'components/atoms/Button';
import styled from 'styled-components';
import RecommendedImage from 'components/containers/RecommendedImage';
import IntroImage from 'components/containers/IntroImage';
import SalesDisplayTerm from 'components/containers/SalesDisplayTerm';
import NoticeProduct from 'components/containers/NoticeProduct';
import DeliveryOption from 'components/containers/DeliveryOption';
import MileageStatus from 'components/containers/MileageStatus';
import OtherOptions from 'components/containers/OtherOptions';
import BasicInfo from 'components/containers/BasicInfo';
import ProductOption from 'components/containers/ProductOption';

function App() {
  const setIsSaved = useSetRecoilState(isSavedState);
  const registerForm = useRecoilValue(registerFormState);

  /*   const checkRequiredValue = () => {
    if (Object.keys(registerForm).length > 0) {
      const basicInform = registerForm.basicInfo;
      if (
        !basicInform.selectedCategory ||
        !basicInform.productName ||
        !basicInform.productInfo ||
        !basicInform.totalStock > 0
        // && option
      ) {
        alert('필수 항목을 입력하세요');
      } else {
        alert('저장되었습니다');
      }
    }
  }; */
  const onSave = () => {
    setIsSaved((c) => c + 1);
  };

  useEffect(() => {
    // checkRequiredValue();
  }, [registerForm]);

  return (
    <RegisterForm>
      <TitleWrapper>
        <p>등록</p>
        <Button
          width="80px"
          height="30px"
          text="저장하기"
          color="purple"
          constrast
          borderRadius={10}
          onClick={onSave}
        />
      </TitleWrapper>
      <SalesDisplayTerm />
      <BasicInfo />
      <ProductOption />
      <RecommendedImage />
      <NoticeProduct />
      <DeliveryOption />
      <OtherOptions />
    </RegisterForm>
  );
}

const RegisterForm = styled.div`
  padding: ${({ theme }) => theme.padding.medium};
`;

const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.padding.medium};
  padding: ${({ theme }) => theme.padding.small};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export default App;
