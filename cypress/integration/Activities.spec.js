import Activities from '../support/requests/Activities.request'

describe('Activities', () => {
  it('Get Activities should return 200 status code', () => {
    Activities.getAll().then(response => {
      expect(response.status).to.eq(200);
    })
  });

  it('Post Activity should return the created one', () => {
    Activities.postActivity().then(response => {
      expect(response.status).to.eq(200);
    })
  });

  it('Put Activity should return the updated one', () => {
    Activities.putActivity().then(response => {
      expect(response.status).to.eq(200)
    })
  });

  it('Delete Activity should remove the deleted one ', () => {
    Activities.deleteActivity().then(response => {
      expect(response.status).to.eq(200)      
    })
  });

});