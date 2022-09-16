describe('Users API Test', function () {
    it('Verifies that API returns list of users', function () {

        cy.request('POST', 'https://dev02.speechpundit.com/api/core/users/', {
            "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
            "verify": false
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                // expect(response.body).to.eq(true)
                console.log(response);
            }
        )
    })
})