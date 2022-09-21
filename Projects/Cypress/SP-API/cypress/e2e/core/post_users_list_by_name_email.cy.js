describe('POST Users list by name email API Test', function () {
    it('Verifies that API returns users listed by name, email.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/users_list_by_name_email/',
            method: "POST",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                
            }
        )
    })
})