describe('fixture test', () => {

    before(()=>{
        cy.fixture('loginPage').then(function(data){
            this.data = data
        })
    })

    it('Fixture testing', function() {
        cy.log(this.data)
    });
    
});
