import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './TripSummary.scss';
import { Col } from 'react-flexbox-grid';
import { PromoPrice } from '../../../utils/PromoPrice';
import { formatPrice } from '../../../utils/formatPrice';

const TripSummary = ({ id, image, name, cost, days, tags }) => (
  <Col xs={12} sm={6} lg={4} className={styles.column}>
    <Link to={`/trip/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} className={styles.image} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span className={styles.days}>{days} days</span>
          <span className={styles.cost}>
            from {formatPrice(PromoPrice(cost))}
          </span>
          {console.log(cost)}
          {console.log(formatPrice(PromoPrice(cost)))}
        </div>
        {tags.length > 0 ? (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span className={styles.tag} key={tag.toString()}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </article>
    </Link>
  </Col>
);

TripSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  name: PropTypes.string,
  intro: PropTypes.string,
  cost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  days: PropTypes.number,
  tags: PropTypes.array,
};

export default TripSummary;
