import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({ setOptionValue, values, required }) => (
  <div>
    {required ? (
      ''
    ) : (
      <div className={styles.icon} activeclassname={styles.iconActive}>
        <Icon name="times-circle">none</Icon>
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        activeclassname={styles.iconActive}
        onClick={() => setOptionValue(value.id)}
        value={value.price}
      >
        <Icon name={value.icon}></Icon>
        {value.name}({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.bool,
};

export default OrderOptionIcons;
