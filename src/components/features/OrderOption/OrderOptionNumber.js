import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ setOptionValue, currentValue, limits }) => (
  <div className={styles.number}>
    <input
      onChange={event => setOptionValue(event.currentTarget.value)}
      className={styles.inputSmall}
      type="number"
      min={limits.min}
      max={limits.max}
      value={currentValue}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  //   limits.max: PropTypes.number,
  //   limits.min: PropTypes.number,
};

export default OrderOptionNumber;
