import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

const Item = ({ 
  title,
  subtitle,
  description,
  image,
  type,
}) => (
  <div class={classes('item', type)} id="java-block">
    <div class="item-top"></div>
    <div class="item-content">
      <div class="item-left">
        <img src={image} alt=""/>
      </div>
      <div class="item-right">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <h5>{description}</h5>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  title: PropTypes.string
};

export default Item;