import * as actions from '../actions/Actions'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
  it('update number element display', () => {
    const number = 10;
    const expectedAction = {
      type: types.NUMBER_ELEMENT_DISPLAY,
      payload: number
    }
    expect(actions.updateNumberElementDisplay(number)).toEqual(expectedAction)
  })
  it('update page number', () => {
    const number = 10;
    const expectedAction = {
      type: types.PAGE_UPDATE,
      payload: number
    }
    expect(actions.updatePageNumber(number)).toEqual(expectedAction)
  })

})