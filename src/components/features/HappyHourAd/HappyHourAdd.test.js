import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  descr: '.promoDescription',
  countdown: '.countdown',
};

const mockProps = {
  title: 'HappyAd',
  promoDescription: 'Promo',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    expect(component.find(select.title).exists()).toEqual(true);
    expect(component.find(select.countdown).exists()).toEqual(true);
  });
  it('should render correct title', () => {
    const expectedTitle = mockProps.title;
    // const expectedPromo = mockProps.promo;
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(expectedTitle);
  });
});

describe('Component HappyHourAd with mocked Date', () => {
  const customDate = '2019-05-14T11:57:58.135Z';
  const trueDate = Date;

  const mockDate = class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };
  it('should show correct at 11:57:58', () => {
    global.Date = mockDate;

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.descr).text();
    expect(renderedTime).toEqual('122');

    global.Date = trueDate;
  });
});
