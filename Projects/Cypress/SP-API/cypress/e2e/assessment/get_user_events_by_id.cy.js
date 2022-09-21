describe('GET user events API', function () {
    it('Verifies that API returns the user events', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/user_events/2892/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)

            }
        )
    })
})