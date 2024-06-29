import React from 'react';
import PropTypes from 'prop-types';
import * as S from './TopBar.Style';

const TopBar = ({ onBack }) => {
  return (
    <S.TopBarContainer>
      <S.BackIcon onClick={onBack} />
    </S.TopBarContainer>
  );
};

TopBar.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default TopBar;
