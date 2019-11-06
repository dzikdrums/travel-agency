import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

const OrderOptionDate = ({ setOptionValue }) => (
  <DatePicker onChange={() => setOptionValue()} className="datePicker" />
);
export default OrderOptionDate;

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};
