import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LoginIcon from '../../assets/images/icon-login.png';
import Notification1 from '../../assets/images/notification1.png';
import Cart1 from '../../assets/images/cart2.png';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { useMediaQuery } from '@mui/material';
import Search from '../../assets/images/magnifying.png';
import ToolBar from './ToolBar';
import IconButtonWithMenu from './IconButtonWithMenu';
import BadgeComponent from './BadgeComponent';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
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

export default function Header(props: HeaderProps) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { title } = props;

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Toolbar
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            top: 0,
            width: '100dvw',
            position: 'sticky',
            bgcolor: 'background.paper',
            zIndex: 'appBar',
          }}
        >
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

          <Typography component='h2' variant='h5' color='inherit'>
            {title}
            {isMobile ? null : (
              <NavLink
                to='/'
                style={{ textDecoration: 'none', color: 'unset' }}
              >
                <Button
                  sx={{
                    ml: '34px',
                    fontSize: '17px',
                    fontWeight: '600',
                    ':hover': {
                      bgcolor: 'transparent',
                      color: '#5FF531',
                    },
                  }}
                  size='small'
                  disableRipple
                >
                  쇼핑
                </Button>
              </NavLink>
            )}
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
                >
                  커뮤니티
                </Button>
              </NavLink>
            )}
          </Typography>
          <Box>
            {isMobile ? null : (
              <IconButton disableRipple>
                <Paper
                  component='form'
                  sx={{
                    p: '2px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    width: 180,
                    height: 30,
                    boxShadow: '0',
                    border: '1px solid #e5e5e5',
                  }}
                >
                  <InputBase
                    sx={{
                      ml: 1,
                      flex: 1,
                    }}
                    // placeholder='Search Google Maps'
                  />
                  <IconButton
                    type='button'
                    sx={{ p: '3px' }}
                    aria-label='search'
                    disableRipple
                  >
                    <img src={Search} alt='Logo' style={{ width: '30px' }} />
                  </IconButton>
                </Paper>
              </IconButton>
            )}
            {isMobile ? null : (
              <IconButtonWithMenu
                icon={
                  <img src={LoginIcon} alt='Login' style={{ width: '28px' }} />
                }
                menuItems={['마이페이지', '찜한 상품', '저장한 글', '로그아웃']}
              />
            )}
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
          </Box>
        </Toolbar>
        {isMobile ? null : (
          <Toolbar
            variant='dense'
            sx={{
              width: '100dvw',
              position: 'sticky',
              mt: '-3px',
              mb: '20px',
              borderRadius: 1,
              borderBottom: 1,
              borderColor: 'divider',
              fontSize: '16px',
            }}
            style={{
              paddingLeft: '23.7%',
            }}
          >
            <ToolBar />
          </Toolbar>
        )}
      </React.Fragment>
    </ThemeProvider>
  );
}