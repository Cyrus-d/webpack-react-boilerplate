import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const HelloWorld = ({ title }) => <div className={style.hello}>{title}w</div>;

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
