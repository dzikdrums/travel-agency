export const PromoPrice = props => {
  const promotionValue = 20;
  if (typeof props === 'string') {
    if (props.length > 0) {
      let priceAfterDiscount = props.replace('$', '');
      priceAfterDiscount = priceAfterDiscount.replace(',', '');
      return priceAfterDiscount * ((100 - promotionValue) / 100);
    } else {
      return null;
    }
  } else {
    return null;
  }
};
