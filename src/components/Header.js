import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {
  const { onAdd, showAdd, title } = props;
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' ? (
        <Button
          color={!showAdd ? 'green' : 'red'}
          text={!showAdd ? 'Add' : 'Close'}
          onClick={onAdd}
        />
      ) : (
        'About'
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
};

export default Header;
