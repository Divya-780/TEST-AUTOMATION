describe('POST resend email API', function () {
    it('Verifies that API to resend email', function () {

        cy.request('POST', 'https://dev02.speechpundit.com/api/auth/resend_verify_email/', {
            "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
            "email": "\"gayathri+api_test_coach2@applines.com\"",
            "first_name": "\"Gayathri\"",
            
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                console.log(response);
            }
        )
    })
})