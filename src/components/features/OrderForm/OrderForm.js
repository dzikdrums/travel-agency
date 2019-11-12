import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import * as pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import styles from './OrderForm.scss';

const sendOrder = (options, tripCost, tripId, tripName, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    countryCode,
    tripId,
    tripName,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = props => (
  <Row>
    <form className={styles.form}>
      {pricing.map(priceData => (
        <Col key={priceData.id} md={4}>
          <OrderOption
            currentValue={props.options[priceData.id]}
            setOrderOption={props.setOrderOption}
            {...priceData}
          ></OrderOption>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options} />
      </Col>
      <Button
        onClick={() =>
          sendOrder(
            props.options,
            props.tripCost,
            props.tripId,
            props.tripName,
            props.countryCode,
          )
        }
      >
        Order now!
      </Button>
    </form>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
