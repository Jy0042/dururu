import React from 'react';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import Head from './Head';
import { Box, FormControl, MenuItem, Modal, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseButton from 'react-bootstrap/CloseButton';
import Postcode from './Postcode';

/* 수령자 정보 
  - 1. 주문자 정보와 동일 : 정보 가져오기(CustomerInformation에서 내려받기)
  - 2. 새로운 배송지 : 배송지 정보 새로 넣기
*/
export default function DeliveryInfo() {
  const [selected, setSelected] = useState<boolean>(true);
  return (
    <div className='order-recipitent-info'>
      <Head text='배송 정보' />
      <label>
        <input
          type='radio'
          name='method'
          id='default'
          defaultChecked={true}
          onClick={() => {
            setSelected(true);
          }}
        />
        주문자 정보와 동일
      </label>
      <label className='caption'>
        <input
          type='radio'
          name='method'
          id='new'
          onClick={() => {
            setSelected(false);
          }}
        />
        새로운 배송지
      </label>
      <AddressBook />
      <DeliveryInfoContent />
    </div>
  );
}

function DeliveryInfoContent() {
  /* address 불러오기 */
  const address = useSelector(state => (state as any).address.fullAddress);
  const zonecode = useSelector(state => (state as any).address.zonecode);

  console.log(address, zonecode);

  const [firstNum, setFirstNum] = useState<string>('010');

  const handleChange = (event: SelectChangeEvent) => {
    setFirstNum(event.target.value);
  };
  return (
    <div className='deliveryinfo-container'>
      <TextField fullWidth placeholder='받으시는 분' />
      <TextField placeholder='우편번호' value={zonecode} disabled />
      <Postcode />
      <TextField fullWidth placeholder='기본주소' value={address} disabled />
      <TextField fullWidth placeholder='나머지주소' />

      <div className='orderer-num-container'>
        <FormControl fullWidth={true}>
          <Select
            value={firstNum}
            defaultValue={firstNum}
            onChange={handleChange}
            autoWidth
          >
            <MenuItem value={'010'}>010</MenuItem>
            <MenuItem value={'011'}>011</MenuItem>
            <MenuItem value={'016'}>016</MenuItem>
            <MenuItem value={'017'}>017</MenuItem>
          </Select>
        </FormControl>
        <span>-</span>
        <TextField className='num' fullWidth />
        <span>-</span>
        <TextField className='num' fullWidth />
      </div>
      <TextField fullWidth placeholder='배송 메시지' />
    </div>
  );
}

/* 주소록 기능 */
function AddressBook() {
  /* 모달창 */
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* 주소록 */
  const [name] = useState<string>('진가영');
  const [addressName] = useState<string>('집');
  const [zonecode] = useState<string>('12345');
  const [address] = useState<string>('서울특별시 어쩌구 저쩌구로 166');
  const [phoneNum] = useState<string>('010-1111-2222');

  return (
    <>
      <button onClick={handleOpen}>주소록</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CloseButton onClick={handleClose} />
          <div className='address-caption'>배송지 목록</div>
          <div>
            <div>
              {name}({addressName})
            </div>
            <div>
              ({zonecode}) {address}
            </div>
            <div>{phoneNum}</div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
