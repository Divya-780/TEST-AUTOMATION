describe('Users list by name email API Test', function () {
    it('Verifies that API returns users listed by name, email.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/users_list_by_name_email/',
            method: "POST",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                
            }
        )
    })
})