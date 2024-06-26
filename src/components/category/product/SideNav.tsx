import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { CategoryData } from '../../../types/productTypes';
import '../../../styles/category/sideNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/config';
import {
  setSelectedCategory,
  setSelectedSubCategory,
} from '../../../redux/slices/categorySlice';
import { useMediaQuery } from '@mui/material';
import FilterCompo from '../filters/FilterCompo';

import { useLocation } from 'react-router-dom';

export default function SideNav() {
  const [activeCategory, setActiveCategory] = useState<string>('가구');
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width:768px)');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryName = queryParams.get('category');
  const subCategoryName = queryParams.get('subCategory');

  const categoryData = useSelector(
    (state: RootState) => state.category.categoryData
  );

  useEffect(() => {
    if (categoryName && subCategoryName) {
      setActiveCategory(categoryName);
      dispatch(setSelectedCategory(categoryName));
      dispatch(setSelectedSubCategory(subCategoryName));
    } else {
      dispatch(setSelectedCategory('가구'));
      dispatch(setSelectedSubCategory('ALL'));
    }
  }, [dispatch, location.search]);

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      // 이미 열린 카테고리 항목들이면
      setActiveCategory('');
    } else {
      // 새로운 카테고리 클릭하면 활성화상태 업데이트
      setActiveCategory(categoryName);
      dispatch(setSelectedCategory(categoryName));
      dispatch(setSelectedSubCategory('ALL'));
    }
  };

  const handleSubCategoryClick = (
    categoryName: string,
    subCategoryName: string
  ) => {
    dispatch(setSelectedCategory(categoryName));
    dispatch(setSelectedSubCategory(subCategoryName));
  };

  // 검색 버튼 클릭 핸들러
  const handleApplyFilters = () => {
    return;
  };

  return (
    <Box className='side-nav'>
      {categoryData.map((category: CategoryData) => (
        <Box key={category.name} className='nav-box'>
          <Box
            className={`nav ${
              activeCategory === category.name ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick(category.name)}
            role='button'
            tabIndex={0}
          >
            <Box className='nav-title'>{category.name}</Box>
          </Box>

          {activeCategory === category.name &&
            category.subCategories.length > 0 && (
              <Box className={'filters-boxs'}>
                <hr
                  style={{
                    border: 0,
                    height: '2px',
                    backgroundColor: '#272727',
                    marginRight: '30px',
                    marginBottom: '18px',
                  }}
                />
                {category.subCategories.map(subCategory => (
                  <Box
                    key={subCategory.name}
                    className={`sub ${
                      subCategory.name === 'ALL' ? 'bold' : ''
                    }`}
                    onClick={() =>
                      handleSubCategoryClick(category.name, subCategory.name)
                    }
                    role='button'
                    tabIndex={0}
                  >
                    {subCategory.name}
                  </Box>
                ))}
              </Box>
            )}
        </Box>
      ))}
      {!isMobile && <FilterCompo onApplyFilters={handleApplyFilters} />}
    </Box>
  );
}
