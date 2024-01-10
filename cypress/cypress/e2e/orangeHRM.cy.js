//// <reference types="cypress" />
import { loginDetails,comment } from "./param.cy";
describe('End to End Test', () => {
  beforeEach(()=>{
    //Login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginDetails[0]);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginDetails[1]);
    cy.get('.oxd-button').click();
  })
  it('SideBar Functionality test', ()=>{
    //search feature working 
    cy.get('.oxd-input').type('DashBoard');
    cy.get('.oxd-main-menu-item').click();
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.oxd-autocomplete-text-input > input').type('Trinh abu Thi Han');
    cy.get('.oxd-form-actions > .oxd-button').click();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.get(':nth-child(7) > .oxd-main-menu-item').click();
    cy.get(':nth-child(9) > .oxd-main-menu-item').click();
    cy.get(':nth-child(10) > .oxd-main-menu-item').click();
    cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type(loginDetails[1]);
    cy.get('.oxd-button--secondary').click();
    cy.get(':nth-child(11) > .oxd-main-menu-item').click();
    cy.get(':nth-child(12) > .oxd-main-menu-item').click();
    cy.get('.oxd-buzz-post-input').type('i am tired');
    cy.get('.oxd-buzz-post-slot > .oxd-button').click();
    cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post-footer > .orangehrm-buzz-post-actions > :nth-child(2) > .oxd-icon').click();
    cy.get(':nth-child(2) > .oxd-input').type(comment);
  })
  after(()=>{
    // Logout feature working 
    cy.get('.oxd-userdropdown-tab').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
  })
})