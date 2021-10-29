
describe('test bukalapak', () => {
    it('get-api', () => {
        cy.request('https://jsonplaceholder.cypress.io/posts').as('get');
        cy.get('@get').should((response) => {
                response.body.forEach((item) => {
                expect(item).to.have.property('userId');
                expect(item).to.have.property('id');
                expect(item).to.have.property('title');
                expect(item).to.have.property('body');
                expect(typeof(item.userId) == "number").to.be.true;
                expect(typeof(item.id) == "number").to.be.true;
                expect(typeof(item.title) == "string").to.be.true;
                expect(typeof(item.body) == "string").to.be.true;
            });
        });
    })     

    it('post-api', () => {
        cy.request('https://jsonplaceholder.cypress.io/posts').as('get');
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/posts', // baseUrl is prepended to url
            body: {
                title : "recommendation",
                build : "motorcycle",
                userId : 12
            },
          })
    })   
});