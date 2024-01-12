/// <reference types = 'cypress'/>

describe('reqres api testing',()=>{
    it('get request', ()=>{
        cy.request("GET","https://reqres.in/api/user",{}).then((r)=>{
            expect(r.status).to.eq(200)
            //expect(r).to.have.property('header')
            expect(r).to.have.property('duration')
        });
    })
})
describe('cypress.io', ()=>{
    it('post request', ()=>{
        cy.request('https://jsonplaceholder.cypress.io/users?id=2').its('body.0')
        cy.request('POST', 'https://jsonplaceholder.cypress.io/posts',{
            title: 'cypress',
            body: 'automated test '
        }).then((p)=>{
            expect(p.status).to.eq(201);
        })
    })
})