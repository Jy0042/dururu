import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import theme from '../../../styles/theme';
import { styled } from '@mui/material';

interface SubTitleProps {
  text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <>
      <SubTitleText
        fontSize={theme.typography.h2.fontSize}
        fontWeight={theme.typography.h2.fontWeight}
      >
        {text}
      </SubTitleText>
      <SubTitleDivider />
    </>
  );
};

export default SubTitle;

// Typography를 상속받아 SubTitleText 스타일 컴포넌트 정의
const SubTitleText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.h2.fontWeight,
  marginTop: '32px',
}));

// Divider를 상속받아 SubTitleDivider 스타일 컴포넌트 정의
const SubTitleDivider = styled(Divider)(({ theme }) => ({
  margin: '4px 0px 8px', // 위아래 마진을 4px, 좌우 마진을 0px로 설정
  borderColor: theme.palette.common.black, // 배경색을 테마의 검정색으로 설정
}));
