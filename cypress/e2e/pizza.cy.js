describe('Pizza Sipariş Testleri', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
        cy.contains('Sipariş Ver').click();
    });

    it('1. Inputa metin girişi yapılabiliyor mu?', () => {
        cy.get('textarea[placeholder="Siparişine eklemek istediğin bir not var mı?"]').type('Bol peynir lütfen!');
        cy.get('textarea').should('have.value', 'Bol peynir lütfen!');
    });

    it('2. Birden fazla malzeme seçilebiliyor mu?', () => {
        cy.contains('Sucuk').parent().find('input[type="checkbox"]').check({ force: true });
        cy.contains('Mısır').parent().find('input[type="checkbox"]').check({ force: true });
        cy.contains('Kabak').parent().find('input[type="checkbox"]').check({ force: true });

        cy.contains('Sucuk').parent().find('input').should('be.checked');
        cy.contains('Mısır').parent().find('input').should('be.checked');
        cy.contains('Kabak').parent().find('input').should('be.checked');
    });

    it('3. Form başarıyla gönderiliyor mu?', () => {

        cy.get('input[name="size"][value="Orta"]').check({ force: true });


        cy.get('select').select('İnce');


        cy.contains('Pepperoni').parent().find('input').check({ force: true });
        cy.contains('Ananas').parent().find('input').check({ force: true });
        cy.contains('Sucuk').parent().find('input').check({ force: true });
        cy.contains('Mısır').parent().find('input').check({ force: true });


        cy.get('input[placeholder="Adınızı giriniz"]').type('Ahmet');


        cy.get('textarea').type('Kenarı dolgun olsun');


        cy.contains('SİPARİŞ VER').click();


        cy.contains('Position Absolute Acı Pizza').should('exist');
        cy.contains('Sipariş Toplamı').should('exist');
    });
});
