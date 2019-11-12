import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({ setOptionValue }) => (
  <div className={styles.number}>
    <input
      onChange={event => setOptionValue(event.currentTarget.value)}
      className={styles.inputSmall}
      type="text"
      required
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;
