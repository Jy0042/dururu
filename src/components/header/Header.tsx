import {
  createTheme,
  ThemeProvider,
  styled,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/home/header.scss';
import LoginIcon from '../../assets/images/icon_login2.png';
import Notification1 from '../../assets/images/notification1.png';
import Cart1 from '../../assets/images/cart2.png';
import Search from '../../assets/images/magnifying.png';
import IconButtonWithMenu from './IconButtonWithMenu';
import BadgeComponent from './BadgeComponent';
import CustomLink from './CustomLink';
import CategoryDropDown from './CategoryDropDown';
// import Logo from '../../assets/images/logo.png'; // logo 만들면 넣기

interface Section {
  title: string;
  url: string;
}

interface HeaderProps {
  title: string;
  sections: Section[];
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#e5e5e5',
    },
    secondary: {
      main: '#5FF531',
      light: '#F5EBFF',
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

const StyledButton = styled(Button)(() => ({
  color: 'black',
  ':hover': {
    backgroundColor: 'transparent',
  },
}));

export default function Header({ title }: HeaderProps) {
  const isMobile = useMediaQuery('(max-width:619px)');
  const [isShoppingHovered, setIsShoppingHovered] = useState(false);
  const [toolbarContent, setToolbarContent] = useState('Shop'); // 초기 내용은 'shop content'

  const handleShoppingClick = () => {
    setToolbarContent('Shop');
  };

  const handleCommunityClick = () => {
    setToolbarContent('Community');
  };

  return (
    <ThemeProvider theme={theme}>
      {/* 헤더 상단 툴바 & 커스텀 */}
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          top: 0,
          width: 'auto',
          position: 'sticky',
          bgcolor: 'background.paper',
          zIndex: 'appBar',
        }}
      >
        {/* 알림(종) icon */}
        {/* mobile(width:600px 이하)부터 생김 */}
        {isMobile && (
          <IconButton
            sx={{
              '&.MuiButtonBase-root:hover': {
                bgcolor: 'transparent',
              },
            }}
          >
            <img
              src={Notification1}
              alt='Logo'
              style={{ width: '24px', padding: 2 }}
            />
          </IconButton>
        )}

        {/* 쇼핑 타이틀 버튼 & 이동 */}
        {/* mobile(width:600px 이하)에서 사라짐 */}
        <Typography component='h2' variant='h5' color='inherit'>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
            <StyledButton
              onClick={handleShoppingClick}
              sx={{
                fontWeight: '400',
                fontSize: '24px',
                textTransform: 'none',
              }}
              disableRipple
            >
              {title}
            </StyledButton>
          </NavLink>
          {/* <NavLink to='/' style={{ width: '2px' }}>
            <IconButton disableRipple sx={{ padding: 0 }}>
              <img
                src={Logo}
                alt='Dururu'
                style={{ width: '76px', padding: '0' }}
              />
            </IconButton>
          </NavLink> */}
          {isMobile ? null : (
            <NavLink
              to='/shop'
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <Button
                sx={{
                  ml: '30px',
                  mr: '12px',
                  fontSize: '17px',
                  fontWeight: '600',
                  ':hover': {
                    bgcolor: 'transparent',
                    color: '#5FF531',
                  },
                }}
                size='small'
                disableRipple
                onClick={handleShoppingClick} // 쇼핑 클릭 시 툴바 보이기
              >
                쇼핑
              </Button>
            </NavLink>
          )}

          {/* 커뮤니티 타이틀 버튼 & 이동 */}
          {/* mobile(width:600px 이하)에서 사라짐 */}
          {isMobile ? null : (
            <NavLink
              to='/community'
              style={{ textDecoration: 'none', color: 'unset' }}
            >
              <Button
                sx={{
                  fontSize: '17px',
                  fontWeight: '600',
                  ':hover': {
                    bgcolor: 'transparent',
                    color: '#5FF531',
                  },
                }}
                size='small'
                disableRipple
                onClick={handleCommunityClick} // 커뮤니티 클릭 시 툴바 숨기기
              >
                커뮤니티
              </Button>
            </NavLink>
          )}
        </Typography>
        <Box>
          {/* 사람(로그인) icon dropdown */}
          {/* mobile(width:600px 이하)에서 사라짐 */}
          {isMobile ? null : (
            <IconButtonWithMenu
              icon={
                <img
                  src={LoginIcon}
                  alt='Login'
                  style={{ width: '20px', marginRight: '4px' }}
                />
              }
              // menuItems={['마이페이지', '찜한 상품', '저장한 피드', '로그아웃']}
              menuItems={[
                { title: '마이페이지', path: '/login' },
                { title: '찜한 상품', path: '/my/wishlist' },
                { title: '최근 본 상품', path: '/my/recentview' },
                { title: '작성한 피드', path: '/saved-feed' },
                { title: '로그아웃', path: '/logout' },
              ]}
            />
          )}

          {/* search(돋보기) icon */}
          {/* mobile(width:600px 이하)부터 생김 */}
          {isMobile && (
            <IconButton
              type='button'
              sx={{ p: '2px' }}
              aria-label='search'
              disableRipple
            >
              <img src={Search} alt='Logo' style={{ width: '36px' }} />
            </IconButton>
          )}

          {/* 알림(종) icon */}
          {/* mobile(width:600px 이하)에서 사라짐 */}
          {isMobile ? null : (
            <IconButton
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <img
                src={Notification1}
                alt='Logo'
                style={{ width: '24px', padding: 2 }}
              />
            </IconButton>
          )}

          {/* cart 아이콘 */}
          <BadgeComponent badgeContent={5}>
            <img src={Cart1} alt='Cart' style={{ width: '24px' }} />
          </BadgeComponent>

          {/* 검색창(input) */}
          {/* mobile(width:600px 이하)에서 사라짐 */}
          {isMobile ? null : (
            <IconButton type='button' aria-label='search' disableRipple>
              <img src={Search} alt='Logo' style={{ width: '36px' }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      {/* 헤더 하단 툴바 & 커스텀 */}
      {/* mobile(width:600px 이하)에서 사라짐 */}
      {isMobile ? null : (
        <Toolbar
          variant='dense'
          sx={{
            width: 'auto',
            position: 'sticky',
            mt: '-3px',
            // mb: '20px',
            borderRadius: 1,
            // borderBottom: 1,
            borderColor: 'divider',
            fontSize: '16px',
            zIndex: 'drawer',
          }}
          style={{
            paddingLeft: '27.8%',
          }}
        >
          {/* 하위 카테고리 변경: shop > community */}
          {toolbarContent === 'Shop' && (
            <>
              <div
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setIsShoppingHovered(true)}
                onMouseLeave={() => setIsShoppingHovered(false)}
              >
                <CustomLink to='/shop'>카테고리</CustomLink>
                {isShoppingHovered && <CategoryDropDown />}
              </div>
              <CustomLink to='/shop/best'>베스트</CustomLink>
              <CustomLink to='/shop/sale'>세일</CustomLink>
            </>
          )}
          {toolbarContent === 'Community' && (
            <>
              <CustomLink to='/community'>커뮤니티 홈</CustomLink>
              <CustomLink to='/community/likes'>좋아요 한 피드</CustomLink>
            </>
          )}
        </Toolbar>
      )}
    </ThemeProvider>
  );
}
