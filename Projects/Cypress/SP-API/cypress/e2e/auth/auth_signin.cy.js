describe('User signin auth API Test', function () {
    it('Verifies that API allows a user to signin with valid credentials', function () {

        cy.request('POST', 'https://dev02.speechpundit.com/api/auth/signin/', {
            "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
            "email": "nataraj@applines.com",
            "password": "K#ulj@"
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                // expect(response.body).to.eq(true)
                console.log(response);
            }
        )
    })
})