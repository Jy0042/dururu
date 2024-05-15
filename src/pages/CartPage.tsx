import '../styles/order/cart.scss';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CartPage() {
  // 체크 박스

  // 수량버튼
  const [counts, setCounts] = useState<number>(1);

  const handleIncrease = () => {
    setCounts(counts + 1);
  };

  const handleDecrease = () => {
    if (counts > 1) {
      setCounts(counts - 1);
    }
  };

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <div id='cartBox'>
        <div id='cartList'>
          <div className='cartTitle'>
            <div className='titleCheckbox'>
              <Checkbox {...label} defaultChecked />
            </div>
            <div className='titleDetail'>상품정보</div>
            <div className='titleCountBtn'>수량</div>
            <div className='titleTotal'>주문금액</div>
            <div className='titleDelivery'>배송비</div>
          </div>
          <div className='purchaseInfo'>
            <div className='purchasecheckbox'>
              {' '}
              <Checkbox {...label} defaultChecked />
            </div>
            <div className='purchasePD'>
              <div className='purchaseProduct'>상품이미지</div>
              <div className='purchaseDetail'>
                <div className='purchaseBrand'>브랜드</div>
                <div className='purchaseName'>상품이름</div>
                <div className='purchaseOriginal'>정상가</div>
                <div className='saleZone'>
                  <div className='saleRate'>할인률</div>
                  <div className='salePrice'>할인가</div>
                </div>
              </div>
            </div>

            <div className='deleteBtn'>x</div>
            <div className='countBtn'>
              <ButtonGroup
                size='small'
                variant='contained'
                aria-label='Basic button group'
              >
                <Button
                  onClick={() => handleDecrease()}
                  disabled={counts === 1}
                  color='primary'
                >
                  -
                </Button>
                <Button color='primary'>{counts}</Button>
                <Button onClick={() => handleIncrease()} color='primary'>
                  +
                </Button>
              </ButtonGroup>
            </div>
            <div className='total'>금액</div>
            <div className='deliveryInfo'>
              <div className='deliveryCharge'>3500원</div>
              <div>5만원 이상 구매시 무료배송</div>
            </div>
          </div>
        </div>

        <div id='beforePay'>
          <div className='bpTitle'>
            <div className='bpTitleProdTotal'>총 주문금액</div>
            <div className='bpTitleDeTotal'>총 배송비</div>
            <div className='bpTitleTotal'>총 결제금액</div>
          </div>
          <div className='bpInfo'>
            <div className='bpProdTotal'>총금액</div>
            <div className='bpplus'>+</div>
            <div className='bpDeTotal'>총배송비</div>
            <div className='bpEqual'>=</div>
            <div className='bpTotal'>총결제금액</div>
          </div>
        </div>
        <div id='Btns'>
          <button className='againBtn'>CONTINUE SHOPPING</button>
          <button className='goPay'>CHECk OUT</button>
        </div>
      </div>
    </Grid>
  );
}