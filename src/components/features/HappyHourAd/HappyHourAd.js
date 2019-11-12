import React from 'react';
import styles from './HappyHour.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  render() {
    return (
      <div>
        <h3 className={styles.title}>{this.props.title}</h3>
        <p className={styles.promoDescription}></p>
        <div className={styles.countdown}></div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;
