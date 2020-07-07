import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedId = 'abc';
    const expectedLink = `/trip/${expectedId}`;
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
    console.log(component.debug());

  });
  it('should generate correct imageSource and imageAlternativeText', () => {
    const expectedSrc = `img.jpg`;
    const expectedAlt = `something`;
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    console.log(component.debug());

  });
  it('should generate correct cost and days', () => {
    const expectedName = 'lorem ipsum';
    const expectedCost = `$12`;
    const expectedDays = 2;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    expect(component.find('h3.title').text()).toEqual(expectedName);
    expect(component.find('.details').text()).toEqual(expectedDays + ' days' + 'from ' + expectedCost);
    //expect(component.find('.details').text()).toEqual(`${expectedDays} days from ${expectedCost}`);
    console.log(component.debug());

  });

  it('should generate correct tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    for(let tag of expectedTags) {
      expect(component.find('.tag').at(expectedTags.indexOf(tag)).text()).toEqual(tag);
      expect(component).toBeTruthy();
    }


    //expect(component.find('.details').text()).toEqual(`${expectedDays} days from ${expectedCost}`);
    console.log(component.debug());

  });

});
