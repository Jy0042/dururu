import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Home from './pages/Home';
import CommunityPostPage from './pages/CommunityPostPage';
import CommunityModifyPage from './pages/CommunityModifyPage';
import Login from './pages/Login';
import BestPage from './pages/BestPage';
import SalePage from './pages/SalePage';
import CategoryPage from './pages/CategoryPage';
<<<<<<< HEAD
import CommunityMainPage from './pages/CommunityMainPage';
import ProductDetail from './pages/ProductDetail';
=======
import Community from './pages/Community';
>>>>>>> cbc49fe3b52c5b4eb03ab629efe19fb1d155c790
import OrderPage from './pages/OrderPage';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFoundPage';
import SignUp from './pages/SignUp';
import CommunityDetailPage from './pages/CommunityDetailPage';
import RecentViewList from './components/mypage/RecentViewList';
import LikesProduct from './components/mypage/LikesProducts';
import MainLayout from './pages/MainLayout';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CommunityResultPage from './pages/CommunityResultPage';
import Logout from './components/Home/Logout';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import OrderHistory from './components/mypage/OrderHistory';

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // 페이지 이동 시 스크롤을 최상단으로 이동
    }, [pathname]); // pathname이 변경될 때마다 useEffect가 실행되어 스크롤을 초기화

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='shop' element={<CategoryPage />} />
            <Route path='/shop/best' element={<BestPage />} />
            <Route path='/shop/sale' element={<SalePage />} />
<<<<<<< HEAD
            <Route path='/shop/:productId' element={<ProductDetail />} />
            <Route path='/community' element={<CommunityMainPage />} />
=======
            <Route path='/shop/:productId' element={<ProductDetailPage />} />
            <Route path='/community' element={<Community />} />
>>>>>>> cbc49fe3b52c5b4eb03ab629efe19fb1d155c790
            <Route path='/community/post' element={<CommunityPostPage />} />
            <Route path='/community/result' element={<CommunityResultPage />} />
            <Route
              path='community/modify/:feedId'
              element={<CommunityModifyPage />}
            />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/my' element={<MyPage />} />
            <Route path='/my/wishlist' element={<LikesProduct />} />
            <Route path='/my/recentview' element={<RecentViewList />} />
            <Route path='/my/orderhistory' element={<OrderHistory />} />
            <Route path='*' element={<NotFound />} />
            <Route
              path='/community/detail/:feedId'
              element={<CommunityDetailPage />}
            />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
