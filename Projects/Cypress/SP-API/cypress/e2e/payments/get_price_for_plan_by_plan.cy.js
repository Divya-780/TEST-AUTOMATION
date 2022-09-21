describe('GET price for plan API', function () {
    it('Verifies that API returns the price for plan', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/payments/price_for_plan/BasicRecurringMonthly/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                console.log(response.body)
                expect(response.body).has.property('price',19)
                expect(response.body).has.property('recurring',true)
            }
        )
    })
})