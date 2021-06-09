/// <reference types="Cypress" />

const POSTActivity = require('../../fixtures/payloads/POSTActivity.json')
const PUTActivity = require('../../fixtures/payloads/PUTActivity.json')

const url = "http://fakerestapi.azurewebsites.net/api";

class Activities {

  getAll(){
    return cy.request({
      method: 'GET',
      url: `${ url }/Activities`
    });
  }

  postActivity(){
    return cy.request({
      method: 'POST',
      url: `${ url }/Activities`,
      body: POSTActivity
    });
  }

  putActivity(id){
    PUTActivity.ID = id ? id : PUTActivity.ID;

    return cy.request({
      method: 'PUT',
      url: `${ url }/Activities/${ PUTActivity.ID }`,
      body: PUTActivity
    });
  }

  deleteActivity(id){
    let localId = id ? id : 1;

    return cy.request({
      method: 'DELETE',
      url: `${ url }/Activities/${ localId }`,
    });
  }
}

export default new Activities();