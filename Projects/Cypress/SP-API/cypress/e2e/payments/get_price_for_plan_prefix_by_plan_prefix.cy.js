describe('GET prices for plan prefix API', function () {
    it('Verifies that API returns price for plan prefix for selected plan', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/payments/prices_for_plan_prefix/basic/',
            method: "GET",
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