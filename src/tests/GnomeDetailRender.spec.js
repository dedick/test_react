import React from 'react';
import { shallow } from 'enzyme';
import GnomeDetailRender from '../components/GnomeDetailRender';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

function shallowSetup() {
  const props = {
    id:0,
    name:"Tobus Quickwhistle",
    thumbnail:"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age:306,
    weight:39.065952,
    height:107.75835,
    hair_color:"Pink",
    professions:[
      "Metalworker",
      "Woodcarver",
      "Stonecarver",
      "Tinker",
      "Tailor",
      "Potter"
    ],
    friends:[
      "Cogwitz Chillwidget",
      "Tinadette Chillbuster"
    ]
  };
  const enzymeWrapper = shallow(<GnomeDetailRender gnome={props} />);
    
  return {
    enzymeWrapper,
    props
  };
}

describe('GnomeDetailRender', () => {
  const { enzymeWrapper, props } = shallowSetup();
  it('Gnome detail should success', () => {
    expect(enzymeWrapper.find('.detail_image').prop("src")).toEqual(props.thumbnail);
    expect(enzymeWrapper.find('.detail_image').prop("alt")).toEqual(props.name);
    expect(enzymeWrapper.find('.detail').children()).toHaveLength(5);
    expect(enzymeWrapper.find('.detail_professions')
      .children()).toHaveLength(props.professions.length);
    expect(enzymeWrapper.find('.detail_friends').children()).toHaveLength(props.friends.length);
  });
});