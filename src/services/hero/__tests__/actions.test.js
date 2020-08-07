import * as actions from '../actions';
import * as types from '../actionTypes';

const mockImage = `somestring`;

describe('hero actions', () => {
  describe('hero', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.UPDATE_IMAGE,
        payload: mockImage
      };

      expect(actions.updateImage(mockImage)).toEqual(expectedAction);
    });
  });
});
