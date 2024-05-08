import React from 'react';
/* kakao-address */
import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Postcode() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleOpen}>주소록</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ModalContent handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

function ModalContent({ handleClose }: { handleClose: () => void }) {
  const handlePostCode = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    // console.log(data); /* 모든 데이터 */
    console.log(fullAddress); /* 주소 */
    console.log(data.zonecode); /* 우편번호 */
  };

  return (
    <>
      <button type='button' onClick={handleClose} className='postCode_btn'>
        닫기
      </button>
      <DaumPostcode autoClose onComplete={handlePostCode} />
    </>
  );
}