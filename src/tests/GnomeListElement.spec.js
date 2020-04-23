import React from 'react';
import { shallow } from 'enzyme';
import GnomeListElement from '../components/GnomeListElement';

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
  const enzymeWrapper = shallow(<GnomeListElement {...props} />);
  return {
    enzymeWrapper,
    props
  };
}

describe('GnomeListElement', () => {
  const { enzymeWrapper, props } = shallowSetup();
  it('Get Brand value', () => {
    
    expect(enzymeWrapper.find('.list_gnome_image')).toHaveLength(1);
    expect(enzymeWrapper.find('.list_gnome_image').prop("src")).toEqual(props.thumbnail);
    expect(enzymeWrapper.find('.list_gnome_name').text()).toEqual(props.name);
  });
});