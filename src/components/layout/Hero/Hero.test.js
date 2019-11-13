import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText="Lorem ipsum" imageSrc="haha" />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toBeTruthy();
  });
  it('should render correct title', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(
      <Hero titleText={expectedTitle} imageSrc={expectedImage} />,
    );

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });
  it('should render HappyHourAd', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(
      <Hero titleText={expectedTitle} imageSrc={expectedImage} />,
    );

    expect(component.find('HappyHourAd').length).toEqual(1);
  });
});
