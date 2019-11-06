import React from 'react';
import TripSummary from './TripSummary';
import { shallow } from 'enzyme';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const tripAddress = 'abc';
    const component = shallow(<TripSummary id={tripAddress} tags={[]} />);
    console.log(component.debug());
    expect(component.find('.link').prop('to')).toEqual(`/trip/${tripAddress}`);
  });
  it('should render correct src and alt', () => {
    const expectedSrc = 'abc';
    const expectedAlt = 'def';
    const component = shallow(
      <TripSummary image={expectedSrc} name={expectedAlt} tags={[]} />,
    );
    expect(component.find('.image').prop('src')).toEqual(expectedSrc);
    expect(component.find('.image').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct name, cost and days', () => {
    const expectedName = 'Rafal';
    const cost = '400';
    const expectedCost = 'from 400';
    const days = 7;
    const expectedDays = '7 days';
    const component = shallow(
      <TripSummary name={expectedName} cost={cost} days={days} tags={[]} />,
    );
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.cost').text()).toEqual(expectedCost);
    expect(component.find('.days').text()).toEqual(expectedDays);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render tags in proper order', () => {
    const tagNames = ['dzik', 'swinia', 'krowa'];
    const component = shallow(<TripSummary tags={tagNames} />);
    expect(
      component
        .find('.tag')
        .at(0)
        .text(),
    ).toEqual(tagNames[0]);
    expect(
      component
        .find('.tag')
        .at(1)
        .text(),
    ).toEqual(tagNames[1]);
    expect(
      component
        .find('.tag')
        .at(2)
        .text(),
    ).toEqual(tagNames[2]);
  });
  it('shouldnt render with falsy tags props', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags').exists()).toEqual(false);
  });
});
