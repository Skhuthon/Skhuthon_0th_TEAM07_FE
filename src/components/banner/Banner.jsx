import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.Style';

import BannerImage1 from '../../assets/images/banner/1.png';
import BannerImage2 from '../../assets/images/banner/2.png';
import BannerImage3 from '../../assets/images/banner/3.png';
import BannerImage4 from '../../assets/images/banner/4.png';

const images = [
  {
    src: BannerImage1,
    route: '/search',
  },
  {
    src: BannerImage2,
    route: '/search',
  },
  {
    src: BannerImage3,
    route: '/search',
  },
  {
    src: BannerImage4,
    route: '/search',
  },
];

const Banner = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handelBannerClick = (route) => {
    navigate(route);
  };

  return (
    <S.BannerWrapper>
      <S.BannerStyle>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} onClick={() => handelBannerClick(image.route)}>
              <img src={image.src} alt={`Banner ${index}`} />
            </div>
          ))}
        </Slider>
      </S.BannerStyle>
    </S.BannerWrapper>
  );
};

export default Banner;
