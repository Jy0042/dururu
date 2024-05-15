import { ChangeEvent, useEffect, useState } from 'react';

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseButton from 'react-bootstrap/CloseButton';
import Postcode from './Postcode';

import Head from './Head';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/config';
import { setDeliveryInfoType } from '../../redux/slices/checkoutSlice';
import { resetAddress } from '../../redux/slices/addressSlice';

/* 수령자 정보 
  - 1. 주문자 정보와 동일 : 정보 가져오기(CustomerInformation에서 내려받기)
  - 2. 새로운 배송지 : 배송지 정보 새로 넣기
*/
export default function DeliveryInfo() {
  const [isNewAddress, setIsNewAddress] = useState<boolean>(false);

  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNewAddress(event.target.id === 'new');
    console.log(isNewAddress);
  };

  return (
    <div className='order-recipitent-info'>
      <Head text='배송 정보' />
      <div className='order-recipitent-info-top'>
        <div>
          <label>
            <input
              type='radio'
              name='method'
              id='default'
              checked={!isNewAddress}
              onChange={handleMethodChange}
            />
            주문자 정보와 동일
          </label>
          <label>
            <input
              type='radio'
              name='method'
              id='new'
              checked={isNewAddress}
              onChange={handleMethodChange}
            />
            새로운 배송지
          </label>
        </div>
        <AddressBook />
      </div>
      <DeliveryInfoContent isNewAddress={isNewAddress} />
    </div>
  );
}

function DeliveryInfoContent({ isNewAddress }: { isNewAddress: boolean }) {
  const dispatch = useDispatch();

  const handleDeliveryInfoDispatch = () => {
    dispatch(
      setDeliveryInfoType([
        {
          recipient: recipient,
          postcode: Number(zonecode),
          addressDefault: address,
          addressRemaining: remainingAddress,
          phoneNum: [
            {
              numFirst: firstNum,
              numSecond: Number(secondNum),
              numThird: Number(thirdNum),
            },
          ],
          message: message,
        },
      ])
    );
  };

  /* address 불러오기 */
  const address = useSelector((state: RootState) => state.address.fullAddress);
  const zonecode = useSelector((state: RootState) => state.address.zonecode);

  /* 각 TextField의 값 관리 */
  const [recipient, setRecipient] = useState<string>('');
  const [remainingAddress, setRemainingAddress] = useState<string>('');
  const [firstNum, setFirstNum] = useState<string>('010');
  const [secondNum, setSecondNum] = useState<string>();
  const [thirdNum, setThirdNum] = useState<string>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    if (isNewAddress) {
      setRecipient('');
      setRemainingAddress('');
      setFirstNum('010');
      setSecondNum('');
      setThirdNum('');
      setMessage('');
      dispatch(resetAddress());
    }
  }, [isNewAddress]);

  const handleChange = (event: SelectChangeEvent) => {
    setFirstNum(event.target.value);
  };
  return (
    <div className='deliveryinfo-container'>
      <TextField
        fullWidth
        placeholder='받으시는 분'
        className='text-field'
        value={recipient}
        onChange={event => setRecipient(event.target.value)}
        onBlur={handleDeliveryInfoDispatch}
      />
      <div className='text-field postcode'>
        <TextField
          placeholder='우편번호'
          value={zonecode}
          InputProps={{
            readOnly: true,
          }}
        />
        <Postcode />
      </div>
      <TextField
        fullWidth
        placeholder='기본주소'
        value={address}
        InputProps={{
          readOnly: true,
        }}
        className='text-field'
      />
      <TextField
        fullWidth
        placeholder='나머지주소'
        className='text-field'
        value={remainingAddress}
        onChange={event => setRemainingAddress(event.target.value)}
        onBlur={handleDeliveryInfoDispatch}
      />

      <div className='orderer-num-container text-field'>
        <FormControl fullWidth={true}>
          <Select
            value={firstNum}
            defaultValue={firstNum}
            onChange={handleChange}
            onBlur={handleDeliveryInfoDispatch}
            autoWidth
          >
            <MenuItem value={'010'}>010</MenuItem>
            <MenuItem value={'011'}>011</MenuItem>
            <MenuItem value={'016'}>016</MenuItem>
            <MenuItem value={'017'}>017</MenuItem>
          </Select>
        </FormControl>
        <span>-</span>
        <TextField
          className='num'
          fullWidth
          value={secondNum}
          type='text'
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            maxLength: 4,
          }}
          onChange={(
            e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setSecondNum(e.target.value.replace(/\D/g, ''));
          }}
          onBlur={handleDeliveryInfoDispatch}
        />
        <span>-</span>
        <TextField
          className='num'
          fullWidth
          value={thirdNum}
          type='text'
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            maxLength: 4,
          }}
          onChange={(
            e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setThirdNum(e.target.value.replace(/\D/g, ''));
          }}
          onBlur={handleDeliveryInfoDispatch}
        />
      </div>
      <TextField
        fullWidth
        placeholder='배송 메시지'
        value={message}
        onChange={event => setMessage(event.target.value)}
        onBlur={handleDeliveryInfoDispatch}
      />
    </div>
  );
}

/* 주소록 기능 */
function AddressBook() {
  /* 주소록 클릭 시 모달창 */
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

  /* 주소록 추가 시 모달창 */

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='contained'
        size='medium'
        color='secondary'
      >
        주소록
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className='right-sort'>
            <CloseButton onClick={handleClose} />
          </div>
          <div className='address-caption'>배송지 목록</div>
          <AddAddress />
          <button>주소록 추가</button>
        </Box>
      </Modal>
    </>
  );
}

function AddAddress() {
  return <></>;
}
