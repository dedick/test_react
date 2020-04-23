import React from 'react';
import { shallow } from 'enzyme';
import PaginationRender from '../components/PaginationRender';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

const goodProps = { page: 1, 
  callback: ()=>{}, 
  elementsFiltered: 60, 
  numberElementToDisplay: 20 
};
const badProps = { page: 1, 
  callback: ()=>{}, 
  elementsFiltered: 1, 
  numberElementToDisplay: 20 
};

function shallowSetup(props) {
  const enzymeWrapper = shallow(<PaginationRender {...props} />);
    
  return {
    enzymeWrapper,
    props
  };
}

describe('Pagination', () => {
  it('Pagination should generate page to 3', () => {
    const { enzymeWrapper, props } = shallowSetup(goodProps);
    expect(enzymeWrapper.find('.container_pagination').children()).toHaveLength(5);
    expect(enzymeWrapper.find('.container_pagination').childAt(2).text()).toBe('' + props.page);
  });
  it('Pagination should not appear', () => {
    const { enzymeWrapper } = shallowSetup(badProps);

    expect(enzymeWrapper.find('.container_pagination').children()).toHaveLength(0);
  });
});