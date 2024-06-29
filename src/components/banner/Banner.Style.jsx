import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 375px;
  overflow: hidden;
`;

export const BannerStyle = styled.div`
  .banner-image img {
    width: 375px;
    display: block;
    margin: 0 auto;
  }

  img {
    max-width: 375px;
    height: auto;
  }

  .slick-dots {
    li {
      button {
        width: 25px;
        height: 3px;
        border-radius: 0;
        background: #fbe6c9;
        padding: 1px;
        margin-right: 25px;
        margin-top: -20px;

        &:before {
          font-size: 0;
          color: transparent;
        }
      }

      &.slick-active button {
        background: #fbb24d;
      }
    }
  }
`;
