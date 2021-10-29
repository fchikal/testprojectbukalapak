
describe('test bukalapak web', () => {
    const email = 'fadlillahchikal@gmail.com';
    const pass = 'Chikal123!';

    beforeEach(() => {
        cy.visit('https://www.bukalapak.com/');
        cy.get('.te-header-login').click();
      })
    
    it('log-in', ()=> {
      cy.contains('Login dulu, yuk');
      cy.contains('Nomor handphone atau email');
      cy.contains('Misal: 081234567890, atau nama@email.com');
      cy.contains('Lanjut');
      cy.contains('Atau login pakai');
      cy.contains('Belum punya akun? Daftar');
      cy.get('#user_identity_textfield').type(email);
      cy.get('#submit_button').click();
      cy.contains('Masukkan Password');
      cy.get('#input-password').type(pass);
      cy.get('#btn-login').click();
      cy.url().should('include', 'https://www.bukalapak.com/?flash=you_login');
      cy.get('.bl-snackbar__text').children().should('contain', 'Kamu telah login sebagai Chikal Fadlillah').and('be.visible');
    })


})