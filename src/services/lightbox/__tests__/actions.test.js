import * as actions from '../actions';
import * as types from '../actionTypes';

const mockHtml = `somestring`;

describe('lightbox actions', () => {
  describe('lightbox', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.UPDATE_LIGHTBOX,
        payload: mockHtml
      };

      expect(actions.updateLightbox(mockHtml)).toEqual(expectedAction);
    });
  });
});
