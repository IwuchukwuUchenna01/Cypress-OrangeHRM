//// <reference types="cypress" />
import { loginDetails, comment, url,createFirstName,createMiddleName,createLastName,y,x,passwordGen, userName, fullName } from "./param.cy";
describe('End to End Test',{retries:{openMode:1}}, () => {
  
  beforeEach(()=>{
    //Login
    cy.visit(url)
    cy.wait(6000);
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
    cy.wait(10000);
  })
  it.only('created a new employee',()=>{
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(createFirstName[y]);
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(createMiddleName[y]);
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(createLastName[y]);
    //cy.get('.oxd-file-div > .oxd-icon-button').selectFile({fileName:'download.jpg'}); //attachFile('C:\Users\Support\Desktop\Cypress-OrangeHRM\cypress\e2e\download.jpg', { subjectType: 'input' }) 
    cy.get('.oxd-switch-input').click();
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(`${userName[y]+x}`);
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click();
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(passwordGen,{log: false});
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passwordGen, {log: false});
    cy.get('.oxd-button--secondary').click()
    cy.wait(10000)
    cy.get('.orangehrm-edit-employee-name').should('have.text', fullName );

    cy.wait(1000000);
  it('Leave Date', ()=>{
      
  })


 })
  after(()=>{
    // Logout feature working 
    cy.get('.oxd-userdropdown-tab').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
  })
})