describe('Email in use API Test', function () {
    it('Verifies that API correctly verifies if an email is already in use', function () {

        cy.request('POST', 'https://dev02.speechpundit.com/api/auth/email_in_use/', {
            "email": "nataraj@applines.com"
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq(true)
                console.log(response);
            }
        )
    })
})