import React from 'react';
import styles from './OrderOption.scss';

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

export default OrderOptionNumber;
