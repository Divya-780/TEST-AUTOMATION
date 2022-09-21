describe('User signin auth API Test', function () {
    it('Verifies that API allows a user to signin with valid credentials', function () {

        cy.request('POST', 'https://dev02.speechpundit.com/api/auth/signin/', {
            "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
            "email": "gayathri+api_test_coach1@applines.com",
            "password": "Gayathri@547"
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                console.log(response);
                expect(response.body).has.property('email','gayathri+api_test_coach1@applines.com')

            }
        )
    })
})